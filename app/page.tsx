"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Command as CommandIcon, Menu, Plus, RotateCcw } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { fields, projects, siteConfig, team, type Language } from "@/lib/pobu";
import { siteBasePath } from "@/lib/metadata";

const copy = {
  ko: {
    skip: "본문으로 건너뛰기",
    nav: ["홈", "프로젝트", "분야", "소개", "팀", "연락처"],
    heroTop: ["크리에이티브 테크놀로지 팀", "독립적인 생각과 실행"],
    hero: ["아이디어는 하나의 분야에 머물지 않습니다.", "우리도 그렇습니다."],
    explore: "프로젝트 살펴보기",
    scroll: "아래로 내려보기",
    workKicker: ["01 / 주요 프로젝트", "실제로 만들고 있는 것들"],
    workTitle: ["서로 다른 분야.", "하나의 방식."],
    workIntro: "POBU는 분야를 먼저 정하지 않습니다. 해결하고 싶은 문제에서 출발해 필요한 기술을 연결합니다.",
    project: "프로젝트",
    development: "개발 중",
    release: "배포 준비 중",
    details: "프로젝트 설명",
    console: {
      system: "POBU / 프로젝트 시스템", field: "분야", study: "프로젝트 미리보기", figure: "프로젝트 흐름", state: "상태",
      ready: "POBU / 준비 완료", local: "로컬 인터랙션", reset: "데모 초기화", idle: "인터랙티브 프로젝트 데모가 준비되었습니다.",
      actions: ["연산 상태 변경", "대화 단계 이동", "게임 상태 이동", "에이전트 단계 이동"],
      changed: ["연산 상태가 변경되었습니다", "대화 단계가 변경되었습니다", "게임 상태가 변경되었습니다", "에이전트 단계가 변경되었습니다"],
      tabs: "프로젝트 분야",
    },
    fieldsKicker: ["02 / 활동 분야", "경계를 넘어 만드는 기술"],
    fieldsTitle: ["호기심에는", "부서가 없습니다."],
    fieldsIntro: "흥미로운 아이디어는 하나의 분야 안에만 머물지 않습니다.",
    exploring: "살펴보는 분야",
    aboutKicker: ["03 / POBU 소개", "생각하고, 만들고, 그 너머로"],
    aboutTitle: ["우리는 아이디어를", "만듭니다."],
    aboutLead: "생각에 머물지 않고, 작동하는 결과로.",
    about1: "POBU Company는 2026년에 시작된 3인 크리에이티브 테크놀로지 팀입니다. AI, 소프트웨어, 게임, 에이전트 시스템의 경계를 넘나들며 흥미로운 아이디어를 직접 설계하고 구현합니다.",
    about2: "하드웨어를 직접 바꾸기 어려운 문제에서는 더 적은 GPU로 작동하는 AI를 연구하고, 사회의 외로움에는 온담이로 답합니다. 게임과 에이전트에서도 아이디어를 실제 제품으로 완성하고 있습니다.",
    principles: ["01 / 호기심", "02 / 실험", "03 / 실행"],
    teamKicker: ["04 / 팀", "세 사람이 만드는 하나의 POBU"],
    teamTitle: ["작은 팀.", "넓은 범위."],
    teamIntro: "개발, 품질, 디자인을 각자 책임지며 세 분야가 하나의 결과로 이어지도록 협업합니다.",
    members: "팀원",
    contactKicker: ["05 / 연락처", "다음 대화를 준비 중입니다"],
    contactTitle: ["좋은 일은", "대화에서 시작됩니다."],
    contactText: "POBU의 공식 연락 채널을 준비하고 있습니다.",
    coming: "준비 중",
    back: "맨 위로",
    footerFields: "AI / 소프트웨어 / 게임 / 에이전트",
    commandTitle: "POBU 빠른 이동",
    commandDescription: "화살표 키와 Enter 키로 원하는 섹션으로 이동하세요.",
    commandPlaceholder: "어디로 이동할까요?",
    commandEmpty: "일치하는 섹션이 없습니다.",
    commandGroup: "POBU 둘러보기",
    paletteHelp: ["↑ ↓ 이동", "↵ 열기", "esc 닫기"],
    mobileNav: "모바일 메뉴",
  },
  en: {
    skip: "Skip to content",
    nav: ["Home", "Work", "Fields", "About", "Team", "Contact"],
    heroTop: ["Creative technology team", "Independent thinking and execution"],
    hero: ["Ideas don't belong to one category.", "Neither do we."],
    explore: "Explore our work",
    scroll: "Scroll to explore",
    workKicker: ["01 / Selected work", "What we are building"],
    workTitle: ["Different fields.", "One way of thinking."],
    workIntro: "POBU starts with a problem worth solving, then connects the technologies needed to build a working answer.",
    project: "Project",
    development: "In development",
    release: "Preparing release",
    details: "Project details",
    console: {
      system: "POBU / Project system", field: "Field", study: "Project preview", figure: "Project flow", state: "State",
      ready: "POBU / Ready", local: "Local interaction", reset: "Reset demonstration", idle: "Interactive project demonstration ready.",
      actions: ["Change compute state", "Advance conversation", "Advance game state", "Advance agent stage"],
      changed: ["Compute state updated", "Conversation stage updated", "Game state updated", "Agent stage updated"],
      tabs: "Project fields",
    },
    fieldsKicker: ["02 / Fields", "Technology across boundaries"],
    fieldsTitle: ["Curiosity has", "no department."],
    fieldsIntro: "Interesting ideas rarely stay inside one category.",
    exploring: "Exploring",
    aboutKicker: ["03 / About POBU", "Think. Build. Beyond."],
    aboutTitle: ["We build", "ideas."],
    aboutLead: "From a thought to something that works.",
    about1: "POBU Company is a three-person creative technology team founded in 2026. We design and build ideas across AI, software, games and agent systems.",
    about2: "Where hardware is difficult to change, we research AI that needs less GPU capacity. Where society faces loneliness, we are building Ondami. We are also bringing our game and agent projects toward release.",
    principles: ["01 / Curiosity", "02 / Experiment", "03 / Execution"],
    teamKicker: ["04 / Team", "Three people, one POBU"],
    teamTitle: ["Small team.", "Wide range."],
    teamIntro: "Development, quality and design each have a clear owner, and all three come together in every finished result.",
    members: "Team members",
    contactKicker: ["05 / Contact", "The next conversation"],
    contactTitle: ["Good things begin", "with a conversation."],
    contactText: "POBU's official contact channels are coming soon.",
    coming: "Coming soon",
    back: "Back to top",
    footerFields: "AI / Software / Games / Agents",
    commandTitle: "POBU command palette",
    commandDescription: "Use arrow keys and Enter to navigate to a section.",
    commandPlaceholder: "Where would you like to go?",
    commandEmpty: "No matching section.",
    commandGroup: "Navigate POBU",
    paletteHelp: ["↑ ↓ navigate", "↵ open", "esc close"],
    mobileNav: "Mobile navigation",
  },
};

