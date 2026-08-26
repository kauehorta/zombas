# Decisões do site — estrutura, voz e gestão

Por que o site é do jeito que é. Registrado porque o site virou grande o suficiente pra alguém
(Claude, Codex, ou o Kauê em três meses) perguntar "por que isso é assim" e merecer uma resposta
melhor que "porque sim".

Este arquivo mora no repositório do site (`kauehorta/zombas`), não no repositório interno de
operação do servidor (`C:\Zombas`) — são dois repositórios git separados e sem histórico em comum,
ver a seção **Gestão do repositório** abaixo.

---

## Estrutura

### De manual único pra portal com dois guias

**Decisão.** A antiga página única (`/`, com 11 seções em scroll) virou um portal (`/`) que leva a
duas páginas por perfil: `/novatos` e `/veteranos`. `/regras` e `/mods` continuam existindo como
estavam.

**Por quê.** Um jogador na primeira hora e um jogador de meses de campanha não precisam do mesmo
conteúdo na mesma página. Misturar os dois obriga todo mundo a rolar por seções que não são pra ele.

**Mapeamento de conteúdo** (uma página guarda a explicação completa, a outra referencia por link em
vez de repetir o texto):

| Assunto | Novato | Veterano |
|---|---|---|
| Primeira hora, progresso, cozinha, inesperado | Completo | — |
| Combate | Fundamentos 1x1 | Defesa em grupo, cálculo de risco com personagem investido |
| Mundo (linha do tempo) | Nota curta + link | Completo (fact-strip, prazos de dia 15/30) |
| Diário (Bound Journal) | Receita completa | Ângulo estratégico (por que a aposta cresce) |
| Base | Checklist inicial | Carpintaria, elétrica, encanamento, comida — sistemas de longo prazo |
| Veículos | Básico de uso | Frota, Peachey's Biofuel como resposta de longo prazo |
| Grupo | User Panel, facção, safehouse | Coesão em escala, prazo de 6 dias como risco real |
| Dúvidas | FAQ de primeira morte | FAQ distinto, perguntas de quem já não é novato |

### Padrão de layout adotado

**Decisão.** A home continua sendo um portal, mas seu conteúdo fica dentro de um contêiner central
alinhado ao bloco de conexão. `/novatos` e `/veteranos` recuperam o `.page-shell`: índice lateral
fixo em desktop e índice recolhível no topo em telas menores. `/regras` e `/mods` mantêm o padrão
mais direto `.rules-hero` → `.rules-page` → `.rules-footer`.

**Por quê.** A validação visual em tela real mostrou dois problemas que a checagem de DOM não
enxergava: o conteúdo da home começava no canto esquerdo, descolado dos blocos centrais acima, e a
fileira de pills não sustentava a leitura de guias com 7 a 11 seções. O índice persistente devolve
orientação durante o scroll sem transformar páginas curtas de referência em outro sistema.

**Navegação interna.** Nos dois guias, as seções, o guia complementar, Regras e Mods aparecem no
mesmo índice. Em celular, ele fica recolhido para não competir com o conteúdo. `.mods-index`
continua restrito às páginas curtas em que uma fileira de links basta.

**Consequência.** `.page-shell`, `.desktop-nav`, `.mobile-nav` e `.side-note` voltaram a ter uso.
`.guide-section` e `.section-number` seguem preservadas no CSS histórico, sem uso atual.

### Símbolos e imagens de apoio

**Decisão.** A camada visual usa ícones lineares pequenos para orientar ações e seções, e reutiliza
as vinhetas já mantidas em `assets/` nos dois cartões de entrada. Imagem entra onde ajuda uma escolha
ou uma mecânica a ser reconhecida, não para preencher espaço entre parágrafos.

**Por quê.** O site já tem uma identidade de manual de sobrevivência. Símbolos discretos melhoram a
varredura sem disputar atenção com as instruções, e as vinhetas de mochila e base tornam a escolha
entre os dois guias visível antes da leitura. Screenshots de Workshop só entram se houver uma fonte
com permissão clara de republicação; descrição pública de mod não é licença para re-hospedar imagens.

