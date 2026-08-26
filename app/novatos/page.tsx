import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia do novato",
  description: "Primeira hora, habilidades, combate, o diário e a base: o essencial pra sobreviver no Zombas sem nunca ter jogado Project Zomboid.",
  openGraph: {
    title: "Guia do novato | Zombas",
    description: "Primeira hora, habilidades, combate, o diário e a base: o essencial pra sobreviver no Zombas sem nunca ter jogado Project Zomboid.",
    url: "/novatos",
  },
};

const donateUrl = "https://nubank.com.br/cobrar/dadmh/6a8f4bb1-4f03-4a4a-87e0-4e86e4a5d3fb";
const whatsappUrl = "https://chat.whatsapp.com/Ep63691t14H41ubX6nYDOn?s=cl&p=a&ilr=0";
const steamCollection = "https://steamcommunity.com/sharedfiles/filedetails/?id=3790189787";

const anchors = [
  ["#primeira-hora", "Primeira hora"],
  ["#progresso", "Habilidades e mídia"],
  ["#combate", "Combate"],
  ["#mundo", "O mundo"],
  ["#diario", "O diário"],
  ["#base", "Base e utilidades"],
  ["#cozinha", "Cozinha"],
  ["#veiculos", "Veículos"],
  ["#grupo", "Grupo e safehouse"],
  ["#inesperado", "Surpresas"],
  ["#duvidas", "Dúvidas"],
] as const;

function GuideNavigation({ mobile = false }: { mobile?: boolean }) {
  const links = (
    <>
      {anchors.map(([href, label], index) => (
        <a href={href} key={href}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {label}
        </a>
      ))}
      <a href="/veteranos">
        <span>12</span>
        Guia do veterano
      </a>
      <a href="/regras">
        <span>13</span>
        Regras do servidor
      </a>
      <a href="/mods">
        <span>14</span>
        Mods atuais
      </a>
    </>
  );

  if (mobile) {
    return (
      <details className="mobile-nav">
        <summary>Índice do guia</summary>
        <nav aria-label="Índice móvel do guia do novato">{links}</nav>
      </details>
    );
  }

  return (
    <nav className="desktop-nav" aria-label="Índice do guia do novato">
      <p>Índice</p>
      {links}
    </nav>
  );
}

