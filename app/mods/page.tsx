import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mods atuais",
  description: "Lista dos 91 itens da Workshop carregados no servidor Zombas.",
  openGraph: {
    title: "Mods atuais | Zombas",
    description: "Lista dos 91 itens da Workshop carregados no servidor Zombas.",
    url: "/mods",
  },
};

const collectionUrl = "https://steamcommunity.com/sharedfiles/filedetails/?id=3790189787";

const categories = [
  ["gameplay", "Sistemas e sobrevivência"],
  ["interface", "Interface e qualidade de vida"],
  ["vehicles", "Veículos e transporte"],
  ["content", "Conteúdo, mundo e visual"],
  ["support", "Bibliotecas e administração"],
] as const;

const mods = [
  ["3540903327", "Pack Mule", "Ajusta o manuseio de equipamentos e opções relacionadas à capacidade de carga.", "gameplay"],
  ["3077900375", "Mod Update and Alert System", "Infraestrutura usada por outros mods para exibir avisos e informações de atualização.", "support"],
  ["3631989559", "'69 Dodge Charger", "Adiciona o Dodge Charger 1969 e suas peças ao mundo.", "vehicles"],
  ["3756938756", "'69 Ford Mustang", "Adiciona versões do Ford Mustang 1969.", "vehicles"],
  ["3766571591", "'70 Chevrolet Chevelle / El Camino", "Adiciona o Chevrolet Chevelle e o El Camino 1970.", "vehicles"],
  ["3253385114", "'81 DeLorean DMC-12", "Adiciona o DeLorean comum e a variante inspirada em máquina do tempo.", "vehicles"],
  ["2335368829", "Authentic Z", "Aumenta a variedade de roupas e aparências dos zumbis.", "content"],
  ["3268487204", "Bandits NPC", "Adiciona sobreviventes controlados pelo jogo, incluindo grupos hostis.", "gameplay"],
  ["3469292499", "Bandits Creator", "Extensão usada para criar e personalizar personagens do sistema Bandits.", "gameplay"],
  ["2313387159", "Better Sorting", "Melhora nomes de categorias e a organização dos itens no inventário.", "interface"],
  ["3749026793", "Carry Visible Items In Hands", "Mostra nas mãos vários objetos grandes que normalmente ficariam invisíveis.", "interface"],
  ["3461263912", "Clean HotBar", "Deixa a barra de atalhos e os indicadores dos itens equipados mais claros.", "interface"],
  ["3437629766", "CleanUI", "Reorganiza as janelas de inventário e saque.", "interface"],
  ["3750253491", "Common Sense", "Adiciona interações práticas com portas, recipientes e ferramentas.", "gameplay"],
  ["3725497089", "Computer Mod", "Transforma computadores do mapa em objetos interativos.", "content"],
  ["3682936016", "Equipment UI", "Exibe equipamentos e slots do personagem em um painel próprio.", "interface"],
  ["2896041179", "errorMagnifier", "Mostra erros de mods de forma mais legível para diagnóstico.", "support"],
  ["3322066592", "Every Missing Vanilla Food Static Model", "Adiciona modelos visuais que faltavam em alimentos do jogo base.", "content"],
  ["3119788162", "Every Texture Optimized", "Otimiza texturas para reduzir uso de memória e melhorar desempenho.", "content"],
  ["3058279917", "Game Night", "Permite jogar cartas e jogos de tabuleiro dentro do servidor.", "content"],
  ["3722134990", "Guns of Marz", "Adiciona armas de fogo, acessórios e conteúdo relacionado.", "content"],
  ["3722064198", "Gunworks Framework", "Base técnica necessária para Guns of Marz e outros mods de armas.", "support"],
  ["3342191739", "Gyde's Trait Magazines", "Adiciona revistas que explicam ou dão acesso a determinados traços.", "gameplay"],
  ["2544353492", "Has Been Read", "Marca livros e mídias como não lidos, parciais ou concluídos.", "interface"],
  ["3496924086", "Home Inventory", "Ajuda a consultar o que já está guardado nos recipientes da base.", "interface"],
  ["3610677934", "Hot Brass", "Fornece o sistema visual de ejeção de estojos usado por armas compatíveis.", "content"],
  ["3607686447", "Immersive Blackouts", "Cria quedas intermitentes de energia antes do corte definitivo.", "gameplay"],
  ["3599665197", "Immersive Water Shutoff", "Torna o corte de água gradual em vez de instantâneo.", "gameplay"],
  ["3522680786", "Interactive Tailoring", "Adiciona um minigame ao trabalho de costura e concede XP pela atividade.", "gameplay"],
  ["3414697768", "Jigga's Green Fire: Reborn", "Adiciona cultivo, processamento e consumo de cannabis.", "content"],
  ["2553809727", "KillCount", "Detalha eliminações por arma e categoria no painel do personagem.", "interface"],
  ["3531611692", "Lethal Stealth", "Adiciona posturas táticas, incluindo opções para atirar deitado.", "gameplay"],
  ["3779561845", "LG Extended Plumbing", "Amplia o alcance e as opções de conexão entre pias e reservatórios.", "gameplay"],
  ["3710913197", "Mini Health Plus", "Exibe um resumo compacto e configurável da saúde do personagem.", "interface"],
  ["3396446795", "Moodle Framework", "Biblioteca compartilhada para mods que criam novos moodles.", "support"],
  ["3520758551", "More Car Features + Spawn Zones Expansion", "Amplia recursos, customização e zonas de aparecimento de veículos.", "vehicles"],
  ["3404956403", "N&C's Narcotics", "Adiciona substâncias, efeitos e sistemas relacionados a narcóticos.", "content"],
  ["3536052310", "Neat Building", "Substitui o menu de construção por uma interface mais organizada.", "interface"],
  ["3502080466", "Neat Crafting", "Substitui o menu de fabricação por uma interface mais compacta.", "interface"],
  ["3783535220", "Neat Lockpicking", "Adiciona minigames para abrir portas, janelas e veículos trancados.", "gameplay"],
  ["3723726293", "Neat Rocco's UI", "Redesenha alguns menus do jogo para melhorar leitura e navegação.", "interface"],
  ["3508537032", "NeatUI Framework", "Biblioteca de interface usada pelos mods da família Neat.", "support"],
  ["3776262249", "Ping Items! Friends!", "Permite marcar itens, perigos e direções para outros jogadores.", "interface"],
  ["3490188370", "Project Cook", "Adiciona um painel para montar receitas com ingredientes próximos.", "gameplay"],
  ["3763470184", "Propane Exchange Cabinets", "Adiciona armários de troca de botijões em postos e lojas.", "content"],
  ["2847184718", "Proximity Inventory", "Reúne itens e recipientes próximos em uma visão de saque.", "interface"],
  ["2956146279", "Rain Cleans Blood", "Faz chuva e neve removerem gradualmente sangue do ambiente.", "content"],
  ["3635591071", "Realistic Dashboard & Gauges", "Adiciona medidores e luzes funcionais ao painel dos veículos.", "vehicles"],
  ["2142622992", "Repair Any Clothes", "Permite consertar mais tipos de roupa e equipamento de proteção.", "gameplay"],
  ["3651954650", "SaucedCarts", "Adiciona carrinhos empurráveis para transportar carga.", "vehicles"],
  ["3399320470", "Serving Plates", "Permite servir porções de panelas e frigideiras em pratos.", "gameplay"],
  ["2815560151", "Share Annotations", "Permite compartilhar anotações do mapa por meio de papéis.", "interface"],
  ["2503622437", "Skill Recovery Journal", "Adiciona o Bound Journal para registrar e recuperar parte da progressão.", "gameplay"],
  ["3378285185", "Starlit Library", "Biblioteca exigida por outros mods; não adiciona conteúdo sozinha.", "support"],
  ["3389605231", "TchernoLib", "Biblioteca com funções reutilizadas por outros mods.", "support"],
  ["3171167894", "that DAMN Library", "Framework necessário para veículos e sistemas produzidos por KI5.", "support"],
  ["3580276809", "The Only Cure", "Permite amputação como tentativa de impedir o avanço de uma mordida.", "gameplay"],
  ["3470659758", "The Shortcut", "Cria atalhos para itens, receitas e projetos de construção.", "interface"],
  ["2769706949", "Tidy Up Meister", "Devolve ferramentas e recipientes ao lugar após várias ações.", "interface"],
  ["3682045254", "Unified Carry Weight Framework", "Evita conflitos entre mods que alteram capacidade de carga.", "support"],
  ["2914075159", "Evolving Traits World", "Permite ganhar ou perder traços conforme hábitos e progresso do personagem.", "gameplay"],
  ["3423984426", "True Smoking", "Transforma fumar em uma ação contínua com cigarro aceso e tragos.", "gameplay"],
  ["3480305875", "Quality of Life Modpack", "Reúne pequenos ajustes de interface e conveniência.", "interface"],
  ["3421271152", "Vanilla Clothing Expansion", "Adiciona variações de cor e peças de roupa compatíveis com o estilo original.", "content"],
  ["3577903007", "Vanilla Foods Expanded", "Adiciona alimentos, receitas e combinações culinárias.", "content"],
  ["2757712197", "Vehicle Repair Overhaul", "Aprofunda reparos e permite desmontar veículos danificados por materiais.", "vehicles"],
  ["3734168173", "STABLE Loot Fix", "Corrige locais que deveriam gerar loot mas estavam usando definições incompletas.", "content"],
  ["3739168410", "Obvious Skill Tapes", "Destaca em verde fitas VHS que ensinam skills ou receitas.", "interface"],
  ["3783399153", "Peachey's Biofuel", "Permite produzir etanol de milho e refiná-lo como combustível.", "gameplay"],
  ["3638469608", "Read Faster When Sitting", "Reduz o tempo de leitura quando o personagem está sentado.", "gameplay"],
  ["3634569678", "Better Safehouse", "Melhora a interface e o gerenciamento de safehouses no multiplayer.", "interface"],
  ["3420478458", "Better Flashlights", "Adiciona lanternas e opções extras de iluminação portátil.", "content"],
  ["2447729538", "Fluffy Hair", "Mantém formatos de cabelo mais naturais quando o personagem usa chapéu.", "content"],
  ["3783623999", "Livestock Panel Plus", "Mostra o estado dos animais de uma zona em uma tabela.", "interface"],
  ["3413150945", "More Damaged Objects", "Aumenta a variedade de objetos destruídos e danificados no mundo.", "content"],
  ["3781533687", "True Sleep", "Permite dormir no multiplayer sem exigir que todos iniciem o sono juntos.", "gameplay"],
  ["3618557184", "Here Goes the Sun", "Melhora cores e transições de luz do nascer e do pôr do sol ao longo das estações.", "content"],
  ["3576056135", "Better Generator Info", "Mostra alcance, consumo e estimativa de combustível do gerador.", "interface"],
  ["3785033563", "N3WO Map Overhaul", "Amplia os recursos e controles da interface do mapa.", "interface"],
  ["2747517727", "Spawn with items and clothing by occupation", "Ajusta roupas e itens iniciais conforme a profissão escolhida.", "gameplay"],
  ["3778511497", "Skully's Zombie Collision", "Impede que zumbis atravessem uns aos outros durante perseguições.", "gameplay"],
  ["2642541073", "'92 AM General M998 + M101A3 Trailer", "Adiciona o veículo militar M998 e um reboque de carga.", "vehicles"],
  ["3005903549", "'63 Volkswagen 1300 Beetle", "Adiciona o Fusca 1963 e suas variantes.", "vehicles"],
  ["3041122351", "'63 Volkswagen Type 2 Van", "Adiciona a Kombi 1963 com diferentes configurações.", "vehicles"],
  ["3773911887", "This Is Your Life", "Adiciona o diário de vida que registra a história do personagem.", "gameplay"],
  ["3726526329", "'78 Lamborghini Countach", "Adiciona o Lamborghini Countach 1978.", "vehicles"],
  ["3766508989", "Aegis Panel", "Painel usado pela administração para moderação, registros e suporte.", "support"],
  ["3775841600", "Ladders?!", "Permite subir e descer escadas verticais.", "gameplay"],
  ["3776949545", "ClassicBows", "Adiciona arcos, bestas, flechas e virotes.", "content"],
  ["3779315249", "'87 Toyota Corolla AE92", "Adiciona o Toyota Corolla AE92 1987.", "vehicles"],
  ["3786993262", "Total Weight Rebalance", "Reequilibra o peso de itens do jogo para valores mais consistentes.", "gameplay"],
] as const;

