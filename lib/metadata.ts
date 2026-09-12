export const siteOrigin = 'https://zph4739-source.github.io/pobu-company';
export const siteBasePath = '/pobu-company';
export const siteTitle = '포부 컴퍼니 | POBU Company — AI·소프트웨어·게임 개발팀';
export const description = '포부 컴퍼니(POBU Company)는 고효율 AI 연구, 어르신 대화형 AI 온담이, 포부 게임즈의 거지 키우기, 에이전트 자비스를 만드는 3인 크리에이티브 테크놀로지 팀입니다.';
export const englishDescription = 'POBU Company is a three-person creative technology team building efficient AI, Ondami, POBU Games projects and the Jarvis agent across AI, software, games and agent systems.';
export const siteStructuredData = {
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'WebSite','@id':`${siteOrigin}/#website`,url:`${siteOrigin}/`,name:'포부 컴퍼니',alternateName:['POBU Company','POBU','포부컴퍼니'],inLanguage:['ko','en'],publisher:{'@id':`${siteOrigin}/#organization`}},
  {'@type':'Organization','@id':`${siteOrigin}/#organization`,name:'POBU Company',alternateName:['포부 컴퍼니','포부컴퍼니','POBU'],url:`${siteOrigin}/`,logo:`${siteOrigin}/favicon.svg`,description,slogan:'Think. Build. Beyond.',foundingDate:'2026',numberOfEmployees:{'@type':'QuantitativeValue',value:3},knowsAbout:['고효율 AI','대화형 AI','소프트웨어 개발','게임 개발','AI 에이전트']}
 ]
};
