import type { Metadata } from 'next';
import {siteOrigin,siteBasePath,description,siteStructuredData} from '@/lib/metadata';
import './globals.css';
export const metadata: Metadata = {
 metadataBase:new URL(siteOrigin),title:'POBU Company | 포부 컴퍼니 · 포부 게임즈',description,
 robots:{index:true,follow:true},alternates:{canonical:'/'},
 openGraph:{type:'website',title:'POBU Company | 포부 컴퍼니 · 포부 게임즈',description,url:'/',siteName:'POBU Company',locale:'ko_KR',alternateLocale:'en_US'},
 twitter:{card:'summary',title:'POBU Company | 포부 컴퍼니 · 포부 게임즈',description},
 verification:{google:'u4sYYwZvVTSCquHBLa_woYxHv481FxTTQ11ZpEgp0Og'},
 icons:{icon:`${siteBasePath}/favicon.svg`,shortcut:`${siteBasePath}/favicon.svg`},manifest:`${siteBasePath}/manifest.webmanifest`,
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteStructuredData).replace(/</g,"\\u003c")}}/>{children}</body></html>}
