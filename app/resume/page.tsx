import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이력서 & 자기소개서 | Kim DongGyu",
  description: "Kim DongGyu의 경력, 자격증과 자기소개서입니다.",
};

const experiences = [
  {
    period: "2023. 12 — 현재",
    company: "(주)데이터이음",
    position: "플랫폼사업실 개발2팀 · 연구원",
    description: "공공 교육 플랫폼을 구축·운영하는 회사로, 다채움, KISA 클라우드 서비스 보안인증(CSAP) 기준 대응을 위한 알콩, 늘봄학교, 기초학력 진단·보정, 강원도 진로교육 서비스의 개발과 운영을 담당하고 있습니다.",
  },
  {
    period: "2020. 11 — 2023. 06",
    company: "(주)모바일인포",
    position: "웹퍼블리셔 · 2년 8개월",
    description: "기업과 소상공인의 홈페이지 제작 및 온라인 광고를 수행하는 웹에이전시로, HTML, CSS, JavaScript를 활용한 고객사 맞춤형 홈페이지 제작과 운영·유지보수를 담당했습니다.",
  },
];

const coverLetters = [
  {
    label: "성장과정",
    title: "새로운 환경에 도전하며, 문제를 해결할 수 있는 개발자로 성장했습니다",
    paragraphs: [
      "새로운 환경에 놓였을 때 일단 해보면서 배우는 편입니다. 익숙하지 않은 문제도 직접 부딪혀 보고, 막히는 부분을 하나씩 풀어가는 과정에서 많이 성장했습니다.",
      "처음부터 개발자를 목표로 했던 것은 아닙니다. 첫 직장에서는 HTML과 CSS로 웹페이지를 만들었습니다. 화면을 구현하다 보니 그 뒤에서 데이터가 어떻게 움직이고 서비스가 어떤 구조로 동작하는지 궁금해졌고, 그 관심이 백엔드 개발로 진로를 바꾸는 계기가 됐습니다. 이후 Java와 Spring을 공부하며 필요한 기반을 쌓았습니다.",
      "현재는 공공 교육 플랫폼을 만드는 데이터이음에서 다채움, CSAP 기준 대응 알콩, 늘봄학교, 기초학력 진단·보정, 강원도 진로교육 서비스를 개발하고 운영하고 있습니다. 처음에는 요청받은 기능을 정확히 구현하는 데 집중했지만, 여러 서비스를 맡으면서 기능 하나도 사용자와 운영 흐름 안에서 봐야 한다는 점을 배웠습니다.",
      "신규 기능 개발과 기존 기능 개선은 물론 SQL 작성, 외부 API 연동, 파일 처리와 운영 장애 대응도 경험했습니다. 개발 환경에서는 잘 되던 기능이 운영 데이터나 서버 환경 때문에 예상과 다르게 동작하는 경우도 있었습니다. 그럴 때마다 로그와 데이터를 비교하고 요청 흐름을 따라가며 원인을 찾았습니다. 이 과정에서 문제를 막연히 추측하기보다 확인할 수 있는 것부터 좁혀가는 습관이 생겼습니다.",
      "교육 서비스는 기획자, 퍼블리셔, 개발자, 인프라 담당자가 함께 맞춰야 할 부분이 많았습니다. 같은 요구사항도 역할에 따라 다르게 이해할 수 있어 제가 이해한 내용을 다시 확인하고, 기술적으로 어려운 부분은 가능한 대안과 함께 설명하려고 했습니다.",
      "요즘은 AI를 코드 분석과 반복 작업에 활용하고 있으며 Docker, Kubernetes, CI/CD도 꾸준히 공부하고 있습니다. 새로운 기술을 많이 아는 것보다 필요한 곳에 제대로 적용하는 것이 더 중요하다고 생각합니다. 앞으로도 서비스의 흐름을 이해하고, 문제가 생겼을 때 원인을 끝까지 찾아가는 개발자로 일하고 싶습니다.",
    ],
  },
  {
    label: "성격 및 강점",
    title: "소통을 통해 함께 해결책을 만들어가는 개발자",
    paragraphs: [
      <>사람들과 자연스럽게 어울리고 먼저 대화를 시작하는 편입니다.<br />새로운 환경에서도 구성원들과 비교적 빠르게 관계를 만들고 편하게 의견을 주고받습니다.</>,
      "실무에서는 기획자, 퍼블리셔, 개발자, 인프라 담당자와 자주 협업했습니다. 외부 시스템을 연계할 때는 타 업체 개발 담당자와 직접 내용을 맞추기도 했습니다.",
      "요구사항이 명확하지 않거나 기존 시스템과 충돌할 때에는 혼자 판단하기보다 기획의 정확한 방향을 위해 관련 담당자와 내용을 재차 확인하고 가능한 방법을 함께 논의합니다. 수정된 요구사항을 다시 정리해 공유하고, 기술적으로 어려운 부분이 생길 경우 단순히 불가능하다고 말하기보다 적용 가능한 대안을 제시합니다.",
      "장애가 발생하면 누구의 문제인지부터 따지기보다 우선 로그와 데이터를 확인합니다. 제가 파악한 요청 흐름과 확인 결과를 공유하고, 관련 담당자와 함께 범위를 좁혀가며 해결해 왔습니다.",
      "밝고 친화적인 성격 덕분에 편하게 의견을 나누는 분위기를 만드는 편이지만, 업무에서는 일정과 책임을 가볍게 생각하지 않습니다. 맡은 일은 중간 상황을 공유하고 끝까지 마무리하려고 합니다.",
      "기술적인 실력을 계속 쌓는 동시에, 동료들이 편하게 의견을 나눌 수 있고 문제가 생겼을 때 함께 답을 찾을 수 있는 개발자가 되고 싶습니다.",
    ],
  },
  {
    label: "지원동기",
    title: "서비스를 이해하고 함께 성장하는 개발자",
    paragraphs: [
      "다채움, CSAP 기준 대응 알콩, 늘봄학교, 기초학력 진단·보정, 강원도 진로교육 서비스 등 다양한 프로젝트를 수행하며 Java와 Spring 기반 웹서비스의 개발과 운영을 경험했습니다. 신규 기능 개발, 기존 시스템 개선, 데이터베이스와 SQL 작업, 외부 API 연동 및 운영 장애 대응을 수행하며 실무 역량을 쌓았습니다.",
      "서비스를 운영해 보니 기능 하나도 애플리케이션만으로 동작하지 않았습니다. 데이터베이스와 서버, 외부 시스템이 모두 연결돼 있었고, 한쪽의 작은 변경이 다른 기능에 영향을 주기도 했습니다. 장애를 해결하려고 로그와 데이터를 따라가다 보니 자연스럽게 서비스 전체 구조를 보는 데 관심이 커졌습니다.",
      "저는 새로운 기술을 많이 쓰는 것 자체가 좋은 개발이라고 생각하지 않습니다. 지금 서비스에 필요한지, 기존 구조와 잘 맞는지 판단한 뒤 사용하는 것이 더 중요합니다. Java와 Spring을 중심에 두고 API 설계, 데이터베이스, 서버와 네트워크를 더 깊이 공부하는 이유도 여기에 있습니다. Docker, Kubernetes, CI/CD 역시 개발 이후의 흐름을 이해하기 위해 경험을 넓혀가고 있습니다.",
      "AI 같은 도구는 코드 분석이나 반복 작업에 적극적으로 활용하고 있습니다. 다만 요구사항을 이해하고 구조를 판단하며 결과를 검증하는 일은 개발자가 책임져야 한다고 봅니다.",
      "지금까지 쌓은 경험을 바탕으로 새로운 코드와 업무를 빠르게 파악하고, 팀원들과 필요한 내용을 정확히 맞추며 안정적인 서비스를 만드는 데 보탬이 되고 싶습니다.",
    ],
  },
  {
    label: "입사 후 포부",
    title: "함께 일하고 싶은 개발자",
    paragraphs: [
      <>입사 후 가장 먼저 하고 싶은 일은<br />새로운 서비스와 개발 환경을 빠르게 익혀 팀이 안심하고 일을 맡길 수 있는 백엔드 개발자가 되는 것입니다.</>,
      "여러 프로젝트를 개발하고 운영하며 기존 코드를 파악하고 필요한 부분을 개선하는 경험을 쌓았습니다. 새로운 환경에서도 코드와 업무 흐름을 먼저 살피고, 모르는 부분은 확인하면서 맡은 일을 책임 있게 진행하겠습니다.",
      "개인이 기술적으로 돋보이는 것보다 팀이 안정적으로 결과를 내는 일이 더 중요합니다. 부족한 부분은 겸손하게 배우고, 제가 먼저 경험한 내용은 동료가 같은 시행착오를 반복하지 않도록 공유하겠습니다.",
      "피드백은 빠르게 확인하고 그 배경까지 이해하려고 합니다. 의견이 다를 때도 제 방식을 고집하기보다 서로의 근거를 듣고 현재 서비스에 맞는 방법을 찾겠습니다. 진행 상황이나 예상되는 문제를 미리 공유하는 것도 협업의 기본이라고 생각합니다.",
      "기능이 동작하는 데서 끝내지 않고 이후에 수정하기 쉬운지, 데이터 처리가 무리하지 않는지, 운영 중 문제가 될 부분은 없는지 한 번 더 살피겠습니다. 일정에 영향을 줄 만한 요소가 보이면 늦기 전에 알리고 우선순위를 함께 조정하겠습니다.",
      "지금은 직책보다 맡은 업무의 완성도와 동료의 신뢰를 쌓는 것이 먼저라고 생각합니다. 새로운 의견은 적극적으로 제안하되 혼자 결정하지 않고, 대화가 잘 통하고 함께 문제를 풀기 편한 개발자로 기억되고 싶습니다.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="detail-header">
        <a href="/">KIM DONGGYU</a>
        <nav aria-label="이력서 메뉴"><a className="nav-active" href="#experience" aria-current="location">경력</a><a href="#cover-letter">자기소개서</a><a href="/career">경력기술서</a></nav>
        <span>RESUME</span>
      </header>

      <section className="resume-hero">
        <p>BACK-END DEVELOPER · RESUME</p>
        <h1>이력서 &<br />자기소개서</h1>
        <div><span>Kim DongGyu</span><a href="mailto:kdg3795@naver.com">kdg3795@naver.com ↗</a></div>
      </section>

      <section className="resume-section" id="experience">
        <aside><span>01</span><span>EXPERIENCE</span></aside>
        <div><h2>경력</h2><div className="resume-experiences">{experiences.map((item) => <article key={item.company}><time>{item.period}</time><div><h3>{item.company}</h3><p className="resume-position">{item.position}</p><p>{item.description}</p></div></article>)}</div></div>
      </section>

      <section className="resume-section resume-certifications">
        <aside><span>02</span><span>LICENSES</span></aside>
        <div><h2>자격증</h2><div className="resume-license"><time>2020. 07</time><strong>웹디자인기능사</strong><span>한국산업인력공단</span></div><div className="resume-license"><time>2020. 01</time><strong>ACA Illustrator</strong><span>Adobe</span></div></div>
      </section>

      <section className="cover-letter" id="cover-letter">
        <div className="cover-intro"><span>03</span><p>SELF INTRODUCTION</p><h2>자기소개서</h2></div>
        <div className="cover-items">{coverLetters.map((item, index) => <article key={item.label}><div className="cover-heading"><span>{String(index + 1).padStart(2, "0")}</span><p>{item.label}</p><h3>{item.title}</h3></div><div className="cover-body">{item.paragraphs.map((paragraph, paragraphIndex) => <p key={`${item.label}-${paragraphIndex}`}>{paragraph}</p>)}</div></article>)}</div>
      </section>

      <footer className="detail-footer"><a href="/">← 프로필로 돌아가기</a><a href="/career">경력기술서 보기 →</a></footer>
    </main>
  );
}
