const deals = [
  {
    id: "philips-liaustin",
    brand: "Philips Greater China",
    brandShort: "Philips",
    kol: "@LiAustin选品",
    kolName: "Austin Li",
    kolFollowers: "78.4M",
    category: "Home electronics",
    product: "Smart air purifier launch",
    productLine: "Air purifier 5,000 unit first batch for Tmall + Douyin livestream bundle",
    status: "FILLING FAST",
    statusClass: "fast",
    risk: "A",
    target: 2500000,
    filled: 1950000,
    apy: 8.5,
    duration: 90,
    closeIn: "14h 20m",
    minTicket: 25000,
    cap: 250000,
    lockDate: "2026-05-23 18:00 HKT",
    maturityDate: "2026-08-21",
    revenueShare: "70% net launch surplus to vault until PT redemption + YT distribution",
    principalCoverage: "Inventory pledge + brand receivable assignment",
    icon: "◎",
    logo: "https://logo.clearbit.com/philips.com",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    heroStat: "Expected GMV $6.8M",
    thesis:
      "Philips is using TAEL to replace opaque PF borrowing for working capital tied to a defined launch campaign. The brand already has purchase intent data, Austin Li has prior conversion history in adjacent home wellness verticals, and the financing need is inventory, paid placement, and fulfilment float.",
    thesisBullets: [
      "Comparable Tmall air-care campaigns averaged 2.3x sell-through on first 72h inventory.",
      "Austin Li's audience overlap with home upgrade and wellness skews premium and repeat-purchase friendly.",
      "Revenue is contractually swept into the settlement SPV before residual distribution to brand."
    ],
    useOfFunds: [
      ["Inventory build", 46],
      ["Platform media placement", 18],
      ["KOL guarantee + content production", 14],
      ["Warehousing + fulfilment", 12],
      ["Escrow, insurance, legal", 10]
    ],
    counterparties: [
      "Brand entity: Philips Greater China Ltd.",
      "KOL agency: Austin Agency Group",
      "Distribution: Taobao Live flagship + Douyin remarketing",
      "Escrow SPV: TAEL Launch SPV 24-03"
    ],
    docs: [
      { name: "Master launch agreement", status: "Signed", detail: "Brand + KOL revenue split and media obligations." },
      { name: "Escrow mandate", status: "Signed", detail: "Vault release subject to OTC conversion confirmation." },
      { name: "Insurance binder", status: "Bound", detail: "Campaign cancellation + logistics disruption coverage." },
      { name: "Sales attestation spec", status: "Drafted", detail: "Platform GMV attestation pipeline for settlement." }
    ],
    riskNotes: [
      "Tier A. Principal coverage anchored by inventory pledge and receivables assignment.",
      "Main residual risk is platform underperformance despite media spend concentration.",
      "If audited GMV settles below floor, YT absorbs first shortfall before PT haircut."
    ],
    recentDeposits: [
      "Guest #4021 deposited $75,000 · 8m ago",
      "Anchor preview allocation $250,000 · 21m ago",
      "Guest #1188 deposited $50,000 · 36m ago"
    ],
    timeline: [
      ["Allocation opens", "2026-05-21 18:00 HKT"],
      ["Capital locks", "2026-05-23 18:00 HKT"],
      ["OTC conversion window", "T+0 2h"],
      ["Livestream launch", "2026-06-08"],
      ["Revenue sweep complete", "2026-07-30"],
      ["PT redemption + YT claim", "2026-08-21"]
    ],
    otcDesk: "Shenzhen Bridge OTC",
    otcBids: [
      ["Shenzhen Bridge OTC", "0.25%", "30 min", "Won current mandate"],
      ["HK Settlement Co.", "0.28%", "45 min", "Backup"],
      ["Seoul KRW Desk", "0.41%", "1 h", "KRW fallback"]
    ]
  },
  {
    id: "anker-techbro",
    brand: "Anker",
    brandShort: "Anker",
    kol: "@TechBro王",
    kolName: "TechBro Wang",
    kolFollowers: "12.1M",
    category: "Power accessories",
    product: "100W GaN charger",
    productLine: "GaN charger bundle for 618 shopping festival.",
    status: "OPEN",
    statusClass: "open",
    risk: "A",
    target: 1800000,
    filled: 756000,
    apy: 11.2,
    duration: 60,
    closeIn: "2d 09h",
    minTicket: 10000,
    cap: 250000,
    lockDate: "2026-05-25 12:00 HKT",
    maturityDate: "2026-07-24",
    revenueShare: "65% of campaign gross margin until target waterfall clears",
    principalCoverage: "Brand repurchase covenant on unsold units",
    icon: "◉",
    logo: "https://logo.clearbit.com/anker.com",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    heroStat: "Expected GMV $4.4M",
    thesis:
      "Anker has product-market fit already. TAEL is financing a defined sell-through event around a shopping festival where cash timing matters more than demand discovery.",
    thesisBullets: [
      "Festival traffic compresses payback window, pushing expected IRR above standard wholesale financing.",
      "Anker units retain residual value better than cosmetics or apparel inventory.",
      "YT is a cleaner expression of upside because repurchase covenant supports PT."
    ],
    useOfFunds: [
      ["Festival inventory", 52],
      ["Douyin + JD traffic buy", 16],
      ["KOL placement", 13],
      ["Rebate / coupon pool", 11],
      ["Operations reserve", 8]
    ],
    counterparties: [
      "Brand entity: Anker Innovations",
      "KOL agency: TechBro Wang Studio",
      "Distribution: JD Live + Douyin",
      "Escrow SPV: TAEL Launch SPV 24-04"
    ],
    docs: [
      { name: "Festival campaign schedule", status: "Signed", detail: "Media and creator delivery schedule." },
      { name: "Repurchase covenant", status: "Signed", detail: "Unsold inventory repurchase terms." },
      { name: "Creator guarantee annex", status: "Signed", detail: "Minimum posting cadence and fallback placements." }
    ],
    riskNotes: [
      "Tier A. Lower brand risk, moderate platform concentration risk.",
      "Main sensitivity is coupon intensity compressing realized margin.",
      "YT remains more volatile because festival conversion is highly front-loaded."
    ],
    recentDeposits: [
      "Guest #2871 deposited $20,000 · 14m ago",
      "Member #0193 deposited $100,000 · 55m ago"
    ],
    timeline: [
      ["Allocation opens", "2026-05-22 10:00 HKT"],
      ["Capital locks", "2026-05-25 12:00 HKT"],
      ["OTC conversion window", "T+0 3h"],
      ["618 launch", "2026-06-18"],
      ["Revenue sweep complete", "2026-07-16"],
      ["PT redemption + YT claim", "2026-07-24"]
    ],
    otcDesk: "HK Settlement Co.",
    otcBids: [
      ["HK Settlement Co.", "0.20%", "45 min", "Lead"],
      ["Shenzhen Bridge OTC", "0.27%", "30 min", "Secondary"]
    ]
  },
  {
    id: "perfectdiary-cherry",
    brand: "Perfect Diary 完美日记",
    brandShort: "Perfect Diary",
    kol: "@Cherry张",
    kolName: "Cherry Zhang",
    kolFollowers: "9.7M",
    category: "Beauty",
    product: "Limited lipstick capsule",
    productLine: "Two-color limited capsule timed to creator-exclusive drop.",
    status: "CLOSING SOON",
    statusClass: "soon",
    risk: "B",
    target: 1200000,
    filled: 1092000,
    apy: 14.0,
    duration: 45,
    closeIn: "05h 42m",
    minTicket: 15000,
    cap: 250000,
    lockDate: "2026-05-22 23:00 HKT",
    maturityDate: "2026-07-06",
    revenueShare: "80% of launch contribution margin to vault until waterfall clears",
    principalCoverage: "KOL penalty escrow + reserved stock",
    icon: "◌",
    logo: "https://logo.clearbit.com/perfectdiary.com",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    heroStat: "Expected GMV $3.1M",
    thesis:
      "This is the most event-driven deal in the book. It behaves less like classic working capital and more like structured creator commerce. Higher APY reflects that.",
    thesisBullets: [
      "Scarcity-driven launch gives YT a sharper upside profile than appliance deals.",
      "PT is supported by penalty escrow, but not as defensible as durable-goods inventory.",
      "Deal is nearly full, so the product page should feel closing-window intensive."
    ],
    useOfFunds: [
      ["Capsule production", 39],
      ["KOL placement", 22],
      ["Sampling + creator seeding", 14],
      ["Beauty affiliate booster", 13],
      ["Escrow / returns reserve", 12]
    ],
    counterparties: [
      "Brand entity: Yatsen Holding",
      "KOL agency: Cherry Talent Management",
      "Distribution: Douyin Beauty",
      "Escrow SPV: TAEL Launch SPV 24-05"
    ],
    docs: [
      { name: "Creator exclusivity clause", status: "Signed", detail: "Prevents competitive lipstick launch overlap." },
      { name: "Penalty escrow", status: "Funded", detail: "KOL side cancellation escrow posted." },
      { name: "Returns reserve memo", status: "Filed", detail: "Return / refund assumptions built into model." }
    ],
    riskNotes: [
      "Tier B. Single-event launch risk and higher return/refund sensitivity.",
      "If GMV misses threshold, YT reprices sharply first.",
      "Creator cancellation risk is reduced, not removed."
    ],
    recentDeposits: [
      "Guest #4729 deposited $50,000 · demo placeholder",
      "Member #0171 deposited $120,000 · 19m ago",
      "Guest #9080 deposited $15,000 · 27m ago"
    ],
    timeline: [
      ["Allocation opens", "2026-05-20 18:00 HKT"],
      ["Capital locks", "2026-05-22 23:00 HKT"],
      ["OTC conversion window", "T+0 1h"],
      ["Drop goes live", "2026-05-30"],
      ["Revenue sweep complete", "2026-06-28"],
      ["PT redemption + YT claim", "2026-07-06"]
    ],
    otcDesk: "Seoul KRW Desk",
    otcBids: [
      ["Seoul KRW Desk", "0.40%", "1 h", "Lead for KRW beauty supply chain"],
      ["Shenzhen Bridge OTC", "0.33%", "30 min", "CNY fallback"]
    ]
  },
  {
    id: "xiaomi-smartlife",
    brand: "Xiaomi",
    brandShort: "Xiaomi",
    kol: "@SmartLife刘",
    kolName: "Liu SmartLife",
    kolFollowers: "16.2M",
    category: "Home appliance",
    product: "Smart electric kettle",
    productLine: "Smart-life creator bundle targeted at first-home buyers.",
    status: "OPEN",
    statusClass: "open",
    risk: "A",
    target: 3000000,
    filled: 840000,
    apy: 9.8,
    duration: 120,
    closeIn: "4d 01h",
    minTicket: 20000,
    cap: 250000,
    lockDate: "2026-05-27 18:00 HKT",
    maturityDate: "2026-09-24",
    revenueShare: "60% of launch contribution margin until capital + yield waterfall clears",
    principalCoverage: "Purchase order assignment + branded inventory pledge",
    icon: "△",
    logo: "https://logo.clearbit.com/mi.com",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    heroStat: "Expected GMV $8.2M",
    thesis:
      "This is the lowest-volatility deal in the current book. Longer duration, lower APY, but closest to what institutions would underwrite as repeatable structured PF.",
    thesisBullets: [
      "Brand strength and product replacement cycle lower downside variance.",
      "Longer lock means PT is useful as collateral-like stable backing in V2.",
      "YT is less explosive but more suitable for carry traders than hype traders."
    ],
    useOfFunds: [
      ["Production order", 51],
      ["Retail placement reserve", 15],
      ["KOL performance pool", 11],
      ["Warehousing / last-mile", 13],
      ["Reserve / admin", 10]
    ],
    counterparties: [
      "Brand entity: Xiaomi Consumer Products",
      "KOL agency: SmartLife Liu Media",
      "Distribution: Mi Live Commerce + Tmall",
      "Escrow SPV: TAEL Launch SPV 24-06"
    ],
    docs: [
      { name: "Distribution agreement", status: "Signed", detail: "Multi-channel distribution rights and stock allocation." },
      { name: "Inventory control memo", status: "Signed", detail: "Warehouse reporting and pledge mechanics." },
      { name: "Settlement waterfall", status: "Signed", detail: "Priority of proceeds and repayment triggers." }
    ],
    riskNotes: [
      "Tier A with stronger inventory quality and broader demand base.",
      "Main trade-off is duration. Capital is tied up longer before redemption.",
      "This deal is the cleanest PT collateral candidate in V2."
    ],
    recentDeposits: [
      "Guest #3122 deposited $30,000 · 44m ago",
      "Anchor #0004 reserved $200,000 · 2h ago"
    ],
    timeline: [
      ["Allocation opens", "2026-05-22 18:00 HKT"],
      ["Capital locks", "2026-05-27 18:00 HKT"],
      ["OTC conversion window", "T+0 3h"],
      ["Launch wave 1", "2026-06-20"],
      ["Revenue sweep complete", "2026-09-10"],
      ["PT redemption + YT claim", "2026-09-24"]
    ],
    otcDesk: "HK Settlement Co.",
    otcBids: [
      ["HK Settlement Co.", "0.20%", "45 min", "Lead"],
      ["Shenzhen Bridge OTC", "0.24%", "30 min", "Secondary"]
    ]
  },
  {
    id: "bear-foodie",
    brand: "Bear 小熊",
    brandShort: "Bear",
    kol: "@Foodie王",
    kolName: "Foodie Wang",
    kolFollowers: "6.4M",
    category: "Kitchenware",
    product: "Mini steamer set",
    productLine: "Already active campaign with existing user position.",
    status: "ACTIVE",
    statusClass: "active",
    risk: "B",
    target: 800000,
    filled: 800000,
    apy: 16.0,
    duration: 30,
    closeIn: "Live",
    minTicket: 10000,
    cap: 250000,
    lockDate: "2026-05-10 10:00 HKT",
    maturityDate: "2026-06-09",
    revenueShare: "85% of campaign contribution margin until waterfall clears",
    principalCoverage: "Short-dated receivable pledge + inventory reserve",
    icon: "▣",
    logo: "https://logo.clearbit.com/bearappliance.com",
    image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80",
    heroStat: "Current accrued yield $17.6K",
    thesis:
      "This is the in-flight deal that demonstrates what TAEL positions look like after lock. Users can inspect PT, YT, accrued yield, and the OTC desk that already won the mandate.",
    thesisBullets: [
      "Useful reference case for the whole product story.",
      "Shows how active deals roll from allocation into distribution and maturity.",
      "Higher yield, smaller book, more volatile revenue profile."
    ],
    useOfFunds: [
      ["Inventory", 44],
      ["Creator placement", 19],
      ["Warehouse + distribution", 14],
      ["Coupon support", 12],
      ["Escrow / legal", 11]
    ],
    counterparties: [
      "Brand entity: Bear Electric Appliance",
      "KOL agency: Foodie Wang Studio",
      "Distribution: Taobao Live",
      "Escrow SPV: TAEL Launch SPV 24-02"
    ],
    docs: [
      { name: "Launch contract", status: "Signed", detail: "Fully executed before capital release." },
      { name: "Revenue waterfall", status: "Live", detail: "Current accrued vault balance updating daily." },
      { name: "Insurance binder", status: "Bound", detail: "Short-term logistics protection." }
    ],
    riskNotes: [
      "Tier B. Sharper upside but less durable downside protection than Philips / Xiaomi.",
      "PT can still haircut if realized gross margin drops below modeled floor.",
      "Useful active benchmark for YT exchange pricing."
    ],
    recentDeposits: [
      "Allocation closed. No new deposits.",
      "Current vault yield accrual updated 2m ago."
    ],
    timeline: [
      ["Allocation closed", "2026-05-10"],
      ["OTC conversion settled", "2026-05-10"],
      ["Campaign live", "2026-05-17"],
      ["Current status", "Distribution phase"],
      ["PT redemption + YT claim", "2026-06-09"]
    ],
    otcDesk: "Shenzhen Bridge OTC",
    otcBids: [
      ["Shenzhen Bridge OTC", "0.26%", "25 min", "Won"],
      ["Saigon Yellow Desk", "0.31%", "2 h", "Rejected"]
    ]
  }
];

