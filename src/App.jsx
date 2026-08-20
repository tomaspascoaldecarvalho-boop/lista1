import React, { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Instagram, Menu, X, Users, Sparkles, Trophy, Leaf, Heart, Mail } from "lucide-react";
import { people, projects, events } from "./data";

const nav = [
  ["Início", "home"],
  ["Eventos", "eventos"],
  ["A Lista", "lista"],
  ["Projetos", "projetos"],
  ["Manifesto", "manifesto"]
];

function Logo() {
  return <div className="logo"><span className="logo-mark">M</span><span>LISTA<br/><b>MADAGASCAR</b></span></div>
}

function App() {
  const [page, setPage] = useState("home");
  const [mobile, setMobile] = useState(false);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const go = (p) => { setPage(p); setMobile(false); };

  const filtered = filter === "Todos" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="site">
      <header className="header">
        <button className="brand-btn" onClick={() => go("home")}><Logo /></button>
        <nav className={mobile ? "nav open" : "nav"}>
          {nav.map(([label, key]) => <button key={key} className={page === key ? "active" : ""} onClick={() => go(key)}>{label}</button>)}
          <button className="nav-cta" onClick={() => go("projetos")}>Ver projetos <ArrowRight size={16}/></button>
        </nav>
        <button className="mobile-menu" onClick={() => setMobile(!mobile)} aria-label="Menu">{mobile ? <X/> : <Menu/>}</button>
      </header>

      {page === "home" && <Home go={go} />}
      {page === "eventos" && <Events />}
      {page === "lista" && <People />}
      {page === "projetos" && <Projects filter={filter} setFilter={setFilter} filtered={filtered} />}
      {page === "manifesto" && <Manifesto go={go} />}

      <footer className="footer">
        <div><Logo /><p>Uma escola com mais voz.<br/>Uma escola com mais vida.</p></div>
        <div className="footer-links">
          <button onClick={() => go("eventos")}>Eventos</button>
          <button onClick={() => go("lista")}>A Lista</button>
          <button onClick={() => go("projetos")}>Projetos</button>
          <button onClick={() => go("manifesto")}>Manifesto</button>
        </div>
        <div className="footer-social"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={19}/></a><a href="mailto:listamadagascar@crsi.pt"><Mail size={19}/></a></div>
        <div className="copyright">© 2026 Lista Madagascar · Colégio Rainha Santa Isabel</div>
      </footer>
    </div>
  );
}

function Home({go}) {
  return <main>
    <section className="hero">
      <div className="hero-bg"><div className="orb orb1"/><div className="orb orb2"/><div className="leaf-shape l1">✦</div><div className="leaf-shape l2">◌</div></div>
      <div className="hero-copy">
        <p className="eyebrow"><span/> COLÉGIO RAINHA SANTA ISABEL</p>
        <h1>Uma escola<br/><em>mais nossa.</em></h1>
        <p className="hero-text">Somos a <strong>Lista Madagascar</strong>. Uma equipa com ideias, atitude e vontade de fazer acontecer.</p>
        <div className="hero-actions"><button className="primary" onClick={() => go("projetos")}>Conhece os projetos <ArrowRight size={18}/></button><button className="ghost" onClick={() => go("lista")}>Conhece a equipa</button></div>
      </div>
      <div className="hero-card">
        <div className="card-top"><span>01 / 04</span><span>LISTA M</span></div>
        <div className="monogram">M</div>
        <div className="card-bottom"><span>IMAGINA.</span><span>FAZ.</span><span>VIVE.</span></div>
      </div>
      <div className="scroll">SCROLL <span/></div>
    </section>

    <section className="intro section">
      <div className="section-label">01 — A NOSSA IDEIA</div>
      <div className="intro-grid"><h2>Não queremos ser<br/><span>mais uma lista.</span></h2><div><p>Queremos que a escola seja um lugar onde todos tenham espaço para participar, criar e deixar a sua marca.</p><button className="text-link" onClick={() => go("manifesto")}>Ler o nosso manifesto <ArrowRight size={17}/></button></div></div>
    </section>

    <section className="feature section">
      <div className="feature-image"><div className="big-m">M</div><span className="image-caption">LISTA MADAGASCAR · 2026</span></div>
      <div className="feature-copy"><p className="eyebrow">O QUE NOS MOVE</p><h2>Ideias que saem do papel.</h2><p>Eventos que ficam na memória. Projetos que resolvem problemas reais. E uma equipa que está aqui para ouvir.</p><div className="stats"><div><b>08</b><span>elementos</span></div><div><b>06</b><span>projetos</span></div><div><b>∞</b><span>ideias</span></div></div></div>
    </section>

    <section className="project-preview section">
      <div className="section-head"><div><div className="section-label">02 — PROJETOS</div><h2>O que queremos<br/><span>fazer.</span></h2></div><button className="text-link" onClick={() => go("projetos")}>Ver todos <ArrowRight size={17}/></button></div>
      <div className="project-grid">{projects.slice(0,3).map((p,i)=><ProjectCard key={p.title} p={p} index={i}/>)}</div>
    </section>

    <section className="quote"><div className="quote-mark">“</div><p>A escola é de todos.<br/><em>Vamos fazê-la acontecer juntos.</em></p><span>— LISTA MADAGASCAR</span></section>

    <section className="cta section"><div><p className="eyebrow">FAZ PARTE</p><h2>Prontos para<br/><span>começar?</span></h2></div><button className="primary" onClick={() => go("eventos")}>Ver próximos eventos <ArrowRight size={18}/></button></section>
  </main>
}

