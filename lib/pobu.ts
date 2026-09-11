export type Language = "ko" | "en";
export type Localized = Record<Language, string>;

export const siteConfig = {
  logo: null as string | null,
  contacts: [
    { label: "Email", href: null },
    { label: "GitHub", href: null },
    { label: "Instagram", href: null },
  ] as { label: string; href: string | null }[],
};

export const fields = [
  { name: "AI", label: { ko: "AI", en: "AI" }, description: { ko: "GPU 사용량을 줄이면서도 실용적인 성능을 내는 고효율 AI를 연구합니다.", en: "Researching efficient AI that reduces GPU demand while retaining practical performance." } },
  { name: "Software", label: { ko: "소프트웨어", en: "Software" }, description: { ko: "사람의 일상에 실제로 도움이 되는 소프트웨어와 AI 서비스를 만듭니다.", en: "Building software and AI services that provide practical help in everyday life." } },
  { name: "Games", label: { ko: "게임", en: "Games" }, description: { ko: "익숙한 장르에 새로운 규칙과 성장 경험을 더한 게임을 만듭니다.", en: "Creating games that add new rules and progression systems to familiar genres." } },
  { name: "Agents", label: { ko: "에이전트", en: "Agents" }, description: { ko: "사용자의 목표를 이해하고 여러 작업을 수행하는 에이전트 시스템을 개발합니다.", en: "Developing agent systems that understand goals and carry out multi-step tasks." } },
];

export const projects = [
  {
    id: "efficient-ai", field: "AI", status: "development" as const,
    title: { ko: "고효율 AI 연구", en: "Efficient AI Research" },
    description: { ko: "하드웨어를 직접 바꾸기 어려운 환경에서도 작동할 수 있도록 GPU 사용량을 줄이는 AI를 연구하고 있습니다.", en: "We are researching AI that uses less GPU capacity and can operate where changing the underlying hardware is difficult." },
    detail: { ko: "더 큰 연산 장비에 의존하는 대신 모델의 구조와 계산 방식을 다시 살펴봅니다. 현재 개발 및 검증 단계에 있습니다.", en: "Instead of relying on larger compute, we are rethinking model structure and computation. The work is currently in development and validation." },
    consoleTitle: { ko: "효율성 연구 콘솔", en: "Efficiency Research Console" },
  },
  {
    id: "ondami", field: "Software", status: "development" as const,
    title: { ko: "AI 온담이", en: "AI Ondami" },
    description: { ko: "고령화 사회에서 외로움을 느끼는 어르신들의 일상적인 말동무가 되어드리는 대화형 AI입니다.", en: "A conversational AI designed to offer everyday companionship to older adults who may experience loneliness in an aging society." },
    detail: { ko: "부담 없이 대화를 이어가며 따뜻한 시간을 보낼 수 있는 경험을 목표로 자체 개발하고 있습니다.", en: "We are developing Ondami to support easy, warm conversations that fit naturally into daily life." },
    consoleTitle: { ko: "온담이 대화 흐름", en: "Ondami Conversation Flow" },
  },
  {
    id: "beggar-growth-game", field: "Games", status: "release" as const,
    title: { ko: "포부 게임즈 · 거지 키우기", en: "POBU Games · Beggar Growth Game" },
    description: { ko: "GTA의 자유로운 진행 방식에서 영감을 받아 성장 요소를 결합한 게임입니다. 핵심 개발을 마치고 배포를 준비하고 있습니다.", en: "A progression game inspired by GTA's open-ended play. Core development is complete and release preparation is underway." },
    detail: { ko: "플레이어의 선택과 축적이 성장으로 이어지는 경험을 중심으로 마지막 배포 작업을 진행하고 있습니다.", en: "Final release work is focused on an experience where player choices and accumulation drive progression." },
    consoleTitle: { ko: "게임 진행 시스템", en: "Game Progression System" },
  },
  {
    id: "jarvis", field: "Agents", status: "release" as const,
    title: { ko: "자비스", en: "Jarvis" },
    description: { ko: "사용자의 목표를 이해하고 필요한 작업을 연결해 수행하는 POBU의 자체 에이전트 모델입니다.", en: "POBU's in-house agent model, designed to understand user goals and connect the tasks needed to achieve them." },
    detail: { ko: "핵심 개발을 완료했으며 안정화와 배포 준비를 진행하고 있습니다.", en: "Core development is complete, with stabilization and release preparation now in progress." },
    consoleTitle: { ko: "자비스 에이전트 흐름", en: "Jarvis Agent Flow" },
  },
];

export const team = [
  { name: { ko: "황재찬", en: "Hwang Jaechan" }, role: { ko: "풀스택 개발자", en: "Full-stack Developer" } },
  { name: { ko: "김태호", en: "Kim Taeho" }, role: { ko: "QA 담당자", en: "QA Lead" } },
  { name: { ko: "오서준", en: "Oh Seojun" }, role: { ko: "총괄 디자이너", en: "Lead Designer" } },
];