const desks = [
  { id: "sz", name: "Shenzhen Bridge OTC", region: "Shenzhen", currency: "CNY", fee: "0.25%", capacity: "$200K–$10M", response: "30 min", rating: "4.95★", trades: "3,401", terms: "Escrow release within 2h. Dispute SLA 24h.", collateral: "USDT escrow + bank receipt proof", process: ["Vault locks USDT", "Desk posts quote", "Escrow accepts winning desk", "Fiat receipt uploaded", "USDT released"] },
  { id: "hk", name: "HK Settlement Co.", region: "Hong Kong", currency: "HKD", fee: "0.20%", capacity: "$500K–$50M", response: "45 min", rating: "4.97★", trades: "2,789", terms: "Institutional mandate desk with dual approval escrow.", collateral: "Dual sign-off settlement with fiat SWIFT proof", process: ["Mandate issued", "Desk quote accepted", "Custodian confirms receipt", "Vault release"] },
  { id: "sg", name: "Saigon Yellow Desk", region: "Ho Chi Minh", currency: "VND", fee: "0.30%", capacity: "$50K–$2M", response: "2 h", rating: "4.90★", trades: "1,247", terms: "Vietnam distribution specialist. Partial release supported.", collateral: "Tranche release with invoice checkpoints", process: ["Bid", "Partial escrow release", "Invoice attestation", "Final release"] },
  { id: "kr", name: "Seoul KRW Desk", region: "Seoul", currency: "KRW", fee: "0.40%", capacity: "$50K–$3M", response: "1 h", rating: "4.85★", trades: "1,103", terms: "KRW settlement with documented release windows.", collateral: "Escrow + domestic fiat transfer screenshot proof", process: ["Desk quote", "Escrow accepted", "KRW transfer proof", "Release"] },
  { id: "th", name: "Bangkok OTC Pro", region: "Bangkok", currency: "THB", fee: "0.45%", capacity: "$100K–$5M", response: "1 h", rating: "4.80★", trades: "892", terms: "Regional consumer import desk with same-day fiat release.", collateral: "USDT collateral hold until fiat settles", process: ["Win quote", "Fiat send", "Escrow release"] },
  { id: "ph", name: "Manila Quick Cash", region: "Manila", currency: "PHP", fee: "0.55%", capacity: "$20K–$500K", response: "4 h", rating: "4.60★", trades: "521", terms: "Smaller tickets, slower response, wider spread.", collateral: "Escrow receipt + compliance review", process: ["Quote", "Manual review", "Transfer", "Release"] }
];

const exchangeRows = [
  { dealId: "philips-liaustin", bid: 0.92, ask: 0.95, impliedApy: 10.4, vol24h: 310000 },
  { dealId: "anker-techbro", bid: 0.88, ask: 0.91, impliedApy: 13.1, vol24h: 228000 },
  { dealId: "perfectdiary-cherry", bid: 1.04, ask: 1.08, impliedApy: 19.8, vol24h: 442000 },
  { dealId: "xiaomi-smartlife", bid: 0.81, ask: 0.84, impliedApy: 11.0, vol24h: 184000 },
  { dealId: "bear-foodie", bid: 1.09, ask: 1.12, impliedApy: 22.6, vol24h: 520000 }
];

const positions = [];

const wallet = {
  usdt: 1000000,
  tusd: 0
};

const activityLog = [];

const state = {
  activeSection: "markets",
  activeDealId: deals[0].id,
  activeDeskId: desks[0].id,
  sort: "closing",
  riskFilter: "all",
  durationFilter: "all",
  draftAmount: 50000,
  pendingAction: null,
  depositStep: "compose",
  riskAck: false,
  termsAck: false,
  educationSeen: false,
  educationAutoSeen: false,
  stickyControls: false,
  paletteOpen: false,
  paletteQuery: "",
  paletteIndex: 0,
  expandedPositionId: null
};

const statements = [
  { name: "Q1 2026 Statement.pdf", detail: "Finalized statement covering initial active allocation window." },
  { name: "Q2 2026 Statement.pdf (Preview)", detail: "Preview ledger with current OTC mandate and PT / YT positions." }
];

const liveState = {
  stream: [],
  tick: 0,
  intervalsStarted: false,
  tickerSignature: ""
};

const STORAGE_KEY = "tael-demo-v12-runtime";
const SESSION_KEY = "tael-demo-v12-session";
const PLAYED_ANIMATIONS = new Set();
const animationState = {};
let animationFrame = null;
const PT_GLYPH = '<span class="token-glyph pt-glyph">◆</span>';
const YT_GLYPH = '<span class="token-glyph yt-glyph">◇</span>';
const TX_HASHES = ["0x4a7c...e992", "0x7e11...c4a1", "0x91bd...728f", "0xc1de...810a"];

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function saveSessionState() {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      played: [...PLAYED_ANIMATIONS],
      educationSeen: state.educationSeen,
      educationAutoSeen: state.educationAutoSeen
    }));
  } catch {}
}

function loadSessionState() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    (data.played || []).forEach((key) => PLAYED_ANIMATIONS.add(key));
    state.educationSeen = Boolean(data.educationSeen);
    state.educationAutoSeen = Boolean(data.educationAutoSeen);
  } catch {}
}

function persistRuntime() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      wallet,
      positions,
      activityLog,
      state: {
        sort: state.sort,
        riskFilter: state.riskFilter,
        durationFilter: state.durationFilter
      },
      deals: deals.map((deal) => ({
        id: deal.id,
        filled: deal.filled,
        status: deal.status,
        statusClass: deal.statusClass,
        recentDeposits: deal.recentDeposits
      }))
    }));
  } catch {}
}

function loadRuntime() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.wallet) {
      wallet.usdt = Number(data.wallet.usdt ?? wallet.usdt);
      wallet.tusd = Number(data.wallet.tusd ?? wallet.tusd);
    }
    if (Array.isArray(data.positions)) {
      positions.splice(0, positions.length, ...data.positions);
    }
    if (Array.isArray(data.activityLog)) {
      activityLog.splice(0, activityLog.length, ...data.activityLog);
    }
    if (data.state) {
      state.sort = data.state.sort || state.sort;
      state.riskFilter = data.state.riskFilter || state.riskFilter;
      state.durationFilter = data.state.durationFilter || state.durationFilter;
    }
    if (Array.isArray(data.deals)) {
      data.deals.forEach((runtimeDeal) => {
        const deal = deals.find((item) => item.id === runtimeDeal.id);
        if (!deal) return;
        if (typeof runtimeDeal.filled === "number") deal.filled = runtimeDeal.filled;
        if (runtimeDeal.status) deal.status = runtimeDeal.status;
        if (runtimeDeal.statusClass) deal.statusClass = runtimeDeal.statusClass;
        if (Array.isArray(runtimeDeal.recentDeposits)) deal.recentDeposits = runtimeDeal.recentDeposits;
      });
    }
  } catch {}
}

function ensureAnimationLoop() {
  if (animationFrame || prefersReducedMotion()) return;
  const tick = () => {
    const now = performance.now();
    let active = false;
    Object.values(animationState).forEach((item) => {
      if (item && now < item.start + item.duration) active = true;
    });
    renderAll();
    if (active) {
      animationFrame = requestAnimationFrame(tick);
    } else {
      animationFrame = null;
    }
  };
  animationFrame = requestAnimationFrame(tick);
}

function getAnimatedValue(key, target, opts = {}) {
  const entryMs = opts.entryMs ?? 1200;
  const transitionMs = opts.transitionMs ?? 500;
  const delayMs = opts.delayMs ?? 0;
  if (prefersReducedMotion()) return target;
  const now = performance.now();
  const hasPlayed = PLAYED_ANIMATIONS.has(key);
  if (!animationState[key]) {
    if (hasPlayed) {
      animationState[key] = { from: target, to: target, start: now, duration: 0, value: target };
      return target;
    }
    PLAYED_ANIMATIONS.add(key);
    saveSessionState();
    animationState[key] = { from: 0, to: target, start: now + delayMs, duration: entryMs, value: 0 };
    ensureAnimationLoop();
    return 0;
  }
  const item = animationState[key];
  if (item.to !== target) {
    const current = getAnimatedValue(key, item.to, { entryMs, transitionMs, delayMs: 0 });
    animationState[key] = { from: current, to: target, start: now, duration: transitionMs, value: current };
    ensureAnimationLoop();
  }
  const next = animationState[key];
  if (!next.duration) {
    next.value = next.to;
    return next.to;
  }
  const progress = Math.min(1, Math.max(0, (now - next.start) / next.duration));
  const eased = easeOutCubic(progress);
  next.value = next.from + (next.to - next.from) * eased;
  return progress >= 1 ? next.to : next.value;
}

const ANON_WALLETS = [
  "0x4a2f...c891", "0x7b1e...d34a", "0x9c0f...22b7", "0x33ee...91a5", "0xa1b4...5e0d",
  "0x6f7d...88c2", "0x2e09...ff14", "0xc456...0b9a", "0x88ab...44ee", "0x1f2a...7c0d",
  "0x9911...aabb", "0x5566...dd77", "0xeeff...1122", "0x4477...8899", "0xb0cd...e3f1",
  "0x7a8b...c2d4", "0xfe01...23ab", "0x0044...ee77", "0x3c3c...d2d2", "0x9090...0101"
];

const TICKETS = [5000, 5000, 10000, 10000, 15000, 15000, 25000, 25000, 50000, 50000, 75000, 100000, 150000, 250000];

const sectionEls = [...document.querySelectorAll(".section")];
const navEls = [...document.querySelectorAll(".nav-link")];
const sortEls = [...document.querySelectorAll(".sort-pill")];
const modal = document.getElementById("action-modal");
const pageType = document.body.dataset.page || "home";

function parseCloseInToMs(label) {
  if (!label || label === "Live") return null;
  const day = /([0-9]+)d/.exec(label);
  const hour = /([0-9]+)h/.exec(label);
  const min = /([0-9]+)m/.exec(label);
  return (((day ? Number(day[1]) : 0) * 24 + (hour ? Number(hour[1]) : 0)) * 60 + (min ? Number(min[1]) : 0)) * 60000;
}

function initLiveDealState() {
  deals.forEach((deal) => {
    deal.closeAt = deal.status === "ACTIVE" || deal.status === "MATURED" ? null : Date.now() + (parseCloseInToMs(deal.closeIn) || 0);
  });
}

