# Reading FC Community — Wix Build Kit

A paste-ready guide for assembling the site in the Wix editor. The HTML
prototype in this repo (open `index.html` in a browser) is your visual
reference; this document tells you how to recreate it in Wix, with all copy
ready to paste.

> **Status:** Pitch/concept. Until authorised by Reading FC, do **not** use the
> official club crest, "Reading Football Club" wordmark, player imagery, or
> official kit photography. Keep the "concept proposal" disclaimer visible on
> every page (the prototype shows it as a thin navy ribbon above the header).

---

## 1. Setup

1. Create a new site in the Wix editor (a blank template gives the cleanest
   start; otherwise pick any "Sports & Fitness" template and strip it back).
2. You'll need a **Business/Commerce plan** (Core or above) for Wix Bookings
   with online payments.
3. Add these Wix apps from the App Market:
   - **Wix Bookings** — camps and weekly sessions
   - **Wix Forms** — contact / school enquiry forms
   - **Wix FAQ** (or use collapsible text elements) — Parents Hub FAQs
4. Connect payments: Settings → Accept Payments → Wix Payments (cards) and
   enable offline payment as a fallback for HAF/voucher bookings.

## 2. Design tokens (Site Design → Theme)

| Token | Value | Used for |
|---|---|---|
| Royal blue | `#003890` | Primary buttons, links, card accents, table headers |
| Navy | `#001E50` | Headings, footer, dark sections |
| Sky tint | `#E8F0FE` | Alternating section backgrounds |
| Gold | `#FFC20E` | Primary CTA buttons, stat numbers, highlights |
| White | `#FFFFFF` | Backgrounds, hoop stripes |
| Body text | `#5A6478` | Paragraphs |

- **Heading font:** Oswald (available in Wix), uppercase, semi-bold.
  Alternatives in Wix: Anton or Bebas Neue.
- **Body font:** A clean sans-serif — Wix's "Helvetica Light"/"Avenir" or add
  Inter via Site Design → Text Themes.
- **Buttons:** fully rounded (pill). Primary = gold background, navy text.
  Secondary = royal blue background, white text.
- **Signature motif — the hoops band:** a full-width strip (~18px tall) of
  alternating royal-blue and white vertical stripes, placed under the hero on
  every page. In Wix: add a thin Strip, set its background to a striped image
  or repeat a two-colour SVG/PNG (export one from the prototype if needed).

## 3. Sitemap & navigation

Header (sticky): logo left, menu right, "Book Now" as a button-styled menu item.

1. Home (`/`)
2. Holiday Camps (`/holiday-camps`)
3. Schools & Nurseries (`/schools-nurseries`)
4. Weekly Football (`/weekly-football`)
5. Community & Inclusion (`/community`)
6. Parents (`/parents`) — includes FAQs anchor
7. About (`/about`)
8. Contact & Booking (`/contact`) — "Book Now" button target

Footer (every page, four columns): brand blurb · Programmes links ·
Information links · contact details. Legal line underneath with the concept
disclaimer.

## 4. Page-by-page build

Copy below is final and paste-ready; anything marked *(placeholder)* needs
real details before launch.

### 4.1 Home

**Hero** (full-width strip, navy/royal gradient over a photo of kids playing):
- Kicker: `PROUD TO WEAR THE HOOPS`
- H1: `Inspiring Reading's next generation through sport`
- Paragraph: `From first kicks in nursery to walking football for over-50s, Reading FC Community brings the energy of matchday to schools, parks and pitches across Berkshire — every week of the year.`
- Buttons: `Book a Holiday Camp` (gold → Holiday Camps) · `Coaching for Your School` (outline → Schools & Nurseries)
- Hoops band strip beneath.

**"Four ways to get involved"** — 4 cards (repeater or 4-column layout), each
with emoji/icon, title, blurb, link:
1. **Holiday Camps** — `Action-packed multi-sport and football camps every school holiday, for ages 4–13. Girls-only weeks, shorter days for our youngest Royals, and HAF-supported places.`
2. **Schools & Nurseries** — `Curriculum PE delivery, lunchtime and after-school clubs, and early-years movement sessions led by qualified, DBS-checked coaches.`
3. **Weekly Football** — `Term-time soccer schools and player development centres where young Royals build skills, confidence and a love of the game.`
4. **Community & Inclusion** — `Walking football, pan-disability sessions and health & wellbeing programmes — because the club belongs to everyone in Reading.`

**Stats strip** (navy background, gold numbers — replace with real figures):
`10,000+ children coached each year` · `60+ partner schools & nurseries` ·
`12 camp venues across Berkshire` · `150+ weeks of camps delivered`

**"Safe hands, big smiles"** (two columns: checklist + photo):
- DBS-checked, first-aid trained, safeguarding-qualified coaches
- Fun first — confidence and skills follow
- Ofsted-registered camps, childcare vouchers & HAF accepted
- Small group ratios
- Connected to the club kids already love
- Button: `Visit the Parents Hub`

**Testimonials** — 3 quote cards (use Wix repeater; gather real quotes).

**CTA banner**: `Ready for kick-off?` / `Camps fill quickly in peak weeks — secure your child's place online in under two minutes.` → `Book Now`

### 4.2 Holiday Camps