const sectionIds = ["home", "work", "fields", "about", "team", "contact"];

function Wordmark({ large = false }: { large?: boolean }) {
  return siteConfig.logo ? <img className={large ? "brand-image large" : "brand-image"} src={siteConfig.logo} alt="POBU" /> : (
    <span className={large ? "brand-lockup brand-lockup-large" : "brand-lockup"}>
      <span className={large ? "wordmark large" : "wordmark"}>POBU</span>
      <span className="brand-est"><span aria-hidden="true" />EST. 2026<span aria-hidden="true" /></span>
      <span className="brand-motto">THINK. BUILD. BEYOND.</span>
    </span>
  );
}

function Diagram({ field, step = 0, lang }: { field: number; step?: number; lang: Language }) {
  const patternId = useId();
  const labels = lang === "ko"
    ? ["입력과 이진 연산 흐름", "온담이 대화 흐름", "게임 성장 상태", "자비스 에이전트 작업 흐름"]
    : ["Input and binary computation flow", "Ondami conversation flow", "Game progression state", "Jarvis agent task flow"];
  const flow = field === 1 ? (lang === "ko" ? ["듣기", "이해", "대화"] : ["LISTEN", "UNDERSTAND", "RESPOND"]) : (lang === "ko" ? ["목표", "도구", "실행"] : ["GOAL", "TOOL", "ACT"]);
  return <svg className="diagram" viewBox="0 0 500 240" role="img" aria-label={labels[field]}>
    <defs><pattern id={patternId} width="25" height="24" patternUnits="userSpaceOnUse"><path d="M25 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".10" /></pattern></defs>
    <rect width="500" height="240" fill={`url(#${patternId})`} />
    {field === 0 && <g>{[0,1,2,3].map(a => [0,1,2].map(b => <line key={`${a}-${b}`} x1="90" y1={48+a*48} x2="250" y2={72+b*48} stroke="currentColor" opacity={.12+((a+b+step)%3)*.1} />))}{[0,1,2].map(a => [0,1].map(b => <line key={`${a}-${b}`} x1="250" y1={72+a*48} x2="410" y2={96+b*48} stroke="currentColor" opacity=".28" />))}{[0,1,2,3].map(a => <circle key={a} cx="90" cy={48+a*48} r="7" fill="#101419" stroke="currentColor" />)}{[0,1,2].map(a => <g key={a}><rect x="228" y={50+a*48} width="44" height="44" rx="7" fill="#18232e" stroke="currentColor" strokeOpacity=".6" /><text x="250" y={78+a*48} textAnchor="middle" fill="currentColor" fontSize="16">{(a+step)%2?"+1":"−1"}</text></g>)}{[0,1].map(a => <circle key={a} cx="410" cy={96+a*48} r="9" fill={(step+a)%2?"#9db8ce":"#111820"} stroke="currentColor" />)}</g>}
    {(field === 1 || field === 3) && <g>{flow.map((item,i) => <g key={item}>{i < 2 && <path d={`M${135+i*155} 120h65`} stroke="currentColor" strokeOpacity=".4" />}<rect x={35+i*155} y="88" width="100" height="64" rx="7" fill={step%3===i?"#243343":"#101419"} stroke="currentColor" strokeOpacity={step%3===i?".8":".3"} /><text x={85+i*155} y="125" fill="currentColor" textAnchor="middle" fontSize={lang === "ko" ? "12" : "11"}>{item}</text></g>)}</g>}
    {field === 2 && <g>{Array.from({ length: 24 },(_,i) => <rect key={i} x={107+(i%6)*48} y={27+Math.floor(i/6)*48} width="40" height="40" rx="3" fill={i===step%24?"#a4bdd0":"#141b23"} stroke="currentColor" strokeOpacity={i===step%24?".8":".16"} />)}</g>}
  </svg>;
}