function countdownParts(deal) {
  if (!deal.closeAt) return null;
  const remainingMs = Math.max(0, deal.closeAt - Date.now());
  return {
    remainingMs,
    days: Math.floor(remainingMs / 86400000),
    hours: Math.floor((remainingMs % 86400000) / 3600000),
    mins: Math.floor((remainingMs % 3600000) / 60000),
    secs: Math.floor((remainingMs % 60000) / 1000)
  };
}

function formatCountdown(deal, includeSeconds = false) {
  if (!deal.closeAt) return deal.status === "ACTIVE" ? "LIVE" : "Closed";
  const part = countdownParts(deal);
  if (!part || part.remainingMs <= 0) return "Closed";
  if (part.days > 0) return part.days + "d " + part.hours + "h";
  if (part.hours > 0) return part.hours + "h " + part.mins + "m";
  return includeSeconds ? part.mins + "m " + part.secs + "s" : part.mins + "m";
}

function formatEventAge(ts) {
  const secs = Math.max(1, Math.floor((Date.now() - ts) / 1000));
  if (secs < 60) return secs + "s";
  const mins = Math.floor(secs / 60);
  if (mins < 60) return mins + "m";
  return Math.floor(mins / 60) + "h";
}

function pickTicket(deal) {
  const remaining = Math.max(0, deal.target - deal.filled);
  const valid = TICKETS.filter((ticket) => ticket <= remaining);
  if (!valid.length) return Math.min(5000, remaining);
  return valid[Math.floor(Math.random() * valid.length)];
}

function watcherCountForDeal(deal) {
  return 12 + (deal.id.charCodeAt(0) * 7) % 84;
}

