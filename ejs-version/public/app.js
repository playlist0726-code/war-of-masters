const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

const gate = qs("#gate");
let step = 1;
let gold = 2840;

function showStep(nextStep) {
  step = Math.max(1, Math.min(3, nextStep));
  qsa(".step").forEach((panel) => panel.classList.toggle("active", Number(panel.dataset.step) === step));
  qsa(".steps i").forEach((dot, index) => dot.classList.toggle("on", index < step));
  qs(".steps b").textContent = `0${step} / 03`;
}

qsa(".next").forEach((button) => button.addEventListener("click", () => showStep(step + 1)));
qsa(".prev").forEach((button) => button.addEventListener("click", () => showStep(step - 1)));
qsa(".hero-option").forEach((button) => button.addEventListener("click", () => {
  qsa(".hero-option").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
}));
qs("#gateClose").addEventListener("click", () => gate.classList.add("hidden"));
qs("#join").addEventListener("click", async () => {
  const nickname = qs("#nickname").value.trim();
  const school = qs("#school").value;
  if (nickname.length < 2 || !school) return;
  await fetch("/api/profile", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nickname, school }) });
  gate.classList.add("hidden");
});

const video = qs("#introVideo");
video.defaultMuted = true;
video.muted = true;
const playVideo = () => video.play().catch(() => { qs("#videoPlay").textContent = "▶ 영상 시작"; });
playVideo();
video.addEventListener("canplay", playVideo, { once: true });
qs("#videoPlay").addEventListener("click", playVideo);

qs("#promotion").addEventListener("click", (event) => {
  if (gold < 600) return;
  gold -= 600;
  qs("#wallet b").textContent = `${gold.toLocaleString()} G`;
  event.currentTarget.textContent = "✓ 승급전 예약됨";
  event.currentTarget.disabled = true;
});

const inbox = qs("#inbox");
qs("#inboxOpen").addEventListener("click", () => inbox.classList.toggle("open"));
qs("#inboxClose").addEventListener("click", () => inbox.classList.remove("open"));

const duelModal = qs("#duelModal");
const openDuel = () => duelModal.classList.add("open");
qs("#duelOpen").addEventListener("click", openDuel);
qs("#mailDuel").addEventListener("click", () => { inbox.classList.remove("open"); openDuel(); });
qs("#duelClose").addEventListener("click", () => duelModal.classList.remove("open"));
qs("#friend").addEventListener("click", async (event) => {
  await fetch("/api/friends", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ targetUserId: "demo-rival" }) });
  event.currentTarget.textContent = "✓ 친구 요청 보냄";
});
qs("#duelSend").addEventListener("click", async (event) => {
  await fetch("/api/duels", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ targetUserId: "demo-rival", examId: "math-common-20" }) });
  event.currentTarget.textContent = "✓ 결투 요청 완료";
  qs("#duelOpen").textContent = "✓ 결투 현황 보기";
  setTimeout(() => duelModal.classList.remove("open"), 550);
});