function POBUConsole({ index, onSelect, lang }: { index: number; onSelect: (i: number) => void; lang: Language }) {
  const [step, setStep] = useState(0);
  const t = copy[lang];
  const project = projects[index];
  useEffect(() => setStep(0), [index]);
  const status = project.status === "development" ? t.development : t.release;
  return <div className="console">
    <div className="console-top"><span><span className="console-symbol">⌘</span>{t.console.system}</span><span className="revision">REV.02</span></div>
    <div className="console-tabs" aria-label={t.console.tabs}>{fields.map((field,i) => <button key={field.name} aria-pressed={i===index} onClick={() => onSelect(i)}><span>0{i+1}</span>{field.label[lang]}</button>)}</div>
    <div className="console-body" key={`${index}-${lang}`}>
      <div className="console-meta"><span>{t.console.field} / {fields[index].label[lang].toUpperCase()}</span><span className="status">{status}</span></div>
      <div className="console-title"><h3>{project.consoleTitle[lang]}</h3><span className="console-arrow" aria-hidden="true"><ArrowUpRight size={17} strokeWidth={1.6} /></span></div>
      <p className="console-description">{project.detail[lang]}</p>
      <Diagram field={index} step={step} lang={lang} />
      <div className="diagram-caption"><span>FIG. 0{index+1} / {t.console.figure}</span><span>{t.console.state} / {String(step).padStart(2,"0")}</span></div>
      <div className="console-controls"><button className="control" onClick={() => setStep(s => s+1)}>{t.console.actions[index]}<Plus size={14} /></button><button className="icon-button" aria-label={t.console.reset} onClick={() => setStep(0)}><RotateCcw size={15} /></button></div>
      <div className="console-log" aria-live="polite"><span>›</span>{step === 0 ? t.console.idle : `${t.console.changed[index]}. ${t.console.state} ${step}.`}</div>
    </div>
    <div className="console-bottom"><span className="system-dot" />{t.console.ready}<span className="right">{t.console.local}</span></div>
  </div>;
}