export default function ModsPage() {
  return (
    <>
      <a className="skip-link" href="#mods-conteudo">Pular para a lista</a>

      <header className="rules-hero mods-hero">
        <div className="rules-hero-inner">
          <a className="back-link" href="/">Voltar ao manual</a>
          <p className="eyebrow">Zombas</p>
          <h1>Mods atuais</h1>
          <p>{mods.length} itens da Workshop carregados no servidor.</p>
        </div>
      </header>

      <main className="mods-page" id="mods-conteudo">
        <div className="mods-intro">
          <p>
            Esta lista descreve o que cada item acrescenta para quem joga. Alguns itens carregam mais
            de um Mod ID, por isso o servidor usa {mods.length} itens da Workshop e 100 Mod IDs.
          </p>
          <a className="button button-primary" href={collectionUrl} target="_blank" rel="noreferrer">
            Abrir coleção Steam
          </a>
        </div>

        <nav className="mods-index" aria-label="Categorias de mods">
          {categories.map(([id, label]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>

        {categories.map(([category, label]) => {
          const categoryMods = mods.filter((mod) => mod[3] === category);
          return (
            <section className="mods-section" id={category} key={category}>
              <div className="mods-heading">
                <p className="kicker">{String(categoryMods.length).padStart(2, "0")} itens</p>
                <h2>{label}</h2>
              </div>
              <div className="mods-grid">
                {categoryMods.map(([id, name, description]) => (
                  <article className="mod-card" key={id}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`} target="_blank" rel="noreferrer">
                      Workshop {id}
                    </a>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="rules-footer">
        <div><a className="brand" href="/">Zombas</a><p>Lista conferida com a configuração atual do servidor.</p></div>
        <nav aria-label="Links da lista de mods"><a href="/">Manual</a><a href="/regras">Regras</a><a href={collectionUrl} target="_blank" rel="noreferrer">Coleção Steam</a></nav>
      </footer>
    </>
  );
}

