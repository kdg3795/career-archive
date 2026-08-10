const profile = {
  name: "WEB DEVELOPER",
  role: "웹개발자 · 교육 플랫폼 개발",
  experiences: [
    {
      period: "2023. 12 — PRESENT",
      company: "(주)데이터이음",
      position: "플랫폼사업실 개발2팀 · 연구원",
      summary: "교육청 플랫폼 개발 프로젝트에 참여해 교직원과 학생이 수업에 활용할 수 있는 기능을 설계하고 구현했습니다.",
      details: [
        "웹개발자로서 신규 기능 개발부터 배포와 유지보수까지 전 과정에 참여했습니다.",
        "사용자 편의성과 시스템 안정성을 개선해 원활한 수업 진행에 기여했습니다.",
      ],
    },
    {
      period: "2020. 11 — 2023. 06",
      company: "(주)모바일인포",
      position: "웹퍼블리셔 · 2년 8개월",
      summary: "광고회사 웹퍼블리셔로 근무하며 네이버 모두를 활용한 고객사 홈페이지를 제작하고 관리했습니다.",
      details: [
        "HTML, CSS, JavaScript를 활용해 소규모 사업장의 맞춤형 홈페이지를 직접 구현했습니다.",
        "고객 요구사항을 반영해 구조와 기능을 설계하고 유지보수까지 담당했습니다.",
      ],
    },
  ],
  projects: [
    {
      type: "실무 프로젝트 · 진행 중",
      period: "2026. 07 — PRESENT",
      title: "강원도 진로교육 서비스",
      description: "강원도 진로교육 서비스의 안정적인 운영과 콘텐츠 관리 효율을 높이기 위한 웹서비스 개발 프로젝트입니다.",
      highlights: [
        "관리자가 게시 기간과 노출 여부를 제어할 수 있는 공통 배너·팝업 등록 및 관리 기능을 구현했습니다.",
        "관리자와 사용자 화면을 연동하고, 개인정보처리방침 등록·이력 관리 기능을 개발했습니다.",
        "공통 기능을 Core·Admin·Front 모듈로 분리해 재사용성과 유지보수성을 높였습니다.",
      ],
      stack: ["Java", "Spring Boot", "eGovFrame", "Thymeleaf", "MyBatis", "MariaDB", "Git"],
    },
    {
      type: "실무 프로젝트",
      period: "EDUCATION PLATFORM",
      title: "다채움 클래스·멤버 서비스",
      description: "클래스 개설부터 구성원 가입·승인, 권한 관리, 수업 운영과 콘텐츠 활용까지 이어지는 교육 플랫폼 핵심 서비스를 개발하고 운영했습니다.",
      highlights: [
        "학생·교사·관리자 역할에 따른 권한과 접근 범위를 구분하고 클래스 초대·승인·그룹 관리 흐름을 구현했습니다.",
        "구성원 대량 등록과 Excel 양식 제공 기능을 개발해 관리자의 반복 업무를 줄였습니다.",
        "외부 화상수업 API와 JWT 갱신 로직을 연동하고, SQL 정합성 및 Spring·MyBatis·Redis 운영 오류를 개선했습니다.",
      ],
      stack: ["Java", "Spring MVC", "eGovFrame", "JSP", "JavaScript", "MyBatis", "MariaDB", "Redis", "JWT"],
    },
    {
      type: "실무 프로젝트",
      period: "EDUCATION PLATFORM",
      title: "기초학력 진단·보정 시스템",
      description: "학생의 기초학력을 진단하고 검사 결과를 기반으로 교사가 학습 상태를 확인할 수 있도록 지원하는 시스템을 개발하고 운영했습니다.",
      highlights: [
        "학년·과목·검사지 조건과 일반·세트 문항의 계층 구조를 반영한 문항 조회 및 연계 기능을 구현했습니다.",
        "진단 결과와 학생 데이터를 연결하고 교사용 매뉴얼·교육 자료의 다운로드 및 CDN 연동을 개선했습니다.",
        "외부 문항 API 연동과 Tomcat 배포, 라이브러리 충돌, 데이터 조회 장애를 분석하고 해결했습니다.",
      ],
      stack: ["Java", "Spring MVC", "eGovFrame", "JSP", "JavaScript", "MyBatis", "MariaDB", "REST API", "CDN"],
    },
    {
      type: "실무 프로젝트",
      period: "EDUCATION PLATFORM",
      title: "늘봄학교 서비스",
      description: "학생과 학부모의 프로그램 검색·신청부터 학교와 운영자의 프로그램·신청자 관리까지 지원하는 서비스를 개발하고 운영했습니다.",
      highlights: [
        "학교·프로그램·운영기관·학년·요일·기간·신청 상태를 조합한 다중 검색과 신청 흐름을 구현했습니다.",
        "사용자 유형과 권한에 맞춰 메뉴와 화면 접근을 제어하고 사용자·관리자 데이터 흐름을 연결했습니다.",
        "PC와 모바일 환경을 고려해 공통 레이아웃과 화면 구조를 개선하고 모듈별 유지보수를 수행했습니다.",
      ],
      stack: ["Java", "Spring MVC", "eGovFrame", "JSP", "HTML5", "CSS3", "JavaScript", "MyBatis", "MariaDB"],
    },
    {
      type: "팀 프로젝트",
      period: "2023. 09 — 2023. 11",
      title: "알고리즘 기반 영화 추천 서비스",
      description: "사용자의 영화 취향과 평가 데이터를 기반으로 맞춤형 영화를 추천하고 상세·OTT 정보를 제공하는 반응형 웹서비스를 개발했습니다.",
      highlights: [
        "장르·키워드를 활용한 콘텐츠 기반 추천과 사용자 평가를 활용한 협업 필터링을 구현했습니다.",
        "Spring Boot 웹서비스와 Flask 추천 API를 연동해 Java와 Python 서비스를 통합했습니다.",
        "TMDB 데이터 수집을 자동화하고 모바일 사용성을 개선해 추천·상세·댓글·연관 영화 흐름을 완성했습니다.",
      ],
      stack: ["React", "Spring Boot", "Python", "Flask", "scikit-learn", "Surprise", "MariaDB", "TMDB API"],
    },
  ],
  certifications: [
    { date: "2020. 07", name: "웹디자인기능사", issuer: "한국산업인력공단" },
    { date: "2020. 01", name: "ACA Illustrator", issuer: "Adobe" },
  ],
};

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="맨 위로 이동">
          {profile.name}
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#career">경력</a>
          <a href="/career">경력기술서</a>
          <a href="#certifications">자격증</a>
        </nav>
        <span className="contact-link">CAREER PROFILE</span>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-kicker reveal reveal-one">
          <span>CAREER PROFILE</span>
          <span>SEOUL · KR</span>
        </div>
        <h1 id="hero-title" className="reveal reveal-two">
          경험을 연결해
          <br />
          <span className="outline-text">분명한 변화</span>를 만듭니다.
        </h1>
        <div className="hero-footer reveal reveal-three">
          <p>{profile.role}</p>
          <a href="#career" aria-label="경력으로 이동">
            SCROLL TO READ <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="orbit-mark" aria-hidden="true">
          <span>OPEN TO CONVERSATION · OPEN TO CONVERSATION · </span>
        </div>
      </section>

      <section className="career section-shell" id="career" aria-labelledby="career-title">
        <div className="section-index">
          <span>01</span>
          <span>EXPERIENCE</span>
        </div>
        <div className="section-content">
          <p className="eyebrow">WORK EXPERIENCE</p>
          <h2 id="career-title">경력</h2>
          <div className="timeline">
            {profile.experiences.map((experience, index) => (
              <article className="experience" key={`${experience.company}-${experience.period}`}>
                <div className="experience-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="experience-period">{experience.period}</div>
                <div className="experience-body">
                  <h3>{experience.company}</h3>
                  <p className="position">{experience.position}</p>
                  <p className="summary">{experience.summary}</p>
                  <ul>
                    {experience.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <a className="career-detail-link" href="/career">
            프로젝트별 경력기술서 보기 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="certifications section-shell" id="certifications" aria-labelledby="certifications-title">
        <div className="section-index">
          <span>02</span>
          <span>LICENSES</span>
        </div>
        <div className="section-content">
          <p className="eyebrow">CERTIFICATIONS & LICENSES</p>
          <h2 id="certifications-title">자격증</h2>
          <div className="certification-list">
            {profile.certifications.map((certification) => (
              <article className="certification" key={`${certification.date}-${certification.name}`}>
                <time>{certification.date}</time>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p>CAREER PROFILE</p>
          <div className="footer-title">경험으로 증명하고<br />기술로 연결합니다.</div>
        </div>
        <div className="footer-meta">
          <span>{profile.name}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