function shortTicker(deal) {
  const words = deal.brandShort.replace(/[^A-Za-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const base = words.find((word) => word.length >= 3) || words[0] || deal.brandShort;
  return base.toUpperCase().slice(0, 6);
}

function tokenLabel(kind, symbol) {
  return (kind === "PT" ? PT_GLYPH : YT_GLYPH) + kind + "-" + symbol;
}

function formatAmountField(value) {
  if (!value) return "";
  return Number(value).toLocaleString("en-US");
}

function formatDurationLabel(days) {
  return document.documentElement.lang === "zh" ? days + "天" : days + " days";
}

function matchDurationFilter(deal) {
  if (state.durationFilter === "all") return true;
  if (state.durationFilter === "30") return deal.duration <= 30;
  if (state.durationFilter === "60") return deal.duration > 30 && deal.duration <= 60;
  if (state.durationFilter === "90+") return deal.duration >= 90;
  return true;
}

function filteredDeals(list) {
  return list.filter((deal) => {
    const riskOk = state.riskFilter === "all" ? true : deal.risk === state.riskFilter;
    return riskOk && matchDurationFilter(deal);
  });
}

function baseYieldCurveDeals() {
  return filteredDeals(deals).filter((deal) => ["OPEN", "FILLING FAST", "CLOSING SOON"].includes(deal.status));
}

function yieldCurveSvg() {
  const rows = baseYieldCurveDeals().sort((a, b) => a.duration - b.duration);
  if (!rows.length) return "";
  const compact = window.innerWidth <= 720;
  const tiny = window.innerWidth <= 520;
  const width = tiny ? 520 : compact ? 560 : 640;
  const height = tiny ? 170 : compact ? 188 : 220;
  const padX = tiny ? 30 : compact ? 34 : 42;
  const padY = tiny ? 18 : compact ? 20 : 24;
  const xMax = Math.max(...rows.map((deal) => deal.duration));
  const yMax = Math.max(...rows.map((deal) => deal.apy)) + 2;
  const yMin = Math.max(0, Math.min(...rows.map((deal) => deal.apy)) - 1);
  const x = (v) => padX + ((v - 0) / xMax) * (width - padX * 2);
  const y = (v) => height - padY - ((v - yMin) / (yMax - yMin || 1)) * (height - padY * 2);
  const line = rows.map((deal) => x(deal.duration).toFixed(1) + "," + y(deal.apy).toFixed(1)).join(" ");
  const grid = (tiny ? [0, 1] : compact ? [0, 0.5, 1] : [0, 0.25, 0.5, 0.75, 1]).map((ratio) => {
    const yPos = padY + (height - padY * 2) * ratio;
    const value = (yMax - (yMax - yMin) * ratio).toFixed(1);
    return '<g><line x1="' + padX + '" y1="' + yPos + '" x2="' + (width - padX) + '" y2="' + yPos + '" stroke="rgba(232,224,207,0.08)" stroke-width="1" /><text x="6" y="' + (yPos + 4) + '" class="curve-axis mono">' + value + '%</text></g>';
  }).join("");
  const points = rows.map((deal) => {
    const cx = x(deal.duration).toFixed(1);
    const cy = y(deal.apy).toFixed(1);
    const apyLabel = tiny ? "" : '<text x="' + cx + '" y="' + (Number(cy) - (compact ? 9 : 10)) + '" text-anchor="middle" class="curve-label mono">' + deal.apy.toFixed(1) + '%</text>';
    const brandLabel = compact ? "" : '<text x="' + cx + '" y="' + (Number(cy) - 24) + '" text-anchor="middle" class="curve-axis mono">' + deal.brandShort + '</text>';
    return '<g class="curve-point"><circle cx="' + cx + '" cy="' + cy + '" r="' + (tiny ? 3 : compact ? 3.5 : 4) + '" fill="var(--gold)" />' + apyLabel + brandLabel + '<text x="' + cx + '" y="' + (height - 6) + '" text-anchor="middle" class="curve-axis mono">' + deal.duration + 'd</text></g>';
  }).join("");
  return '<section class="panel curve-panel"><div class="panel-head"><div><p class="eyebrow">Yield curve</p><h2>Active tenor surface</h2></div><div class="curve-foot mono">Target APY by days to maturity</div></div><svg viewBox="0 0 ' + width + ' ' + height + '" class="yield-curve">' + grid + '<polyline fill="none" stroke="#ebe3cd" stroke-width="1.25" points="' + line + '" />' + points + '</svg></section>';
}

function getKOLProfile(deal) {
  const comparable = deals.filter((item) => item.id !== deal.id).slice(0, 3).map((item) => ({
    brand: item.brandShort,
    duration: item.duration,
    target: item.apy,
    realized: Math.max(6, item.apy - 1.2).toFixed(1),
    gmv: item.heroStat.replace("Expected GMV ", "")
  }));
  return {
    stage: deal.kolName,
    real: deal.kolName,
    agency: (deal.counterparties.find((row) => row.includes("agency")) || "Agency undisclosed").replace("KOL agency: ", ""),
    verifiedAt: "2026-03-12",
    comparable
  };
}

function openKolDrawer(deal) {
  const profile = getKOLProfile(deal);
  openModal({
    title: profile.stage + " profile",
    bodyHtml:
      '<div class="kol-drawer"><div class="kol-drawer-head"><div class="kol-avatar">' + kolInitials(deal) + '</div><div><h3>' + profile.stage + '</h3><p class="detail-copy">' + profile.real + ' · ' + profile.agency + '</p><p class="mono paper-meta">Identity verified by TAEL Deal Desk · ' + profile.verifiedAt + '</p></div></div><div class="data-table-card"><div class="table-head kol-history-grid"><div>Brand</div><div>Duration</div><div>Target APY</div><div>Realized APY</div><div>GMV</div></div><div class="table-body">' + profile.comparable.map((row) => '<div class="kol-history-grid kol-history-row"><div>' + row.brand + '</div><div class="mono">' + row.duration + 'd</div><div class="mono">' + row.target.toFixed(1) + '%</div><div class="mono">' + row.realized + '%</div><div class="mono">' + row.gmv + '</div></div>').join("") + '</div></div><p class="paper-note">This drawer exists to make the brand × KOL pairing feel underwritten, not anonymous.</p></div>'
  });
}

function settlementRef(position, deal) {
  return "TAEL-SETT-" + new Date().toISOString().slice(0, 10).replace(/-/g, "") + "-" + shortTicker(deal) + "-" + Math.floor(position.principal / 1000);
}

function openSettlementReceipt(position, deal, payout) {
  const yieldValue = position.accruedYield;
  openModal({
    title: "Settlement receipt",
    bodyHtml:
      '<div class="ticket-stack fade-up"><div class="receipt-asterism mono">* * *</div><div class="mono receipt-title">SETTLEMENT RECEIPT</div><div class="serif italic receipt-ref">Ref. ' + settlementRef(position, deal) + '</div><div class="receipt-card">' +
      receiptRow("Deal", deal.brandShort + " × " + deal.kolName) +
      receiptRow("Principal returned", money(position.principal, 2), true) +
      receiptRow("Yield realized", money(yieldValue, 2), true) +
      receiptRow("Total redeemed", money(payout, 2), true) +
      receiptRow("Settled at", nowHkt()) +
      receiptRow("Tx hash", TX_HASHES[Math.floor(Math.random() * TX_HASHES.length)]) +
      '</div><div class="serif italic receipt-foot">This statement is available in Account → Statements.</div></div>'
  });
}

function settlePosition(position) {
  const deal = deals.find((item) => item.id === position.dealId);
  if (!deal) return;
  const payout = position.principal + position.accruedYield;
  wallet.usdt += payout;
  const idx = positions.findIndex((item) => item.dealId === position.dealId);
  if (idx >= 0) positions.splice(idx, 1);
  deal.status = "MATURED";
  deal.statusClass = "active";
  pushActivity(
    "Settlement receipt · " + money(payout, 2),
    deal.brandShort + " matured and redeemed at " + shortDateTime(Date.now())
  );
  persistRuntime();
  openSettlementReceipt(position, deal, payout);
  renderAll();
}

function fastForwardMaturity() {
  const active = positions.slice();
  if (!active.length) {
    openModal({ title: "No active positions", body: "Fast-forward needs at least one live position in portfolio." });
    return;
  }
  active.forEach((position) => settlePosition({ ...position }));
}

function paletteResults() {
  const q = state.paletteQuery.trim().toLowerCase();
  const actions = [
    { id: "goto-markets", label: "Go to Markets", run: () => { state.activeSection = "markets"; renderAll(); } },
    { id: "goto-portfolio", label: "Go to Portfolio", run: () => { state.activeSection = "portfolio"; renderAll(); } },
    { id: "goto-account", label: "Go to Account", run: () => { state.activeSection = "account"; renderAll(); } },
    { id: "open-guide", label: "Open PT/YT guide", run: () => openEducationModal() },
    { id: "maturity", label: "Fast-forward to maturity", run: () => fastForwardMaturity() },
    { id: "lang-en", label: "Switch language to EN", run: () => { document.documentElement.lang = "en"; renderAll(); } },
    { id: "lang-zh", label: "Switch language to ZH", run: () => { document.documentElement.lang = "zh"; renderAll(); } }
  ];
  const dealActions = deals.map((deal) => ({
    id: "deal-" + deal.id,
    label: "Open deal · " + deal.brandShort + " × " + deal.kolName,
    run: () => {
      state.activeDealId = deal.id;
      state.activeSection = "markets";
      if (pageType === "home") renderAll();
      else window.location.href = "./deal.html?deal=" + encodeURIComponent(deal.id);
    }
  }));
  return [...actions, ...dealActions].filter((item) => !q || item.label.toLowerCase().includes(q));
}

function openCommandPalette() {
  const results = paletteResults();
  state.paletteIndex = Math.max(0, Math.min(state.paletteIndex, Math.max(0, results.length - 1)));
  openModal({
    title: "Command palette",
    bodyHtml:
      '<div class="palette-shell"><input id="palette-input" class="palette-input mono" value="' + state.paletteQuery.replace(/"/g, "&quot;") + '" placeholder="Jump to deal, action, or language" /><div class="palette-results">' +
      results.map((item, idx) => '<button class="palette-row' + (idx === state.paletteIndex ? ' active' : '') + '" data-palette-index="' + idx + '">' + item.label + '</button>').join("") +
      '</div></div>'
  });
  const input = document.getElementById("palette-input");
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    input.addEventListener("input", () => {
      state.paletteQuery = input.value;
      state.paletteIndex = 0;
      openCommandPalette();
    });
    input.addEventListener("keydown", (event) => {
      const items = paletteResults();
      if (event.key === "ArrowDown") {
        event.preventDefault();
        state.paletteIndex = Math.min(items.length - 1, state.paletteIndex + 1);
        openCommandPalette();
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        state.paletteIndex = Math.max(0, state.paletteIndex - 1);
        openCommandPalette();
      }
      if (event.key === "Enter") {
        event.preventDefault();
        if (items[state.paletteIndex]) {
          const picked = items[state.paletteIndex];
          modal.close();
          picked.run();
        }
      }
    });
  }
  document.querySelectorAll("[data-palette-index]").forEach((node) => {
    node.addEventListener("click", () => {
      const picked = paletteResults()[Number(node.dataset.paletteIndex)];
      if (!picked) return;
      modal.close();
      picked.run();
    });
  });
}

function renderMarketsControls() {
  const root = document.getElementById("markets-controls");
  if (!root) return;
  root.className = "markets-controls" + (state.stickyControls ? " sticky" : "");
  root.innerHTML =
    '<div class="markets-controls-inner"><div class="sort-cluster"><span class="mono controls-kicker">SORT</span><div class="sort-pills">' +
    '<button class="sort-pill ' + (state.sort === "closing" ? "active" : "") + '" data-sort="closing">Closing soonest</button>' +
    '<button class="sort-pill ' + (state.sort === "apy" ? "active" : "") + '" data-sort="apy">Highest APY</button>' +
    '<button class="sort-pill ' + (state.sort === "remaining" ? "active" : "") + '" data-sort="remaining">Smallest remaining</button></div></div>' +
    '<div class="filter-cluster"><span class="mono controls-kicker">RISK</span><div class="filter-pills">' +
    ["all", "A", "B", "C"].map((risk) => '<button class="filter-pill ' + (state.riskFilter === risk ? "active" : "") + '" data-risk-filter="' + risk + '">' + (risk === "all" ? "All risks" : "Risk " + risk) + '</button>').join("") +
    '</div></div><div class="filter-cluster"><span class="mono controls-kicker">DURATION</span><div class="filter-pills">' +
    [["all", "All"], ["30", "30d"], ["60", "60d"], ["90+", "90d+"]].map((row) => '<button class="filter-pill ' + (state.durationFilter === row[0] ? "active" : "") + '" data-duration-filter="' + row[0] + '">' + row[1] + '</button>').join("") +
    '</div></div></div>';
  root.querySelectorAll("[data-sort]").forEach((node) => {
    node.addEventListener("click", () => {
      state.sort = node.dataset.sort;
      persistRuntime();
      renderAll();
    });
  });
  root.querySelectorAll("[data-risk-filter]").forEach((node) => {
    node.addEventListener("click", () => {
      state.riskFilter = node.dataset.riskFilter;
      persistRuntime();
      renderAll();
    });
  });
  root.querySelectorAll("[data-duration-filter]").forEach((node) => {
    node.addEventListener("click", () => {
      state.durationFilter = node.dataset.durationFilter;
      persistRuntime();
      renderAll();
    });
  });
}

function syncStickyControls() {
  const anchor = document.getElementById("markets-controls-anchor");
  if (!anchor) return;
  const top = anchor.getBoundingClientRect().top;
  const scrolled = top <= 12;
  if (state.stickyControls !== scrolled) {
    state.stickyControls = scrolled;
    renderMarketsControls();
  }
}

function maturityDateStr(deal) {
  const d = new Date(Date.now() + deal.duration * 86400000);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function nowHkt() {
  return new Date().toLocaleString("en-HK", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Hong_Kong"
  }) + " HKT";
}

function generateRef(deal, amount) {
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return "TAEL-" + stamp + "-" + shortTicker(deal) + "-" + Math.floor(amount / 1000);
}

function receiptRow(label, value, highlight = false) {
  return '<div class="receipt-row"><span class="mono">' + label + '</span><span class="dot-leader"></span><strong class="mono' + (highlight ? ' gold-text' : '') + '">' + value + '</strong></div>';
}

function documentPreviewHtml(docType, deal) {
  return '<div class="paper-sheet"><div class="paper-watermark mono">TAEL · ILLUSTRATIVE ONLY · NOT FOR DISTRIBUTION</div><div class="paper-header"><div class="mono paper-kicker">TAEL PRIVATE MARKETS</div><h3>' + docType.name + '</h3><div class="paper-meta mono">Deal ' + shortTicker(deal) + ' · ' + deal.brandShort + ' × ' + deal.kolName + '</div></div><div class="paper-body"><p>This illustrative document summarizes the financing, release, and settlement mechanics governing the ' + deal.brandShort + ' creator-commerce allocation. It is designed to read like a real private-market artifact rather than a tooltip.</p><p><span class="mono">1.01</span> Allocated capital may only be used for approved inventory build, creator placement, fulfilment float, and escrow-related settlement costs. Any material change in use of proceeds requires TAEL desk approval.</p><p><span class="mono">2.04</span> Principal protection for ' + tokenLabel("PT", shortTicker(deal)) + ' is supported by ' + deal.principalCoverage + '. Campaign receipts sweep into the settlement account before residual distribution to counterparties.</p><p><span class="mono">3.11</span> Yield rights attached to ' + tokenLabel("YT", shortTicker(deal)) + ' accrue from realized launch performance and settle only after principal waterfalls, insurance offsets, and dispute reserves are satisfied in full.</p><p><span class="mono">4.07</span> The winning OTC desk, currently ' + deal.otcDesk + ', must evidence fiat settlement before escrow release. Late settlement or documentation defects trigger holdback procedures and may re-route the mandate to a backup desk.</p><p><span class="mono">5.02</span> Event of default includes material creator non-performance, unauthorized inventory diversion, or platform takedown causing revenue interruption beyond the insured threshold. TAEL Deal Desk may halt further release and force accelerated reconciliation.</p><p><span class="mono">6.19</span> Target APY remains a forecast disclosure only. Realized outcomes depend on audited campaign cashflows, refund behavior, and settlement timing.</p></div></div>';
}

function statementPreviewHtml(statement) {
  const lifetimeAllocated = positions.reduce((sum, position) => sum + position.principal, 0);
  const totalYield = positions.reduce((sum, position) => sum + position.accruedYield, 0);
  const totalPt = positions.reduce((sum, position) => sum + position.pt, 0);
  const totalYt = positions.reduce((sum, position) => sum + position.yt * position.mark, 0);
  return '<div class="paper-sheet statement-sheet"><div class="paper-watermark mono">TAEL QUARTERLY STATEMENT · ARCHIVE COPY</div><div class="paper-header"><div class="mono paper-kicker">兩 · TAEL QUARTERLY STATEMENT</div><h3>' + statement.name + '</h3><div class="paper-meta mono">Account GUEST #4729 · HK</div></div><div class="paper-body">' + receiptRow("Period", statement.name.includes("Q1") ? "Jan 1, 2026 — Mar 31, 2026" : "Apr 1, 2026 — Jun 30, 2026") + receiptRow("Opening balance", money(1000000)) + receiptRow("Lifetime allocated", money(lifetimeAllocated)) + receiptRow("Outstanding " + tokenLabel("PT", "BASKET"), money(totalPt), true) + receiptRow("Outstanding " + tokenLabel("YT", "BASKET"), money(totalYt, 2), true) + receiptRow("Accrued yield", money(totalYield, 2), true) + receiptRow("Closing balance", money(wallet.usdt + wallet.tusd + totalPt + totalYt + totalYield, 2), true) + '<p class="paper-note">Statement generated ' + nowHkt() + '. Available in archive for 7 years. Download PDF remains illustrative in this demo.</p></div></div>';
}

function ackRow(id, checked, text) {
  return '<label class="ack-row" for="' + id + '"><input id="' + id + '" type="checkbox" ' + (checked ? "checked" : "") + ' /><span>' + text + '</span></label>';
}

function markStepCompleted(stepId) {
  return ["compose", "review", "sign", "confirmed"].indexOf(state.depositStep) >= ["compose", "review", "sign", "confirmed"].indexOf(stepId);
}

function openEducationModal() {
  state.educationSeen = true;
  saveSessionState();
  const slides = [
    {
      title: "Two tokens. One position.",
      body:
        '<div class="education-slide"><p class="detail-copy">Every dollar deposited into TAEL produces two separate tokens. One represents your principal. The other carries your yield.</p><div class="education-diagram"><div><strong class="serif">$1</strong><span class="mono">YOU DEPOSIT</span></div><div class="education-arrow mono">→</div><div class="education-stack"><div class="education-token pt"><span class="mono">PT</span><em>principal layer</em></div><div class="education-token yt"><span class="mono">YT</span><em>yield layer</em></div></div></div><p class="detail-copy">Held together, PT and YT are your full position. Separated, they become tools.</p></div>'
    },
    {
      title: "PT — the principal layer.",
      body:
        '<div class="education-slide"><p class="detail-copy">PT is the stable, redeemable leg of your position. It maps to principal redemption and can also be wrapped into tUSD as reusable stable balance.</p><div class="pull-note"><div class="eyebrow">Example</div><p>Deposit $100,000. You receive 100,000 ' + tokenLabel("PT", shortTicker(activeDeal())) + '. At maturity PT redeems against principal terms, or can be wrapped earlier into tUSD.</p></div><p class="detail-copy italic-note">Think of PT as your money, locked but structurally reclaimable.</p></div>'
    },
    {
      title: "YT — the yield layer.",
      body:
        '<div class="education-slide"><p class="detail-copy">YT accrues the realized upside of the deal. It is the tradeable cashflow strip and the piece that moves more aggressively with implied APY.</p><div class="pull-note"><div class="eyebrow">Example</div><p>That same $100,000 deposit mints 100,000 ' + tokenLabel("YT", shortTicker(activeDeal())) + '. Hold it to maturity for accrued yield, or sell it earlier on the YT exchange.</p></div><p class="detail-copy italic-note">Think of YT as future profit, made liquid before the deal is over.</p></div>'
    },
    {
      title: "Three actions from any position.",
      body:
        '<div class="education-slide"><p class="detail-copy">Hold is the default. Wrap and trade are optional tools, not obligations.</p><div class="education-actions-grid"><div><div class="mono gold-text">HOLD</div><p>Keep PT and YT to maturity.</p></div><div><div class="mono gold-text">WRAP</div><p>Convert PT into tUSD stable balance.</p></div><div><div class="mono gold-text">TRADE</div><p>Sell YT before maturity to lock or hedge yield.</p></div></div><p class="detail-copy italic-note">Allocate first. Manage principal and yield only when it serves your view.</p></div>'
    }
  ];
  let slide = 0;
  const renderSlide = () => {
    const current = slides[slide];
    modal.innerHTML =
      '<div class="modal-shell education-modal"><p class="eyebrow">On PT and YT</p><h3>' + current.title + '</h3><div class="modal-copy-wrap">' + current.body + '</div><div class="education-footer"><div class="education-progress">' + slides.map((_, idx) => '<span class="education-dot' + (idx === slide ? ' active' : idx < slide ? ' done' : '') + '"></span>').join("") + '</div><div class="modal-actions">' + (slide > 0 ? '<button class="secondary-button" id="edu-back">Back</button>' : '<button class="secondary-button" id="modal-cancel">Close</button>') + '<button class="action-button" id="edu-next">' + (slide === slides.length - 1 ? 'Got it' : 'Next') + '</button></div></div></div>';
    modal.showModal();
    const closeBtn = document.getElementById("modal-cancel");
    if (closeBtn) closeBtn.addEventListener("click", () => modal.close());
    const backBtn = document.getElementById("edu-back");
    if (backBtn) backBtn.addEventListener("click", () => { slide -= 1; renderSlide(); });
    document.getElementById("edu-next").addEventListener("click", () => {
      if (slide === slides.length - 1) {
        modal.close();
        return;
      }
      slide += 1;
      renderSlide();
    });
  };
  renderSlide();
}

function seedLiveStream() {
  liveState.stream = Array.from({ length: 12 }, (_, i) => {
    const targetDeal = deals[Math.floor(Math.random() * Math.max(1, deals.length - 1))];
    return {
      id: "seed-" + i,
      wallet: ANON_WALLETS[Math.floor(Math.random() * ANON_WALLETS.length)],
      amount: pickTicket(targetDeal),
      dealId: targetDeal.id,
      at: Date.now() - (i + 1) * 13000 - Math.floor(Math.random() * 8000)
    };
  }).reverse();
}

function pushLiveDeposit(deal, amount, walletLabel) {
  liveState.stream.push({
    id: "live-" + Date.now() + "-" + Math.random().toString(16).slice(2, 6),
    wallet: walletLabel,
    amount,
    dealId: deal.id,
    at: Date.now()
  });
  liveState.stream = liveState.stream.slice(-24);
}

function simulateLiveDeposit() {
  const candidates = deals.filter((deal) => deal.status !== "ACTIVE" && deal.status !== "MATURED" && deal.filled < deal.target);
  if (!candidates.length) return;
  candidates.forEach((deal) => {
    const part = countdownParts(deal);
    if (part && part.remainingMs <= 0) {
      deal.status = "ACTIVE";
      deal.statusClass = "active";
      deal.filled = deal.target;
    }
  });
  const openDeals = candidates.filter((deal) => deal.filled < deal.target);
  if (!openDeals.length || Math.random() > 0.35) return;
  const deal = openDeals[Math.floor(Math.random() * openDeals.length)];
  const amount = pickTicket(deal);
  deal.filled = Math.min(deal.target, deal.filled + amount);
  pushLiveDeposit(deal, amount, ANON_WALLETS[Math.floor(Math.random() * ANON_WALLETS.length)]);
  const pctFilled = deal.filled / deal.target;
  if (deal.filled >= deal.target) {
    deal.status = "ACTIVE";
    deal.statusClass = "active";
  } else if (pctFilled > 0.92) {
    deal.status = "CLOSING SOON";
    deal.statusClass = "soon";
  } else if (pctFilled > 0.7) {
    deal.status = "FILLING FAST";
    deal.statusClass = "fast";
  } else {
    deal.status = "OPEN";
    deal.statusClass = "open";
  }
}

function startLiveLoops() {
  if (liveState.intervalsStarted) return;
  liveState.intervalsStarted = true;
  setInterval(() => {
    liveState.tick += 1;
    updateHeaderStats();
    renderTicker();
    renderUrgencyBanner();
    if (state.activeSection === "markets") renderDeals();
  }, 1000);
  setInterval(() => {
    simulateLiveDeposit();
    renderTicker();
    if (state.activeSection === "markets") renderDeals();
  }, 6000);
}

function brandMark(deal, compact = false) {
  const cleaned = deal.brandShort.replace(/[^A-Za-z]/g, "");
  const label = (compact ? cleaned.slice(0, 2) : cleaned.slice(0, 1) || deal.brandShort.slice(0, 1)).toUpperCase();
  const cls = compact ? "brand-mark compact" : "brand-mark";
  return '<span class="' + cls + ' fallback"><span class="brand-fallback">' + label + '</span></span>';
}

function money(value, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits
  }).format(value);
}

function compactMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

function pct(value) {
  return value.toFixed(1) + "%";
}

function activeDeal() {
  return deals.find((deal) => deal.id === state.activeDealId);
}

function activeDesk() {
  return desks.find((desk) => desk.id === state.activeDeskId);
}

function getDeskByName(name) {
  return desks.find((desk) => desk.name === name);
}

function totalPortfolioValue() {
  return positions.reduce((sum, pos) => sum + pos.pt + pos.yt * pos.mark + pos.accruedYield, 0) + wallet.usdt + wallet.tusd;
}

function weightedApy() {
  const funded = deals.reduce((sum, deal) => sum + deal.filled, 0);
  const weighted = deals.reduce((sum, deal) => sum + deal.filled * deal.apy, 0);
  return funded ? weighted / funded : 0;
}

function kolInitials(deal) {
  return deal.kolName.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function formatHktAsOf() {
  return "as of " + new Date().toLocaleString("en-HK", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }) + " HKT";
}

function shortDateTime(ts) {
  return new Date(ts).toLocaleString("en-HK", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }) + " HKT";
}

function pushActivity(title, detail, ts = Date.now()) {
  activityLog.unshift({ title, detail, ts });
  activityLog.splice(10);
}

function activityFeed() {
  if (activityLog.length) return activityLog;
  return [
    {
      title: "No account activity yet",
      detail: "Your first allocation receipt, PT wrap, and YT sale will appear here."
    }
  ];
}

function nearestClosing() {
  const closing = deals
    .filter((deal) => deal.status !== "ACTIVE" && deal.status !== "MATURED" && deal.closeAt)
    .sort((a, b) => a.closeAt - b.closeAt);
  return closing[0] ? formatCountdown(closing[0]) : "Live";
}

function sortDeals(list) {
  const weight = (deal) => {
    if (deal.status === "CLOSING SOON") return 0;
    if (deal.status === "FILLING FAST") return 1;
    if (deal.status === "OPEN") return 2;
    return 3;
  };
  const copy = [...filteredDeals(list)];
  if (state.sort === "apy") copy.sort((a, b) => b.apy - a.apy);
  if (state.sort === "remaining") copy.sort((a, b) => (a.target - a.filled) - (b.target - b.filled));
  if (state.sort === "closing") copy.sort((a, b) => {
    if (a.closeAt && b.closeAt) return a.closeAt - b.closeAt;
    return weight(a) - weight(b);
  });
  return copy;
}

function renderTicker() {
  const el = document.getElementById("live-ticker");
  if (!el) return;
  const recent = [...liveState.stream].slice(-12).reverse();
  if (!recent.length) {
    el.innerHTML = "";
    liveState.tickerSignature = "";
    return;
  }
  const signature = recent.map((evt) => evt.id).join("|");
  el.dataset.tickerReady = "true";
  if (liveState.tickerSignature === signature) {
    return;
  }
  const items = [...recent, ...recent].map((evt, idx) => {
    const deal = deals.find((item) => item.id === evt.dealId);
    return '<div class="ticker-item mono"><strong>' + evt.wallet + '</strong><span>deposited</span><span class="gold">' + money(evt.amount) + '</span><span>→</span><em>' + (deal ? deal.brandShort : "TAEL") + '</em><span class="time-faint">· ' + formatEventAge(evt.at) + '</span></div>';
  }).join("");
  el.innerHTML = '<div class="live-ticker-shell"><div class="live-label mono"><span class="live-dot"></span><span>LIVE FEED</span></div><div class="ticker-mask"><div class="ticker-track">' + items + '</div></div></div>';
  liveState.tickerSignature = signature;
}

function renderUrgencyBanner() {
  const el = document.getElementById("urgency-banner");
  if (!el) return;
  const candidates = deals
    .filter((deal) => deal.status !== "ACTIVE" && deal.status !== "MATURED" && deal.closeAt)
    .sort((a, b) => a.closeAt - b.closeAt);
  const closingToday = candidates.filter((deal) => {
    const part = countdownParts(deal);
    return part && part.remainingMs > 0 && part.remainingMs <= 86400000;
  });
  if (!closingToday.length) {
    el.innerHTML = "";
    return;
  }
  const critical = closingToday.some((deal) => {
    const part = countdownParts(deal);
    return part && part.remainingMs <= 3600000;
  });
  const summary = closingToday.slice(0, 2).map((deal) => deal.brandShort + ' in ' + formatCountdown(deal, true)).join(' · ');
  el.innerHTML = '<div class="urgency-shell"><div class="urgency-copy mono"><span class="urgency-dot ' + (critical ? 'critical' : 'live') + '"></span>' + closingToday.length + ' ALLOCATIONS CLOSING TODAY <strong>' + summary + '</strong></div><button class="urgency-link mono" id="urgency-open">View all →</button></div>';
  document.getElementById("urgency-open").addEventListener("click", () => {
    state.activeSection = "markets";
    state.sort = "closing";
    sortEls.forEach((item) => item.classList.toggle("active", item.dataset.sort === "closing"));
    renderAll();
  });
}

function updateHeaderStats() {
  if (!document.getElementById("stat-aum")) {
    document.getElementById("wallet-balance").textContent = (window.innerWidth <= 520 ? compactMoney(wallet.usdt) : money(wallet.usdt)) + " USDT";
    return;
  }
  const animatedAum = getAnimatedValue("markets-hero-aum", deals.reduce((sum, deal) => sum + deal.filled, 0), { entryMs: 1400 });
  const animatedDeals = getAnimatedValue("markets-hero-deals", deals.length, { entryMs: 900, delayMs: 100 });
  const animatedApy = getAnimatedValue("markets-hero-apy", weightedApy(), { entryMs: 1100, delayMs: 200 });
  document.getElementById("stat-aum").textContent = money(animatedAum);
  document.getElementById("stat-active").textContent = String(Math.round(animatedDeals));
  document.getElementById("stat-apy").textContent = pct(animatedApy);
  document.getElementById("stat-close").textContent = nearestClosing();
  const heroAsOf = document.getElementById("hero-asof");
  if (heroAsOf) heroAsOf.textContent = formatHktAsOf();
  document.getElementById("wallet-balance").textContent = (window.innerWidth <= 520 ? compactMoney(wallet.usdt) : money(wallet.usdt)) + " USDT";
}

function renderNav() {
  if (!sectionEls.length) return;
  navEls.forEach((node) => node.classList.toggle("active", node.dataset.section === state.activeSection));
  sectionEls.forEach((section) => section.classList.toggle("active", section.id === state.activeSection));
}

function renderDeals() {
  renderMarketsControls();
  const curve = document.getElementById("yield-curve-shell");
  if (curve) curve.innerHTML = yieldCurveSvg();
  const el = document.getElementById("deal-list");
  if (!el) return;
  el.innerHTML = sortDeals(deals).map((deal, idx) => {
    const progress = Math.round((deal.filled / deal.target) * 100);
    const animatedProgress = getAnimatedValue("deal-" + deal.id + "-filledpct", progress, { entryMs: 900, delayMs: idx * 60 });
    const animatedApy = getAnimatedValue("deal-" + deal.id + "-apy", deal.apy, { entryMs: 700, delayMs: idx * 60 });
    const remaining = deal.target - deal.filled;
    const closeLabel = deal.status === "ACTIVE" ? "LIVE" : formatCountdown(deal);
    const isClosingSoon = deal.status === "CLOSING SOON";
    const fillColor = deal.statusClass === "active" ? "fill-sage" : deal.statusClass === "soon" ? "fill-amber" : deal.statusClass === "fast" ? "fill-gold" : "fill-cream";
    return '<button class="deal-card status-' + deal.statusClass + ' ' + (deal.id === state.activeDealId ? "active" : "") + '" data-deal="' + deal.id + '">' +
      '<div class="deal-top">' +
        '<div class="deal-badges">' +
          '<span class="badge ' + deal.statusClass + '">' + deal.status + '</span>' +
          '<span class="badge risk">Risk ' + deal.risk + '</span>' +
        '</div>' +
        '<span class="deal-chevron mono" style="font-size:14px;color:var(--ink-faint);">›</span>' +
      '</div>' +
      '<div style="margin:10px 0 4px;">' +
        '<div class="serif" style="color:#ebe3cd;font-size:clamp(18px,2.5vw,22px);line-height:1.2;">' + deal.brandShort + ' <span style="font-style:italic;color:var(--ink-soft);">×</span> ' + deal.kolName + '</div>' +
        '<div class="mono" style="font-size:11px;color:var(--ink-soft);margin-top:4px;letter-spacing:0.02em;">' + deal.product + ' · ' + deal.category + '</div>' +
      '</div>' +
      '<div class="deal-stats">' +
        '<div class="deal-stat"><span>APY</span><strong class="mono gold" style="color:var(--gold);">' + pct(animatedApy) + '</strong></div>' +
        '<div class="deal-stat"><span>LOCK</span><strong class="mono">' + deal.duration + 'd</strong></div>' +
        '<div class="deal-stat"><span>FILLED</span><strong class="mono">' + Math.round(animatedProgress) + '%</strong></div>' +
        '<div class="deal-stat"><span>CLOSES IN</span><strong class="mono" style="' + (isClosingSoon ? 'color:var(--rust);' : '') + '">' + closeLabel + '</strong></div>' +
      '</div>' +
      '<div style="margin-top:14px;">' +
        '<div class="progress-track"><div class="progress-fill ' + fillColor + '" style="width:' + Math.min(100, animatedProgress) + '%"></div></div>' +
        '<div style="display:flex;justify-content:space-between;margin-top:6px;">' +
          '<span class="mono" style="font-size:10px;color:var(--ink-faint);">' + money(deal.filled) + ' <span style="color:var(--ink-soft);">of</span> ' + money(deal.target) + '</span>' +
          '<span class="mono" style="font-size:10px;color:var(--ink-faint);">' + money(remaining) + ' remaining</span>' +
        '</div>' +
      '</div>' +
    '</button>';
  }).join("");

  el.querySelectorAll("[data-deal]").forEach((node) => {
    node.addEventListener("click", () => {
      window.location.href = './deal.html?deal=' + encodeURIComponent(node.dataset.deal);
    });
  });
}

function updateTicketAmountPreview(deal) {
  const amt = state.draftAmount;
  const projectedYield = amt * (deal.apy / 100) * (deal.duration / 365);
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setText("ticket-pt-val", money(amt));
  setText("ticket-yt-val", money(amt));
  setText("ticket-yield-val", money(projectedYield, 2));
  setText("ticket-maturity-val", money(amt + projectedYield, 2));

  const btn = document.getElementById("continue-review");
  if (btn) {
    const valid = amt >= deal.minTicket && amt <= Math.min(deal.cap, wallet.usdt);
    btn.disabled = !valid;
    btn.style.opacity = valid ? "" : "0.45";
    btn.style.cursor = valid ? "" : "not-allowed";
  }
}

function metricRows(items) {
  return items.map((item) => '<div class="ticket-metric"><span>' + item[0] + '</span><strong class="mono">' + item[1] + '</strong></div>').join("");
}

