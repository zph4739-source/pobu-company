import type { Metadata } from 'next';
import {siteOrigin,siteBasePath,siteTitle,description,siteStructuredData} from '@/lib/metadata';
import './globals.css';
export const metadata: Metadata = {
 metadataBase:new URL(siteOrigin),title:siteTitle,applicationName:'포부 컴퍼니',description,
 robots:{index:true,follow:true},alternates:{canonical:'/'},
 openGraph:{type:'website',title:siteTitle,description,url:'/',siteName:'포부 컴퍼니',locale:'ko_KR',alternateLocale:'en_US'},
 twitter:{card:'summary',title:siteTitle,description},
 verification:{google:'u4sYYwZvVTSCquHBLa_woYxHv481FxTTQ11ZpEgp0Og'},
 icons:{icon:`${siteBasePath}/favicon.svg`,shortcut:`${siteBasePath}/favicon.svg`},manifest:`${siteBasePath}/manifest.webmanifest`,
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteStructuredData).replace(/</g,"\\u003c")}}/>{children}</body></html>}
