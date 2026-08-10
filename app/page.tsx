import Image from "next/image";

export default function Home() {
  return (
    <main className="profile-home">
      <header className="profile-header">
        <span>CAREER ARCHIVE</span>
        <nav aria-label="주요 페이지">
          <a href="/resume">이력서·자기소개서</a>
          <a href="/career">경력기술서</a>
        </nav>
        <span>SEOUL · KR</span>
      </header>

      <section className="profile-stage" aria-labelledby="profile-name">
        <div className="profile-copy">
          <p className="profile-label">BACK-END DEVELOPER</p>
          <h1 id="profile-name">Kim<br />DongGyu</h1>
          <p className="profile-role">Java · Spring 기반 교육 플랫폼 개발자</p>
        </div>

        <div className="profile-photo-frame">
          <Image
            src="/profile-character.png"
            alt="Kim DongGyu를 표현한 오리지널 캐릭터 프로필"
            width={1024}
            height={1536}
            priority
          />
          <span>PROFILE · 2026</span>
        </div>

        <aside className="profile-contact" aria-label="연락처">
          <p>CONTACT</p>
          <dl>
            <div><dt>Tel</dt><dd>010-****-3362</dd></div>
            <div><dt>Mail</dt><dd><a href="mailto:kdg3795@naver.com">kdg3795@naver.com</a></dd></div>
            <div><dt>GitHub</dt><dd><a href="https://github.com/kdg3795" target="_blank" rel="noreferrer">github.com/kdg3795 ↗</a></dd></div>
          </dl>
          <a className="profile-contact-cta" href="mailto:kdg3795@naver.com">이메일 보내기 <span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <section className="profile-links" aria-label="문서 바로가기">
        <a href="/resume">
          <span>01</span><strong>이력서 & 자기소개서</strong><span aria-hidden="true">↗</span>
        </a>
        <a href="/career">
          <span>02</span><strong>프로젝트 경력기술서</strong><span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
