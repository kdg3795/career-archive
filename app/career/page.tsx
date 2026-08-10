import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "경력기술서 | Career Archive",
  description: "교육 플랫폼 웹개발 프로젝트별 담당 업무와 주요 성과를 정리한 경력기술서입니다.",
};

const projects = [
  {
    category: "실무 프로젝트 · 진행 중",
    period: "2026. 07 — 현재",
    title: "강원도 진로교육 서비스 개발 및 운영",
    overview: "강원도 진로교육 서비스의 안정적인 운영과 사용자 편의성 향상을 위한 웹서비스 개발 및 개선 프로젝트입니다.",
    responsibilities: [
      "Spring Boot와 Thymeleaf 기반 웹서비스 개발",
      "공통 배너 및 팝업 등록·노출·관리 기능 개발",
      "개인정보처리방침 등록과 이력 관리 기능 개발",
      "사용자 화면과 관리자 화면 간 데이터 연동",
      "공통 기능의 재사용성을 고려한 화면 및 서버 구조 설계",
      "운영 요구사항에 따른 기존 기능 수정 및 오류 대응",
    ],
    outcomes: [
      "관리자가 배너와 팝업의 게시 기간 및 노출 여부를 직접 관리할 수 있도록 구현했습니다.",
      "관리자에서 등록한 콘텐츠가 설정 조건에 따라 사용자 화면에 노출되도록 연동했습니다.",
      "개인정보처리방침을 운영 정책에 맞게 관리하고 이력을 확인할 수 있도록 개발했습니다.",
      "반복되는 공통 기능을 Core·Admin·Front 모듈로 분리해 유지보수성을 높였습니다.",
    ],
    stack: ["Java", "Spring Boot", "eGovFrame", "Spring MVC", "Thymeleaf", "MyBatis", "MariaDB", "Git"],
  },
  {
    category: "실무 프로젝트",
    period: "교육 플랫폼",
    title: "다채움 알콩 클래스·멤버 서비스 개발 및 운영 (CSAP 대응)",
    overview: "한국인터넷진흥원(KISA)의 클라우드 서비스 보안인증(CSAP) 기준에 대응하여 공공 교육 플랫폼을 안전한 클라우드 환경에서 제공하기 위한 프로젝트입니다. 클래스 개설부터 구성원 관리, 수업 운영과 학습 콘텐츠 활용까지 지원하는 클래스·멤버 서비스를 개발하고 운영했습니다.",
    responsibilities: [
      "클래스 개설·수정·삭제와 운영 관리 기능 개발",
      "학생·교사 구성원의 가입·승인·초대·대량 등록 기능 개발",
      "사용자 역할과 관리자 여부에 따른 접근 권한 제어",
      "수업 등록·수정·조회와 수업별 학습 콘텐츠 연계",
      "사용자·관리자 화면 및 구성원 그룹 관리 기능 개발",
      "외부 화상수업 API, JWT 토큰 갱신 및 Redis 데이터 처리",
      "운영 오류 분석과 SQL 데이터 정합성 개선",
    ],
    outcomes: [
      "클래스 개설부터 구성원 가입·승인과 수업 운영까지 이어지는 전체 업무 흐름을 구현했습니다.",
      "학생·교사·클래스 관리자별 기능과 접근 범위를 구분해 권한 체계를 적용했습니다.",
      "구성원 대량 등록과 Excel 양식 제공 기능으로 관리자의 반복 작업을 줄였습니다.",
      "외부 화상수업 연동과 JWT 만료 확인·갱신 로직을 구현했습니다.",
      "클래스·구성원·수업·콘텐츠 관계를 고려한 SQL을 개발하고 운영 데이터 문제를 개선했습니다.",
    ],
    stack: ["Java", "Spring MVC", "eGovFrame", "JSP", "JSTL", "JavaScript", "jQuery", "MyBatis", "MariaDB", "Redis", "REST API", "JWT", "Tomcat", "Jenkins"],
  },
  {
    category: "실무 프로젝트",
    period: "교육 플랫폼",
    title: "기초학력 진단·보정 시스템 개발 및 운영",
    overview: "학생의 기초학력을 진단하고 검사 결과를 기반으로 교사가 학습 상태를 확인할 수 있도록 지원하는 시스템을 개발하고 운영했습니다.",
    responsibilities: [
      "기초학력 진단검사 사용자·관리자 기능 개발",
      "학생·교사·학교 정보 기반 서비스 기능 구현",
      "학년·과목·검사지별 문항 조회 및 데이터 처리",
      "세트 문항과 하위 문항의 계층 구조를 고려한 문항 연계",
      "검사 결과 조회와 학습 데이터 처리 기능 개발",
      "교육 자료 다운로드, CDN 및 외부 문항 API 연동",
      "서버 로그 기반 운영 장애와 데이터 문제 분석",
    ],
    outcomes: [
      "학년·과목·검사지 조건에 따라 진단 문항을 정확히 제공하는 조회·연계 기능을 구현했습니다.",
      "일반 문항과 세트 문항의 계층 구조 및 제공 순서를 데이터 처리 로직에 반영했습니다.",
      "진단 결과와 학생 정보를 연결해 교사가 학습 상태를 확인할 수 있도록 개발했습니다.",
      "교육 자료 다운로드와 CDN 연동을 개선하고 외부 문항 API 오류를 해결했습니다.",
      "Tomcat 배포, 라이브러리 충돌 및 데이터 조회 과정의 운영 장애를 분석하고 대응했습니다.",
    ],
    stack: ["Java", "Spring MVC", "eGovFrame", "JSP", "JSTL", "JavaScript", "jQuery", "MyBatis", "MariaDB", "REST API", "CDN", "Tomcat", "Linux", "Jenkins"],
  },
  {
    category: "실무 프로젝트",
    period: "교육 플랫폼",
    title: "늘봄학교 서비스 개발 및 운영",
    overview: "학생과 학부모의 프로그램 조회·신청부터 학교와 운영자의 프로그램·신청자 관리까지 지원하는 늘봄학교 서비스를 개발하고 운영했습니다.",
    responsibilities: [
      "늘봄학교 프로그램 조회·신청과 신청 상태 처리 기능 개발",
      "학생·학부모 사용자 화면과 프로그램·신청자 관리자 기능 개발",
      "학교·프로그램·운영기관·학년·운영 기간별 검색 기능 구현",
      "사용자 유형과 권한에 따른 메뉴 및 화면 접근 제어",
      "공지사항·게시판·첨부파일과 공통 레이아웃 기능 개발",
      "사용자·관리자 화면 간 데이터 연동 및 운영 UI 개선",
    ],
    outcomes: [
      "프로그램 검색부터 상세 조회와 신청 결과 확인까지 이어지는 사용자 흐름을 구현했습니다.",
      "연도·학기·학교·상태·운영기관·대상 학년·요일·기간을 조합한 다중 검색을 개발했습니다.",
      "관리자가 프로그램과 신청자를 효율적으로 관리할 수 있는 등록·조회·수정 기능을 구현했습니다.",
      "서버 메뉴 데이터를 활용해 사용자 권한별 공통 메뉴와 화면 구조를 구성했습니다.",
      "PC와 모바일 환경을 고려해 화면 구조를 개선하고 모듈별 유지보수를 수행했습니다.",
    ],
    stack: ["Java", "Spring MVC", "eGovFrame", "JSP", "JSTL", "HTML5", "CSS3", "JavaScript", "jQuery", "MyBatis", "MariaDB"],
  },
  {
    category: "학원 팀 프로젝트",
    period: "2023. 09 — 2023. 11",
    title: "알고리즘을 활용한 영화 추천 사이트",
    overview: "사용자의 영화 취향과 이용 데이터를 기반으로 맞춤형 영화를 추천하고 영화 상세 정보와 시청 가능한 OTT 플랫폼을 제공하는 웹서비스를 개발했습니다.",
    responsibilities: [
      "영화 목록·상세 페이지와 반응형 프런트엔드 구현",
      "콘텐츠 기반 및 사용자 기반 영화 추천 알고리즘 구현",
      "Spring Boot 웹서비스와 Python Flask 추천 API 연동",
      "TMDB API 영화 데이터 수집·전처리 및 주기적 갱신",
      "영화 상세·댓글·OTT 정보·연관 영화 기능 구현",
    ],
    outcomes: [
      "장르·키워드를 활용한 콘텐츠 기반 추천과 사용자 평가 기반 협업 필터링을 구현했습니다.",
      "Java와 Python으로 분리된 기능을 API로 연결해 하나의 서비스로 통합했습니다.",
      "APScheduler로 신규 영화 데이터를 주기적으로 수집하고 모바일 사용성을 개선했습니다.",
    ],
    stack: ["React", "Axios", "Bootstrap", "Java", "Spring Boot", "Python", "Flask", "scikit-learn", "Surprise", "MariaDB", "TMDB API"],
  },
];

