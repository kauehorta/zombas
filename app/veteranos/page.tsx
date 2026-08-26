import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia do veterano",
  description: "Defesa de base em grupo, logística de longo prazo, carpintaria, elétrica, encanamento e frota: o que a maioria dos jogadores nunca chega a precisar aprender.",
  openGraph: {
    title: "Guia do veterano | Zombas",
    description: "Defesa de base em grupo, logística de longo prazo, carpintaria, elétrica, encanamento e frota: o que a maioria dos jogadores nunca chega a precisar aprender.",
    url: "/veteranos",
  },
};

const donateUrl = "https://nubank.com.br/cobrar/dadmh/6a8f4bb1-4f03-4a4a-87e0-4e86e4a5d3fb";
const whatsappUrl = "https://chat.whatsapp.com/Ep63691t14H41ubX6nYDOn?s=cl&p=a&ilr=0";
const steamCollection = "https://steamcommunity.com/sharedfiles/filedetails/?id=3790189787";

const anchors = [
  ["#mundo", "A linha do tempo"],
  ["#combate", "Defesa em grupo"],
  ["#diario", "O diário, revisitado"],
  ["#base", "Sistemas de longo prazo"],
  ["#veiculos", "Frota"],
  ["#grupo", "Coesão do grupo"],
  ["#duvidas", "Dúvidas de veterano"],
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
      <a href="/novatos">
        <span>08</span>
        Guia do novato
      </a>
      <a href="/regras">
        <span>09</span>
        Regras do servidor
      </a>
      <a href="/mods">
        <span>10</span>
        Mods atuais
      </a>
    </>
  );

  if (mobile) {
    return (
      <details className="mobile-nav">
        <summary>Índice do guia</summary>
        <nav aria-label="Índice móvel do guia do veterano">{links}</nav>
      </details>
    );
  }

  return (
    <nav className="desktop-nav" aria-label="Índice do guia do veterano">
      <p>Índice</p>
      {links}
    </nav>
  );
}

