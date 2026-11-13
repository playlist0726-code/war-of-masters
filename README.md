# War of Masters — Assessment Game UI

**[Matths project context](https://playlist0726-code.github.io/projects/matths/)** · [Portfolio](https://playlist0726-code.github.io/)

A React interface prototype for game-like mathematics assessment and progression, developed as part of Junsu (Michael) Kim’s collaborative EdTech product work. The UI includes onboarding, a placement exam flow, ranks, character progression, and asynchronous duel concepts.

**Current stage:** frontend demonstration. Authentication, rankings, scoring, matching, and persistence still need real service integration. No learner, revenue, or learning-outcome metrics are claimed. See the original implementation notes and asset-rights cautions below before distributing the prototype more widely.

---

# 실수들의 전쟁 — War of Masters

고등학생이 동일한 모의고사를 풀고 랭크, 캐릭터, 전투 부품을 성장시키는 모의고사 랭킹전 웹 프론트엔드입니다.

이 저장소는 이미지 시안이 아니라 실제 브라우저에서 실행되는 React 기반 UI입니다. 기존 HTML 사이트에 옮길 때 화면을 다시 그리기보다 이 프로젝트를 프론트엔드로 유지하고, 기존 서버와 API로 연결하는 방식을 권장합니다.

## 현재 구현된 화면

- 첫 방문 캐릭터 선택 및 3단계 입단 프로필
- 15초 풀스크린 시네마틱 인트로와 영상 음소거 제어
- 전장 비주얼이 포함된 반투명 입단 로그인 패널
- 로그인 방식 선택, 닉네임과 고등학교 입력
- 입단 배치 모의고사 시험지 뷰어
- 20문항 이동, 답안 선택, 자동 저장 표시, 제출 결과
- 랭크 체계, 전국 랭킹, 월간 랭크전
- 10단계 오리지널 티어 엠블럼과 골드 기반 승급전 예약
- 캐릭터 성장, 전투 부품, 라이벌 결투
- 24시간 비동기 결투 매칭, 전장 우편함, 친구 요청 UI
- 데스크톱 및 모바일 반응형 UI

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
```

배포 전 확인:

```bash
npm run build
```

## 개발자가 연결할 기능

현재 데이터와 로그인은 UI 시연용입니다. 다음 기능은 실제 API와 데이터베이스 연결이 필요합니다.

1. 카카오·Google·이메일 인증
2. 사용자, 닉네임, 학교 프로필 저장
3. 시험 및 문항 관리 API
4. 답안 임시 저장, 제출, 자동 채점
5. LP 계산과 전국·학교별 랭킹
6. 캐릭터 부품 획득 및 성장 기록
7. 친구 검색과 비동기 결투
8. 관리자용 시험 등록 화면

주요 화면과 임시 상태는 `app/page.tsx`, 전체 디자인 스타일은 `app/globals.css`에 있습니다. 실제 개발 단계에서는 온보딩, 시험, 랭킹, 캐릭터를 별도 페이지와 컴포넌트로 분리하는 것을 권장합니다.

인트로 영상은 `public/war-intro.mp4`, 로그인 전장 이미지는 `public/login-arena.png`입니다. 영상은 첫 화면에서 자동 재생·반복·음소거되며, 브라우저 자동재생 정책을 위해 기본 음소거 상태를 유지합니다. 운영 환경에서는 같은 파일명을 유지하거나 CDN 주소로 교체하면 UI 수정 없이 사용할 수 있습니다.

티어 엠블럼 원본 시트는 `public/tier-emblems-v1.png`입니다. 5열×2행 스프라이트로 아이언부터 챌린저까지 표시하며, 각 카드의 `background-position`으로 개별 문양을 노출합니다. 골드는 학습과 시험으로 획득하고 승급전 참가권 및 캐릭터 꾸미기에만 사용하도록 설계했습니다. 골드로 티어 자체를 구매할 수 없으며 실제 티어는 성적·정확도·랭크전 결과로 결정해야 합니다.

결투는 두 사용자가 동시에 접속하지 않아도 되는 24시간 비동기 방식입니다. 요청 시 양쪽 티어·닉네임·학교·전적을 비교하고, 동일한 시험 ID와 응시 제한 시간을 서버에서 발급해야 합니다. 두 명 모두 제출하거나 제한 시간이 끝난 뒤 결과를 공개하며, 결투·친구·승급 소식은 우편함 API로 전달하도록 연결하면 됩니다.

## 디자인 기준

색상, 타이포그래피, 간격, 캐릭터 표현과 UI 원칙은 `DESIGN.md`에 정리되어 있습니다. 새 기능을 만들 때 해당 문서를 기준으로 기존 디자인 언어를 유지해 주세요.

## HTML 기반 기존 사이트와 연결할 때

이 UI는 HTML, CSS, JavaScript로 브라우저에 출력되지만 소스는 React로 관리됩니다. 정적인 HTML 한 파일로 변환하면 답안 저장, 로그인, 랭킹처럼 상태가 필요한 기능을 다시 작성해야 합니다.

권장 구조:

```text
현재 React UI ── REST/GraphQL API ── 기존 백엔드·데이터베이스
```

기존 서버가 PHP, Java, Python 또는 Node.js여도 API 방식으로 연결할 수 있습니다.

## 콘텐츠 사용 주의

- `public/placement-sample.pdf`는 제공받은 배치고사 UI 예시입니다. 실제 공개 서비스 배포 전 사용·배포 권한을 반드시 확인하세요.
- 캐릭터 이미지도 상업적 이용 및 2차 사용 권한을 확인한 뒤 공개 저장소나 상용 서비스에 사용하세요.
- API 키, 비밀번호, 실제 사용자 데이터는 저장소에 커밋하지 마세요. `.env` 파일은 Git에서 제외되어 있습니다.