function Events() {
  return <main className="page">
    <PageHero eyebrow="03 — ACONTECE" title={<>Momentos que<br/><em>fazem escola.</em></>} text="A campanha também se vive fora da sala de aula. Descobre onde vamos estar."/>
    <section className="section events-section"><div className="section-label">PRÓXIMOS EVENTOS</div><div className="events-list">{events.map((e,i)=><article className="event" key={e.title}><div className="event-date"><b>{e.date}</b><span>{e.month}</span></div><div className="event-main"><span className="event-number">0{i+1}</span><h3>{e.title}</h3><p>{e.text}</p><small><CalendarDays size={15}/> {e.place}</small></div><ArrowRight className="event-arrow"/></article>)}</div></section>
    <section className="section dark-band"><div className="dark-band-content"><Sparkles/><h2>Vem fazer parte<br/><em>da história.</em></h2><p>Segue a campanha e não percas os próximos momentos.</p><a className="primary" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a></div></section>
  </main>
}

function People() {
  return <main className="page">
    <PageHero eyebrow="04 — A EQUIPA" title={<>As pessoas<br/><em>por trás da M.</em></>} text="Somos diferentes, mas temos a mesma vontade: tornar a vida escolar mais participada, divertida e nossa."/>
    <section className="section people-section"><div className="people-grid">{people.map((p,i)=><article className="person" key={p.name}><div className="person-photo"><span>{p.initials}</span><small>0{i+1}</small></div><div className="person-info"><p>{p.role}</p><h3>{p.name}</h3><span>{p.text}</span></div></article>)}</div></section>
    <section className="values section"><div className="section-label">O QUE NOS DEFINE</div><div className="values-grid"><Value icon={<Users/>} title="Participação" text="Toda a gente tem uma ideia que merece ser ouvida."/><Value icon={<Trophy/>} title="Ambição" text="Não prometemos pouco. Prometemos trabalhar."/><Value icon={<Heart/>} title="Comunidade" text="Uma escola mais próxima, inclusiva e viva."/><Value icon={<Leaf/>} title="Futuro" text="Pensar hoje na escola que queremos amanhã."/></div></section>
  </main>
}

function Projects({filter,setFilter,filtered}) {
  const cats=["Todos","Escola","Eventos","Desporto","Cultura","Comunidade","Ambiente"];
  return <main className="page">
    <PageHero eyebrow="05 — PROJETOS" title={<>Ideias com<br/><em>um propósito.</em></>} text="Não queremos apresentar promessas vagas. Queremos mostrar propostas concretas para o Colégio Rainha Santa Isabel."/>
    <section className="section projects-section"><div className="filters">{cats.map(c=><button className={filter===c?"selected":""} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div><div className="all-projects">{filtered.map((p,i)=><ProjectCard p={p} index={i} key={p.title}/>)}</div></section>
  </main>
}

function Manifesto({go}) {
  return <main className="page">
    <PageHero eyebrow="06 — MANIFESTO" title={<>A escola que<br/><em>queremos.</em></>} text="Madagascar é mais do que um nome. É a nossa forma de olhar para a escola: com coragem, criatividade e espírito de equipa."/>
    <section className="manifesto section"><div className="manifesto-number">M</div><div className="manifesto-copy"><p className="eyebrow">O NOSSO MANIFESTO</p><h2>Uma escola não é só aquilo que acontece nas aulas.</h2><p>É o intervalo, o torneio, o espetáculo, a conversa no corredor, a ideia que alguém teve e a oportunidade de a concretizar.</p><p>É por isso que queremos uma escola onde participar seja fácil, onde as atividades tenham espaço e onde os alunos sintam que também podem construir o dia a dia do CRSI.</p><div className="manifesto-lines"><div><b>01</b><span>Ouvir antes de decidir.</span></div><div><b>02</b><span>Fazer mais, prometer menos.</span></div><div><b>03</b><span>Criar momentos para todos.</span></div><div><b>04</b><span>Deixar uma escola melhor.</span></div></div><button className="primary" onClick={()=>go("projetos")}>Ver os nossos projetos <ArrowRight size={18}/></button></div></section>
  </main>
}

function PageHero({eyebrow,title,text}) {
 return <section className="page-hero"><div className="page-hero-pattern">M</div><div className="page-hero-inner"><p className="eyebrow"><span/> {eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>
}
function ProjectCard({p,index}) {
 return <article className="project-card"><div className="project-number">0{index+1}</div><div className="project-icon">{p.icon}</div><div className="project-content"><div className="project-meta"><span>{p.category}</span><small>{p.tag}</small></div><h3>{p.title}</h3><p>{p.description}</p><button className="circle-btn"><ArrowRight size={17}/></button></div></article>
}
function Value({icon,title,text}) {
 return <article className="value"><div>{icon}</div><h3>{title}</h3><p>{text}</p></article>
}
export default App;