function renderDetail() {
  const deal = activeDeal();
  const progress = Math.round((deal.filled / deal.target) * 100);
  const projectedYield = state.draftAmount * (deal.apy / 100) * (deal.duration / 365);
  const tokenCode = deal.brandShort.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
  const ptStableSymbol = "t" + deal.brandShort.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();
  const desk = getDeskByName(deal.otcDesk);
  const container = document.getElementById("deal-detail") || document.getElementById("deal-page-detail");
  if (!container) return;
  const lockLabel = deal.status === "ACTIVE" ? "active accrual" : deal.lockDate;
  const recentLiveFills = liveState.stream.filter((event) => event.dealId === deal.id).slice(-5).reverse();
  const stepIdx = { compose: 0, review: 1, sign: 2, confirmed: 3 }[state.depositStep] ?? 0;
  const steps = [
    ["compose", "01 · Compose"],
    ["review", "02 · Review"],
    ["sign", "03 · Sign"],
    ["confirmed", "04 · Confirmed"]
  ];
  const stepIndicator = window.innerWidth <= 520
    ? '<div class="step-indicator compact"><div class="step-current mono"><span>' + String(stepIdx + 1).padStart(2, "0") + ' · ' + steps[stepIdx][1].split(' · ')[1] + '</span><span>' + (stepIdx + 1) + ' / ' + steps.length + '</span></div></div>'
    : '<div class="step-indicator"><div class="step-bars">' + steps.map((item, idx) => '<span class="step-bar ' + (idx < stepIdx ? "done" : idx === stepIdx ? "active" : "upcoming") + '"></span>').join("") + '</div><div class="step-labels mono">' + steps.map((item, idx) => '<span class="' + (idx < stepIdx ? "done" : idx === stepIdx ? "active" : "upcoming") + '">' + item[1] + '</span>').join("") + '</div><div class="step-current mono"><span>' + String(stepIdx + 1).padStart(2, "0") + ' · ' + steps[stepIdx][1].split(' · ')[1] + '</span><span>' + (stepIdx + 1) + ' / ' + steps.length + '</span></div></div>';
  const receiptSummary =
    receiptRow("Deal", deal.brandShort + " × " + deal.kolName) +
    receiptRow("Principal", money(state.draftAmount), true) +
    receiptRow("PT to mint", money(state.draftAmount) + " " + tokenLabel("PT", shortTicker(deal))) +
    receiptRow("YT to mint", money(state.draftAmount) + " " + tokenLabel("YT", shortTicker(deal))) +
    receiptRow("Target APY", pct(deal.apy)) +
    receiptRow("Locks until", maturityDateStr(deal)) +
    receiptRow("Projected at maturity", money(state.draftAmount + projectedYield, 2), true);
  let ticketBody = "";
  if (deal.status === "ACTIVE" || deal.status === "MATURED") {
    ticketBody = '<div class="detail-callout"><strong>Deal already active</strong><p>This deal is fully funded and in active accrual. Review the position inside Portfolio.</p></div>';
  } else if (state.depositStep === "compose") {
    ticketBody =
      stepIndicator +
      '<div class="ticket-stack"><div class="ticket-head-row"><div class="funding-line"><span>Amount · USDT</span><strong class="mono">BAL ' + money(wallet.usdt) + '</strong></div><button class="help-chip mono" id="ptyt-guide" type="button">? PT / YT</button></div><div class="ticket-amount-row"><span class="mono ticket-currency">$</span><input id="deposit-amount" class="ticket-input" type="text" inputmode="numeric" value="' + formatAmountField(state.draftAmount) + '" /><span class="mono ticket-unit">USDT</span></div><div class="quick-picks"><button class="quick-pick" type="button" data-quick="25000">$25K</button><button class="quick-pick" type="button" data-quick="100000">$100K</button><button class="quick-pick" type="button" data-quick="250000">$250K</button></div><div class="ticket-section-line"></div><div class="ticket-receive-card"><div class="ticket-receive-head"><div><div class="eyebrow">You receive</div><div class="serif italic ticket-note">two tokens, one position</div></div></div><div class="ticket-metrics"><div class="ticket-metric"><span>' + tokenLabel("PT", tokenCode) + '</span><strong class="mono" id="ticket-pt-val">' + money(state.draftAmount) + '</strong></div><div class="ticket-metric"><span>' + tokenLabel("YT", tokenCode) + '</span><strong class="mono" id="ticket-yt-val">' + money(state.draftAmount) + '</strong></div><div class="ticket-metric"><span>Projected yield</span><strong class="mono" id="ticket-yield-val">' + money(projectedYield, 2) + '</strong></div><div class="ticket-metric"><span>At maturity</span><strong class="mono" id="ticket-maturity-val">' + money(state.draftAmount + projectedYield, 2) + '</strong></div></div></div><button class="action-button" id="continue-review">Continue to review</button><p class="ticket-disclaimer">Each deposited dollar produces a principal leg and a yield leg. Review the terms before locking the allocation.</p></div>';
  } else if (state.depositStep === "review") {
    ticketBody =
      stepIndicator +
      '<div class="ticket-stack"><div class="eyebrow">Review terms</div><div class="receipt-card">' + receiptSummary + '</div><div class="ack-list">' +
      ackRow("terms-ack", state.termsAck, "I reviewed the project financing agreement and accept the deal terms.") +
      ackRow("risk-ack", state.riskAck, "I understand principal redemption and realized yield remain subject to deal performance and release terms.") +
      '</div><div class="review-actions"><button class="secondary-button" id="review-back">Back</button><button class="action-button" id="sign-lock"' + (!(state.termsAck && state.riskAck) ? ' disabled="disabled"' : '') + '>Sign and lock</button></div></div>';
  } else if (state.depositStep === "sign") {
    ticketBody =
      stepIndicator +
      '<div class="signing-state"><div class="signing-orbit"><svg width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="46" fill="none" stroke="rgba(232,224,207,0.12)" stroke-width="1"></circle><circle cx="48" cy="48" r="46" fill="none" stroke="var(--gold)" stroke-width="1" stroke-dasharray="289" stroke-dashoffset="289" class="signing-draw"></circle></svg><div class="signing-glyph serif">兩</div></div><div class="serif italic signing-title">Locking allocation…</div><div class="mono signing-meta">AWAITING RECEIPT</div></div>';
  } else {
    ticketBody =
      stepIndicator +
      '<div class="ticket-stack fade-up"><div class="receipt-asterism mono">* * *</div><div class="mono receipt-title">ALLOCATION RECEIPT</div><div class="serif italic receipt-ref">Ref. ' + generateRef(deal, state.draftAmount) + '</div><div class="receipt-card">' +
      receiptRow("Deal", deal.brandShort + " × " + deal.kolName) +
      receiptRow("Principal", money(state.draftAmount), true) +
      receiptRow("PT minted", money(state.draftAmount) + " " + tokenLabel("PT", shortTicker(deal))) +
      receiptRow("YT minted", money(state.draftAmount) + " " + tokenLabel("YT", shortTicker(deal))) +
      receiptRow("Locked at", nowHkt()) +
      receiptRow("Matures", maturityDateStr(deal)) +
      '</div><div class="serif italic receipt-foot">A copy of this receipt is reflected in Account → Activity Log.</div><div class="review-actions"><button class="action-button" id="view-portfolio">View in portfolio</button><button class="secondary-button" id="receipt-close">Close</button></div></div>';
  }

  container.innerHTML =
    '<div class="detail-shell status-' + deal.statusClass + '">' +
      (pageType === "deal" ? '<div class="detail-mobile-bar"><button class="mono detail-mobile-back" id="detail-mobile-back">← BACK</button><div class="mono detail-mobile-center">兩 · ' + shortTicker(deal) + '</div><button class="detail-mobile-close" id="detail-mobile-close" aria-label="Close">✕</button></div>' : '') +
      '<div class="detail-header-block">' +
        '<div class="deal-badges"><span class="badge ' + deal.statusClass + '">' + deal.status + '</span><span class="badge risk">Risk ' + deal.risk + '</span><span class="badge">Tier ' + deal.risk + '</span></div>' +
        '<h1 class="detail-title">' + deal.brand + ' <span>×</span> ' + deal.kolName + '</h1>' +
        '<p class="detail-subtitle mono">' + deal.product + ' · ' + deal.category + '</p>' +
        '<div class="watcher-line mono"><span class="watch-dot"></span>' + watcherCountForDeal(deal) + ' members watching</div>' +
      '</div>' +
      '<div class="detail-layout">' +
        '<section class="detail-main-column">' +
          '<div class="product-render"><img src="' + deal.image + '" alt="' + deal.product + '" /><div class="product-overlay"><div class="brand-inline">' + brandMark(deal, false) + '<strong>' + deal.brandShort + '</strong></div><span class="badge ' + deal.statusClass + '">' + deal.status + '</span></div></div>' +
          '<div class="snippet-stat-grid">' +
            '<article class="snippet-stat-card"><span>TARGET APY</span><strong class="mono">' + pct(deal.apy) + '</strong></article>' +
            '<article class="snippet-stat-card"><span>DURATION</span><strong class="mono">' + deal.duration + ' days</strong></article>' +
            '<article class="snippet-stat-card"><span>MIN TICKET</span><strong class="mono">' + money(deal.minTicket) + '</strong></article>' +
            '<article class="snippet-stat-card"><span>CAP / WALLET</span><strong class="mono">' + money(deal.cap) + '</strong></article>' +
          '</div>' +
          '<div class="detail-block"><div class="panel-head"><p class="eyebrow">Funding progress</p><strong class="mono">' + progress.toFixed(1) + '%</strong></div><div class="progress-track"><div class="progress-fill" style="width:' + progress + '%"></div></div><div class="funding-line"><span>' + money(deal.filled) + '</span><span>of ' + money(deal.target) + '</span></div><div class="live-fill-block"><div class="live-fill-head mono"><span>Recent fills</span><span class="live-inline"><span class="live-dot"></span>LIVE FEED</span></div><div class="live-fill-list">' + (recentLiveFills.length ? recentLiveFills.map((item) => '<div class="live-fill-row mono"><div class="wallet">' + item.wallet + '<span class="age">' + formatEventAge(item.at) + '</span></div><span class="amount">' + money(item.amount) + '</span></div>').join("") : '<div class="live-fill-row mono"><div class="wallet">No fills yet <span class="age">be first</span></div><span class="amount">—</span></div>') + '</div></div></div>' +
          '<div class="detail-block"><p class="eyebrow">Thesis</p><p class="detail-copy">' + deal.thesis + '</p><div class="pull-quote"><p>"Last cycle with ' + deal.kolName + ' moved faster than prior comparable inventory windows. Allocation velocity is the signal here, not the marketing copy."</p><span>— TAEL DEAL DESK · 2026-05-14</span></div></div>' +
          '<div class="asterism mono">* * *</div>' +
          '<div class="detail-block"><p class="eyebrow">Counterparties</p><div class="counterparty-grid"><article class="counterparty-card"><div class="counterparty-label">Brand</div><h4>' + (deal.counterparties[0] || deal.brand) + '</h4><p class="mono">CN · Verified entity</p></article><button class="counterparty-card counterparty-button" type="button" id="open-kol-drawer"><div class="counterparty-label">KOL</div><h4>' + deal.kolName + '</h4><p class="mono">' + deal.kolFollowers + ' followers · ' + deal.heroStat + '</p></button></div></div>' +
          '<div class="detail-block"><p class="eyebrow">Documents</p><div class="document-list">' + deal.docs.map((doc, docIdx) => '<button class="document-row" type="button" data-doc-index="' + docIdx + '"><span><strong>' + doc.name + '</strong><small>' + doc.detail + '</small></span><em class="mono">' + doc.status + '</em></button>').join("") + '</div></div>' +
          '<div class="detail-block"><p class="eyebrow">Project financing structure</p><div class="ticket-metrics">' + metricRows([["Stablecoin deposit", "USDT / USDC"],["PT output", tokenLabel("PT", ptStableSymbol) + " / 1:1 claim"],["YT output", tokenLabel("YT", shortTicker(deal)) + " / tradable yield leg"],["Principal coverage", deal.principalCoverage],["Yield waterfall", deal.revenueShare]]) + '</div></div>' +
          '<div class="detail-block"><p class="eyebrow">OTC desk & timeline</p><div class="ticket-metrics"><div class="ticket-metric"><span>Winning desk</span><strong class="mono">' + deal.otcDesk + '</strong></div><div class="ticket-metric"><span>Escrow path</span><strong class="mono">' + (desk ? desk.collateral : "USDT escrow") + '</strong></div>' + deal.timeline.map((row) => '<div class="ticket-metric"><span>' + row[0] + '</span><strong class="mono">' + row[1] + '</strong></div>').join("") + '</div></div>' +
        '</section>' +
        '<aside class="detail-side-column">' +
          '<div class="sticky-ticket"><p class="eyebrow">Allocate</p>' +
            ticketBody +
          '</div>' +
          '<div class="detail-block side-mini-block"><p class="eyebrow">Recent activity</p><div class="ticket-metrics">' + deal.recentDeposits.slice(0, 4).map((item) => '<div class="ticket-metric"><span>' + item + '</span><strong class="mono">FCFS</strong></div>').join("") + '</div></div>' +
          '<div class="detail-block side-mini-block"><p class="eyebrow">Risk notes</p><div class="ticket-metrics">' + deal.riskNotes.map((item) => '<div class="ticket-metric"><span>' + item + '</span><strong class="mono">' + deal.risk + '</strong></div>').join("") + '</div></div>' +
        '</aside>' +
      '</div>' +
    '</div>';

  const input = document.getElementById("deposit-amount");
  const mobileBack = document.getElementById("detail-mobile-back");
  if (mobileBack) mobileBack.addEventListener("click", () => { window.location.href = "./index.html"; });
  const mobileClose = document.getElementById("detail-mobile-close");
  if (mobileClose) mobileClose.addEventListener("click", () => { window.location.href = "./index.html"; });
  if (input) {
    input.addEventListener("input", () => {
      const value = Number(String(input.value || "").replace(/[^0-9]/g, "") || 0);
      state.draftAmount = Math.max(Math.min(value, deal.cap), Math.max(0, value));
      updateTicketAmountPreview(deal);
    });
  }
  container.querySelectorAll("[data-quick]").forEach((node) => {
    node.addEventListener("click", () => {
      state.draftAmount = Math.min(Number(node.dataset.quick), deal.cap, wallet.usdt);
      renderDetail();
    });
  });
  const ptytGuide = document.getElementById("ptyt-guide");
  if (ptytGuide) {
    ptytGuide.addEventListener("click", () => openEducationModal());
  }
  const openKol = document.getElementById("open-kol-drawer");
  if (openKol) openKol.addEventListener("click", () => openKolDrawer(deal));
  container.querySelectorAll("[data-doc-index]").forEach((node) => {
    node.addEventListener("click", () => {
      const doc = deal.docs[Number(node.dataset.docIndex)];
      openModal({ title: doc.name, bodyHtml: documentPreviewHtml(doc, deal) });
    });
  });
  const continueReview = document.getElementById("continue-review");
  if (continueReview) {
    continueReview.addEventListener("click", () => {
      if (!state.draftAmount || state.draftAmount < deal.minTicket) return;
      if (state.draftAmount > wallet.usdt) return;
      state.depositStep = "review";
      renderDetail();
    });
  }
  const reviewBack = document.getElementById("review-back");
  if (reviewBack) {
    reviewBack.addEventListener("click", () => {
      state.depositStep = "compose";
      renderDetail();
    });
  }
  const signLock = document.getElementById("sign-lock");
  if (signLock) {
    signLock.addEventListener("click", () => {
      if (!(state.termsAck && state.riskAck)) return;
      state.depositStep = "sign";
      renderDetail();
      setTimeout(() => {
        if (state.depositStep !== "sign") return;
        performDeposit(deal.id, state.draftAmount);
        state.depositStep = "confirmed";
        renderDetail();
      }, 1500);
    });
  }
  const termsAck = document.getElementById("terms-ack");
  if (termsAck) {
    termsAck.addEventListener("change", () => {
      state.termsAck = termsAck.checked;
      renderDetail();
    });
  }
  const riskAck = document.getElementById("risk-ack");
  if (riskAck) {
    riskAck.addEventListener("change", () => {
      state.riskAck = riskAck.checked;
      renderDetail();
    });
  }
  const viewPortfolio = document.getElementById("view-portfolio");
  if (viewPortfolio) {
    viewPortfolio.addEventListener("click", () => {
      if (pageType === "home") {
        state.activeSection = "portfolio";
        renderAll();
      } else {
        window.location.href = "./index.html?section=portfolio";
      }
    });
  }
  const receiptClose = document.getElementById("receipt-close");
  if (receiptClose) {
    receiptClose.addEventListener("click", () => {
      state.depositStep = "compose";
      state.riskAck = false;
      state.termsAck = false;
      renderDetail();
    });
  }
}

