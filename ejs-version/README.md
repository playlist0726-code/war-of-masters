# 실수들의 전쟁 EJS 버전

개발자 인수용 `Express + EJS + Vanilla JavaScript` 구현입니다. React 없이 동작하며 루트 저장소의 `public/` 에셋을 그대로 사용합니다.

```bash
cd ejs-version
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 구조

- `server.js`: Express 서버, EJS 데이터 전달, 교체용 예시 API
- `views/index.ejs`: 화면 HTML 템플릿
- `public/styles.css`: 전체 UI 스타일
- `public/app.js`: 로그인 단계, 영상, 골드, 우편함, 친구, 결투 동작
- `../public`: 영상, 캐릭터, 티어 엠블럼, 시험 PDF

## 백엔드 연결 지점

- `POST /api/profile`: 닉네임·학교 저장
- `POST /api/duels`: 동일 시험 ID와 24시간 마감 생성
- `POST /api/friends`: 친구 요청

현재 API는 화면 확인을 위한 메모리 응답입니다. 개발 시 DB 작업으로 교체하세요. 로그인 제공자 OAuth와 답안·채점·랭킹 API도 `server.js` 라우터 단위로 추가하면 됩니다.

## 영상

인트로 영상은 루트의 `public/war-intro.mp4`에 있으며 GitHub에도 포함되어 있습니다. 운영 환경에서는 CDN에 올리고 `views/index.ejs`의 `/assets/war-intro.mp4` 주소만 교체할 수 있습니다.
