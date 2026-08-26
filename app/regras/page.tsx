import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regras do servidor",
  description: "Regras de entrada, convivência, PVP, safehouse e administração do Zombas.",
  openGraph: {
    title: "Regras do servidor | Zombas",
    description: "Regras de convivência, PVP, safehouse e administração do servidor Zombas.",
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
          <p>Regras de entrada, convivência, PVP, safehouse e administração.</p>
        </div>
      </header>

      <main className="rules-page" id="regras-conteudo">
        <p className="rules-intro">
          O Zombas é um servidor cooperativo e a campanha foi configurada para durar meses.
          Respeite o tempo, os personagens e os recursos dos outros jogadores.
        </p>

        <section>
          <p className="kicker">01</p>
          <h2>Entrada no servidor</h2>
          <p>
            Você pode assinar a <a href={steamCollection} target="_blank" rel="noreferrer">coleção inteira</a> antes
            de entrar ou deixar o jogo baixar os mods na primeira conexão. O servidor dá kick quando
            algum arquivo obrigatório está incompleto ou desatualizado.
          </p>
          <div className="rule-note"><strong>Senha do servidor</strong><span>Peça no grupo. Não publique em lugar aberto.</span></div>
        </section>

        <section>
          <p className="kicker">02</p>
          <h2>Convivência</h2>
          <ul>
            <li>Não pegue coisas da base dos outros sem combinar.</li>
            <li>Não destrua construção alheia. A marreta funciona apenas dentro da própria safehouse.</li>
            <li>Se pegou algo emprestado, avise. Isso vale especialmente para veículos.</li>
            <li>Combine antes de mexer em gerador, plantação, animais ou estoque coletivo.</li>
            <li>Ajude novatos sem jogar por eles. Descobrir o mundo ainda é parte da campanha.</li>
          </ul>
        </section>

        <section>
          <p className="kicker">03</p>
          <h2>PVP com intenção</h2>
          <p>
            O PVP está ligado com trava de segurança. Um jogador só pode ferir outro quando ao menos
            um dos dois escolheu entrar em combate, condição indicada pela caveira. A caveira indica
            que o modo de combate está ativo.
          </p>
          <p>
            Conflito combinado pode fazer parte da história do grupo. Kill repetido e sem contexto
            será tratado pela administração e pode terminar em ban.
          </p>
        </section>

        <section>
          <p className="kicker">04</p>
          <h2>Base, mapa e sono</h2>
          <p>
            Safehouse pode ser reivindicada depois de um dia sobrevivido, somente em construção
            residencial. Não membros não entram, não saqueiam e não colocam fogo. Sem visita por seis
            dias reais, a reivindicação pode cair.
          </p>
          <p>
            Dormir é necessário. O tempo só acelera quando todos os jogadores online estão dormindo,
            então avise no chat antes de usar a cama.
          </p>
        </section>

        <section>
          <p className="kicker">05</p>
          <h2>O que pode dar ban</h2>
          <ol className="ban-list">
            <li><span>01</span>Roubo sistemático ou destruição de base alheia.</li>
            <li><span>02</span>Kill repetido sem contexto.</li>
            <li><span>03</span>Cheat, exploit ou edição de arquivo para ganhar vantagem.</li>
            <li><span>04</span>Passar a senha para fora do grupo sem combinar.</li>
            <li><span>05</span>Racismo, homofobia e semelhantes. Aqui não existe conversa antes.</li>
          </ol>
        </section>

        <section>
          <p className="kicker">06</p>
          <h2>O que o admin faz</h2>
          <p>
            Administração não distribui item, experiência ou teleporte por pedido. Ela corrige
            defeito real, como item perdido em crash ou personagem preso na geometria, e resolve
            problemas técnicos do servidor.
          </p>
          <p>Quando algo der errado, fale no grupo e explique o que aconteceu antes de tentar resolver por conta própria.</p>
        </section>

        <div className="rules-cta">
          <p>Consulte também o manual e a lista de mods.</p>
          <div className="rules-actions">
            <a className="button button-primary" href="/">Manual</a>
            <a className="button button-ghost" href="/mods">Mods atuais</a>
          </div>
        </div>
      </main>

      <footer className="rules-footer">
        <div><a className="brand" href="/">Zombas</a><p>Servidor cooperativo de Project Zomboid.</p></div>
        <nav aria-label="Links das regras"><a href="/">Manual</a><a href="/mods">Mods atuais</a><a href={steamCollection} target="_blank" rel="noreferrer">Coleção Steam</a></nav>
      </footer>
    </>
  );
}
