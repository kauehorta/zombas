const steamCollection = "https://steamcommunity.com/sharedfiles/filedetails/?id=3790189787";

const navigation = [
  ["#primeira-hora", "Primeira hora"],
  ["#progresso", "Skills, livros, TV e VHS"],
  ["#combate", "Combate e furtividade"],
  ["#mundo", "O mundo e suas ameaças"],
  ["#diario", "Diário, morte e recomeço"],
  ["#cozinha", "Cozinha e nossos mods"],
  ["#veiculos", "Carros e gasolina"],
  ["#base", "Base, água, energia e comida"],
  ["#grupo", "Facção, safehouse e mapa"],
  ["#duvidas", "Dúvidas rápidas"],
] as const;

function Navigation({ mobile = false }: { mobile?: boolean }) {
  const links = (
    <>
      {navigation.map(([href, label], index) => (
        <a href={href} key={href}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {label}
        </a>
      ))}
      <a href="/regras">
        <span>11</span>
        Regras do servidor
      </a>
      <a href="/mods">
        <span>12</span>
        Mods atuais
      </a>
    </>
  );

  if (mobile) {
    return (
      <details className="mobile-nav">
        <summary>Índice do guia</summary>
        <nav aria-label="Índice móvel">{links}</nav>
      </details>
    );
  }

  return (
    <nav className="desktop-nav" aria-label="Índice do guia">
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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o guia
      </a>

      <header className="hero" id="topo">
        <img
          className="hero-image"
          src="/assets/hero-zombas.webp"
          alt="Rua residencial de Kentucky ao entardecer, com uma casa iluminada, um carro antigo e silhuetas distantes"
          fetchPriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="topbar">
          <a className="brand" href="#topo" aria-label="Zombas, voltar ao topo">
            Zombas
          </a>
          <nav className="top-links" aria-label="Páginas do site">
            <a className="rules-link" href="/mods">Mods atuais</a>
            <a className="rules-link" href="/regras">Regras do servidor</a>
          </nav>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Manual do sobrevivente</p>
          <h1>Fica vivo.<br />Fica junto.</h1>
          <p className="hero-lead">
            Guia do servidor cooperativo Zombas: primeiros passos, progressão, combate, cozinha,
            veículos, base e convivência.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#primeira-hora">
              Primeira hora
            </a>
            <a className="button button-ghost" href={steamCollection} target="_blank" rel="noreferrer">
              Coleção Steam
            </a>
          </div>
        </div>
      </header>

      <section className="connection" aria-labelledby="conectar-titulo">
        <div className="connection-copy">
          <p className="micro-label" id="conectar-titulo">Como conectar</p>
          <p>Baixe a coleção antes de entrar ou deixe o jogo baixar os mods na primeira conexão.</p>
        </div>
        <dl>
          <div>
            <dt>Endereço</dt>
            <dd>zombas.bounceme.net</dd>
          </div>
          <div>
            <dt>Porta</dt>
            <dd>16261</dd>
          </div>
          <div>
            <dt>Senha</dt>
            <dd>peça no grupo</dd>
          </div>
        </dl>
      </section>

      <Navigation mobile />

      <div className="page-shell">
        <aside>
          <Navigation />
          <p className="side-note">Use o índice para consultar apenas a parte do guia que você precisa.</p>
        </aside>

        <main id="conteudo">
          <section className="guide-section" id="primeira-hora">
            <div className="section-number">01</div>
            <p className="kicker">Antes da primeira rua</p>
            <h2>A primeira hora</h2>
            <p className="lead">
              Na primeira hora, localize-se, avise ao grupo onde nasceu e separe água, comida,
              curativo, mochila e uma arma simples.
            </p>

            <SectionArt
              src="/assets/vinheta-mochila.webp"
              alt="Mochila aberta com água, comida, tecido e primeiros socorros"
            />

            <div className="critical">
              <div className="critical-tag">Conflito de atalho</div>
              <h3>A tecla K está ligada a duas ações</h3>
              <p>
                <strong>This Is Your Life</strong> usa K para abrir o diário de vida do personagem.
                <strong> True Smoking</strong> usa a mesma tecla para dar um trago no cigarro aceso.
                Quando as duas ações ficam em K, uma pode atrapalhar a outra.
              </p>
              <ol>
                <li>Abra <strong>Options</strong> e depois <strong>Key Bindings</strong>.</li>
                <li>Procure os atalhos de <strong>This Is Your Life</strong> e <strong>True Smoking</strong>.</li>
                <li>Mude uma das duas teclas. Isso é especialmente importante para personagens fumantes.</li>
              </ol>
            </div>

            <ol className="steps">
              <li><strong>Baixe os mods.</strong><span>Assine a coleção antes de entrar ou deixe o jogo baixar tudo automaticamente na primeira conexão.</span></li>
              <li><strong>Vasculhe a casa inicial.</strong><span>Mochila, água, comida, curativo e uma arma branca já bastam para a primeira saída.</span></li>
              <li><strong>Avise onde nasceu.</strong><span>Combinar a região economiza uma noite inteira de procura.</span></li>
              <li><strong>Prepare o Bound Journal.</strong><span>Faça o diário cedo e transcreva novamente depois de ganhar skills importantes.</span></li>
            </ol>

            <div className="tip">
              <strong>Deslocamento</strong>
              Quintais, fundos de terreno e cercas baixas oferecem mais rotas que o meio da rua.
              Antes de pular, olhe onde vai cair.
            </div>
          </section>

          <section className="guide-section" id="progresso">
            <div className="section-number">02</div>
            <p className="kicker">Aprender antes de praticar</p>
            <h2>Skills, livros, TV e VHS</h2>
            <p className="lead">
              Skills representam o que seu personagem sabe fazer. Quase todas vão do nível 0 ao 10,
              e sobem quando você ganha XP usando aquela habilidade. Livro, televisão e fita ajudam,
              mas cada um ajuda de um jeito diferente.
            </p>

            <div className="learning-loop">
              <article>
                <span>01</span>
                <h3>Leia o volume certo</h3>
                <p>O livro não dá XP nem nível. Ele multiplica o XP que você ganhar depois, dentro da faixa indicada na capa.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Pratique a skill</h3>
                <p>Depois de ler, faça a atividade: cozinhe, desmonte, conserte ou construa. É a prática que move a barra.</p>
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
                <h3>Programas passam em horários definidos</h3>
                <p>
                  Alguns programas dão XP ou receitas. Eles passam em horários específicos e dependem
                  de energia, então valem uma pausa segura nos primeiros dias.
                </p>
              </article>
              <article>
                <p className="micro-label">VHS</p>
                <h3>Fitas podem ser assistidas depois</h3>
                <p>
                  Fitas podem ensinar skills e receitas depois, usando uma televisão com aparelho de VHS.
                  O mod Obvious Skill Tapes marca em verde as fitas úteis para aprendizado.
                </p>
              </article>
            </div>

            <details>
              <summary>Posso assistir a mesma fita várias vezes para ganhar XP?</summary>
              <div>
                Não conte com repetição para farmar. O jogo registra a mídia já vista por cada personagem.
                Organize as fitas e considere cada programa ou fita como um uso por personagem.
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

          <section className="guide-section" id="combate">
            <div className="section-number">03</div>
            <p className="kicker">Controle de distância</p>
            <h2>Combate e furtividade</h2>
            <p className="lead">
              Combate seguro depende de espaço, visão do entorno e uma rota para recuar. Evite lutar
              cercado ou continuar atacando quando outros zumbis estão chegando.
            </p>

            <div className="principles">
              <article><span>01</span><h3>Empurre primeiro</h3><p>Abra espaço, derrube e só ataque no chão quando o entorno estiver limpo.</p></article>
              <article><span>02</span><h3>Lute de frente</h3><p>Reposicione antes de bater. Ataque vindo das costas é especialmente perigoso.</p></article>
              <article><span>03</span><h3>Respeite a animação</h3><p>Golpear prende seu movimento por um instante. Esse instante é suficiente para o segundo zumbi chegar.</p></article>
              <article><span>04</span><h3>Saiba encerrar</h3><p>Multi-hit ajuda contra um grupo pequeno. Não transforma multidão em alvo razoável.</p></article>
            </div>

            <h3>Furtividade reduz combates desnecessários</h3>
            <p>
              Agachar reduz sua presença e escolher a rota evita metade das lutas. Aqui também dá
              para deitar, o que melhora a pontaria. Armas de fogo continuam produzindo muito barulho.
            </p>
            <p>
              Zumbis atraídos por barulho podem levar algum tempo para chegar. Depois de atirar ou
              disparar um alarme, observe o entorno e planeje a saída antes de continuar saqueando.
            </p>

            <details>
              <summary>O que faço quando atraio gente demais?</summary>
              <div>
                Quebre a linha de visão. Contorne uma casa, passe pelos fundos de um lote e só pule
                uma cerca quando souber que há saída do outro lado. Avise o grupo antes de se separar.
              </div>
            </details>
            <details>
              <summary>Como abrir portas e janelas trancadas?</summary>
              <div>
                Pé-de-cabra abre porta comum, janela e portão de garagem. Lockpick não abre janela,
                e grade metálica de delegacia não cede aos dois. Abrir uma casa também pode disparar alarme.
              </div>
            </details>
          </section>

          <section className="guide-section" id="mundo">
            <div className="section-number">04</div>
            <p className="kicker">A dificuldade aumenta com o tempo</p>
            <h2>O mundo e suas ameaças</h2>
            <p className="lead">
              A cidade já é perigosa no dia 1 e fica mais densa até o dia 35. O mapa que parecia
              controlado na semana passada merece ser observado de novo.
            </p>

            <div className="fact-strip" aria-label="Três fatos do mundo">
              <div><strong>Dia 1</strong><span>pressão desde o começo</span></div>
              <div><strong>Dia 35</strong><span>pico de densidade</span></div>
              <div><strong>1 em 100</strong><span>chance de um corredor</span></div>
            </div>

            <div className="two-column-copy">
              <div>
                <h3>Alguns grupos têm corredores</h3>
                <p>
                  A maioria é lenta ou rápida sem correr. Uma pequena chance de sprinter significa
                  que toda aglomeração pode esconder alguém que fecha distância de verdade.
                </p>
              </div>
              <div>
                <h3>Produção de comida</h3>
                <p>
                  Loot é escasso. Horta, animais e estoque devem ser organizados cedo, porque a produção
                  leva tempo e precisa continuar depois que os alimentos encontrados acabarem.
                </p>
              </div>
              <div>
                <h3>Armas e munição</h3>
                <p>Armas de fogo aparecem com mais facilidade que munição. Confira o calibre e o estoque antes de depender de uma arma.</p>
              </div>
              <div>
                <h3>Bandits existem</h3>
                <p>Alguns bandidos podem roubar itens de recipientes em bases detectadas pelo mod. Uma safehouse não bloqueia essa ação.</p>
              </div>
            </div>

            <div className="deadline">
              <p className="micro-label">Água e energia</p>
              <div><strong>Por volta do dia 15</strong><span>água e energia começam a falhar de forma intermitente</span></div>
              <div><strong>Perto do dia 30</strong><span>acontece o corte permanente de água e energia</span></div>
            </div>
          </section>

          <section className="guide-section" id="diario">
            <div className="section-number">05</div>
            <p className="kicker">Recuperação parcial de progressão</p>
            <h2>Diário, morte e recomeço</h2>
            <p className="lead">
              O <strong>Bound Journal</strong> registra o XP e as receitas elegíveis no momento da transcrição.
              Ele não devolve equipamento nem recupera o corpo do personagem anterior.
            </p>

            <SectionArt
              src="/assets/vinheta-diario.webp"
              alt="Caderno encadernado à mão com tiras de couro e um lápis"
            />

            <div className="critical journal-critical">
              <div className="critical-tag">Mudança pendente para o próximo reinício seguro</div>
              <h3>A regra planejada é recuperar 50%</h3>
              <p>
                Quando o ajuste entrar ao vivo, ler o diário com o personagem novo devolverá metade do
                XP elegível que estava gravado. Não significa metade do número do nível: como cada nível
                exige uma quantidade diferente de XP, o resultado pode cair no meio de uma barra.
              </p>
              <div className="journal-steps">
                <p><strong>1. Fabrique</strong><span>Caderno, cola, três tiras de couro e uma linha. A receita se chama <em>Bind Journal Together</em>.</span></p>
                <p><strong>2. Transcreva</strong><span>Com o item em mãos, use <em>Transcribe Into Journal</em>. Repita depois de ganhar perícias importantes.</span></p>
                <p><strong>3. Recupere</strong><span>Depois de morrer, encontre o diário no corpo anterior ou no lugar onde o guardou e leia com o personagem novo.</span></p>
              </div>
            </div>

            <div className="status-note" role="note">
              <strong>Status confirmado em 26/08:</strong> o servidor ao vivo ainda está em 100%.
              A redução para 50% já foi decidida e aguarda um reinício sem jogadores online.
            </div>

            <details>
              <summary>O que o diário não devolve?</summary>
              <div>
                Força, Condicionamento, XP de televisão e vídeo, além dos níveis iniciais dados por
                profissão ou traço ficam fora. Personagens com Analfabeto não usam o sistema. Receitas
                aprendidas são registradas, mas XP ganho depois da última transcrição também fica de fora.
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

          <section className="guide-section" id="cozinha">
            <div className="section-number">06</div>
            <p className="kicker">Sistema de cozinha</p>
            <h2>Como cozinhar aqui</h2>
            <p className="lead">
              Cozinhar começa escolhendo uma base, acrescentando ingredientes e usando uma fonte de calor.
              Nossos mods aumentam a variedade de receitas e oferecem um painel para organizar ingredientes.
              As exigências de utensílio, skill, calor e tempo continuam valendo.
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
                <p>Ele organiza receitas e ingredientes num painel. Não elimina exigência de skill, utensílio ou calor.</p>
              </div>
              <div>
                <h3>Vanilla Foods Expanded adiciona conteúdo</h3>
                <p>Ele acrescenta uma variedade enorme de alimentos e receitas. Se não souber o uso de um item, comece pelo painel.</p>
              </div>
            </div>

            <div className="tip">
              <strong>Segurança de cozinha</strong>
              Carne crua e comida queimada podem fazer mal. Forno esquecido pode iniciar incêndio.
              Cozinhe em lugar seguro, observe a barra do alimento e desligue a fonte de calor ao sair.
            </div>
          </section>

          <section className="guide-section" id="veiculos">
            <div className="section-number">07</div>
            <p className="kicker">Uso e manutenção</p>
            <h2>Carros e gasolina</h2>
            <p className="lead">
              Veículos reduzem o tempo de deslocamento e transportam carga. Aqui eles aparecem pouco,
              costumam ter pouca gasolina e exigem manutenção.
            </p>

            <div className="vehicle-grid">
              <article>
                <span>01</span><h3>Entre e confira</h3>
                <p>Veja combustível, bateria, condição do motor e painel. O Realistic Dashboard deixa medidores e avisos mais úteis.</p>
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

            <h3>O combustível é finito</h3>
            <div className="fuel-facts">
              <p><strong>Nos carros</strong><span>o tanque inicial está baixo. Olhe antes de planejar a viagem.</span></p>
              <p><strong>Nos postos</strong><span>as bombas têm estoque limitado e algumas já podem estar vazias.</span></p>
              <p><strong>Sem energia</strong><span>a bomba não funciona. Um gerador do lado de fora pode alimentar o posto.</span></p>
              <p><strong>No longo prazo</strong><span>Peachey&apos;s Biofuel permite produzir e refinar biocombustível, mas exige uma cadeia de produção.</span></p>
            </div>

            <details>
              <summary>O que nossos mods mudam nos veículos?</summary>
              <div>
                WayMoreCars amplia variedade e customização. Vehicle Repair Overhaul aprofunda reparos,
                e Vehicle Salvage Overhaul permite desmontar veículos danificados por materiais. Use o painel
                de mecânica para ver ferramentas, skills e peças exigidas em cada trabalho.
              </div>
            </details>
            <details>
              <summary>Qual é o kit básico para buscar gasolina?</summary>
              <div>
                Galão, veículo com espaço, gerador abastecido, manual do gerador e uma rota limpa. Coloque
                o gerador do lado de fora, conecte e ligue somente quando a área estiver segura.
              </div>
            </details>
          </section>

          <section className="guide-section" id="base">
            <div className="section-number">08</div>
            <p className="kicker">Preparação da base</p>
            <h2>Base, água, energia e comida</h2>
            <p className="lead">
              A primeira base precisa ser simples de entender, fácil de abandonar numa emergência e
              próxima das áreas usadas pelo grupo. Escolha um prédio com mais de uma saída.
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
              A intermitência é aviso, não calendário exato. Tenha água armazenada, captação de chuva e
              uma alternativa para cozinhar. Gerador fica do lado de fora, precisa de combustível e não
              resolve a falta de água.
            </p>

            <h3>Transporte de carga</h3>
            <p>
              Carrinho de mão ou de supermercado reduz o peso carregado em mudanças e saques. Carros em
              boas condições são raros; avise antes de usar um veículo que outra pessoa deixou na base.
            </p>
            <details>
              <summary>Quando vale ler?</summary>
              <div>
                A leitura é mais rápida aqui que no padrão, e sentar acelera um pouco mais. Chuva,
                recuperação e noite tranquila são bons momentos. O corredor de uma casa ainda ocupada não é.
              </div>
            </details>
          </section>

          <section className="guide-section" id="grupo">
            <div className="section-number">09</div>
            <p className="kicker">Organização do grupo</p>
            <h2>Facção, safehouse, mapa e convivência</h2>
            <p className="lead">
              O User Panel concentra a parte social. O botão fica na barra ao lado dos itens equipados,
              no canto inferior da tela. É ali que você gerencia facção e safehouse.
            </p>

            <SectionArt
              src="/assets/vinheta-encontro.webp"
              alt="Placa improvisada de encontro numa bifurcação, com duas mochilas e um mapa"
            />

            <div className="social-grid">
              <article><h3>Facção</h3><p>Crie no User Panel, convide e espere a pessoa aceitar. Membros da mesma facção aparecem no mapa.</p></article>
              <article><h3>Safehouse</h3><p>Sobreviva um dia e reivindique uma residência. Galpão, delegacia e loja continuam espaços disputados.</p></article>
              <article><h3>Mapa</h3><p>Amigos aparecem quando dividem facção ou safehouse. Amizade na Steam, sozinha, não conta.</p></article>
              <article><h3>PVP</h3><p>Existe com trava de segurança. A caveira indica escolha deliberada de combate, não uma ameaça automática.</p></article>
            </div>

            <div className="tip">
              <strong>Não abandone a safehouse</strong>
              Visite sua base. Depois de seis dias reais sem visita, a reivindicação pode cair e o prédio
              deixa de ter a proteção da safehouse.
            </div>

            <p>
              Não pegue coisas da base dos outros sem combinar. Avise se levar carro. Fale antes de
              mexer em gerador, plantação ou estoque coletivo.
            </p>
            <a className="text-link" href="/regras">Ler as regras completas do servidor</a>
          </section>

          <section className="guide-section" id="duvidas">
            <div className="section-number">10</div>
            <p className="kicker">Consulta rápida</p>
            <h2>Dúvidas que aparecem toda semana</h2>

            <details>
              <summary>Por que tomei kick ao tentar entrar?</summary>
              <div>
                Quase sempre são mods incompletos ou desatualizados. Feche o jogo, confirme que a
                coleção inteira terminou de baixar e tente novamente. O servidor compara seus arquivos aos dele.
              </div>
            </details>
            <details>
              <summary>Como vejo meus amigos no mapa?</summary>
              <div>Entrem na mesma facção ou compartilhem uma safehouse. Ser amigo na Steam não coloca ninguém no mapa.</div>
            </details>
            <details>
              <summary>Posso pedir item, XP ou teleporte ao admin?</summary>
              <div>
                Não como atalho de jogo. Administração corrige defeito real, como item perdido em crash
                ou personagem preso na geometria.
              </div>
            </details>
            <details>
              <summary>O servidor caiu quando apareceu uma contagem?</summary>
              <div>
                Atualizações de mods disparam avisos no chat antes de um reinício controlado. Recolha-se,
                termine o que estiver fazendo e espere o servidor voltar.
              </div>
            </details>

            <div className="closing-note">
              <p className="micro-label">Depois de uma morte</p>
              <p>
                Se o personagem anterior deixou um Bound Journal atualizado, recupere o item, leia com
                o novo personagem e avise ao grupo onde você reapareceu.
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div>
          <a className="brand" href="#topo">Zombas</a>
          <p>Guia público do servidor cooperativo Zombas.</p>
        </div>
        <nav aria-label="Links finais">
          <a href="/regras">Regras</a>
          <a href="/mods">Mods atuais</a>
          <a href={steamCollection} target="_blank" rel="noreferrer">Coleção Steam</a>
          <a href="#topo">Voltar ao topo</a>
        </nav>
      </footer>
    </>
  );
}