function SectionArt({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="section-art">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}

export default function NovatosPage() {
  return (
    <>
      <a className="skip-link" href="#novatos-conteudo">Pular para o guia</a>

      <header className="rules-hero">
        <div className="rules-hero-inner">
          <nav className="back-links" aria-label="Links do guia">
            <a className="back-link" href="/">Voltar ao início</a>
            <a className="back-link" href={whatsappUrl} target="_blank" rel="noreferrer">Grupo do WhatsApp</a>
            <a className="back-link" href={donateUrl} target="_blank" rel="noreferrer">Apoiar o servidor</a>
          </nav>
          <p className="eyebrow">Zombas</p>
          <h1>Guia do novato</h1>
          <p>
            A casa ainda cheira a café requentado de uma manhã que não é mais a de ninguém. Não tem
            som de trânsito lá fora, e isso deveria ser a parte boa. Antes de sair pela porta, respire
            fundo: o que vem a seguir é o que separa quem sobrevive a primeira semana de quem vira
            estatística no grupo do WhatsApp. — Residente Ivo
          </p>
        </div>
      </header>

      <GuideNavigation mobile />

      <div className="page-shell guide-page-shell">
        <aside>
          <GuideNavigation />
        </aside>

      <main className="rules-page guide-page" id="novatos-conteudo">
        <section id="primeira-hora">
          <p className="kicker">Antes de virar estatística</p>
          <h2>A primeira hora</h2>
          <p>
            Não tente resolver Kentucky no primeiro dia. Localize-se, avise ao grupo onde nasceu e
            separe água, comida, curativo, mochila e uma arma simples.
          </p>

          <SectionArt
            src="/assets/vinheta-mochila.webp"
            alt="Mochila aberta com água, comida, tecido e primeiros socorros"
          />

          <div className="checklist">
            <h3>Teclas que valem a pena decorar antes de sair de casa</h3>
            <ul>
              <li><strong>Espaço</strong> empurra um zumbi adjacente. É sua ferramenta defensiva mais importante antes de ter uma arma confiável.</li>
              <li><strong>Shift</strong> segurado ativa a corrida, enquanto durar o condicionamento.</li>
              <li><strong>Ctrl</strong> alterna agachar, que reduz sua presença e melhora a pontaria deitado.</li>
              <li><strong>Tab</strong> abre o inventário; <strong>I</strong> abre o painel de fabricação unificado.</li>
              <li><strong>H</strong> abre o painel de saúde pra enfaixar, entalar e desinfetar.</li>
              <li><strong>M</strong> abre o mapa do mundo.</li>
            </ul>
          </div>

          <div className="tip">
            <strong>Isso é só o essencial</strong>
            A lista completa de atalhos do jogo (e como remapear qualquer um deles) está em{" "}
            <a href="https://projectzomboid.wiki/controls/keyboard/" target="_blank" rel="noreferrer">
              projectzomboid.wiki/controls
            </a>. Aqui só entram os que decidem se você sobrevive à primeira horda.
          </div>

          <div className="critical">
            <div className="critical-tag">Conflito de atalho</div>
            <h3>A tecla K virou condomínio</h3>
            <p>
              <strong>This Is Your Life</strong> usa K para abrir o diário de vida do personagem.
              <strong> True Smoking</strong> usa a mesma tecla para dar um trago no cigarro aceso.
              Quando as duas ações ficam em K, uma pode atrapalhar a outra. Se o personagem fuma,
              vale resolver isso antes de o caos começar. E ele começa cedo.
            </p>
            <ol>
              <li>Abra <strong>Options</strong> e depois <strong>Key Bindings</strong>.</li>
              <li>Procure os atalhos de <strong>This Is Your Life</strong> e <strong>True Smoking</strong>.</li>
              <li>Mude uma das duas teclas e teste as duas ações antes de sair de casa.</li>
            </ol>
          </div>

          <ol className="steps">
            <li><strong>Baixe os mods.</strong><span>Assine a coleção ou deixe o jogo cuidar disso na primeira conexão. Só não feche tudo no meio do download.</span></li>
            <li><strong>Vasculhe a casa inicial.</strong><span>Água, comida, curativo, mochila e uma arma branca já sustentam a primeira saída.</span></li>
            <li><strong>Avise onde nasceu.</strong><span>Dizer a cidade e a região evita que o resgate vire uma excursão de madrugada.</span></li>
            <li><strong>Prepare o Bound Journal.</strong><span>Faça o diário cedo e transcreva novamente depois de ganhar habilidades importantes. Um diário desatualizado quase não ajuda.</span></li>
          </ol>

          <div className="tip">
            <strong>Deslocamento</strong>
            Quintais, fundos de terreno e cercas baixas oferecem mais rotas que o meio da rua.
            Antes de pular, olhe onde vai cair: a cerca ajuda, mas não oferece suporte pós-venda.
          </div>

          <div className="tip">
            <strong>Moodles não são decoração</strong>
            Os ícones no canto da tela empilham efeitos de verdade: pânico atrapalha a pontaria e
            deixa a esquiva mais lenta, e ele piora rápido quando soma com fome ou frio. Um personagem
            só levemente incomodado vira um desastre completo em minutos se você ignorar os dois ao
            mesmo tempo. Dor esconde um ferimento que está piorando, e roupa molhada no frio vira
            hipotermia antes que você perceba. Olhe o círculo de moodles antes de decidir "só mais
            uma casa".
          </div>
        </section>

        <section id="progresso">
          <p className="kicker">Leia primeiro, faça besteira depois</p>
          <h2>Habilidades, livros, TV e VHS</h2>
          <p>
            Habilidades representam o que seu personagem sabe fazer. Quase todas vão do nível 0 ao 10
            e sobem com XP. Livros, televisão e VHS aceleram o aprendizado de maneiras diferentes;
            nenhum deles instala conhecimento por osmose.
          </p>

          <div className="learning-loop">
            <article>
              <span>01</span>
              <h3>Leia o volume certo</h3>
              <p>O livro não dá XP nem nível. Ele multiplica o XP ganho depois, dentro da faixa indicada na capa.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Pratique a skill</h3>
              <p>Depois de ler, cozinhe, desmonte, conserte ou construa. A teoria prepara; a prática move a barra.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Troque de volume</h3>
              <p>Cada volume cobre dois níveis. Volume I prepara 1 e 2; II prepara 3 e 4; e assim até o Volume V.</p>
            </article>
          </div>

          <div className="tip">
            <strong>Ler é bem mais rápido no Zombas</strong>
            O tempo está configurado em 0,2 minuto por página. Sentar no chão, em móvel ou banco
            de veículo reduz mais 34%, e o mod Has Been Read ajuda a enxergar o que ainda falta ler.
          </div>

          <div className="media-grid">
            <article>
              <p className="micro-label">Televisão</p>
              <h3>Grade de programação raiz</h3>
              <p>
                Alguns programas dão XP ou receitas, mas passam em horários definidos e dependem de
                energia. É televisão dos anos 90: perdeu o horário, perdeu o programa ao vivo.
              </p>
            </article>
            <article>
              <p className="micro-label">VHS</p>
              <h3>VHS guarda o programa para depois</h3>
              <p>
                Fitas podem ensinar habilidades ou receitas numa televisão com aparelho de VHS. O
                Obvious Skill Tapes marca em verde as que realmente ensinam algo.
              </p>
            </article>
          </div>

          <details>
            <summary>Posso assistir a mesma fita várias vezes para ganhar XP?</summary>
            <div>
              Não. O jogo registra a mídia já vista por personagem. Organize as fitas e trate cada
              programa ou VHS como uma oportunidade de XP, não como máquina infinita de farm.
            </div>
          </details>
          <details>
            <summary>Profissão e traços mudam minhas skills?</summary>
            <div>
              Sim. Eles podem dar níveis iniciais e facilitar o aprendizado de certas skills. Por isso dois
              personagens fazendo a mesma atividade podem avançar em ritmos diferentes.
            </div>
          </details>
        </section>

        <section id="combate">
          <p className="kicker">Controle de distância</p>
          <h2>Combate e furtividade</h2>
          <p>
            Combate seguro depende de espaço, visão do entorno e uma rota para recuar. Se a luta não
            deixa saída, ela já começou mal, mesmo que a música imaginária esteja épica.
          </p>

          <div className="principles">
            <article><span>01</span><h3>Empurre primeiro</h3><p>Abra espaço, derrube e só ataque no chão quando o entorno estiver limpo.</p></article>
            <article><span>02</span><h3>Lute de frente</h3><p>Reposicione antes de bater. Ataque vindo das costas é especialmente perigoso.</p></article>
            <article><span>03</span><h3>Respeite a animação</h3><p>Golpear prende seu movimento por um instante. Esse instante é suficiente para o segundo zumbi chegar.</p></article>
            <article><span>04</span><h3>Saiba encerrar</h3><p>Multi-hit ajuda contra um grupo pequeno. Não transforma seu personagem em John Wick.</p></article>
          </div>

          <h3>O melhor combate é o que você não comprou</h3>
          <p>
            Agachar reduz sua presença, e escolher bem a rota evita muita luta desnecessária. Aqui
            também dá para deitar, o que melhora a pontaria. Armas de fogo continuam anunciando sua
            localização para o bairro inteiro.
          </p>
          <p>
            Zumbis atraídos por barulho podem levar algum tempo para chegar. Depois de atirar ou
            disparar um alarme, observe o entorno e planeje a saída antes de continuar saqueando.
          </p>

          <div className="tip">
            <strong>Um vs. muitos é outra conversa</strong>
            Tudo acima é sobre sobreviver um encontro individual. Defender uma base contra um grupo, ou
            decidir se vale lutar com um personagem já bem equipado, é assunto do{" "}
            <a className="text-link" href="/veteranos#combate">guia do veterano</a>.
          </div>

          <details>
            <summary>O que faço quando atraio gente demais?</summary>
            <div>
              Quebre a linha de visão, contorne uma casa e use os fundos dos lotes. Só pule uma cerca
              quando souber o que existe do outro lado; fé não é ferramenta de reconhecimento.
            </div>
          </details>
          <details>
            <summary>Como abrir portas e janelas trancadas?</summary>
            <div>
              Pé-de-cabra abre porta comum, janela e portão de garagem. No Zombas, lockpick abre porta
              e veículo, mas não janela: esse atalho está desligado de propósito. Em porta reforçada ou
              grade metálica, não conte com um atalho. O Common Sense está configurado para não forçá-las;
              o Neat Lockpicking tem uma rota própria no código, mas ela ainda não foi testada no Zombas.
            </div>
          </details>
        </section>

        <section id="mundo">
          <p className="kicker">Um aviso, não o mapa completo</p>
          <h2>O mundo não fica mais simpático</h2>
          <p>
            A cidade já começa perigosa e a população de zumbis cresce até o dia 35. Uma rua limpa na
            semana passada não ganhou escritura de zona segura. O pior ainda está por vir, bem depois
            de você ter parado de contar os dias.
          </p>
          <div className="fact-strip" aria-label="Dois fatos do mundo">
            <div><strong>Dia 1</strong><span>pressão desde o começo</span></div>
            <div><strong>1 em 100</strong><span>chance de um corredor</span></div>
          </div>
          <p>
            A linha do tempo completa (pico de densidade, corte de água e energia, bandits) é
            conteúdo de campanha longa. Ela está detalhada, com todos os prazos, no{" "}
            <a className="text-link" href="/veteranos#mundo">guia do veterano</a>.
          </p>
        </section>

        <section id="diario">
          <p className="kicker">Recuperação parcial de progressão</p>
          <h2>Diário, morte e recomeço</h2>
          <p>
            Tem coisa nessa casa que não é mais sua, e a que ainda é vai embora com você quando você
            morrer. O <strong>Bound Journal</strong> é o único jeito de levar um pedaço disso adiante.
            — Residente Ivo
          </p>
          <p>
            Ele registra XP e receitas elegíveis no momento da transcrição, mas não devolve equipamento
            nem busca o corpo do personagem anterior.
          </p>

          <SectionArt
            src="/assets/vinheta-diario.webp"
            alt="Caderno encadernado à mão com tiras de couro e um lápis"
          />

          <div className="critical journal-critical">
            <div className="critical-tag">Regra ativa desde 26/08</div>
            <h3>O diário recupera 50% do XP elegível</h3>
            <p>
              O personagem novo recupera metade do XP elegível que estava gravado no diário. Isso não
              significa metade do número do nível: cada nível custa uma quantidade diferente de XP,
              então o resultado pode parar no meio de uma barra. Antes de 26/08 a taxa era 100%; caiu
              para 50% para que a morte continue custando progresso de verdade.
            </p>
            <div className="journal-steps">
              <p><strong>1. Fabrique</strong><span>Use um caderno, diário ou bloco de notas, cola, três tiras de couro e uma linha. Barbante ou linha de pesca também servem. A receita aparece como <em>Vincular diário</em>.</span></p>
              <p><strong>2. Transcreva</strong><span>Com o item em mãos, use <em>Transcribe Into Journal</em>. Atualize depois de ganhar perícias importantes; diário desatualizado recupera progresso desatualizado.</span></p>
              <p><strong>3. Recupere</strong><span>Depois de morrer, encontre o diário no corpo anterior ou no lugar onde o guardou e leia com o personagem novo.</span></p>
            </div>
          </div>

          <details>
            <summary>O que o diário não devolve?</summary>
            <div>
              Força e Condicionamento ficam de fora por padrão (são skills passivas, e a recuperação de
              passivas está zerada). XP de televisão e VHS também não entra, assim como os níveis
              iniciais dados por profissão ou traço. Personagens com Analfabeto não conseguem ler o
              diário. Receitas aprendidas são registradas, mas XP ganho depois da última transcrição
              fica de fora até você transcrever de novo.
            </div>
          </details>
          <details>
            <summary>O diário da tecla K faz a mesma coisa?</summary>
            <div>
              Não. O diário aberto por K registra história, ferimentos e anotações do sobrevivente.
              O Bound Journal é o item físico usado para recuperar parte da progressão.
            </div>
          </details>
        </section>

        <section id="base">
          <p className="kicker">Preparação da base</p>
          <h2>Base, água, energia e comida</h2>
          <p>
            Base boa é fácil de abastecer, defender e abandonar quando tudo dá errado. Escolha uma
            residência perto das áreas usadas pelo grupo e com mais de uma saída.
          </p>

          <SectionArt
            src="/assets/vinheta-base.webp"
            alt="Casa com barril de chuva, horta e gerador do lado de fora"
          />

          <div className="checklist">
            <h3>Antes do dia 14</h3>
            <ul>
              <li>Escolha uma residência com mais de uma rota de saída.</li>
              <li>Cubra as janelas depois de limpar e observar a área.</li>
              <li>Junte recipientes e organize a captação de chuva.</li>
              <li>Mantenha o gerador do lado de fora.</li>
              <li>Defina quem cuida de horta, animais e estoque coletivo.</li>
            </ul>
          </div>

          <div className="deadline utility-clock">
            <p className="micro-label">Datas aproximadas da campanha</p>
            <div><strong>Por volta do dia 15</strong><span>água e luz começam a piscar e cair por períodos curtos e imprevisíveis</span></div>
            <div><strong>Perto do dia 30</strong><span>chega o corte total; a base precisa funcionar sem a rede pública</span></div>
          </div>
          <p>
            A intermitência é aviso, não calendário exato. Tenha água guardada, captação de chuva e
            uma alternativa para cozinhar. O gerador fica do lado de fora, bebe combustível e não
            produz água por força de vontade.
          </p>

          <h3>Transporte de carga</h3>
          <p>
            Carrinho de mão ou de supermercado reduz o peso carregado em mudanças e saques. Carros em
            boas condições são raros; avise antes de usar um veículo que outra pessoa deixou na base.
          </p>

          <div className="tip">
            <strong>Isso ainda é só o começo da base</strong>
            Sustentar uma base depois que a rede cai de vez, multiplicar caches e organizar papéis fixos
            no grupo é assunto de longo prazo. Ver o{" "}
            <a className="text-link" href="/veteranos#base">guia do veterano</a>.
          </div>

          <details>
            <summary>Quando vale ler?</summary>
            <div>
              A leitura é mais rápida aqui que no padrão, e sentar acelera um pouco mais. Chuva,
              recuperação e noite tranquila são bons momentos. Corredor de casa ainda ocupada não é biblioteca.
            </div>
          </details>
        </section>

        <section id="cozinha">
          <p className="kicker">Sistema de cozinha</p>
          <h2>Como cozinhar aqui</h2>
          <p>
            Cozinhar começa com uma base, ingredientes e a fonte de calor correta. Os mods ampliam as
            receitas e organizam o processo, mas não revogam utensílio, skill, calor nem tempo. O painel
            ajuda; ele não cozinha por você.
          </p>

          <ol className="basic-flow">
            <li><strong>Escolha uma base.</strong><span>Panela com água, tigela, frigideira, pão e outros itens aceitam combinações diferentes.</span></li>
            <li><strong>Abra o painel.</strong><span>Clique com o botão direito em um alimento compatível e use <em>Open Cooking Panel</em>.</span></li>
            <li><strong>Monte a receita.</strong><span>O Project Cook mostra ingredientes próximos, temperos, nutrição, nível exigido e o que ainda está faltando.</span></li>
            <li><strong>Cozinhe e vigie.</strong><span>Coloque no forno, fogão, churrasqueira ou fogueira adequada. Retire quando estiver cozido, antes de queimar.</span></li>
          </ol>

          <div className="two-column-copy cooking-notes">
            <div>
              <h3>Project Cook organiza as receitas</h3>
              <p>Ele reúne receitas, ingredientes próximos e requisitos num painel. É organização, não passe livre culinário.</p>
            </div>
            <div>
              <h3>Vanilla Foods Expanded adiciona conteúdo</h3>
              <p>Ele acrescenta uma variedade enorme de alimentos e receitas. Se não souber o uso de um item, comece pelo painel.</p>
            </div>
          </div>

          <div className="tip">
            <strong>Segurança de cozinha</strong>
            Carne crua e comida queimada podem fazer mal. Forno esquecido pode iniciar incêndio e
            não manda notificação antes. Observe a barra do alimento e desligue a fonte de calor ao sair.
          </div>
        </section>

        <section id="veiculos">
          <p className="kicker">Uso e manutenção</p>
          <h2>Carros e gasolina</h2>
          <p>
            Veículos encurtam viagens e carregam muitos suprimentos, mas aparecem pouco, costumam ter pouca
            gasolina e pedem manutenção. Trate carro como recurso raro, não como kart descartável.
          </p>

          <div className="vehicle-grid">
            <article>
              <span>01</span><h3>Entre e confira</h3>
              <p>Veja combustível, bateria, condição do motor e avisos. O Realistic Dashboard faz o painel deixar de ser decoração.</p>
            </article>
            <article>
              <span>02</span><h3>Encontre a chave</h3>
              <p>Ela pode estar no veículo, por perto ou com um antigo dono. Hotwire só funciona quando o personagem cumpre os requisitos do jogo.</p>
            </article>
            <article>
              <span>03</span><h3>Inspecione as peças</h3>
              <p>Abra a mecânica do veículo. Pneu, freio, suspensão, bateria e motor ruins mudam o risco da viagem.</p>
            </article>
            <article>
              <span>04</span><h3>Evite colisões</h3>
              <p>Colisão estraga carro e personagem. Sair cedo demais de um veículo em movimento também pode causar dano.</p>
            </article>
          </div>

          <h3>O combustível é finito. O posto também.</h3>
          <div className="fuel-facts">
            <p><strong>Nos carros</strong><span>o tanque inicial está baixo. Olhe antes de planejar a viagem.</span></p>
            <p><strong>Nos postos</strong><span>as bombas têm estoque limitado e algumas já podem estar vazias.</span></p>
            <p><strong>Sem energia</strong><span>a bomba não funciona. Um gerador do lado de fora pode alimentar o posto. É o mesmo recurso que também pode fazer falta na sua base.</span></p>
            <p><strong>No longo prazo</strong><span>Peachey&apos;s Biofuel permite produzir e refinar biocombustível, mas exige uma cadeia de produção. Ver o guia do veterano.</span></p>
          </div>

          <details>
            <summary>O que nossos mods mudam nos veículos?</summary>
            <div>
              WayMoreCars amplia variedade e customização. Vehicle Repair Overhaul aprofunda reparos,
              e Vehicle Salvage Overhaul permite desmontar veículos danificados por materiais. Use o painel
              de mecânica para ver ferramentas, habilidades e peças exigidas em cada trabalho.
            </div>
          </details>
          <details>
            <summary>Qual é o kit básico para buscar gasolina?</summary>
            <div>
              Galão, veículo com espaço, gerador abastecido, manual do gerador e uma rota limpa. O
              gerador fica do lado de fora. Monóxido de carbono não respeita safehouse.
            </div>
          </details>
        </section>

        <section id="grupo">
          <p className="kicker">Organização do grupo</p>
          <h2>Facção, safehouse, mapa e convivência</h2>
          <p>
            O painel de usuário, chamado <em>User Panel</em> no jogo, concentra facção e safehouse. O
            botão fica na barra ao lado dos itens equipados, no canto inferior da tela. Não é intuitivo,
            por isso está escrito aqui.
          </p>

          <SectionArt
            src="/assets/vinheta-encontro.webp"
            alt="Placa improvisada de encontro numa bifurcação, com duas mochilas e um mapa"
          />

          <div className="social-grid">
            <article><h3>Facção</h3><p>Crie no User Panel, convide e espere a pessoa aceitar. Membros da mesma facção aparecem no mapa.</p></article>
            <article><h3>Safehouse</h3><p>Sobreviva um dia e reivindique uma residência. Galpão, delegacia e loja continuam espaços disputados.</p></article>
            <article><h3>Mapa</h3><p>Amigos aparecem quando dividem facção ou safehouse. A Steam conhece a amizade; o mapa exige papelada.</p></article>
            <article><h3>PVP</h3><p>Existe com trava de segurança. A caveira indica escolha deliberada de combate, não uma ameaça automática.</p></article>
          </div>

          <div className="tip">
            <strong>A reivindicação vence pelo abandono</strong>
            Visite sua base. Depois de seis dias reais sem visita, a reivindicação cai e o prédio
            volta a ser mais uma casa vazia entre tantas outras.
          </div>

          <div className="tip">
            <strong>Dormir sozinho não é tempo perdido</strong>
            Cada um deita na própria hora. Sem o grupo inteiro dormindo, o relógio não pula a noite,
            mas o True Sleep te dá um cochilo acelerado: o personagem descansa bem mais rápido que o
            normal e acorda sozinho perto de 85% de disposição. Só o descanso total e o salto direto
            pro amanhecer dependem de todo mundo dormindo ao mesmo tempo. Por isso ainda vale avisar
            no chat antes de apagar: quem está sozinho já aproveita, quem quer a noite inteira de
            graça precisa de companhia.
          </div>

          <p>
            Não pegue coisas da base dos outros sem combinar. Avise se levar carro. Fale antes de
            mexer em gerador, plantação ou estoque coletivo.
          </p>
          <a className="text-link" href="/regras">Ler as regras completas do servidor</a>
        </section>

        <section id="inesperado">
          <p className="kicker">Descoberta, não decoreba</p>
          <h2>Mecânicas que pegam de surpresa</h2>
          <p>
            A lista completa de mods está em outra página. Aqui só entra o que muda como você joga de
            um jeito que ninguém espera na primeira vez que esbarra nisso.
          </p>

          <div className="checklist">
            <h3>Coisas que existem aqui</h3>
            <ul>
              <li><strong>Amputar o próprio braço</strong> é uma opção real do The Only Cure, para tentar travar uma mordida antes que vire sentença de morte. É tratamento de emergência, não um botão de segunda chance.</li>
              <li><strong>Gazua tem minigame de pinos</strong>: porta e veículo abrem por perícia e sequência, não por barra de progresso automática.</li>
              <li><strong>Escada é escada de verdade</strong> com o Ladders?!: dá para subir e descer um telhado sem precisar arrumar um buraco.</li>
              <li><strong>Arco e besta existem</strong> via ClassicBows, com munição recuperável e sem o barulho de uma arma de fogo.</li>
              <li><strong>Computador do mapa funciona</strong>: o Computer Mod transforma os PCs de cenário em objetos interativos de verdade.</li>
              <li><strong>Noite de tabuleiro é jogável</strong>: Game Night roda Uno, Monopoly e Catan contra outro sobrevivente, sem sair do apocalipse.</li>
              <li><strong>Traço pode nascer ou sumir</strong> com o Evolving Traits World: hábito vira traço com o tempo, então a ficha do personagem muda sozinha.</li>
              <li><strong>Carrinho empurrável existe</strong> com SaucedCarts: carrega volume sem gastar uma gota de gasolina.</li>
            </ul>
          </div>

          <details>
            <summary>Gazua, pé-de-cabra e costura: como usar</summary>
            <div>
              <p>
                <strong>Gazua.</strong> Serve para tentar abrir portas e veículos trancados no minigame de
                pinos. Para fazer a versão artesanal, aprenda <em>Fazer Gazua Artesanal</em>, tenha uma
                chave de fenda e gaste um clipe de papel. Ladrão começa com essa receita; os demais a
                aprendem na <em>Lockpicking Magazine</em>. Com a gazua no inventário, clique com o botão
                direito no alvo e escolha a opção de arrombamento. Em Arrombamento nível 0, a artesanal
                tem 50% de chance de quebrar a cada pino errado. A chance cai cinco pontos por nível,
                até o mínimo de 5%. Quando ela quebra, a sequência de pinos recomeça; uma falha também
                faz barulho. Gazua de janela está desativada no Zombas.
              </p>
              <p>
                <strong>Pé-de-cabra.</strong> O Common Sense aceita o comum ou o forjado. Com ele no
                inventário, use a ação de forçar em portas comuns, janelas, portões de garagem ou portas
                de veículo. Força maior melhora a chance de sucesso. A tentativa faz barulho e cansa o
                personagem; nas janelas há 20% de chance de quebrar o vidro. No Common Sense, portas
                reforçadas estão bloqueadas no Zombas. O Neat Lockpicking pode mostrar uma ação separada
                de pé-de-cabra para elas, mas esse caminho ainda não foi validado em jogo no servidor.
                Não o trate como entrada garantida.
              </p>
              <p>
                <strong>Costura.</strong> Inspecione uma roupa no inventário para abrir o painel por partes
                do corpo. Selecione a parte e clique com o botão direito para remendar um furo ou adicionar
                proteção. Leve linha, agulha e tiras de pano, jeans ou couro. Uma peça de material que
                combina com a área marcada recebe 12 XP extras; uma que não combina recebe 6. O Interactive
                Tailoring organiza essa inspeção e a escolha de cada parte. O Repair Any Clothes dá tipo de
                couro às roupas que cobrem o corpo e não tinham tipo de tecido, para que entrem nesse mesmo
                processo. Nenhum dos dois conserta roupa automaticamente.
              </p>
            </div>
          </details>
        </section>

        <section id="duvidas">
          <p className="kicker">Consulta rápida</p>
          <h2>Dúvidas que aparecem toda semana</h2>

          <details>
            <summary>Por que tomei kick ao tentar entrar?</summary>
            <div>
              Geralmente faltou download ou atualização de mod. Assine a coleção e deixe a primeira conexão
              baixar o complemento que o servidor pedir. Não feche o jogo durante o download; depois tente
              entrar de novo.
            </div>
          </details>
          <details>
            <summary>Como vejo meus amigos no mapa?</summary>
            <div>Entrem na mesma facção ou compartilhem uma safehouse. Ser amigo na Steam não coloca ninguém no mapa.</div>
          </details>
          <details>
            <summary>Posso pedir item, XP ou teleporte ao admin?</summary>
            <div>
              Não como atalho de jogo. A administração conserta defeito real: item perdido em crash,
              personagem preso na geometria. Ela não reescreve o que você conquistou nem o que perdeu.
            </div>
          </details>
          <details>
            <summary>O servidor caiu quando apareceu uma contagem?</summary>
            <div>
              Provavelmente não. Atualizações de mods disparam uma contagem no chat antes do reinício
              controlado. Guarde o que puder, encerre a ação atual e espere o servidor voltar.
            </div>
          </details>
          <details>
            <summary>Travei em alguma coisa que o guia não cobre?</summary>
            <div>
              Pergunte no <a href={whatsappUrl} target="_blank" rel="noreferrer">grupo do WhatsApp</a>.
              Alguém já passou por isso, ou o Residente Ivo aparece pra confirmar se é bug ou só falta de sorte.
            </div>
          </details>

          <div className="closing-note">
            <p className="micro-label">Depois de uma morte</p>
            <p>
              Respira. A casa continua lá, só que agora é a casa de outra pessoa. Se o personagem
              anterior deixou um Bound Journal atualizado, recupere o item, leia com o novo personagem
              e avise ao grupo onde você reapareceu.
            </p>
            <p>
              O resto — o que você sentiu ao ver o nome dele apagado da lista de vivos — isso o diário
              não registra. — Residente Ivo
            </p>
          </div>
        </section>

        <div className="rules-cta">
          <p>Já sobreviveu o suficiente pra pensar em longo prazo? O guia do veterano cobre o resto.</p>
          <div className="rules-actions">
            <a className="button button-primary" href="/veteranos">Guia do veterano</a>
            <a className="button button-ghost" href="/regras">Regras</a>
            <a className="button button-ghost" href="/mods">Mods atuais</a>
          </div>
        </div>
      </main>
      </div>

      <footer className="rules-footer">
        <div>
          <a className="brand" href="/">Zombas</a>
          <p>Menos tentativa e erro. A mesma quantidade de zumbis.</p>
        </div>
        <nav aria-label="Links do guia do novato">
          <a href="/">Início</a>
          <a href="/veteranos">Guia do veterano</a>
          <a href="/regras">Regras</a>
          <a href="/mods">Mods atuais</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={donateUrl} target="_blank" rel="noreferrer">Apoiar</a>
          <a href={steamCollection} target="_blank" rel="noreferrer">Coleção Steam</a>
        </nav>
      </footer>
    </>
  );
}
