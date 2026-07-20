// Royals Family Pass — shared offer catalogue (concept demo data).
// Used by app.html (family app) and admin.html (Trust dashboard).
// In a real build this lives on a server so allocations are enforced globally.
window.RFP_OFFERS = [
  {
    id: "kid-quid", icon: "🎟️", cat: "matchday",
    title: "3× Kid for a Quid First Team Tickets",
    venue: "Reading FC · Select Car Leasing Stadium",
    price: "KIDS £1",
    desc: "Three vouchers per family for selected first-team home matches — kids' tickets for just £1 each with a paying adult. Pick your matches when you book.",
    terms: "Selected home league matches only. Max 3 kids' tickets per family per season. Subject to availability.",
    cap: 500, seedClaimed: 391,
    tags: "football match tickets first team select car leasing stadium royals quid"
  },
  {
    id: "women", icon: "⚽", cat: "matchday",
    title: "Free Entry — Reading FC Women Home Matches",
    venue: "Reading FC Women · home fixtures",
    price: "FREE",
    desc: "Free family entry to every Reading FC Women home match this season. Show your pass at the turnstile — no booking needed for most fixtures.",
    terms: "Home league fixtures. Cup matches may be excluded. Family = up to 2 adults + 3 children.",
    cap: null,
    tags: "football women womens ladies match free entry"
  },
  {
    id: "u21", icon: "🧑‍🎓", cat: "matchday",
    title: "Free Entry — Reading FC Under 21 Home Matches",
    venue: "Reading FC U21 · home fixtures",
    price: "FREE",
    desc: "Watch the stars of tomorrow for free. Your pass admits the whole family to Under 21 home matches.",
    terms: "Home fixtures only. Venue may vary — check fixture listings.",
    cap: null,
    tags: "football under 21 u21 academy youth development free entry"
  },
  {
    id: "fans-forum", icon: "🎤", cat: "trust",
    title: "Free Entry — Junior Fans Forum",
    venue: "Select Car Leasing Stadium",
    price: "FREE",
    desc: "Your junior Royal puts their questions to players and club staff at the Junior Fans Forum. Limited seats — claim a ticket to guarantee entry.",
    terms: "One ticket admits one child + one accompanying adult. Ages 6–14.",
    cap: 60, seedClaimed: 41,
    tags: "junior fans forum players questions event kids"
  },
  {
    id: "rockets", icon: "🏀", cat: "daysout",
    title: "Free Tickets — Reading Rockets Basketball",
    venue: "Reading Rockets · Rivermead Leisure Complex",
    price: "FREE",
    desc: "Family ticket (2 adults + 2 children) to a Reading Rockets home game. Strictly the first 100 families to download a ticket.",
    terms: "First 100 families only. One family ticket per household. Valid for selected home fixtures.",
    cap: 100, seedClaimed: 63,
    tags: "basketball rockets rivermead sport family ticket"
  },
  {
    id: "bowling", icon: "🎳", cat: "daysout",
    title: "Free Bowling for Four — Bowl Central",
    venue: "Bowl Central",
    price: "FREE",
    desc: "One free game of bowling for up to four people, on the Trust. Shoes included. Perfect for a rainy-day family outing.",
    terms: "One game per family. Off-peak sessions. Shoe hire included.",
    cap: 100, seedClaimed: 76,
    tags: "bowling bowl central tenpin family activity indoor"
  },
  {
    id: "swim", icon: "🏊", cat: "daysout",
    title: "Free Family Swim Session",
    venue: "Participating Thames Valley leisure centres",
    price: "FREE",
    desc: "A free family swim session at participating leisure centres across the Thames Valley. Show your pass at reception.",
    terms: "One session per family. Public family swim times only. Under-8s must be accompanied in the water.",
    cap: 150, seedClaimed: 88,
    tags: "swimming swim pool leisure centre family session water"
  },
  {
    id: "beale", icon: "🦁", cat: "daysout",
    title: "Kids Go Free — Beale Wildlife Park",
    venue: "Beale Park, Lower Basildon",
    price: "KIDS FREE",
    desc: "Kids go free with a full-paying adult at Beale Wildlife Park — meerkats, lemurs, playgrounds and the little train, right on the Thames.",
    terms: "Up to 3 free child entries per full-paying adult. Valid selected dates.",
    cap: 200, seedClaimed: 117,
    tags: "beale park wildlife zoo animals day out kids free basildon pangbourne"
  },
  {
    id: "soccer-school", icon: "⚽", cat: "discount",
    title: "10% Off Trust Soccer School Courses",
    venue: "Trust venues across Berkshire",
    price: "10% OFF",
    desc: "10% off every Trust soccer school and holiday course booking. Your discount code sits in My Tickets — show it or quote it at checkout.",
    terms: "Applies to Trust-run courses booked via ClassForKids. Not valid with other offers.",
    cap: null,
    tags: "soccer school holiday camp course coaching discount football"
  },
  {
    id: "mascot", icon: "🦸", cat: "discount",
    title: "10% Off Mascot Packages",
    venue: "Reading FC matchday experiences",
    price: "10% OFF",
    desc: "Walk out with the team for less — 10% off matchday mascot packages for junior Royals.",
    terms: "Subject to matchday availability. Ages 6–12.",
    cap: null,
    tags: "mascot matchday experience walk out kids discount"
  },
  {
    id: "merch", icon: "👕", cat: "discount",
    title: "10% Off Club Merchandise",
    venue: "Club store & online",
    price: "10% OFF",
    desc: "10% off replica kits and club merchandise in-store — show your pass at the till.",
    terms: "In-store and online with pass code. Excludes sale items and match tickets.",
    cap: null,
    tags: "merch merchandise shop kit shirt store discount"
  }
];

// Admin-side additions & edits (concept demo: stored on this device).
window.RFP_ADMIN_KEY = "rfp_admin_v1";
window.rfpLoadAdmin = function () {
  try {
    return Object.assign(
      { customOffers: [], overrides: {}, pushQueue: [] },
      JSON.parse(localStorage.getItem(window.RFP_ADMIN_KEY) || "{}")
    );
  } catch {
    return { customOffers: [], overrides: {}, pushQueue: [] };
  }
};
window.rfpSaveAdmin = function (a) {
  try { localStorage.setItem(window.RFP_ADMIN_KEY, JSON.stringify(a)); } catch {}
};
// Effective catalogue = built-ins with admin overrides applied, plus custom
// offers, minus anything paused.
window.rfpEffectiveOffers = function () {
  const a = window.rfpLoadAdmin();
  return window.RFP_OFFERS
    .map((o) => Object.assign({}, o, a.overrides[o.id] || {}))
    .concat(a.customOffers)
    .filter((o) => !o.paused);
};
