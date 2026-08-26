const steamCollection = "https://steamcommunity.com/sharedfiles/filedetails/?id=3790189787";

const navigation = [
  ["#primeira-hora", "Primeira hora"],
  ["#combate", "Combate e furtividade"],
  ["#mundo", "O mundo e suas ameaças"],
  ["#diario", "Diário, morte e recomeço"],
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
        <span>08</span>
        Regras do servidor
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
      <p>Abra na dúvida</p>
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
          <a className="rules-link" href="/regras">
            Regras do servidor
          </a>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Manual do sobrevivente</p>
          <h1>Fica vivo.<br />Fica junto.</h1>
          <p className="hero-lead">
            Coop difícil, uma cidade que piora com o tempo e uma campanha feita para durar meses.
            Aqui, morrer custa caro. Sumir do grupo custa mais.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#primeira-hora">
              Começar pela primeira hora
            </a>
            <a className="button button-ghost" href={steamCollection} target="_blank" rel="noreferrer">
              Abrir coleção Steam
            </a>
          </div>
        </div>
      </header>

      <section className="connection" aria-labelledby="conectar-titulo">
        <div className="connection-copy">
          <p className="micro-label" id="conectar-titulo">Como conectar</p>
          <p>Assine a coleção inteira e espere o Steam terminar antes de abrir o servidor.</p>
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
          <p className="side-note">Para voltar depois de semanas sem jogar, comece pelo índice. O apocalipse não exige leitura linear.</p>
        </aside>

        <main id="conteudo">
          <section className="guide-section" id="primeira-hora">
            <div className="section-number">01</div>
            <p className="kicker">Antes da primeira rua</p>
            <h2>A primeira hora</h2>
            <p className="lead">
              Seu primeiro objetivo não é achar a arma perfeita. É sobreviver o suficiente para se
              localizar, avisar onde nasceu e encontrar gente.
            </p>

            <SectionArt
              src="/assets/vinheta-mochila.webp"
              alt="Mochila aberta com água, comida, tecido e primeiros socorros"
            />

            <div className="critical">
              <div className="critical-tag">Ajuste antes de jogar</div>
              <h3>A tecla K tem dois donos</h3>
              <p>
                <strong>This Is Your Life</strong> abre o diário do sobrevivente. <strong>True Smoking</strong> usa
                outro menu para fumar. O conflito é real e faz uma ação atrapalhar a outra.
              </p>
              <ol>
                <li>Abra <strong>Options</strong> e depois <strong>Key Bindings</strong>.</li>
                <li>Procure <strong>This Is Your Life</strong> e troque a tecla, ou abra <strong>Mod Options</strong>, <strong>True Smoking</strong> e <strong>Smoke</strong>.</li>
                <li>Escolha uma tecla livre e teste os dois menus antes de sair de casa.</li>
              </ol>
            </div>

            <ol className="steps">
              <li><strong>Deixe os mods terminarem.</strong><span>Assine a coleção inteira. Arquivo incompleto causa kick.</span></li>
              <li><strong>Vasculhe a casa inicial.</strong><span>Mochila, água, comida, curativo e uma arma branca já bastam para a primeira saída.</span></li>
              <li><strong>Avise onde nasceu.</strong><span>Combinar a região economiza uma noite inteira de procura.</span></li>
              <li><strong>Prepare o Bound Journal.</strong><span>Ele aparece cedo neste guia porque descobrir sua utilidade depois de morrer é uma aula cara.</span></li>
            </ol>

            <div className="tip">
              <strong>Regra de bolso</strong>
              Quintais, fundos de terreno e cercas baixas oferecem mais rotas que o meio da rua.
              Antes de pular, olhe onde vai cair.
            </div>
          </section>

          <section className="guide-section" id="combate">
            <div className="section-number">02</div>
            <p className="kicker">Espaço antes de coragem</p>
            <h2>Combate e furtividade</h2>
            <p className="lead">
              Um zumbi é um problema. Dois são uma aula. Uma horda é um pedido para sair dali.
            </p>

            <div className="principles">
              <article><span>01</span><h3>Empurre primeiro</h3><p>Abra espaço, derrube e só ataque no chão quando o entorno estiver limpo.</p></article>
              <article><span>02</span><h3>Lute de frente</h3><p>Reposicione antes de bater. Ataque vindo das costas é especialmente perigoso.</p></article>
              <article><span>03</span><h3>Respeite a animação</h3><p>Golpear prende seu movimento por um instante. Esse instante é suficiente para o segundo zumbi chegar.</p></article>
              <article><span>04</span><h3>Saiba encerrar</h3><p>Multi-hit ajuda contra um grupo pequeno. Não transforma multidão em alvo razoável.</p></article>
            </div>

            <h3>Furtividade compra tempo</h3>
            <p>
              Agachar reduz sua presença e escolher a rota evita metade das lutas. Aqui também dá
              para deitar, o que melhora a pontaria. Serve para escolher um tiro, não para abrir um
              concerto de armas no centro da cidade.
            </p>
            <p>
              Barulho atrai problemas muitas vezes com atraso. Você atira, a rua continua quieta e
              parece que deu certo. Dois minutos depois chega a plateia.
            </p>

            <details>
              <summary>O que faço quando atraio gente demais?</summary>
              <div>
                Quebre a linha de visão. Contorne uma casa, passe pelos fundos de um lote e só pule
                uma cerca quando souber que há saída do outro lado. Avise o grupo antes de se separar.
              </div>
            </details>
            <details>
              <summary>Porta trancada é desafio ou aviso?</summary>
              <div>
                Pé-de-cabra abre porta comum, janela e portão de garagem. Lockpick não abre janela,
                e grade metálica de delegacia não cede aos dois. Uma casa com alarme resolve a dúvida
                de outro jeito.
              </div>
            </details>
          </section>

          <section className="guide-section" id="mundo">
            <div className="section-number">03</div>
            <p className="kicker">Sem lua de mel</p>
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
                <h3>A multidão muda de humor</h3>
                <p>
                  A maioria é lenta ou rápida sem correr. Uma pequena chance de sprinter significa
                  que toda aglomeração pode esconder alguém que fecha distância de verdade.
                </p>
              </div>
              <div>
                <h3>Comida é projeto</h3>
                <p>
                  Loot é escasso. Horta, animais e estoque entram no plano cedo, porque planta cresce
                  no ritmo dela e uma despensa vazia não aceita discurso motivacional.
                </p>
              </div>
              <div>
                <h3>Arma não é munição</h3>
                <p>Armas de fogo aparecem com mais facilidade que bala. Encontrar um revólver é uma promessa, não uma solução.</p>
              </div>
              <div>
                <h3>Bandits existem</h3>
                <p>Grupos hostis rondam, mexem em propriedade e gostam do escuro. Aviso visual ajuda somente quem estiver olhando.</p>
              </div>
            </div>

            <div className="deadline">
              <p className="micro-label">O relógio da infraestrutura</p>
              <div><strong>Por volta do dia 15</strong><span>água e energia começam a falhar de forma intermitente</span></div>
              <div><strong>Perto do dia 30</strong><span>o corte permanente chega e improviso deixa de ser plano</span></div>
            </div>
          </section>

          <section className="guide-section" id="diario">
            <div className="section-number">04</div>
            <p className="kicker">A rede de segurança</p>
            <h2>Diário, morte e recomeço</h2>
            <p className="lead">
              O <strong>Bound Journal</strong> preserva parte do aprendizado do personagem. Ele não apaga a
              morte, não devolve seu equipamento e não busca seu corpo por você.
            </p>

            <SectionArt
              src="/assets/vinheta-diario.webp"
              alt="Caderno encadernado à mão com tiras de couro e um lápis"
            />

            <div className="critical journal-critical">
              <div className="critical-tag">Faça cedo e atualize sempre</div>
              <h3>Como usar o Bound Journal</h3>
              <div className="journal-steps">
                <p><strong>1. Fabrique</strong><span>Caderno, cola, três tiras de couro e uma linha. A receita se chama <em>Bind Journal Together</em>.</span></p>
                <p><strong>2. Transcreva</strong><span>Com o item em mãos, use <em>Transcribe Into Journal</em>. Repita depois de ganhar perícias importantes.</span></p>
                <p><strong>3. Recupere</strong><span>Depois de morrer, encontre o diário no corpo anterior ou no lugar onde o guardou e leia com o personagem novo.</span></p>
              </div>
            </div>

            <details>
              <summary>O que o diário não devolve?</summary>
              <div>
                Força, Condicionamento, XP de televisão e vídeo, além dos níveis iniciais dados por
                profissão ou traço. Personagens com Analfabeto não usam o sistema. Ele recupera somente
                o que foi transcrito antes da morte.
              </div>
            </details>
            <details>
              <summary>O diário da tecla K faz a mesma coisa?</summary>
              <div>
                Não. O diário aberto por K registra história, ferimentos e anotações do sobrevivente.
                O Bound Journal é o item físico de recuperação de perícias. São dois cadernos e duas funções.
              </div>
            </details>
          </section>

          <section className="guide-section" id="base">
            <div className="section-number">05</div>
            <p className="kicker">A semana dois começa cedo</p>
            <h2>Base, água, energia e comida</h2>
            <p className="lead">
              A primeira base precisa ser simples de entender, fácil de abandonar numa emergência e
              próxima do trabalho do grupo. Casa bonita sem saída é só uma caixa decorada.
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

            <h3>Transporte é multiplicador</h3>
            <p>
              Carrinho de mão ou de supermercado muda uma mudança de base porque reduz o peso que o
              grupo carrega. Carro bom é raro. Avise antes de pegar um emprestado, porque carro sumido
              gera mais discussão que zumbi.
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
            <div className="section-number">06</div>
            <p className="kicker">Coop exige que o grupo se encontre</p>
            <h2>Facção, safehouse, mapa e convivência</h2>
            <p className="lead">
              O User Panel concentra a parte social. O botão fica na barra ao lado dos itens equipados,
              no canto inferior da tela. É discreto demais para a quantidade de problemas que resolve.
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
              Visite sua base. Depois de seis dias reais sem visita, a reivindicação pode cair. O mapa
              precisa respirar, mas sua cama não precisa virar patrimônio público por distração.
            </div>

            <p>
              Não pegue coisas da base dos outros sem combinar. Avise se levar carro. Fale antes de
              mexer em gerador, plantação ou estoque coletivo. O servidor já é difícil de propósito.
              Dificuldade social extra seria um mod péssimo.
            </p>
            <a className="text-link" href="/regras">Ler as regras completas do servidor</a>
          </section>

          <section className="guide-section" id="duvidas">
            <div className="section-number">07</div>
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
              <p className="micro-label">Uma última coisa</p>
              <p>
                Quase toda morte parece evitável olhando depois. Isso é normal. Recupere o diário,
                encontre o grupo e tente não repetir exatamente a mesma cena amanhã.
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div>
          <a className="brand" href="#topo">Zombas</a>
          <p>Uma campanha cooperativa feita para durar meses, inclusive depois da morte ruim.</p>
        </div>
        <nav aria-label="Links finais">
          <a href="/regras">Regras</a>
          <a href={steamCollection} target="_blank" rel="noreferrer">Coleção Steam</a>
          <a href="#topo">Voltar ao topo</a>
        </nav>
      </footer>
    </>
  );
}
