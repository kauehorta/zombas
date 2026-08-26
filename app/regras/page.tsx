import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regras do servidor",
  description: "As regras do Zombas para convivência, PVP, safehouses e suporte da administração.",
  openGraph: {
    title: "Regras do servidor | Zombas",
    description: "Poucas regras, todas importantes: convivência, PVP, safehouses e administração no Zombas.",
    url: "/regras",
  },
};

const steamCollection = "https://steamcommunity.com/sharedfiles/filedetails/?id=3790189787";

export default function RulesPage() {
  return (
    <>
      <a className="skip-link" href="#regras-conteudo">Pular para as regras</a>

      <header className="rules-hero">
        <div className="rules-hero-inner">
          <a className="back-link" href="/">Voltar ao manual</a>
          <p className="eyebrow">Zombas</p>
          <h1>Regras</h1>
          <p>Poucas regras, todas importantes. Leia uma vez e jogue tranquilo.</p>
        </div>
      </header>

      <main className="rules-page" id="regras-conteudo">
        <p className="rules-intro">
          O Zombas é cooperativo e a campanha foi feita para durar meses. O loot é virtual; o tempo
          dos outros não. Respeite personagens, bases, recursos e combinações do grupo.
        </p>

        <section>
          <p className="kicker">01</p>
          <h2>Entrada no servidor</h2>
          <p>
            Assine a <a href={steamCollection} target="_blank" rel="noreferrer">coleção inteira</a> antes
            de entrar ou deixe o jogo baixar os mods na primeira conexão. O primeiro download pode
            demorar. O servidor dá kick quando algum arquivo obrigatório está incompleto ou desatualizado.
          </p>
          <div className="rule-note"><strong>Senha do servidor</strong><span>Peça no grupo. Não publique em lugar aberto.</span></div>
        </section>

        <section>
          <p className="kicker">02</p>
          <h2>Convivência</h2>
          <ul>
            <li>Não pegue nada da base dos outros sem combinar. “Achei que podia” não é recibo.</li>
            <li>Não destrua construção alheia. A marreta funciona apenas dentro da própria safehouse.</li>
            <li>Pegou algo emprestado? Avise e devolva. Isso vale especialmente para veículos.</li>
            <li>Combine antes de mexer em gerador, plantação, animais ou estoque coletivo.</li>
            <li>Ajude novatos sem jogar por eles. Descobrir o mundo ainda faz parte da campanha.</li>
          </ul>
        </section>

        <section>
          <p className="kicker">03</p>
          <h2>PVP com intenção</h2>
          <p>
            O PVP está ligado com trava de segurança. Um jogador só pode ferir outro quando ao menos
            um dos dois escolheu entrar em combate. A caveira mostra que o modo está ativo; não é
            decoração de perfil.
          </p>
          <p>
            Conflito combinado pode fazer parte da história do grupo. Kill repetido e sem contexto
            vira assunto da administração e pode terminar em ban.
          </p>
        </section>

        <section>
          <p className="kicker">04</p>
          <h2>Base, mapa e sono</h2>
          <p>
            Você pode reivindicar uma safehouse depois de sobreviver um dia, mas apenas em construção
            residencial. Não membros não entram, não saqueiam e não colocam fogo. Depois de seis dias
            reais sem visita, a reivindicação pode cair.
          </p>
          <p>
            Dormir é necessário. Cada pessoa pode deitar no próprio horário, mas o relógio só acelera
            quando todos os jogadores online estão dormindo. Avise no chat antes de apagar.
          </p>
        </section>

        <section>
          <p className="kicker">05</p>
          <h2>O que pode dar ban</h2>
          <p>A lista é curta e não tem letra miúda.</p>
          <ol className="ban-list">
            <li><span>01</span>Roubo sistemático ou destruição de base alheia.</li>
            <li><span>02</span>Kill repetido sem contexto.</li>
            <li><span>03</span>Cheat, exploit ou edição de arquivo para ganhar vantagem.</li>
            <li><span>04</span>Passar a senha para fora do grupo sem combinar.</li>
            <li><span>05</span>Racismo, homofobia e semelhantes. Nesse caso, não existe aviso prévio.</li>
          </ol>
        </section>

        <section>
          <p className="kicker">06</p>
          <h2>O que o admin faz</h2>
          <p>
            A administração não funciona como delivery de item, XP ou teleporte. Ela corrige defeitos
            reais, como item perdido em crash ou personagem preso na geometria, e resolve problemas
            técnicos do servidor.
          </p>
          <p>Quando algo der errado, fale no grupo e conte o que aconteceu, quando aconteceu e o que você já tentou.</p>
        </section>

        <div className="rules-cta">
          <p>Ficou na dúvida sobre alguma mecânica? O manual e a lista de mods completam o serviço.</p>
          <div className="rules-actions">
            <a className="button button-primary" href="/">Manual</a>
            <a className="button button-ghost" href="/mods">Mods atuais</a>
          </div>
        </div>
      </main>

      <footer className="rules-footer">
        <div><a className="brand" href="/">Zombas</a><p>Cooperação primeiro. Drama só dentro do jogo.</p></div>
        <nav aria-label="Links das regras"><a href="/">Manual</a><a href="/mods">Mods atuais</a><a href={steamCollection} target="_blank" rel="noreferrer">Coleção Steam</a></nav>
      </footer>
    </>
  );
}

