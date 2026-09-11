export const siteOrigin = 'https://zph4739-source.github.io/pobu-company';
export const siteBasePath = '/pobu-company';
export const description = 'POBU Company(포부 컴퍼니)는 고효율 AI 연구, 어르신 대화형 AI 온담이, 포부 게임즈의 거지 키우기, 에이전트 자비스를 만드는 3인 크리에이티브 테크놀로지 팀입니다.';
export const englishDescription = 'POBU Company is a three-person creative technology team building efficient AI, Ondami, POBU Games projects and the Jarvis agent across AI, software, games and agent systems.';
export const siteStructuredData = {
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'WebSite','@id':`${siteOrigin}/#website`,url:siteOrigin,name:'POBU Company',alternateName:['포부 컴퍼니','포부 게임즈','POBU','POBU Games','포부컴퍼니'],inLanguage:['en','ko'],publisher:{'@id':`${siteOrigin}/#organization`}},
  {'@type':'Organization','@id':`${siteOrigin}/#organization`,name:'POBU Company',alternateName:['포부 컴퍼니','포부 게임즈','POBU Games','포부'],url:siteOrigin,description:englishDescription,slogan:'Think. Build. Beyond.'}
 ]
};
