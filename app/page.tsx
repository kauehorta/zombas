const steamCollection = "https://steamcommunity.com/sharedfiles/filedetails/?id=3790189787";
const donateUrl = "https://nubank.com.br/cobrar/dadmh/6a8f4bb1-4f03-4a4a-87e0-4e86e4a5d3fb";
const whatsappUrl = "https://chat.whatsapp.com/Ep63691t14H41ubX6nYDOn?s=cl&p=a&ilr=0";

function GuideIcon({ type }: { type: "novato" | "veterano" }) {
  if (type === "novato") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8V6a5 5 0 0 1 10 0v2" />
        <path d="M5 8h14l1 12H4L5 8Z" />
        <path d="M8 12h8M9 16h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 11 9-7 9 7v9H3v-9Z" />
      <path d="M9 20v-6h6v6M7 11h.01M17 11h.01" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
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
            <a className="rules-link" href="/novatos">Guia do novato</a>
            <a className="rules-link" href="/veteranos">Guia do veterano</a>
            <a className="rules-link" href="/regras">Regras</a>
            <a className="rules-link" href="/mods">Mods</a>
          </nav>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Guias para o Zombas</p>
          <h1>Fica vivo.<br />Fica junto.</h1>
          <p className="hero-lead">
            A casa está do jeito que quem morava nela deixou, meio arrumada, meio não. Isso não é
            metáfora, é só como Kentucky recebe todo mundo aqui. Escolha por onde começar.
            — Residente Ivo
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/novatos">
              Acabei de nascer
            </a>
            <a className="button button-ghost" href="/veteranos">
              Já sobrevivi um tempo
            </a>
          </div>
        </div>
      </header>

      <section className="connection" aria-labelledby="conectar-titulo">
        <div className="connection-copy">
          <p className="micro-label" id="conectar-titulo">Como conectar</p>
          <p>
            Assine a coleção antes de entrar ou deixe o jogo baixar os mods na primeira conexão.
            Na primeira conexão a tela pode ficar parada por alguns minutos enquanto os mods
            baixam. Não feche o jogo nessa hora. Dúvida ou problema pra entrar, pergunta no{" "}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">grupo do WhatsApp</a>. É lá que
            o grupo se fala, e onde o Residente Ivo de fato responde.
          </p>
          <a className="button button-ghost" href={steamCollection} target="_blank" rel="noreferrer">
            Coleção Steam
          </a>
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

      <main className="portal-content" id="conteudo">
        <div className="vehicle-grid guide-grid" aria-label="Escolha seu guia">
          <article className="guide-card guide-card-novato">
            <img className="guide-card-art" src="/assets/vinheta-mochila.webp" alt="" aria-hidden="true" />
            <div className="guide-card-top">
              <span className="guide-symbol"><GuideIcon type="novato" /></span>
              <span>01</span>
            </div>
            <h3>Guia do novato</h3>
            <p>
              Primeira hora, habilidades, combate, o diário e a base: o essencial pra sobreviver
              sem nunca ter jogado Project Zomboid.
            </p>
            <a className="text-link" href="/novatos">Começar por aqui</a>
          </article>
          <article className="guide-card guide-card-veterano">
            <img className="guide-card-art" src="/assets/vinheta-base.webp" alt="" aria-hidden="true" />
            <div className="guide-card-top">
              <span className="guide-symbol"><GuideIcon type="veterano" /></span>
              <span>02</span>
            </div>
            <h3>Guia do veterano</h3>
            <p>
              Defesa de base em grupo, logística de longo prazo, carpintaria, elétrica, encanamento
              e frota: o que a maioria dos jogadores casuais nunca chega a precisar.
            </p>
            <a className="text-link" href="/veteranos">Ver sistemas de longo prazo</a>
          </article>
        </div>

        <nav className="mods-index" aria-label="Outras páginas">
          <a href="/regras">Regras do servidor</a>
          <a href="/mods">Mods atuais</a>
        </nav>

        <div className="tip">
          <strong>Isso aqui roda com café, energia e Pix</strong>
          O Zombas não paga sozinho: servidor, domínio e o tempo de manter os mods em dia saem do
          bolso do Residente Ivo. Se o guia te poupou uma morte boba, um Pix de qualquer valor ajuda
          a manter a luz acesa aqui e, sinceramente, também paga a mão de obra escrava dos nossos
          agentes zumbis de IA que escrevem esse site às 3 da manhã sem reclamar (muito).
          <p>
            <a className="button button-primary" href={donateUrl} target="_blank" rel="noreferrer">
              Apoiar o servidor
            </a>
          </p>
        </div>
      </main>

      <footer>
        <div>
          <a className="brand" href="#topo">Zombas</a>
          <p>Menos tentativa e erro. A mesma quantidade de zumbis.</p>
        </div>
        <nav aria-label="Links finais">
          <a href="/novatos">Guia do novato</a>
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