### Sem componente de header/footer compartilhado

**Decisão.** Cada página continua declarando seu próprio cabeçalho, rodapé e constantes de URL
(`steamCollection`, `donateUrl`, `whatsappUrl`), copiados manualmente em vez de importados de um
módulo comum.

**Por quê.** Essa já era a convenção do repositório antes desta mudança — cada página duplicava sua
própria constante de URL. Manter o padrão evita misturar uma refatoração de arquitetura com uma
reestruturação de conteúdo na mesma leva. A duplicação nova é mecânica (uma tag `<a>` a mais em dois
pontos fixos por arquivo) e fácil de conferir com grep.

**Ainda não feito, considerado pra depois:** extrair só as constantes de URL pra um módulo
`app/site-links.ts`, sem mexer no layout. Não fizemos porque o ganho é pequeno perto do risco de
tocar em mais uma coisa no meio de uma mudança já grande.

---

## Voz e narrativa

### Regra central: atmosfera tem voz nova, instrução continua literal

**Decisão.** A voz literária nova (ver abaixo) entra só em trechos de atmosfera — texto de abertura,
introdução de seção, aparte — nunca em passo, número, requisito ou resposta de FAQ.

**Por quê.** O site existe pra alguém consultar no celular no meio de uma decisão real. Misturar
metáfora com instrução é exatamente o tipo de coisa que a diretriz original do site já pedia pra
evitar ("literal quando a instrução importa").

### A nova camada de voz

Inspiração explícita do dono do site: Shirley Jackson, Stephen King, Thomas Ligotti — precisão
clínica sobre decadência, tensão que cresce devagar, o mundano escondendo o impensável. Misturado
com um registro de blog de internet pré-brainrot, tom de revista de videogame dos anos 90 — sincero,
escrito por quem realmente gosta do assunto, não copy corporativo. Referência a anos 90 quando fizer
sentido temático (o site já tinha "VHS é o streaming do apocalipse" — essa é a régua), nunca forçada.

### Residente Ivo

**O quê.** A identidade real de personagem/admin do Kauê no jogo, reaproveitada como assinatura das
passagens atmosféricas (`— Residente Ivo`).

**Decisões travadas com o Kauê:**
- **Sem continuidade fixa.** Ivo não carrega uma história de sobrevivência específica pra manter
  consistente entre páginas — é uma voz, não uma ficha de personagem.
- **Pode piscar pro leitor que é o admin de verdade.** Um dos únicos lugares (junto do bloco de
  doação) onde ficção e vida real podem se tocar de propósito.
- **Seco e observador, não sombrio o tempo todo.** Ivo solta piada de vez em quando — o mesmo tom
  "carinhosamente sarcástico" do resto do site, só que com uma lente mais literária.

**Fora de escopo por enquanto:** eventos de metanarrativa ligados às notas do Ivo (ideia levantada
pelo Kauê pra explorar depois, não implementada).

### Lista de padrões de IA a evitar (checklist de revisão)

Registrada porque uma frase já vazou pro site com exatamente essa cara antes de alguém notar
("é download, não necessariamente travamento" — removida):

- "Não é apenas X, é Y" / "É X, não necessariamente Y" — falsa dicotomia de tranquilização.
- Verbo de marketing: descubra, explore, mergulhe, prepare-se para.
- Grupo de três só pra criar ritmo.
- Travessão como vício de escrita — usado hoje só pra assinatura do Ivo e raras interrupções reais
  (o próprio processo de escrever este site já caiu nesse vício uma vez: 13 a 25 travessões por
  arquivo numa primeira versão, cortado pra ~2 por página na revisão).
- Metáfora onde a instrução precisa ser literal.
- Gíria forçada.
- Parágrafo final que só repete a seção.
- Frases de tranquilização vazias: "é importante notar que", "vale a pena", "sem dúvida", "de fato".

**Duas frases removidas por pedido direto do Kauê**, por serem trocadilho fraco onde algo literal
funcionaria melhor: "Safehouse não é imóvel quitado" e "O admin não é iFood de item ou XP". Isso
supera qualquer exemplo antigo de "direção de voz" que as citava — feedback direto vence documento
escrito antes dele.

