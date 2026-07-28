"use client";

import { useState, type CSSProperties } from "react";
import { Award, BarChart3, BookOpen, Check, ChevronRight, Flame, Gauge, Gem, LockKeyhole, Orbit as OrbitIcon, Rocket, Shield, Sparkles, Swords, Target, Trophy, Zap } from "lucide-react";

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
  const [duel, setDuel] = useState(false);

  const selectTab = (item: string) => {
    setTab(item);
    if (item === "랭킹") requestAnimationFrame(() => document.querySelector("#rank-system")?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="실수들의 전쟁 홈">
          <span className="brand-mark" aria-hidden="true">戰</span>
          <span><b>실수들의 전쟁</b><small>WAR OF MASTERS</small></span>
        </a>
        <nav aria-label="주요 메뉴">
          {["전장", "랭킹", "기록실", "상점"].map((item) => (
            <button key={item} className={tab === item ? "active" : ""} onClick={() => selectTab(item)}>{item}</button>
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
            <button className="primary" onClick={() => setQueued(true)}>{queued ? <Check size={16}/> : <Swords size={16}/>} {queued ? "참가 신청 완료" : "입단 배치고사 시작"}<ChevronRight size={16}/></button>
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

      <section className="mission-rail" aria-label="오늘의 학습 미션">
        <div><Flame/><span><small>DAILY STREAK</small><b>12일 연속 참전</b></span><strong>12</strong></div>
        <div className="mission"><Target/><span><small>오늘의 전투 훈련</small><b>수학 준킬러 20문항</b></span><i><b style={{width:"70%"}}/></i><strong>14/20</strong></div>
        <div className="mission"><Gem/><span><small>부품 발견 확률</small><b>희귀 모듈 게이지</b></span><i><b style={{width:"84%"}}/></i><strong>84%</strong></div>
        <button aria-label="오늘의 미션 전체 보기"><ChevronRight/></button>
      </section>

      <section className="rank-system" id="rank-system">
        <div className="section-heading"><div><p className="eyebrow">RANK SYSTEM</p><h2>점수가 실력이 되고, 실력이 계급이 된다.</h2></div><span>2026 시즌 08 규정</span></div>
        <div className="tier-track" aria-label="랭크 구간">
          {[
            ["ROOKIE", "루키", "0–799"], ["BRONZE", "브론즈", "800–1,099"], ["SILVER", "실버", "1,100–1,399"],
            ["GOLD", "골드", "1,400–1,599"], ["PLATINUM", "플래티넘", "1,600–1,799"], ["DIAMOND", "다이아", "1,800–1,949"], ["MASTER", "마스터", "1,950+"],
          ].map((tier, index) => <div className={`tier tier-${index}`} key={tier[0]}><i>{index + 1}</i><b>{tier[1]}</b><small>{tier[2]} LP</small></div>)}
        </div>
        <div className="rank-explain">
          <article><span><BarChart3/>01</span><h3>기본 점수</h3><p>원점수와 전국 백분위를 반영합니다. 학년과 상관없이 동일한 기준으로 경쟁합니다.</p><strong>최대 +120 LP</strong></article>
          <article><span><Zap/>02</span><h3>전투 보너스</h3><p>연속 정답, 남은 시간, 고난도 문항 정답에 추가 점수가 붙습니다.</p><strong>최대 +30 LP</strong></article>
          <article><span><Rocket/>03</span><h3>성장 보정</h3><p>지난 시험보다 성장한 학생도 보상받습니다. 낮은 점수에서 출발해도 역전할 수 있습니다.</p><strong>최대 +20 LP</strong></article>
        </div>
        <div className="season-rule"><b>핵심 원칙</b><p>한 번의 낮은 점수로 크게 강등되지 않습니다. 최근 3회 중 가장 좋은 2회의 성적을 반영해 시험 불안과 컨디션 변수를 줄입니다.</p></div>
      </section>

      <section className="forge" id="forge">
        <div className="forge-stage" aria-label="성적으로 성장하는 캐릭터 부품">
          <div className="forge-art"/><div className="scanline"/>
          <div className="orbit orbit-a"><span>정확도 코어</span></div><div className="orbit orbit-b"><span>속도 모듈</span></div>
          <div className="part-label label-a"><Sparkles/><span><b>EPIC</b>청명한 사고 코어</span></div><div className="part-label label-b"><Gauge/><span><b>RARE</b>고속 연산 장갑</span></div>
          <div className="power-level"><OrbitIcon/><span><small>전투체 동기화</small><b>LV. 27 · 86%</b></span></div>
        </div>
        <div className="forge-copy"><p className="eyebrow">STUDY FORGE</p><h2>매일의 점수가<br /><em>나만의 전투체</em>를 만든다.</h2><p>캐릭터는 돈으로 강해지지 않습니다. 국어·수학·영어·탐구 성적이 각각 다른 부품을 성장시키고, 꾸준함이 외형과 능력을 바꿉니다.</p>
          <div className="reward-list"><div><i>국</i><span><b>기억 회로</b>독해력 · 연속 정답</span><strong>86</strong></div><div><i>수</i><span><b>연산 코어</b>고난도 · 풀이 속도</span><strong>94</strong></div><div><i>영</i><span><b>신호 렌즈</b>어휘력 · 정확도</span><strong>91</strong></div></div>
          <div className="unlock"><span>다음 부품 해금</span><b>수학 3회 연속 92점 이상</b><div><i style={{width:"72%"}}/></div></div>
        </div>
      </section>

      <section className="duel-zone">
        <div><p className="eyebrow">RIVAL DUEL</p><h2>친구의 기록에 결투를 신청하세요.</h2><p>같은 과목·같은 난이도의 20문항으로 맞붙습니다. 실시간 접속이 아니어도 상대의 기록과 대결할 수 있어요.</p></div>
        <div className="versus"><span><i>27</i><b>막판역전</b><small>PLATINUM Ⅱ</small></span><strong>VS</strong><span><i>31</i><b>불꽃연필</b><small>PLATINUM Ⅰ</small></span></div>
        <button onClick={() => setDuel(true)}>{duel ? <Check/> : <Swords/>}{duel ? "결투 신청 완료" : "결투 신청하기"}</button>
      </section>

      <section className="collection">
        <div className="section-heading"><div><p className="eyebrow">MY ARMORY</p><h2>이번 시즌 획득한 전투 부품</h2></div><span>8 / 24 수집</span></div>
        <div className="part-grid">
          {[{icon:<BookOpen/>,grade:"EPIC",name:"심층 독해 렌즈",desc:"국어 90점 이상 3회",power:"+18 집중"},{icon:<Gauge/>,grade:"RARE",name:"고속 연산 장갑",desc:"수학 30분 내 92점",power:"+14 속도"},{icon:<Target/>,grade:"RARE",name:"정밀 추론 코어",desc:"고난도 8문항 연속 정답",power:"+12 정확"},{icon:<Shield/>,grade:"COMMON",name:"평정심 흉갑",desc:"실전 모의고사 5회",power:"+8 안정"},{icon:<LockKeyhole/>,grade:"LOCKED",name:"???",desc:"탐구 1등급 달성 시 공개",power:"미발견"}].map((part,idx)=><article className={idx===4?"locked":""} key={part.name}><div>{part.icon}<i>{idx+1}</i></div><small>{part.grade}</small><h3>{part.name}</h3><p>{part.desc}</p><strong>{part.power}</strong></article>)}
        </div>
      </section>

      <section className="live-feed"><span><span className="pulse"/>LIVE BATTLE FEED</span><div><b><Trophy/>한계돌파</b>가 마스터 티어에 진입했습니다.</div><div><b><Award/>수학의신</b>이 전설 부품을 획득했습니다.</div><div><b><Swords/>불꽃연필</b>이 결투에서 7연승 중입니다.</div></section>

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