Page hero: H1 `Holiday Camps`, sub: `Every school holiday, our camps turn pitches and sports halls across Berkshire into a week your child won't stop talking about. Ages 4–13, all abilities welcome.`

**Camp cards (4):** Multi-Sport Camp (5–13) · Football Camp (5–13) ·
Mini Royals shorter 4-hour days (4–5, Ofsted-aligned) · Girls-Only Football
(led by female coaches). Copy in the prototype's `holiday-camps.html`.

**Pricing table** (Wix table or repeater — placeholder prices):
standard day 9:00–3:30 £28 · extended day 8:30–5:00 £34 · Mini Royals
9:00–1:00 £19 · full week £125 (save 10%) · HAF 20% off paid bookings.

**"A typical camp day"** timeline (9:00 arrival → 3:15 awards) — see prototype.

**Wix Bookings setup for camps:**
- Create a **Service per camp type** (Multi-Sport, Football, Mini Royals,
  Girls-Only), type = *Class* with daily sessions, or *Course* for
  book-the-week.
- Use **Staff = lead coach**, **Locations = venues** (Tilehurst, Woodley,
  Caversham, Earley…), set capacity per session.
- Booking form custom fields: child's name & DOB, school, medical/allergy
  info, emergency contact, photo consent, HAF code.
- Coupons: `HAF20` (20%), sibling discount via pricing plans or manual coupon.

### 4.3 Schools & Nurseries

Page hero sub: `Qualified coaches in your school every week — raising the quality of PE, lifting playground energy and giving teachers their planning time back.`

Cards: Curriculum PE · Lunchtime & After-School Clubs · Early Years &
Nurseries (ages 2–4, EYFS-aligned) · Events & Tournaments.

Checklist section ("Built around your school"): PE & Sport Premium friendly ·
DBS/safeguarding/first-aid · schemes of work & assessment included · flexible
blocks · button `Request a School Quote` → contact page (school enquiry form).

Two school/nursery testimonials. CTA: `Let's plan your term` → `Enquire Now`.

### 4.4 Weekly Football

Page hero sub: `Term-time sessions where young Royals fall in love with the game — from first touches at four to development squads at fourteen.`

Cards: Little Kickers (4–6) · Soccer School (6–11) · Development Centre
(8–14, trial-based) · Girls' Football (5–12).

**Timetable table** (placeholder days/venues/prices — see prototype).
Offer: *first session free* — drive to a "Book a Free Taster" Wix Bookings
service (price £0).

**Wix Bookings:** each weekly session = a *Class* with weekly recurrence;
monthly Development Centre fee = a *Pricing Plan* (membership).

### 4.5 Community & Inclusion

Page hero sub: `The hoops belong to everyone. Our community programmes use the power of the badge to get people of all ages and abilities moving, connecting and belonging.`

Cards: Walking Football (50+) · Pan-Disability Football · Health & Wellbeing ·
Matchday & Events. Checklist ("No one watches from the sidelines"): free/low-cost
entry points · accessible venues & adapted equipment · inclusion-trained
coaches · GP/school referral routes. Two stories/quotes. CTA: free first visit.

### 4.6 Parents Hub

Quick-link cards: Book a Holiday Camp · Join Weekly Football · Birthday
Parties. "Help with the cost" checklist: HAF free places + 20% off extra
bookings · childcare vouchers & Tax-Free Childcare · 10% sibling discount ·
multi-week discount.

**FAQs** (Wix FAQ app or collapsible text — full answers in
`parents.html`): what to bring · staff checks & ratios (1:12 max) · nervous
first-timers · wet weather · cancellations/moves *(placeholder policy)* ·
medical needs & allergies.

### 4.7 About

Story section ("More than a matchday") + values cards (Fun First, Safe
Always, Everyone In, Always Improving) + team repeater (4 placeholder roles:
Head of Community, Camps Manager, Girls & Women's Lead, Inclusion Officer —
swap in real photos/bios) + recruitment CTA.

### 4.8 Contact & Booking

- **Left:** Wix Form — name, email, phone, dropdown topic (camp booking /
  taster / school coaching / community / party / HAF / careers / other),
  message. Route notifications to the office inbox; set auto-reply
  "we respond within one working day".
- **Right:** embed the **Wix Bookings calendar/service list** widget plus an
  office-details card.

## 5. Settings & polish checklist

- [ ] Mobile editor pass on every page (Wix doesn't fully auto-adapt)
- [ ] SEO: page titles/descriptions (copy the `<title>`/meta from prototype files)
- [ ] Favicon: simple blue/white hooped roundel (no official crest)
- [ ] Automations: booking confirmation + reminder emails (Wix Automations)
- [ ] GDPR: cookie banner (Wix Consent Banner), privacy policy page, photo-consent wording on booking forms
- [ ] Replace ALL placeholder prices, venues, contact details, stats and testimonials
- [ ] Keep concept disclaimer until Reading FC authorises the branding

## 6. Image shot list (for when you have photos)

Hero: group celebration at camp · Schools: coach mid-lesson in a school hall ·
Football: small-sided game · Community: walking football group · Parents:
registration desk moment · About: full team in matching kit. Until then, Wix
Media's free sports library works — favour blue-kit imagery.