function SelectedWork({ lang }: { lang: Language }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const t = copy[lang];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index)); }), { rootMargin: "-35% 0px -45% 0px" });
    refs.current.forEach(element => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const select = (i: number) => { setActive(i); refs.current[i]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "center" }); };
  return <section id="work" className="section work">
    <div className="section-kicker"><span>{t.workKicker[0]}</span><span>{t.workKicker[1]}</span></div>
    <div className="section-intro reveal"><h2>{t.workTitle[0]}<br /><span>{t.workTitle[1]}</span></h2><p>{t.workIntro}</p></div>
    <div className="work-layout"><div className="project-list">{projects.map((project,i) => <article key={project.id} data-index={i} ref={element => { refs.current[i] = element; }} className={`project ${active===i?"active":""}`}>
      <div className="project-number">0{i+1}<span>/ 04</span></div><p className="eyebrow">{t.console.field.toUpperCase()} / {fields[i].label[lang].toUpperCase()}</p><h3>{project.title[lang]}</h3><p>{project.description[lang]}</p>
      <div className="project-data"><span>{t.project.toUpperCase()} / {project.id.toUpperCase()}</span><span>{project.status === "development" ? t.development.toUpperCase() : t.release.toUpperCase()}</span></div>
      <p className="project-note">{project.detail[lang]}</p><a className="text-link" href={project.id === "beggar-growth-game" ? `${siteBasePath}/pobu-games/` : "#fields"}>{t.details}<ArrowUpRight size={17} /></a><div className="mobile-console"><POBUConsole index={i} onSelect={select} lang={lang} /></div>
    </article>)}</div><div className="sticky-console"><POBUConsole index={active} onSelect={select} lang={lang} /></div></div>
  </section>;
}

function Fields({ lang }: { lang: Language }) {
  const [selected, setSelected] = useState(0);
  const t = copy[lang];
  return <section className="section fields" id="fields"><div className="section-kicker"><span>{t.fieldsKicker[0]}</span><span>{t.fieldsKicker[1]}</span></div><div className="fields-layout">
    <div className="fields-heading reveal"><h2>{t.fieldsTitle[0]}<br />{t.fieldsTitle[1]}</h2><p>{t.fieldsIntro}</p><div className="field-study"><Diagram field={selected} lang={lang} /><span className="eyebrow">{t.exploring.toUpperCase()} / {fields[selected].label[lang].toUpperCase()}</span></div></div>
    <div className="field-list">{fields.map((field,i) => <button className={`field-row ${selected===i?"selected":""}`} key={field.name} onMouseEnter={() => setSelected(i)} onFocus={() => setSelected(i)} onClick={() => setSelected(i)} aria-pressed={selected===i}><span className="field-no">0{i+1}</span><span><strong>{field.label[lang]}</strong><span className="field-description">{field.description[lang]}</span></span><ArrowUpRight size={23} /></button>)}</div>
  </div></section>;
}

