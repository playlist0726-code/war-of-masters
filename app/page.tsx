"use client";

import { useState, type CSSProperties } from "react";

const players = [
  { rank: 1, name: "한계돌파", school: "서울 · 고3", score: 1980, win: "92%", crest: "Ⅰ" },
  { rank: 2, name: "수학의신", school: "경기 · 고3", score: 1914, win: "88%", crest: "Ⅱ" },
  { rank: 3, name: "국어만점", school: "부산 · 고2", score: 1872, win: "85%", crest: "Ⅲ" },
  { rank: 4, name: "불꽃연필", school: "대전 · 고3", score: 1798, win: "81%", crest: "Ⅳ" },
];

const subjects = [
  { name: "국어", value: 86, delta: "+4", tone: "blue" },
  { name: "수학", value: 94, delta: "+7", tone: "gold" },
  { name: "영어", value: 91, delta: "+2", tone: "teal" },
  { name: "탐구", value: 82, delta: "+5", tone: "violet" },
];

export default function Home() {
  const [tab, setTab] = useState("전장");
  const [queued, setQueued] = useState(false);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="실수들의 전쟁 홈">
          <span className="brand-mark" aria-hidden="true">戰</span>
          <span><b>실수들의 전쟁</b><small>WAR OF MASTERS</small></span>
        </a>
        <nav aria-label="주요 메뉴">
          {["전장", "랭킹", "기록실", "상점"].map((item) => (
            <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>{item}</button>
          ))}
        </nav>
        <div className="profile"><span className="level">27</span><span><b>막판역전</b><small>PLATINUM Ⅱ</small></span></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-content">
          <p className="eyebrow"><span /> 2026 SEASON 08 · AUGUST</p>
          <h1>증명하라.<br /><em>끝까지 풀어낸 자</em>가<br />전설이 된다.</h1>
          <p className="hero-copy">같은 시험지, 같은 시간, 단 한 번의 승부.<br />전국의 실수들과 실력으로 맞붙어라.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => setQueued(true)}>{queued ? "참가 신청 완료" : "입단 배치고사 시작"}<span>→</span></button>
            <a className="ghost" href="#how">진행 방식 보기</a>
          </div>
          <div className="season-clock"><span>NEXT RANKED BATTLE</span><strong>08.01</strong><i>21:00</i></div>
        </div>
        <div className="rank-sigil" aria-label="현재 등급 플래티넘 2">
          <div className="sigil-ring ring-one" /><div className="sigil-ring ring-two" />
          <div className="sigil-core"><span>Ⅲ</span><b>PLATINUM</b><small>1,642 LP</small></div>
          <p>상위 <b>7.2%</b></p>
        </div>
      </section>

      <section className="dashboard" aria-label="내 전적 요약">
        <div className="section-heading"><div><p className="eyebrow">MY BATTLE RECORD</p><h2>이번 시즌, 당신의 전적</h2></div><span>시즌 종료까지 <b>23일</b></span></div>
        <div className="stat-grid">
          <article className="rank-card">
            <div><span className="mini-crest">P</span><p><small>현재 랭크</small><strong>플래티넘 Ⅱ</strong><em>1,642 LP</em></p></div>
            <div className="progress"><span style={{ width: "64%" }} /></div>
            <footer><span>다이아 승급까지</span><b>358 LP</b></footer>
          </article>
          <article className="score-card"><small>최근 5경기 평균</small><strong>386.4</strong><span>/ 400</span><p><b>▲ 12.6</b> 지난달 대비</p></article>
          <article className="score-card"><small>시즌 승률</small><strong>78.6</strong><span>%</span><p>11승 3패 · 5연승 중</p></article>
        </div>
        <div className="subject-panel">
          <div className="panel-title"><div><small>전투 능력치</small><h3>과목별 숙련도</h3></div><span>최근 10회 기준</span></div>
          <div className="subjects">{subjects.map((subject) => <div className="subject" key={subject.name}><div className={`subject-ring ${subject.tone}`} style={{ "--score": `${subject.value * 3.6}deg` } as CSSProperties}><span>{subject.value}</span></div><b>{subject.name}</b><small>▲ {subject.delta}</small></div>)}</div>
        </div>
      </section>

      <section className="battle" id="how">
        <div className="battle-copy"><p className="eyebrow">MONTHLY CLASH</p><h2>매월 1일,<br /><em>랭크가 뒤집힌다.</em></h2><p>우리가 제공하는 동일한 모의고사를 전국 동시 진행합니다. 학년은 중요하지 않습니다. 오직 점수, 시간, 연속 정답이 당신의 LP를 결정합니다.</p><ul><li><b>01</b><span><strong>입단 배치고사</strong>최초 1회, 5경기로 시작 티어 결정</span></li><li><b>02</b><span><strong>월간 랭크전</strong>매월 1일 21시, 전국 동시 100분 승부</span></li><li><b>03</b><span><strong>시즌 결산</strong>성장률과 승급 기록을 나만의 전적 카드로</span></li></ul></div>
        <div className="battle-card"><span className="live">REGISTRATION OPEN</span><p>AUGUST RANKED BATTLE</p><h3>8월 모의고사<br />랭킹전</h3><div className="date-row"><b>08.01</b><span>토요일<br /><strong>21:00</strong></span></div><div className="slots"><span>현재 참가자</span><b>12,847명</b></div><button onClick={() => setQueued(true)}>{queued ? "참가 등록됨 ✓" : "랭킹전 참가 등록"}</button><small>시험 시작 10분 전 입장 · 부정행위 방지 캠 활성화</small></div>
      </section>

      <section className="leaderboard" id="ranking">
        <div className="section-heading"><div><p className="eyebrow">HALL OF MASTERS</p><h2>전국 실수 랭킹</h2></div><button>전체 랭킹 보기 →</button></div>
        <div className="table" role="table" aria-label="전국 실수 랭킹">
          <div className="table-head" role="row"><span>순위</span><span>플레이어</span><span>승률</span><span>LP</span></div>
          {players.map((player) => <div className="player-row" role="row" key={player.rank}><span className={`place p${player.rank}`}>{player.rank}</span><span className="player"><i>{player.crest}</i><span><b>{player.name}</b><small>{player.school}</small></span></span><span>{player.win}</span><strong>{player.score.toLocaleString()}</strong></div>)}
        </div>
      </section>

      <section className="cta"><span>당신의 실력은, 몇 등입니까?</span><h2>전장은 이미 열렸다.</h2><button onClick={() => setQueued(true)}>{queued ? "입단 준비 완료" : "지금 입단하기"}<i>→</i></button></section>
      <footer className="footer"><div className="brand"><span className="brand-mark">戰</span><span><b>실수들의 전쟁</b><small>WAR OF MASTERS</small></span></div><p>점수가 아닌 성장을 경쟁하는 모의고사 랭킹전</p><span>© 2026 WAR OF MASTERS</span></footer>
    </main>
  );
}