function performDeposit(dealId, amount) {
  const deal = deals.find((item) => item.id === dealId);
  if (!deal || amount > wallet.usdt || amount <= 0) return;
  const receiptRef = generateRef(deal, amount);

  wallet.usdt -= amount;
  deal.filled = Math.min(deal.target, deal.filled + amount);

  const existing = positions.find((position) => position.dealId === dealId);
  const row = exchangeRows.find((item) => item.dealId === dealId);
  const mark = row ? row.ask : 1;
  const accruedYield = amount * (deal.apy / 100) * (deal.duration / 365) * 0.18;

  if (existing) {
    existing.principal += amount;
    existing.pt += amount;
    existing.yt += amount;
    existing.accruedYield += accruedYield;
  } else {
    positions.unshift({
      dealId,
      principal: amount,
      pt: amount,
      yt: amount,
      wrapped: 0,
      accruedYield,
      mark,
      days: deal.duration,
      status: "active"
    });
  }

  deal.recentDeposits.unshift("Guest #4729 deposited " + money(amount) + " · just now");
  pushLiveDeposit(deal, amount, "0x4729...guest");
  pushActivity(
    "Allocation receipt · " + money(amount) + " into " + deal.brandShort,
    "Ref. " + receiptRef + " · locked " + shortDateTime(Date.now())
  );
  persistRuntime();
  state.activeSection = "portfolio";
  renderAll();
}

function wrapPt(position) {
  const amount = position.pt - position.wrapped;
  if (amount <= 0) {
    openModal({ title: "Nothing to wrap", body: "All available PT in this position is already represented as a stable-backed balance." });
    return;
  }
  position.wrapped += amount;
  wallet.tusd += amount;
  const deal = deals.find((item) => item.id === position.dealId);
  pushActivity(
    "Wrap PT → tUSD · " + money(amount),
    (deal ? deal.brandShort : "PT basket") + " principal converted into reusable stable balance · " + shortDateTime(Date.now())
  );
  persistRuntime();
  renderAll();
  openModal({
    title: "PT wrapped",
    body: money(amount) + " of PT was wrapped into tUSD-style stable balance for demo purposes. This shows the V2 concept where principal claims become reusable stable collateral."
  });
}

function sellYt(position) {
  const amount = position.yt * position.mark;
  if (position.yt <= 0) return;
  wallet.usdt += amount;
  const ytAmount = position.yt;
  const deal = deals.find((item) => item.id === position.dealId);
  position.yt = 0;
  pushActivity(
    "Sold YT · " + money(amount, 2),
    (deal ? "YT-" + shortTicker(deal) : "YT position") + " · " + money(ytAmount) + " cleared at current mark · " + shortDateTime(Date.now())
  );
  persistRuntime();
  renderAll();
  openModal({
    title: "YT sold",
    body: "Yield tokens were sold at current mark for " + money(amount, 2) + ". Principal PT remains in the portfolio."
  });
}

function renderPortfolio() {
  const totalPt = positions.reduce((sum, pos) => sum + pos.pt, 0);
  const totalYt = positions.reduce((sum, pos) => sum + pos.yt * pos.mark, 0);
  const totalYield = positions.reduce((sum, pos) => sum + pos.accruedYield, 0);
  const animatedTotal = getAnimatedValue("portfolio-total", totalPortfolioValue(), { entryMs: 1300 });
  const animatedUsdt = getAnimatedValue("portfolio-usdt", wallet.usdt, { entryMs: 1100, delayMs: 80 });
  const animatedTusd = getAnimatedValue("portfolio-tusd", wallet.tusd, { entryMs: 1100, delayMs: 160 });
  const animatedPt = getAnimatedValue("portfolio-pt", totalPt, { entryMs: 1100, delayMs: 240 });
  const animatedYt = getAnimatedValue("portfolio-yt", totalYt, { entryMs: 1100, delayMs: 320 });

  const summary = document.getElementById("portfolio-summary");
  if (!summary) return;
  summary.innerHTML =
    '<div class="portfolio-headline"><p class="eyebrow">Your ledger</p><h2>' + money(animatedTotal, 2) + '</h2><div class="mono positive">+' + money(totalYield, 2) + ' accrued</div></div>' +
    '<div class="snippet-stat-grid portfolio-stat-grid"><article class="snippet-stat-card"><span>USDT</span><strong class="mono">' + money(animatedUsdt) + '</strong><small>Available</small></article><article class="snippet-stat-card"><span>tUSD</span><strong class="mono">' + money(animatedTusd, 2) + '</strong><small>PT-backed stable</small></article><article class="snippet-stat-card"><span>PT basket</span><strong class="mono">' + money(animatedPt) + '</strong><small>Across active deals</small></article><article class="snippet-stat-card"><span>YT mark</span><strong class="mono">' + money(animatedYt, 2) + '</strong><small>Mark-to-market</small></article></div>';

  const animatePortfolioCards = !PLAYED_ANIMATIONS.has("portfolio-cards");
  if (animatePortfolioCards && positions.length) {
    PLAYED_ANIMATIONS.add("portfolio-cards");
    saveSessionState();
  }
  document.getElementById("position-list").innerHTML = positions.length ? positions.map((position, idx) => {
    const deal = deals.find((item) => item.id === position.dealId);
    const targetYield = position.principal * (deal.apy / 100) * (deal.duration / 365);
    const yieldPct = Math.max(6, Math.min(100, targetYield ? (position.accruedYield / targetYield) * 100 : 0));
    const expanded = state.expandedPositionId === position.dealId;
    return '<article class="position-card status-' + deal.statusClass + ' ' + (animatePortfolioCards ? 'card-entry' : '') + ' ' + (expanded ? 'expanded' : '') + '" style="' + (animatePortfolioCards ? 'animation-delay:' + (idx * 100) + 'ms' : '') + '"><button class="position-card-head" data-expand="' + position.dealId + '"><div class="deal-badges"><span class="badge ' + deal.statusClass + '">' + deal.status + '</span><span class="badge risk">Risk ' + deal.risk + '</span></div><span class="deal-chevron mono">→</span></button><h3>' + deal.brandShort + ' <span>×</span> ' + deal.kolName + '</h3><div class="meta-row"><span>' + deal.product + '</span><span>' + formatDurationLabel(position.days) + ' to maturity</span></div><div class="deal-stats"><div class="deal-stat"><span>PRINCIPAL</span><strong class="mono">' + money(position.principal) + '</strong></div><div class="deal-stat"><span>PT BAL</span><strong class="mono">' + money(position.pt) + '</strong></div><div class="deal-stat"><span>YT BAL · MARK</span><strong class="mono">' + money(position.yt) + ' · ' + position.mark.toFixed(4) + '</strong></div><div class="deal-stat"><span>ACCRUED</span><strong class="mono">' + money(position.accruedYield, 2) + '</strong></div></div><div class="position-progress"><div class="funding-line"><span>Yield accrual</span><span class="mono">target ' + money(targetYield, 0) + '</span></div><div class="progress-track"><div class="progress-fill" style="width:' + yieldPct + '%"></div></div></div><div class="position-actions"><button class="inline-button" data-wrap="' + position.dealId + '">Wrap PT → tUSD</button><button class="inline-button" data-sell="' + position.dealId + '">Sell YT</button><button class="inline-button" data-focus="' + position.dealId + '">View project</button></div>' + (expanded ? '<div class="position-inline-panel"><div class="position-inline-grid"><div class="position-inline-block"><p class="eyebrow">Timeline</p><div class="activity-log"><div class="activity-row"><strong>Allocated</strong><span>' + shortDateTime(Date.now() - 86400000 * 5) + ' · ' + money(position.principal) + '</span></div><div class="activity-row"><strong>Wrapped</strong><span>' + money(position.wrapped || 0) + ' PT into tUSD</span></div><div class="activity-row"><strong>Yield state</strong><span>' + money(position.accruedYield, 2) + ' accrued so far</span></div></div></div><div class="position-inline-block"><p class="eyebrow">Yield sparkline</p><svg viewBox="0 0 240 70" class="mini-spark"><polyline fill="none" stroke="var(--gold)" stroke-width="1.5" points="0,58 40,52 80,46 120,39 160,30 200,18 240,12" /></svg><div class="review-actions"><button class="secondary-button" data-settle="' + position.dealId + '">Settle now</button></div></div></div></div>' : '') + '</article>';
  }).join("") : '<div class="empty-positions"><div><div class="mono empty-kicker">YOUR LEDGER</div><p>Your ledger begins here.</p><div class="detail-copy">Allocate to a curated deal to open your first position. Each allocation mints PT and YT, and the resulting tokens, accrued yield, and statements all appear here.</div><button class="inline-button" id="browse-open-deals">Browse open allocations →</button><div class="empty-asof serif italic">as of ' + formatHktAsOf().replace("as of ", "") + '</div></div></div>';

  document.getElementById("wallet-actions").innerHTML =
    '<div class="wallet-actions-grid">' +
      '<div class="wallet-action-row"><span>Principal token layer</span><strong class="mono">PT = 1:1 backed claim</strong></div>' +
      '<div class="wallet-action-row"><span>Yield token layer</span><strong class="mono">YT = tradable cashflow strip</strong></div>' +
      '<div class="wallet-action-row"><span>V2 stable abstraction</span><strong class="mono">Wrap PT into reusable stable balance</strong></div>' +
      '<div class="wallet-action-row"><span>Why this matters</span><strong class="mono">Public PF + RWA + yield market</strong></div>' +
    '</div>';

  document.querySelectorAll("[data-wrap]").forEach((node) => {
    node.addEventListener("click", () => {
      const position = positions.find((item) => item.dealId === node.dataset.wrap);
      wrapPt(position);
    });
  });
  document.querySelectorAll("[data-sell]").forEach((node) => {
    node.addEventListener("click", () => {
      const position = positions.find((item) => item.dealId === node.dataset.sell);
      sellYt(position);
    });
  });
  document.querySelectorAll("[data-focus]").forEach((node) => {
    node.addEventListener("click", () => {
      window.location.href = './deal.html?deal=' + encodeURIComponent(node.dataset.focus);
    });
  });
  document.querySelectorAll("[data-expand]").forEach((node) => {
    node.addEventListener("click", () => {
      state.expandedPositionId = state.expandedPositionId === node.dataset.expand ? null : node.dataset.expand;
      renderPortfolio();
    });
  });
  document.querySelectorAll("[data-settle]").forEach((node) => {
    node.addEventListener("click", () => {
      const position = positions.find((item) => item.dealId === node.dataset.settle);
      if (position) settlePosition({ ...position });
    });
  });
  const browse = document.getElementById("browse-open-deals");
  if (browse) {
    browse.addEventListener("click", () => {
      state.activeSection = "markets";
      renderAll();
    });
  }
}