export default function Home() {
  const [lang, setLang] = useState<Language>("ko");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [palette, setPalette] = useState(false);
  const [menu, setMenu] = useState(false);
  const commandButton = useRef<HTMLButtonElement>(null);
  const t = copy[lang];
  const nav = sectionIds.map((id,i) => ({ id, label: t.nav[i] }));

  useEffect(() => {
    const saved = window.localStorage.getItem("pobu-language");
    if (saved === "ko" || saved === "en") setLang(saved);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; window.localStorage.setItem("pobu-language", lang); }, [lang]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    const pointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      document.body.classList.add("pointer-active");
    };
    const key = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPalette(value => !value); } };
    window.addEventListener("scroll", scroll, { passive: true }); window.addEventListener("pointermove", pointer, { passive: true }); window.addEventListener("keydown", key); scroll();
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-10% 0px -55% 0px" });
    sectionIds.forEach(id => { const element = document.getElementById(id); if (element) sectionObserver.observe(element); });
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); revealObserver.unobserve(entry.target); } }), { threshold: .1 });
    document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
    return () => { window.removeEventListener("scroll", scroll); window.removeEventListener("pointermove", pointer); window.removeEventListener("keydown", key); document.body.classList.remove("pointer-active"); sectionObserver.disconnect(); revealObserver.disconnect(); };
  }, []);
  const go = (id: string) => { setPalette(false); setMenu(false); requestAnimationFrame(() => { document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); window.history.replaceState(null, "", `#${id}`); }); };

  return <>
    <div className="ambient-shadow" aria-hidden="true" />
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className={`navbar ${scrolled?"scrolled":""}`}><div className="nav-inner"><a href="#home" aria-label="POBU"><Wordmark /></a><nav aria-label={t.mobileNav} className="desktop-nav">{nav.slice(1).map(item => <a key={item.id} href={`#${item.id}`} aria-current={active===item.id?"location":undefined}>{item.label}</a>)}</nav><div className="nav-actions">
      <div className="language-switch" role="group" aria-label={lang === "ko" ? "언어 선택" : "Choose language"}><button aria-pressed={lang==="ko"} onClick={() => setLang("ko")}>KO</button><span>/</span><button aria-pressed={lang==="en"} onClick={() => setLang("en")}>EN</button></div>
      <button ref={commandButton} className="command-button" aria-label={t.commandTitle} aria-keyshortcuts="Control+k Meta+k" onClick={() => setPalette(true)}><CommandIcon size={14} /><span>K</span></button><button className="menu-button icon-button" aria-label={t.mobileNav} onClick={() => setMenu(true)}><Menu size={21} /></button>
    </div></div></header>
    <main id="main">
      <section className="hero" id="home" onPointerMove={event => { if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const box = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--mx", `${event.clientX-box.left}px`); event.currentTarget.style.setProperty("--my", `${event.clientY-box.top}px`); }}><div className="hero-grid" aria-hidden="true" /><div className="hero-top eyebrow"><span>{t.heroTop[0]}</span><span>{t.heroTop[1]}</span></div><div className="hero-content"><div className="identity"><Wordmark large /></div><p className="hero-site-name"><span lang="ko">포부 컴퍼니</span><span aria-hidden="true"> / </span><span lang="en">POBU Company</span></p><h1><span>{t.hero[0]}</span><span>{t.hero[1]}</span></h1><p className="hero-fields">{fields.map((field,i) => <span className="hero-field" key={field.name}>{i > 0 && <span aria-hidden="true">·</span>}{field.label[lang]}</span>)}</p><a href="#work" className="hero-cta">{t.explore}<ArrowUpRight size={17} /></a></div><div className="hero-bottom"><span className="eyebrow">POBU COMPANY <span className="hero-korean">/ 포부 컴퍼니</span></span><a className="scroll-cue" href="#work">{t.scroll}<ArrowDown size={15} /></a><span className="eyebrow hero-coordinate">SYS.01 / POBU</span></div></section>
      <SelectedWork lang={lang} /><Fields lang={lang} />
      <section id="about" className="section about"><div className="section-kicker"><span>{t.aboutKicker[0]}</span><span>{t.aboutKicker[1]}</span></div><div className="about-layout reveal"><h2>{t.aboutTitle[0]}<br /><em>{t.aboutTitle[1]}</em></h2><div className="about-copy"><p className="lead">{t.aboutLead}</p><p>{t.about1}</p><p>{t.about2}</p><div className="principles">{t.principles.map(item => <span key={item}>{item}</span>)}</div></div></div></section>
      <section id="team" className="section team"><div className="section-kicker"><span>{t.teamKicker[0]}</span><span>{t.teamKicker[1]}</span></div><div className="team-intro reveal"><h2>{t.teamTitle[0]}<br /><span>{t.teamTitle[1]}</span></h2><p>{t.teamIntro}</p></div><div className="team-grid" aria-label={t.members}>{team.map((member,i) => <article className="team-member" key={member.name.ko}><span className="team-index">0{i+1}</span><h3>{member.name[lang]}</h3><p>{member.role[lang]}</p><span className="team-mark">POBU / {String(i+1).padStart(2,"0")}</span></article>)}</div></section>
      <section id="contact" className="section contact"><div className="section-kicker"><span>{t.contactKicker[0]}</span><span>{t.contactKicker[1]}</span></div><div className="contact-layout reveal"><h2>{t.contactTitle[0]}<br />{t.contactTitle[1]}</h2><div><p>{t.contactText}</p><div className="contact-channels">{siteConfig.contacts.map(channel => channel.href ? <a className="text-link" key={channel.label} href={channel.href}>{channel.label}<ArrowUpRight size={15} /></a> : <span key={channel.label}>{channel.label}<small>{t.coming.toUpperCase()}</small></span>)}</div></div></div></section>
    </main>
    <footer className="footer"><div className="footer-main"><a href="#home" aria-label="POBU"><Wordmark /></a><span>Think. Build. Beyond.</span><a className="text-link" href="#home">{t.back}<ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 POBU Company · 포부 컴퍼니</span><span>{t.footerFields}</span><span>TEAM / 03</span></div></footer>
    <Dialog open={palette} onOpenChange={setPalette}><DialogContent className="palette" onCloseAutoFocus={event => { event.preventDefault(); commandButton.current?.focus(); }}><DialogTitle className="sr-only">{t.commandTitle}</DialogTitle><DialogDescription className="sr-only">{t.commandDescription}</DialogDescription><Command><CommandInput placeholder={t.commandPlaceholder} aria-label={t.commandPlaceholder} /><CommandList><CommandEmpty>{t.commandEmpty}</CommandEmpty><CommandGroup heading={t.commandGroup}>{nav.map((item,i) => <CommandItem key={item.id} value={item.label} onSelect={() => go(item.id)}><span className="command-index">0{i+1}</span>{item.label}<ArrowUpRight className="ml-auto" size={15} /></CommandItem>)}</CommandGroup></CommandList></Command><p className="palette-help">{t.paletteHelp.map(item => <span key={item}>{item}</span>)}</p></DialogContent></Dialog>
    <Dialog open={menu} onOpenChange={setMenu}><DialogContent className="mobile-menu"><DialogTitle><Wordmark /></DialogTitle><DialogDescription className="sr-only">{t.mobileNav}</DialogDescription><div className="mobile-language"><button aria-pressed={lang==="ko"} onClick={() => setLang("ko")}>한국어</button><button aria-pressed={lang==="en"} onClick={() => setLang("en")}>English</button></div><nav aria-label={t.mobileNav}>{nav.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMenu(false)}>{item.label}<ArrowUpRight size={20} /></a>)}</nav></DialogContent></Dialog>
  </>;
}
