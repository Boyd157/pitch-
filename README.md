# Reading FC Community — Website Pitch

A concept proposal for a Reading FC community sports website, structurally
inspired by community sports-coaching sites (school PE delivery, holiday
camps, weekly football, inclusion programmes), intended to be built on the
Wix platform.

**This is a pitch/demo only — not affiliated with or endorsed by Reading
Football Club.** All copy is original; stats, prices, venues, quotes and
contact details are placeholders.

## What's in this repo

| Path | What it is |
|---|---|
| `index.html` + 6 other `.html` pages | Working static prototype — open `index.html` in any browser |
| `family-app.html` | Pitch page for the **Royals Family Pass** — a free Trust app giving families free tickets & offers across the Thames Valley |
| `app.html` | Fully interactive mobile prototype of the app: offer search, limited ticket claiming ("first 100 families"), QR + quotable-code wallet, share-by-WhatsApp/text, simulated push notifications and venue redemption |
| `admin.html` | Trust management dashboard demo: publish/edit/pause offers, set allocations, live claim counters and one-click push alerts (syncs with `app.html` on the same device) |
| `assets/css/styles.css`, `assets/js/main.js` | Shared styling (Reading-inspired blue/white hoops) and nav script |
| `docs/WIX-BUILD-KIT.md` | Page-by-page guide to rebuilding the site in the Wix editor: design tokens, paste-ready copy, Wix Forms/FAQ setup, launch checklist |

Booking links out to the Trust's existing
[ClassForKids portal](https://reading-fc-community-trust.classforkids.io/),
so no Wix Bookings app or Business plan is required.

## Pages

Home · Holiday Camps · Schools & Nurseries · Weekly Football ·
Community & Inclusion · Parents Hub (with FAQs) · Family App (pitch + live
app prototype) · About · Contact & Booking

## Viewing the prototype

No build step — clone and open `index.html`, or serve locally:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```