function renderExchange() {
  const totalVol = exchangeRows.reduce((sum, row) => sum + row.vol24h, 0);
  const avgApy = exchangeRows.reduce((sum, row) => sum + row.impliedApy, 0) / exchangeRows.length;
  const myMap = new Map(positions.map((position) => [position.dealId, position.yt]));
  const animatedVol = getAnimatedValue("exchange-stat-vol", totalVol, { entryMs: 1200 });
  const animatedApy = getAnimatedValue("exchange-stat-apy", avgApy, { entryMs: 1000, delayMs: 100 });
  const animatedBooks = getAnimatedValue("exchange-stat-books", exchangeRows.length, { entryMs: 900, delayMs: 180 });
  const animatedPositions = getAnimatedValue("exchange-stat-my", positions.filter((position) => position.yt > 0).length, { entryMs: 900, delayMs: 260 });
  document.getElementById("exchange-table").innerHTML =
    '<div class="snippet-stat-grid exchange-stat-grid"><article class="snippet-stat-card"><span>TOTAL YT VOL · 24H</span><strong class="mono">' + money(animatedVol) + '</strong></article><article class="snippet-stat-card"><span>AVG IMPLIED APY</span><strong class="mono">' + pct(animatedApy) + '</strong></article><article class="snippet-stat-card"><span>BOOKS</span><strong class="mono">' + Math.round(animatedBooks) + '</strong></article><article class="snippet-stat-card"><span>YOUR YT POSITIONS</span><strong class="mono">' + Math.round(animatedPositions) + '</strong></article></div>' +
    '<div class="data-table-card"><div class="table-head exchange-grid"><div>Market</div><div>Implied APY</div><div>Bid</div><div>Ask</div><div>24h Vol</div><div>My YT</div></div>' +
    '<div class="table-body">' +
      exchangeRows.map((row) => {
        const deal = deals.find((item) => item.id === row.dealId);
        return '<button class="exchange-row exchange-grid status-' + deal.statusClass + '" data-exchange="' + row.dealId + '"><div><div class="brand-inline">' + brandMark(deal, true) + '<div>' + deal.brandShort + '</div></div><div class="meta-row"><span>' + deal.kolName + '</span></div></div><div class="mono">' + pct(row.impliedApy) + '</div><div class="mono">' + row.bid.toFixed(4) + '</div><div class="mono">' + row.ask.toFixed(4) + '</div><div class="mono">' + money(row.vol24h) + '</div><div class="mono">' + money(myMap.get(row.dealId) || 0) + '</div></button>';
      }).join("") +
    '</div></div>';

  document.querySelectorAll("[data-exchange]").forEach((node) => {
    node.addEventListener("click", () => {
      const row = exchangeRows.find((item) => item.dealId === node.dataset.exchange);
      const deal = deals.find((item) => item.id === node.dataset.exchange);
      openModal({
        title: "Order ticket · YT-" + deal.brandShort.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase(),
        body: deal.brand + " yield stream. Bid " + row.bid.toFixed(4) + " / ask " + row.ask.toFixed(4) + ". Implied APY " + pct(row.impliedApy) + "."
      });
    });
  });
}

function renderAccount() {
  const root = document.getElementById("account-view");
  if (!root) return;
  const lifetimeAllocated = positions.reduce((sum, position) => sum + position.principal, 0);
  const activeCapital = positions.reduce((sum, position) => sum + position.pt, 0);
  const realizedYield = 3840;
  const tierProgress = Math.min(100, (lifetimeAllocated / 500000) * 100);
  const animatedLifetime = getAnimatedValue("account-stat-lifetime", lifetimeAllocated, { entryMs: 1200 });
  const animatedActive = getAnimatedValue("account-stat-active", activeCapital, { entryMs: 1000, delayMs: 100 });
  const animatedYield = getAnimatedValue("account-stat-yield", realizedYield, { entryMs: 1000, delayMs: 180 });
  const animatedCap = getAnimatedValue("account-stat-cap", 250000, { entryMs: 900, delayMs: 240 });
  const animatedTier = getAnimatedValue("account-tier-progress", tierProgress, { entryMs: 1400, delayMs: 120 });
  const feed = activityFeed();
  root.innerHTML =
    '<div class="account-shell">' +
      '<div class="account-stack">' +
        '<div class="account-card"><p class="eyebrow">Invite ledger</p><div class="invite-code mono"><strong>GUEST-4729-HK</strong><button class="copy-chip mono" id="copy-invite">Copy</button></div><p class="detail-copy" style="margin-top:10px;">Invited via Anchor Member · joined Mar 14, 2026.</p></div>' +
        '<div class="account-card"><p class="eyebrow">Allocation stats</p><div class="account-stat-list">' +
          '<div class="dot-row mono"><span>Lifetime allocated</span><span class="dot-leader"></span><strong>' + money(animatedLifetime) + '</strong></div>' +
          '<div class="dot-row mono"><span>Active capital deployed</span><span class="dot-leader"></span><strong>' + money(animatedActive) + '</strong></div>' +
          '<div class="dot-row mono"><span>Realized yield</span><span class="dot-leader"></span><strong>' + money(animatedYield) + '</strong></div>' +
          '<div class="dot-row mono"><span>Current per-deal cap</span><span class="dot-leader"></span><strong>' + money(animatedCap) + '</strong></div>' +
        '</div></div>' +
        '<div class="account-card tier-card"><p class="eyebrow">Tier</p><h3>GUEST tier</h3><p class="detail-copy">Upgrade to MEMBER after ' + money(500000) + ' cumulative allocation.</p><div class="tier-progress"><div class="tier-progress-fill" style="width:' + animatedTier + '%"></div></div><div class="funding-line"><span>Current cumulative</span><strong class="mono">' + money(animatedLifetime) + '</strong></div></div>' +
      '</div>' +
      '<div class="account-stack">' +
        '<div class="account-card"><p class="eyebrow">Activity log</p><div class="activity-log">' + feed.map((row) => '<div class="activity-row"><strong>' + row.title + '</strong><span>' + row.detail + '</span></div>').join("") + '</div></div>' +
        '<div class="account-card"><p class="eyebrow">Statements</p><div class="statement-list">' + statements.map((item) => '<button class="statement-row" data-statement="' + item.name + '"><div><strong>' + item.name + '</strong><span>' + item.detail + '</span></div><em>↗</em></button>').join("") + '</div></div>' +
      '</div>' +
    '</div>';
  const copyBtn = document.getElementById("copy-invite");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("GUEST-4729-HK");
        openModal({ title: "Invite code copied", body: "GUEST-4729-HK copied to clipboard." });
      } catch {
        openModal({ title: "Invite code", body: "GUEST-4729-HK" });
      }
    });
  }
  document.querySelectorAll("[data-statement]").forEach((node) => {
    node.addEventListener("click", () => {
      const statement = statements.find((item) => item.name === node.dataset.statement);
      openModal({ title: node.dataset.statement, bodyHtml: statementPreviewHtml(statement) });
    });
  });
}

function renderDesk() {
  const animatedDesks = getAnimatedValue("desk-stat-active", desks.length, { entryMs: 1000 });
  const animatedRegions = getAnimatedValue("desk-stat-regions", 6, { entryMs: 900, delayMs: 100 });
  const animatedSpread = getAnimatedValue("desk-stat-spread", 20.8, { entryMs: 1100, delayMs: 180 });
  const animatedTrades = getAnimatedValue("desk-stat-trades", 9900, { entryMs: 1200, delayMs: 260 });
  document.getElementById("desk-list").innerHTML =
    '<div class="snippet-stat-grid desk-stat-grid"><article class="snippet-stat-card"><span>ACTIVE DESKS</span><strong class="mono">' + Math.round(animatedDesks) + '</strong></article><article class="snippet-stat-card"><span>REGIONS</span><strong class="mono">' + Math.round(animatedRegions) + '</strong></article><article class="snippet-stat-card"><span>AVG SPREAD</span><strong class="mono">' + animatedSpread.toFixed(1) + ' bps</strong></article><article class="snippet-stat-card"><span>TOTAL TRADES · 30D</span><strong class="mono">' + (animatedTrades >= 1000 ? (animatedTrades / 1000).toFixed(1) + 'K+' : Math.round(animatedTrades)) + '</strong></article></div><div class="desk-card-list">' +
      desks.map((desk) => '<button class="desk-card" data-desk="' + desk.id + '"><div class="desk-card-head"><div><h3>' + desk.name + '</h3><div class="meta-row"><span>' + desk.region + '</span><span>' + desk.currency + '</span><span>' + desk.rating + '</span></div></div><span class="badge open">Verified</span></div><div class="deal-stats"><div class="deal-stat"><span>SPREAD</span><strong class="mono">' + desk.fee + '</strong></div><div class="deal-stat"><span>FEE</span><strong class="mono">' + desk.response + '</strong></div><div class="deal-stat"><span>CAPACITY</span><strong class="mono">' + desk.capacity + '</strong></div><div class="deal-stat"><span>RESPONSE</span><strong class="mono">' + desk.collateral + '</strong></div></div></button>').join("") +
    '</div>';

  const desk = activeDesk();
  document.getElementById("desk-detail").innerHTML =
    '<div class="desk-detail-card"><p class="eyebrow">Desk detail</p><h3>' + desk.name + '</h3><div class="snippet-stat-grid detail-mini-grid"><article class="snippet-stat-card"><span>SPREAD</span><strong class="mono">' + desk.fee + '</strong></article><article class="snippet-stat-card"><span>SERVICE FEE</span><strong class="mono">' + desk.response + '</strong></article><article class="snippet-stat-card"><span>MAX TICKET</span><strong class="mono">' + desk.capacity + '</strong></article><article class="snippet-stat-card"><span>COMPLETION</span><strong class="mono">' + desk.rating + '</strong></article></div><div class="ticket-metrics">' +
      metricRows([
        ["Region / currency", desk.region + " / " + desk.currency],
        ["Fee / response", desk.fee + " / " + desk.response],
        ["Capacity", desk.capacity],
        ["Escrow collateral", desk.collateral]
      ]) +
    '</div><div class="detail-block"><p class="eyebrow">Escrow terms</p><p class="detail-copy">' + desk.terms + '</p></div><div class="detail-block"><p class="eyebrow">Recent quotes</p><div class="ticket-metrics">' + desk.process.map((step, idx) => '<div class="ticket-metric"><span>' + step + '</span><strong class="mono">0' + (idx + 1) + '</strong></div>').join("") + '</div></div><button class="action-button" id="desk-quote">Request quote</button></div>';

  document.querySelectorAll("[data-desk]").forEach((node) => {
    node.addEventListener("click", () => {
      state.activeDeskId = node.dataset.desk;
      renderDesk();
    });
  });
  document.getElementById("desk-quote").addEventListener("click", () => {
    openModal({
      title: "OTC quote requested",
      body: desk.name + " would submit a spread + escrow SLA quote to compete for the deal mandate. In live product, desks win based on spread, reliability, and release terms."
    });
  });
}

function openModal({ title, body, bodyHtml, confirmLabel, onConfirm }) {
  state.pendingAction = typeof onConfirm === "function" ? onConfirm : null;
  modal.innerHTML =
    '<div class="modal-shell"><p class="eyebrow">TAEL action</p><h3>' + title + '</h3>' + (bodyHtml ? '<div class="modal-copy-wrap">' + bodyHtml + '</div>' : '<p class="detail-copy">' + body + '</p>') + '<div class="modal-actions"><button class="secondary-button" id="modal-cancel">Close</button>' + (confirmLabel ? '<button class="action-button" id="modal-confirm">' + confirmLabel + '</button>' : "") + '</div></div>';
  modal.showModal();
  document.getElementById("modal-cancel").addEventListener("click", () => {
    state.pendingAction = null;
    modal.close();
  });
  const confirm = document.getElementById("modal-confirm");
  if (confirm) {
    confirm.addEventListener("click", () => {
      const action = state.pendingAction;
      state.pendingAction = null;
      modal.close();
      if (action) action();
    });
  }
}

function syncInitialDealRoute() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("deal");
  const requestedSection = params.get("section");
  if (requested && deals.some((deal) => deal.id === requested)) {
    state.activeDealId = requested;
  }
  if (requestedSection && ["markets", "portfolio", "exchange", "desk", "account"].includes(requestedSection)) {
    state.activeSection = requestedSection;
  }
}

function renderAll() {
  updateHeaderStats();
  renderTicker();
  renderUrgencyBanner();
  renderNav();
  if (pageType === "home") {
    if (state.activeSection === "markets") renderDeals();
    if (state.activeSection === "portfolio") renderPortfolio();
    if (state.activeSection === "exchange") renderExchange();
    if (state.activeSection === "desk") renderDesk();
    if (state.activeSection === "account") renderAccount();
  } else {
    renderDetail();
  }
  syncStickyControls();
}

navEls.forEach((node) => {
  node.addEventListener("click", () => {
    const modal = document.getElementById("action-modal");
    if (modal && modal.open) modal.close();
    state.activeSection = node.dataset.section;
    renderAll();
  });
});

sortEls.forEach((node) => {
  node.addEventListener("click", () => {
    state.sort = node.dataset.sort;
    sortEls.forEach((item) => item.classList.toggle("active", item === node));
    renderDeals();
  });
});

let _scrollRaf;
window.addEventListener("scroll", () => {
  cancelAnimationFrame(_scrollRaf);
  _scrollRaf = requestAnimationFrame(() => syncStickyControls());
}, { passive: true });
window.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key.toLowerCase() === "m") {
    event.preventDefault();
    fastForwardMaturity();
    return;
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    state.paletteQuery = "";
    state.paletteIndex = 0;
    openCommandPalette();
  }
});

const headerEducation = document.getElementById("header-education");
if (headerEducation) {
  headerEducation.addEventListener("click", () => openEducationModal());
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.documentElement.lang = btn.dataset.lang;
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b === btn));
  });
});

loadSessionState();
loadRuntime();
syncInitialDealRoute();
initLiveDealState();
seedLiveStream();
startLiveLoops();
renderAll();
