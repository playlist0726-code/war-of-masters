import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 3000);

app.set("view engine", "ejs");
app.set("views", path.join(dirname, "views"));
app.use(express.json());
app.use("/assets", express.static(path.resolve(dirname, "../public")));
app.use("/ui", express.static(path.join(dirname, "public")));

const tiers = [
  ["IRON", "아이언", "0–599"], ["BRONZE", "브론즈", "600–899"], ["SILVER", "실버", "900–1,199"], ["GOLD", "골드", "1,200–1,499"], ["PLATINUM", "플래티넘", "1,500–1,749"],
  ["EMERALD", "에메랄드", "1,750–1,899"], ["DIAMOND", "다이아몬드", "1,900–2,049"], ["MASTER", "마스터", "2,050–2,199"], ["GRANDMASTER", "그랜드마스터", "2,200–2,349"], ["CHALLENGER", "챌린저", "2,350+"],
];

const heroes = [
  { name: "제로", role: "수학 · 정밀 타격", image: "/assets/zero.png" },
  { name: "윤슬", role: "국어 · 분석 지원", image: "/assets/yoonseul.png" },
  { name: "루프", role: "영어 · 속도 돌파", image: "/assets/loop.png" },
];

app.get("/", (_req, res) => res.render("index", { tiers, heroes }));

// 개발자가 DB 호출로 교체할 예시 API입니다.
app.post("/api/profile", (req, res) => res.json({ ok: true, profile: req.body }));
app.post("/api/duels", (req, res) => res.status(201).json({ ok: true, duelId: "DUEL-DEMO-2401", expiresInHours: 24, ...req.body }));
app.post("/api/friends", (req, res) => res.status(201).json({ ok: true, status: "pending", ...req.body }));

app.listen(port, () => console.log(`War of Masters EJS: http://localhost:${port}`));