export default function VeteranosPage() {
  return (
    <>
      <a className="skip-link" href="#veteranos-conteudo">Pular para o guia</a>

      <header className="rules-hero">
        <div className="rules-hero-inner">
          <nav className="back-links" aria-label="Links do guia">
            <a className="back-link" href="/">Voltar ao início</a>
            <a className="back-link" href={whatsappUrl} target="_blank" rel="noreferrer">Grupo do WhatsApp</a>
            <a className="back-link" href={donateUrl} target="_blank" rel="noreferrer">Apoiar o servidor</a>
          </nav>
          <p className="eyebrow">Zombas</p>
          <h1>Guia do veterano</h1>
          <p>
            Chega uma hora em que a fome já não é o problema. Você aprendeu a ignorar o rangido da
            escada, o silêncio errado do quarteirão vizinho, a luz que fica acesa de propósito numa
            casa que devia estar morta. O que separa quem chega até aqui de quem só sobrevive é que
            você parou de reagir ao dia e começou a planejar a semana inteira. Isso aqui é sobre o que
            vem depois de aprender a não morrer. — Residente Ivo
          </p>
        </div>
      </header>

      <GuideNavigation mobile />

      <div className="page-shell guide-page-shell">
        <aside>
          <GuideNavigation />
        </aside>

      <main className="rules-page guide-page" id="veteranos-conteudo">
        <section id="mundo">
          <p className="kicker">O mapa não fica mais simpático</p>
          <h2>A linha do tempo completa</h2>
          <p>
            A cidade já começa perigosa e a população de zumbis cresce até o pico do dia 35. Uma rua
            limpa na semana passada não ganhou escritura de zona segura. O relógio que importa de
            verdade aqui não é o do dia, é o da rede pública.
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
                que toda aglomeração pode esconder alguém que fecha distância de verdade, e depois
                de meses de rotina é exatamente esse 1% que pega gente de guarda baixa.
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
              <h3>Bandits existem. Não dependa de uma única defesa</h3>
              <p>
                O mod adiciona sobreviventes, inclusive grupos hostis. As regras de safehouse protegem
                contra outros jogadores, mas não há validação em jogo suficiente para prometer a mesma
                proteção contra NPCs. Guarde os itens mais importantes em mais de um lugar.
              </p>
            </div>
          </div>

          <div className="deadline">
            <p className="micro-label">Água e energia</p>
            <div><strong>Por volta do dia 15</strong><span>água e energia começam a falhar de forma intermitente</span></div>
            <div><strong>Perto do dia 30</strong><span>acontece o corte permanente de água e energia</span></div>
          </div>
        </section>

        <section id="combate">
          <p className="kicker">Quando tem mais gente do que você consegue empurrar</p>
          <h2>Defesa em grupo e o custo de perder um personagem</h2>
          <p>
            Os fundamentos de 1 contra 1 (empurrar, reposicionar, respeitar a animação) não mudam
            aqui. O que muda é a matemática: um personagem investido carrega meses de skill, e um
            grupo grande de zumbis não se resolve com a mesma paciência que resolve três.
          </p>

          <div className="two-column-copy">
            <div>
              <h3>Escolha o terreno antes da luta chegar</h3>
              <p>
                Um corredor estreito ou uma porta única transforma "muita gente" em "um de cada vez".
                Se a base tem mais de uma entrada vulnerável, alguém cobre cada uma. Lutar de costas
                pra parede é diferente de lutar cercado.
              </p>
            </div>
            <div>
              <h3>Decida o que vale o risco</h3>
              <p>
                Um personagem com centenas de horas de skill e um Bound Journal desatualizado tem mais
                a perder numa luta duvidosa do que alguém recém-chegado. Recuar não é covardia quando
                o que está em jogo é metade do XP elegível, não o personagem inteiro. Ver a seção do{" "}
                <a className="text-link" href="#diario">diário</a> abaixo.
              </p>
            </div>
          </div>

          <div className="tip">
            <strong>Coordenação vale mais que força bruta</strong>
            Combinar quem empurra, quem cobre a retaguarda e quem sai pra desviar atenção resolve
            hordas que nenhum personagem sozinho resolveria. Grupo sem combinação prévia é só um
            monte de gente correndo na mesma direção que os zumbis.
          </div>

          <p>
            Os fundamentos completos (empurrar, ler animação, furtividade, o que abre porta trancada)
            estão no <a className="text-link" href="/novatos#combate">guia do novato</a>.
          </p>
        </section>

        <section id="diario">
          <p className="kicker">A aposta fica mais cara com o tempo</p>
          <h2>O diário, revisitado</h2>
          <p>
            O Bound Journal recupera 50% do XP elegível gravado na última transcrição. Para um
            personagem novo isso é uma rede de segurança. Para alguém com centenas de horas
            investidas, é a diferença entre recomeçar do zero e recomeçar na metade. 50% de uma
            skill em nível 9 é muito mais XP do que 50% de uma skill em nível 3.
          </p>

          <div className="tip">
            <strong>Transcreva depois de cada marco, não depois de cada morte</strong>
            Um diário desatualizado recupera o personagem que você era há três semanas, não o de
            ontem. Quanto mais alto o nível, mais caro fica adiar a próxima transcrição.
          </div>

          <p>
            A receita completa (fabricar, transcrever, recuperar, e o que fica de fora) está no{" "}
            <a className="text-link" href="/novatos#diario">guia do novato</a>.
          </p>
        </section>

        <section id="base">
          <p className="kicker">O que a maioria dos jogadores nunca chega a precisar</p>
          <h2>Sistemas de longo prazo: carpintaria, elétrica, encanamento e comida</h2>
          <p>
            Sobrevivência de curto prazo é sobre não morrer amanhã. Isso aqui é sobre o que sustenta
            uma casa e um grupo depois que a rede pública já era e ninguém mais está contando os dias
            em voz alta.
          </p>

          <div className="two-column-copy">
            <div>
              <h3>Carpintaria constrói a base de verdade</h3>
              <p>
                Paredes, escadas, móveis e coletores de chuva ficam bloqueados atrás do nível de
                carpintaria. Segundo a wiki vanilla, o jeito mais eficiente de subir a skill não é
                construir e demolir a mesma parede. É ler os livros na faixa certa e só construir o
                que o grupo vai realmente usar: coletor, caixote, parede de emergência.
              </p>
            </div>
            <div>
              <h3>Elétrica exige conhecimento antes do gerador</h3>
              <p>
                Segundo a wiki, ligar um gerador sem nível 3 de elétrica, sem ler o manual "How to Use
                Generators" ou sem começar como Eletricista/Engenheiro arrisca incêndio e desperdiça
                combustível. XP de elétrica vem principalmente de desmontar rádio, TV e sucata
                eletrônica com chave de fenda. Dá pra fiar luminárias também, pra esticar o alcance do
                gerador pela casa inteira.
              </p>
            </div>
          </div>

          <div className="critical">
            <div className="critical-tag">Verificado no mod, não é comportamento vanilla</div>
            <h3>LG Extended Plumbing muda a regra do encanamento inteira</h3>
            <p>
              No jogo base, um coletor de chuva só abastece uma pia específica, um andar acima e
              dentro de uma área de 3x3. No Zombas isso não vale mais: encanar um coletor uma vez
              alimenta <strong>toda pia da construção</strong>, não só a de cima. Um barril colocado no
              telhado abastece todo andar abaixo dele de graça, e um gerador na mesma posição do barril
              empurra a água pra cima também. Clique com o botão direito numa torneira pra escolher qual
              líquido puxar dali: dá pra encanar uísque, cerveja ou leite em vez de água, se a fonte
              existir. É seguro adicionar ou tirar esse mod no meio do save.
            </p>
          </div>

          <div className="two-column-copy">
            <div>
              <h3>Comida deixa de ser sorte de loot</h3>
              <p>
                Horta pede terra revirada com enxada, sementes da estação certa (plantar repolho no
                inverno desperdiça semente, segundo a wiki), rega e capina regulares. Animais exigem
                cerca fechada <em>antes</em> da compra ou captura: um portão aberto apaga o
                investimento inteiro. Some a isso estoque de ração protegido e distância do lugar onde
                o grupo dorme. Galinha dá ovo renovável com pouco espaço; gado rende mais caloria por
                cabeça, mas come mais e exige cerca maior.
              </p>
            </div>
            <div>
              <h3>Livestock Panel Plus só organiza, não muda a regra</h3>
              <p>
                O painel de zona de animais vira uma tabela ordenável com a mesma informação que o
                jogo base já mostra. Útil quando o rebanho passa de meia dúzia de cabeças; não é um
                sistema novo de criação.
              </p>
            </div>
          </div>

          <div className="checklist">
            <h3>Sustentando a base depois do dia 30</h3>
            <ul>
              <li>Mais de um cache de itens essenciais, em mais de uma construção. Uma base só é um único ponto de falha.</li>
              <li>Combustível de gerador como orçamento contínuo, não como compra única. Ver a seção de frota abaixo.</li>
              <li>Um responsável fixo por horta e animais evita que "todo mundo cuida" vire "ninguém cuida".</li>
              <li>Revisitar safehouses secundárias antes dos seis dias reais de prazo. Ver a seção de coesão do grupo.</li>
            </ul>
          </div>
        </section>

        <section id="veiculos">
          <p className="kicker">Manter uma frota, não só um carro</p>
          <h2>Logística de combustível e manutenção a longo prazo</h2>
          <p>
            Os fundamentos (entrar, checar o painel, inspecionar peças) não mudam. O que muda é a
            escala: um grupo estabelecido depende de mais de um veículo funcionando ao mesmo tempo, e
            gasolina de posto é um recurso que só diminui.
          </p>

          <div className="two-column-copy">
            <div>
              <h3>Peachey&apos;s Biofuel é a resposta de longo prazo</h3>
              <p>
                Produzir e refinar etanol de milho monta uma cadeia própria de combustível, independente
                de quantos postos já secaram no mapa. Exige planejamento de produção: não é solução
                pra quem precisa de gasolina hoje, é solução pra quem não quer mais depender de sorte.
              </p>
            </div>
            <div>
              <h3>Frota velha pede triagem</h3>
              <p>
                Nem todo veículo recuperado vale a peça gasta consertando. Vehicle Repair Overhaul e
                Vehicle Salvage Overhaul dão as duas pontas dessa decisão: reparar a fundo ou desmontar
                por material. Decidir isso cedo evita acumular ferro-velho decorativo na garagem.
              </p>
            </div>
          </div>

          <p>
            O básico de inspeção, chave e combustível está no{" "}
            <a className="text-link" href="/novatos#veiculos">guia do novato</a>.
          </p>
        </section>

        <section id="grupo">
          <p className="kicker">O que muda quando o grupo cresce</p>
          <h2>Coesão em escala</h2>
          <p>
            Facção e safehouse funcionam igual com duas pessoas ou com oito. O que muda é o custo de
            deixar as coisas soltas.
          </p>

          <div className="two-column-copy">
            <div>
              <h3>O prazo de seis dias vira um risco real</h3>
              <p>
                Num grupo grande, é fácil presumir que "alguém" está visitando cada safehouse. Ninguém
                está. Defina explicitamente quem revisita qual base, ou a reivindicação cai sem
                ninguém perceber até já ter perdido a proteção.
              </p>
            </div>
            <div>
              <h3>Dormir em grupo grande pede combinação de verdade</h3>
              <p>
                O salto de tempo da noite inteira só acontece com todo mundo online dormindo ao mesmo
                tempo, e quanto mais gente, mais difícil alinhar os horários. Cochilo solo com o True
                Sleep continua valendo a pena; só não espere a noite inteira de graça sem avisar todo
                mundo antes.
              </p>
            </div>
          </div>

          <div className="tip">
            <strong>PVP fica mais caro quando você tem mais a perder</strong>
            A trava de segurança não muda, mas o cálculo muda: um personagem com base montada,
            skills altas e um diário desatualizado tem mais em jogo numa decisão de ativar o modo PVP
            do que alguém em dia um. As regras completas de PVP e convivência estão em{" "}
            <a className="text-link" href="/regras">Regras</a>.
          </div>

          <p>
            O básico de User Panel, facção e mapa está no{" "}
            <a className="text-link" href="/novatos#grupo">guia do novato</a>.
          </p>
        </section>

        <section id="duvidas">
          <p className="kicker">Perguntas de quem já não é novato</p>
          <h2>Dúvidas de veterano</h2>

          <details>
            <summary>Vale a pena re-rolar o corte de água e energia?</summary>
            <div>
              Não do jeito que você imagina. ImmersiveBlackouts já rolou os dias de corte permanente
              deste mundo e travou o resultado. Mudar as configurações agora só muda quando a
              intermitência <em>começa</em> a aparecer, não quando a rede cai de vez. Reforçar
              a captação de água independe dessa decisão de qualquer forma.
            </div>
          </details>
          <details>
            <summary>Perdi um personagem de nível alto. O que faço primeiro?</summary>
            <div>
              Recupere o Bound Journal antes de mais nada. Ele é o único elo entre quem você era e
              quem você vai ser de novo. Depois, avise o grupo: uma base sem dono temporário é uma
              base que outro jogador pode presumir abandonada.
            </div>
          </details>
          <details>
            <summary>Faz sentido consolidar várias safehouses em uma só?</summary>
            <div>
              Depende do que você está otimizando. Uma base única é mais fácil de defender e visitar;
              várias bases espalham o risco de perder tudo num único incêndio, invasão ou corte de
              rota. Grupos grandes tendem a se dar melhor com pelo menos um cache redundante fora da
              base principal.
            </div>
          </details>
          <details>
            <summary>O jogo mudou e o guia ainda não fala disso. E agora?</summary>
            <div>
              Fala no <a href={whatsappUrl} target="_blank" rel="noreferrer">grupo do WhatsApp</a>.
              Build 42 ainda muda entre versões, e às vezes o guia demora um pouco pra alcançar. O
              Residente Ivo aparece de vez em quando pra confirmar o que já foi verificado e o que
              ainda é só rumor.
            </div>
          </details>

          <div className="closing-note">
            <p className="micro-label">Sobre continuar</p>
            <p>
              Ninguém sobrevive Kentucky sozinho por muito tempo. Quem tenta geralmente vira
              história contada por outra pessoa. O que separa uma campanha que dura meses de uma que
              termina num dia ruim não é sorte. É ter combinado, com antecedência, quem cuida do quê.
              — Residente Ivo
            </p>
          </div>
        </section>

        <div className="rules-cta">
          <p>Alguém novo chegando? Manda pro começo antes de jogar na fogueira.</p>
          <div className="rules-actions">
            <a className="button button-primary" href="/novatos">Guia do novato</a>
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
        <nav aria-label="Links do guia do veterano">
          <a href="/">Início</a>
          <a href="/novatos">Guia do novato</a>
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