export default function CareerPage() {
  return (
    <main className="career-detail-page">
      <header className="detail-header">
        <a href="/" aria-label="메인 페이지로 이동">WEB DEVELOPER</a>
        <nav aria-label="경력기술서 메뉴">
          <a href="/">경력</a>
          <a href="#projects">프로젝트</a>
        </nav>
        <span>CAREER DESCRIPTION</span>
      </header>

      <section className="detail-hero">
        <p>CAREER DESCRIPTION · 2026</p>
        <h1>경력기술서</h1>
        <div>
          <span>교육 플랫폼 웹개발</span>
          <span>프로젝트별 역할과 구현 경험</span>
        </div>
      </section>

      <section className="detail-projects" id="projects">
        {projects.map((project, index) => (
          <article className="detail-project" key={project.title}>
            <aside>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
              <time>{project.period}</time>
            </aside>
            <div className="detail-project-body">
              <h2>{project.title}</h2>
              <p className="detail-overview">{project.overview}</p>
              <div className="detail-columns detail-columns-desktop">
                <h3>담당 업무</h3>
                <h3>주요 업무 및 성과</h3>
                {Array.from({ length: Math.max(project.responsibilities.length, project.outcomes.length) }, (_, rowIndex) => (
                  <div className="detail-column-row" key={rowIndex}>
                    <div className="detail-column-cell">{project.responsibilities[rowIndex] && <span>{project.responsibilities[rowIndex]}</span>}</div>
                    <div className="detail-column-cell">{project.outcomes[rowIndex] && <span>{project.outcomes[rowIndex]}</span>}</div>
                  </div>
                ))}
              </div>
              <div className="detail-columns detail-columns-mobile">
                <section>
                  <h3>담당 업무</h3>
                  <ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
                <section>
                  <h3>주요 업무 및 성과</h3>
                  <ul>{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              </div>
              <ul className="detail-stack" aria-label={`${project.title} 기술 스택`}>
                {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <footer className="detail-footer">
        <a href="/">← 경력 페이지로 돌아가기</a>
        <span>CAREER ARCHIVE</span>
      </footer>
    </main>
  );
}
