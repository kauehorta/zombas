param(
    [string]$BaseUrl = 'http://127.0.0.1:4173'
)

$ErrorActionPreference = 'Stop'

$siteRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$outputPath = [System.IO.Path]::GetFullPath((Join-Path $siteRoot '.github-pages-dist'))
$expectedOutput = [System.IO.Path]::GetFullPath((Join-Path $siteRoot '.github-pages-dist'))

if ($outputPath -ne $expectedOutput -or -not $outputPath.StartsWith($siteRoot + [System.IO.Path]::DirectorySeparatorChar)) {
    throw "Refusing to clean unexpected output path: $outputPath"
}

if (Test-Path -LiteralPath $outputPath) {
    Remove-Item -LiteralPath $outputPath -Recurse -Force
}

New-Item -ItemType Directory -Path $outputPath | Out-Null
New-Item -ItemType Directory -Path (Join-Path $outputPath 'assets') | Out-Null

$sourceCss = Get-Content -LiteralPath (Join-Path $siteRoot 'app\globals.css') -Raw -Encoding UTF8
$staticCss = $sourceCss.Replace('url("/assets/hero-zombas.webp")', 'url("./hero-zombas.webp")')
Set-Content -LiteralPath (Join-Path $outputPath 'assets\site.css') -Value $staticCss -Encoding utf8

Copy-Item -LiteralPath (Join-Path $siteRoot 'public\assets\hero-zombas.webp') -Destination (Join-Path $outputPath 'assets\hero-zombas.webp')
Copy-Item -LiteralPath (Join-Path $siteRoot 'public\assets\vinheta-base.webp') -Destination (Join-Path $outputPath 'assets\vinheta-base.webp')
Copy-Item -LiteralPath (Join-Path $siteRoot 'public\assets\vinheta-diario.webp') -Destination (Join-Path $outputPath 'assets\vinheta-diario.webp')
Copy-Item -LiteralPath (Join-Path $siteRoot 'public\assets\vinheta-encontro.webp') -Destination (Join-Path $outputPath 'assets\vinheta-encontro.webp')
Copy-Item -LiteralPath (Join-Path $siteRoot 'public\assets\vinheta-mochila.webp') -Destination (Join-Path $outputPath 'assets\vinheta-mochila.webp')
Copy-Item -LiteralPath (Join-Path $siteRoot 'public\og.png') -Destination (Join-Path $outputPath 'og.png')
Set-Content -LiteralPath (Join-Path $outputPath '.nojekyll') -Value '' -Encoding utf8

$routes = @(
    @{
        Source = '/'
        Folder = ''
        Title = 'Zombas | Manual do sobrevivente'
        Description = 'Guia do servidor cooperativo Zombas: primeiros passos, habilidades, diários, cozinha, veículos, recursos e mods.'
        Canonical = 'https://kauehorta.github.io/zombas/'
        Prefix = './'
    },
    @{
        Source = '/regras'
        Folder = 'regras'
        Title = 'Regras do servidor | Zombas'
        Description = 'Regras e orientações para jogar no servidor cooperativo Zombas.'
        Canonical = 'https://kauehorta.github.io/zombas/regras/'
        Prefix = '../'
    },
    @{
        Source = '/mods'
        Folder = 'mods'
        Title = 'Mods atuais | Zombas'
        Description = 'Lista dos mods ativos no servidor Zombas, com uma explicação curta do que cada um acrescenta.'
        Canonical = 'https://kauehorta.github.io/zombas/mods/'
        Prefix = '../'
    }
)

foreach ($route in $routes) {
    $uri = $BaseUrl.TrimEnd('/') + $route.Source
    $response = Invoke-WebRequest -Uri $uri -UseBasicParsing
    if ($response.StatusCode -ne 200) {
        throw "Route $($route.Source) returned HTTP $($response.StatusCode)."
    }

    $bodyMatch = [regex]::Match($response.Content, '(?is)<body(?<attributes>[^>]*)>(?<content>.*)</body>')
    if (-not $bodyMatch.Success) {
        throw "Could not extract the body from $($route.Source)."
    }

    $bodyAttributes = $bodyMatch.Groups['attributes'].Value
    $body = $bodyMatch.Groups['content'].Value
    $body = [regex]::Replace($body, '(?is)<script\b[^>]*>.*?</script>', '')
    $body = [regex]::Replace($body, '(?is)<template\b[^>]*>.*?</template>', '')

    if ($route.Folder -eq '') {
        $body = $body.Replace('href="/regras"', 'href="./regras/"')
        $body = $body.Replace('href="/mods"', 'href="./mods/"')
        $body = $body.Replace('href="/"', 'href="./"')
        $body = $body.Replace('src="/assets/', 'src="./assets/')
    }
    else {
        $body = $body.Replace('href="/regras"', 'href="../regras/"')
        $body = $body.Replace('href="/mods"', 'href="../mods/"')
        $body = $body.Replace('href="/"', 'href="../"')
        $body = $body.Replace('src="/assets/', 'src="../assets/')
    }

    $stylesheet = $route.Prefix + 'assets/site.css'
    $html = @"
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>$($route.Title)</title>
  <meta name="description" content="$($route.Description)">
  <link rel="canonical" href="$($route.Canonical)">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:title" content="$($route.Title)">
  <meta property="og:description" content="$($route.Description)">
  <meta property="og:url" content="$($route.Canonical)">
  <meta property="og:image" content="https://kauehorta.github.io/zombas/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="$($route.Title)">
  <meta name="twitter:description" content="$($route.Description)">
  <meta name="twitter:image" content="https://kauehorta.github.io/zombas/og.png">
  <link rel="stylesheet" href="$stylesheet">
</head>
<body$bodyAttributes>$body</body>
</html>
"@

    $routePath = if ($route.Folder -eq '') { $outputPath } else { Join-Path $outputPath $route.Folder }
    New-Item -ItemType Directory -Path $routePath -Force | Out-Null
    Set-Content -LiteralPath (Join-Path $routePath 'index.html') -Value $html -Encoding utf8
}

Write-Output $outputPath