---

## Doação e WhatsApp

**Doação.** Link real do Pix/Nubank do Kauê, usado como está — sem gerar QR code próprio, só
linkando pra página que ele já forneceu. Em toda página: link discreto no cabeçalho e no rodapé. Só
na home: um bloco `.tip` explicando o que o dinheiro cobre, com a única piada "sancionada" do site
inteiro sobre pagar "a mão de obra escrava dos nossos agentes zumbis de IA".

**Grupo do WhatsApp.** Link real de convite, publicado em todas as páginas e destacado no bloco de
conexão da home e nas Regras (seção de entrada, que já dizia "peça a senha no grupo" sem link).

**Consideração registrada, não bloqueante:** ao contrário da senha do servidor (que o próprio site
pede pra não divulgar em lugar aberto), um link de convite do WhatsApp publicado num site indexável
pode ser usado por qualquer um que o encontre. É reversível — dá pra revogar e gerar um link novo no
WhatsApp — mas é uma assimetria que vale ter em mente se o grupo virar alvo de entrada indesejada.

---

## Gestão do repositório e do processo

### Dois repositórios git, sem histórico em comum

`C:\Zombas` (o repositório de operação do servidor, sem remoto configurado) e
`C:\Zombas\docs\players\site` (um clone real de `github.com/kauehorta/zombas`, com seu próprio
`.git`, seu próprio remoto `origin`, e sua própria história de commits) são coisas diferentes. O
segundo aparece como uma pasta comum de fora do primeiro porque git trata um `.git` aninhado como um
repositório embutido opaco.

Durante este trabalho, o histórico local do site e o `origin/main` remoto haviam divergido sem
ancestral comum (`git merge-base` não encontrava nada). Resolvido com
`git merge origin/main --allow-unrelated-histories`, favorecendo o conteúdo local em todos os
conflitos de "add/add" (já verificado como mais atual/correto), preservando o `README.md` do lado
remoto que o lado local não tinha.

### `git push` foi liberado de propósito

`C:\Zombas\.claude\settings.json` tinha uma regra `deny` bloqueando `git push` pra qualquer sessão
de Claude Code neste projeto. Removida a pedido direto do Kauê ("vamos usar mais o GitHub agora").
Segurança do porquê isso não expõe o repositório interno: `C:\Zombas` não tem remoto configurado, só
o clone dentro de `docs/players/site` tem — então `git push` só alcança o repositório público do
site, nunca o repositório de operação.

### Bugs de encoding encontrados e corrigidos

`docs/players/site/tools/export-github-pages.ps1` perdeu o BOM UTF-8 duas vezes durante este
trabalho (uma vez nos próprios literais de string do script, outra vez numa chamada `Get-Content`
lendo `globals.css` sem `-Encoding UTF8`) — o padrão exato de corrupção já documentado em
`AGENTS.md`/`CLAUDE.md` do repositório de operação (PowerShell 5.1 lê `.ps1` sem BOM como ANSI).
Corrigido as duas vezes; o `zombas-guide` skill/runbook documenta isso como armadilha conhecida pra
não repetir.

Um segundo bug, mais sutil, apareceu depois: os links cruzados entre `/novatos` e `/veteranos` usam
âncoras (`/veteranos#combate`), e a reescrita de link do script fazia `.Replace()` de string exata,
que não capturava hrefs com `#fragmento`. Corrigido trocando pra regex, testado isoladamente antes
de confiar na exportação inteira.

### Trabalho concorrente com o Codex

Em vários pontos deste trabalho, o Codex editou os mesmos arquivos em paralelo (contagem de mods
subindo de 91 para 93 depois de uma atualização real do servidor pra Build 42.20.4, correções de
texto, ajustes de tom). Nenhuma dessas edições foi revertida sem necessidade — quando havia
divergência de julgamento (por exemplo, o Codex suavizou uma afirmação sobre o comportamento de
Bandits com containers de safehouse que este trabalho tinha deixado mais categórica), a versão mais
cautelosa do Codex foi mantida, porque "leitura de código de mod" não é prova definitiva de
comportamento do motor do jogo.
