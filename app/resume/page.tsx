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
      "저는 새로운 환경과 문제를 마주했을 때 피하기보다 직접 부딪히고 해결하는 과정에서 성장해 왔습니다.",
      "처음부터 개발자의 길을 걸었던 것은 아닙니다. 첫 직장에서는 HTML과 CSS를 활용한 웹페이지 제작 업무를 담당했지만, 정해진 화면을 구현하는 것을 넘어 서비스의 데이터가 어떻게 처리되고 시스템이 어떻게 동작하는지에 관심을 가지게 되었습니다. 이러한 관심을 계기로 백엔드 개발자로 진로를 전환했고, Java와 Spring을 중심으로 개발 역량을 쌓기 시작했습니다.",
      "이후 공공 교육 플랫폼 제작사인 데이터이음에서 다채움, CSAP 기준 대응을 위한 알콩, 늘봄학교, 기초학력 진단·보정, 강원도 진로교육 서비스를 개발하고 운영하며 실무 경험을 쌓았습니다. 처음에는 주어진 기능을 정확하게 구현하는 것이 가장 중요한 목표였지만, 각기 다른 사용자와 업무 흐름을 가진 서비스를 경험하면서 개발자의 역할은 단순히 코드를 작성하는 것에 그치지 않는다는 것을 배웠습니다.",
      "Java와 Spring 기반 웹서비스에서 신규 기능 개발과 기존 기능 개선, 데이터베이스 설계 및 SQL 작성, 외부 API 연동, 파일 처리 등 다양한 업무를 수행했습니다. 실제 사용자가 이용하는 서비스를 운영하며 데이터 정합성 문제, 외부 시스템 연동 오류, 서버 환경에 따른 장애를 경험했고, 로그와 데이터 및 서버 환경을 하나씩 확인하며 원인을 찾아 해결하는 능력을 키웠습니다.",
      "다채움과 CSAP 기준 대응 알콩, 늘봄학교 등 교육 서비스에서는 하나의 기능도 여러 담당자의 협의와 검토를 거치는 경우가 많았습니다. 기획자, 퍼블리셔, 개발자, 인프라 담당자와 협업하면서 요구사항을 정확하게 이해하고 자신의 의견을 명확하게 전달하는 커뮤니케이션의 중요성을 배웠습니다.",
      "최근에는 AI를 개발 과정에 활용해 코드 분석, 문제 해결과 반복 작업의 효율을 높이는 방법을 익히고 있으며, Docker, Kubernetes, CI/CD 등 개발부터 배포·운영까지 이어지는 전체 과정에 대한 이해도 넓혀가고 있습니다.",
      "앞으로도 익숙한 방식에 안주하지 않고 새로운 기술을 실제 업무에 적용하며, 문제가 발생했을 때 원인을 찾고 해결책을 제시할 수 있는 백엔드 개발자로 성장하겠습니다.",
    ],
  },
  {
    label: "성격 및 강점",
    title: "소통을 통해 함께 해결책을 만들어가는 개발자",
    paragraphs: [
      <>저의 가장 큰 강점은 사람들과 자연스럽게 어울리고 적극적으로 소통하는 능력입니다.<br />먼저 다가가 대화를 시작하는 편이며, 새로운 환경에서도 구성원들과 빠르게 관계를 형성합니다.</>,
      "하나의 기능을 개발하기 위해 기획자, 퍼블리셔, 개발자, 인프라 담당자와 의견을 주고받는 것은 물론이고, 외부 시스템 연계 과정에서는 타 업체 개발 담당자와 협의하기도 했습니다.",
      "요구사항이 명확하지 않거나 기존 시스템과 충돌할 때에는 혼자 판단하기보다 기획의 정확한 방향을 위해 관련 담당자와 내용을 재차 확인하고 가능한 방법을 함께 논의합니다. 수정된 요구사항을 다시 정리해 공유하고, 기술적으로 어려운 부분이 생길 경우 단순히 불가능하다고 말하기보다 적용 가능한 대안을 제시합니다.",
      "장애가 발생했을 때도 책임 소재를 구분하기보다 문제에 빠르게 대응하는 것을 가장 우선시합니다. 로그와 데이터를 확인하고 정확한 프로세스 내용을 공유하면서 관련 담당자와 함께 원인을 좁혀 문제를 해결합니다.",
      "밝고 친화적인 성격을 바탕으로 편하게 의견을 나눌 수 있는 분위기를 만들며, 업무에서는 일정과 책임을 중요하게 생각하고 맡은 일을 끝까지 마무리합니다.",
      <>앞으로도 기술 전문성을 높이는 데 최선을 다하며, 동료들과 적극적으로 소통해 기술과 사람을 연결하는 <strong className="cover-emphasis">협업의 연결고리</strong>가 되어 팀이 더 좋은 결과를 만들 수 있도록 기여하겠습니다.</>,
    ],
  },
  {
    label: "지원동기",
    title: "서비스를 이해하고 함께 성장하는 개발자",
    paragraphs: [
      "다채움, CSAP 기준 대응 알콩, 늘봄학교, 기초학력 진단·보정, 강원도 진로교육 서비스 등 다양한 프로젝트를 수행하며 Java와 Spring 기반 웹서비스의 개발과 운영을 경험했습니다. 신규 기능 개발, 기존 시스템 개선, 데이터베이스와 SQL 작업, 외부 API 연동 및 운영 장애 대응을 수행하며 실무 역량을 쌓았습니다.",
      "실제 서비스를 개발하고 운영하면서 하나의 기능이 사용자에게 제공되기까지 애플리케이션뿐 아니라 데이터베이스, 서버, 외부 시스템 등 다양한 요소가 연결된다는 것을 경험했습니다. 로그와 데이터를 분석하고 서버 환경과 애플리케이션 흐름을 확인하는 과정을 반복하며 서비스 전체 구조를 이해하는 개발자가 되고 싶다는 목표를 갖게 되었습니다.",
      "새로운 기술을 무조건 사용하는 것보다 현재 서비스에 필요한 기술을 판단하고 적절하게 적용하는 것이 중요하다고 생각합니다. Java와 Spring 역량을 깊게 가져가는 동시에 API 설계, 데이터베이스, 서버와 네트워크, 클라우드, Docker, Kubernetes, CI/CD로 역량을 확장하고 있습니다.",
      "AI를 비롯한 새로운 개발 도구도 적극적으로 활용해 반복 작업을 효율화하되, 요구사항을 이해하고 시스템 구조를 설계하며 문제 원인을 판단하는 개발자의 역할을 놓치지 않겠습니다.",
      "지금까지의 실무 경험을 바탕으로 새로운 환경에서도 빠르게 시스템을 이해하고 팀원들과 적극적으로 소통하며, 안정적인 서비스를 만들어 회사와 함께 성장하는 개발자가 되겠습니다.",
    ],
  },
  {
    label: "입사 후 포부",
    title: "함께 일하고 싶은 개발자",
    paragraphs: [
      <>입사 후 가장 먼저 이루고 싶은 목표는<br />새로운 서비스와 개발 환경에 빠르게 적응하고, 팀에 안정적으로 기여하는 백엔드 개발자가 되는 것입니다.</>,
      "앞서 말씀드린 다양한 프로젝트의 개발·운영 경험을 바탕으로 기존 코드를 분석하고, 서비스 구조와 업무를 빠르게 파악해 맡은 역할을 책임감 있게 수행하겠습니다.",
      "개인의 기술적 성취를 드러내는 것보다 팀이 안정적으로 결과를 만들어내는 과정을 더 중요하게 생각합니다. 제가 부족한 부분은 겸손하게 배우고, 경험을 통해 알게 된 내용은 동료가 활용할 수 있도록 적극적으로 공유하겠습니다. 서로의 강점을 연결해 혼자보다 팀으로 더 나은 결과를 만드는 개발자가 되겠습니다.",
      "피드백에는 빠르게 반응하되 단순히 수용하는 데 그치지 않고 의도와 배경을 정확히 이해하겠습니다. 동료들의 의견을 충분히 듣고 서로 다른 의견이 있을 때는 기술적 근거와 서비스 상황을 바탕으로 실행 가능한 방향을 함께 찾겠습니다. 진행 상황과 문제도 투명하게 공유해 대화가 잘 통하고 신뢰할 수 있는 동료가 되겠습니다.",
      "기능 구현뿐 아니라 코드의 유지보수성, 데이터 처리 효율, 운영 안정성과 일정까지 함께 고려하겠습니다. 예상되는 기술적 위험과 일정 변수를 미리 공유하고 우선순위를 조율하여, 문제가 커진 뒤 대응하기보다 팀이 계획적으로 해결할 수 있도록 기여하겠습니다.",
      "현재는 직책이나 역할의 확장보다 맡은 업무의 완성도와 팀의 신뢰를 쌓는 데 집중하겠습니다. 개발 일정과 업무 우선순위를 이해하고 진행 상황과 위험 요소를 정확하게 공유하며, 동료들의 의견을 연결해 팀이 원활하게 협업할 수 있도록 돕는 개발자가 되겠습니다.",
      "진취적으로 새로운 방향을 제안하되 독단적으로 결정하지 않고, 팀워크를 가장 중요한 기준으로 삼겠습니다. 개인의 성장과 팀의 성과가 함께 이어질 수 있도록 책임감 있게 행동하며 서비스와 조직에 지속적으로 기여하겠습니다.",
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
