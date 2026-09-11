import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { siteOrigin, siteBasePath } from "@/lib/metadata";

const title = "포부 게임즈 | POBU Games — POBU Company";
const description = "포부 게임즈(POBU Games)는 POBU Company의 게임 개발 분야입니다. GTA의 자유로운 진행 방식에서 영감을 받은 성장 게임 거지 키우기를 개발하고 배포를 준비하고 있습니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pobu-games" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title, description, url: "/pobu-games", siteName: "POBU Company", locale: "ko_KR", alternateLocale: "en_US" },
  twitter: { card: "summary", title, description },
};

const gamesStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteOrigin}/pobu-games#webpage`,
  url: `${siteOrigin}/pobu-games`,
  name: "포부 게임즈 | POBU Games",
  alternateName: ["POBU Games", "포부게임즈"],
  description,
  inLanguage: ["ko", "en"],
  isPartOf: { "@id": `${siteOrigin}/#website` },
  about: { "@id": `${siteOrigin}/#organization` },
};

export default function PobuGamesPage() {
  return <main className="games-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gamesStructuredData).replace(/</g, "\\u003c") }} />
    <header className="games-nav"><a href={`${siteBasePath}/`} className="games-brand">POBU<span>GAMES</span></a><a href={`${siteBasePath}/`} className="games-back"><ArrowLeft size={15} />POBU Company</a></header>
    <section className="games-hero">
      <div className="games-grid" aria-hidden="true" />
      <p className="eyebrow">POBU COMPANY / GAME DEVELOPMENT</p>
      <h1><span>POBU</span> GAMES</h1>
      <p className="games-korean">포부 게임즈</p>
      <p className="games-lead">익숙한 장르에 새로운 규칙과 성장 경험을 더합니다.</p>
      <p className="games-lead-en" lang="en">POBU Games is the game development field of POBU Company, creating new progression experiences from familiar genres.</p>
    </section>
    <section className="games-project">
      <div><span className="games-number">01 / PROJECT</span><span className="games-status">배포 준비 중 · PREPARING RELEASE</span></div>
      <div className="games-project-body"><div><p className="eyebrow">POBU GAMES ORIGINAL</p><h2>거지 키우기</h2><p className="games-project-en" lang="en">Beggar Growth Game</p></div><div><p>GTA의 자유로운 진행 방식에서 영감을 받아 성장 요소를 결합한 게임입니다. 플레이어의 선택과 축적이 성장으로 이어지는 경험을 중심으로 핵심 개발을 마쳤으며, 현재 배포를 준비하고 있습니다.</p><p lang="en">Inspired by GTA&apos;s open-ended play, this progression game turns player choices and accumulation into growth. Core development is complete and release preparation is underway.</p></div></div>
    </section>
    <footer className="games-footer"><span>POBU GAMES / 포부 게임즈</span><a href={`${siteBasePath}/`}>POBU Company 전체 프로젝트 보기<ArrowUpRight size={16} /></a></footer>
  </main>;
}
