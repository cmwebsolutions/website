# Ciaran's notes: Ellveren plans and prices
 
My own cheat sheet for learning the plans. Updated 12 Nov 2026. Full detail and reasoning: `pricing-growth-decisions.md`.
 
**VAT:** none. Ellveren isn't VAT registered, so the prices below are what clients pay, and GoCardless collects exactly these amounts (Care = £85). Once registered: add "+ VAT", give 30 days' notice, update every subscription.
 
---
 
## The plan ladder (learn this first)
 
| Plan | £/month | Hours | Small requests | Minimum term |
|---|---|---|---|---|
| **Static** | £45 (£486/yr) | none | 3 working days | none |
| **Care** (WordPress) | £85 (£918/yr) | none | 3 working days | none |
| **Care + Support** | £235 | 2 | 2 working days | 3 months |
| **Care + Growth** | £385 | 4 | 2 working days | 3 months |
| **Retainer** | £535 / £685 / £835 | 6 / 8 / 10 | next working day | 3 months |
 
**The formula:** £85 site care + included hours at £75. Extra WordPress site for the same client: +£65/mo. Extra static site: +£30/mo. One plan per business; WordPress is the base if they have both; hours shared across sites. (e.g. 1 WordPress + 2 static = £145/mo)
- Care + Support = 85 + (2 × 75) = £235
- Care + Growth = 85 + (4 × 75) = £385
- Retainer 6 hrs = 85 + (6 × 75) = £535
Annual billing (10% off) is for Care and Static only.
 
**Care stays at £85** (12 Nov: £75 considered and rejected; annual £918 ≈ £76.50/mo is the lower option).
 
---
 
## What each plan includes
 
### Static, £45/mo
- Cloudflare hosting with SSL; uptime monitoring; response within 4 working hours if it goes down
- Postmark contact forms with Turnstile spam protection
- Full version history in Git (that's the backup)
- Quarterly security/dependency check and rebuild if needed
- Free fix if hosting or an update breaks something
- Cookie banner, privacy policy and terms (GetTerms)
- Sitepins editing where set up (their own edits are free)
- Quick how-to help by email; **quarterly** report
### Care, £85/mo
- **Weekly** updates with a visual check; critical security patches **same day**
- **Fixes included:** anything that was working and stops working, where the cause is in my care (WordPress, plugins/themes I manage, hosting). Fair use ~30 min/month
- Malware clean-up on sites I host, unless they caused it (their server: £80/hr)
- Uptime checked every 5 min; response within 4 working hours
- Daily off-site backups, kept 30 days, separate provider (B2); plus Guru hourly backups when I host (backups live)
- UK managed hosting (when I host)
- Licences: GeneratePress, Perfmatters, CleanTalk, GetTerms, **form builder** (Fluent Forms standard; WS Form for complex layouts, e.g. SAS; no Gravity)
- **Website email delivery:** Postmark, or I connect their own SMTP provider. Website-sent email only, never mailboxes
- Quick how-to help by email; **monthly** report
- **No hours, no changes.** Stay firm.
- Client-facing: name categories ("form builder", "spam protection"), not brands
### Care + Support, £235/mo
- Everything in Care + **2 hours/month**; 2-day turnaround
### Care + Growth, £385/mo
- Everything in Care + **4 hours/month**; 2-day turnaround
- _Open idea: add a quarterly planning call so it's more than "more hours"._
### Retainer, from £535/mo
- Care + 6, 8 or 10 hours; next-working-day response; planned work scheduled monthly
### Rules for every plan with hours
- 15-minute steps (no 30-min minimum on included hours)
- Alert at 80%: they choose pause, defer, or approve overage at £80/hr
- **No rollover.** Hours belong to the calendar month
- Change plan with one month's notice
- Monthly report: hours included, used, what was done
---
 
## "Fixes included": the line to remember
 
**Included:** it was working, it stopped working, and the cause is in my care.
 
**Not included (£80/hr):**
- Changes of any size ("move this button" is a change, not a bug)
- Things they caused: plugins they added, their edits, leaked passwords
- Third-party services changing or breaking (APIs, booking tools, embeds, CRMs)
- Problems already there when I took the site over (fix during the £195 takeover, or quote)
If fixes regularly take over ~30 min/month: talk about why, suggest Care + Support.
 
---
 
## Managed Website Plan
- **£499 setup + £249/mo, 12-month minimum** (£3,487 year one)
- Static only, up to 5 pages, 2 design revision rounds; they supply copy and images
- 1 hour of edits a month (no rollover); care as on Static
- They own it after 12 months → Static £45, Care + Support £235, or take it elsewhere
- Leave early = rest of the 12 months still payable
- Secondary market (small established firms). Not the headline offer
## Builds
- **Business website: from £3,500** (5–10 pages, WordPress or Astro, design included)
- **Integrated website: from £6,000** (ATS, CRM, booking, finance, APIs, AI)
- **Portals and web apps:** paid scoping first (half day £300 / day £550, credited)
- Payment 50/50; over ~£8k: 40/40/20
- Every quote includes a Care plan as the default line
- Short budget? Cut scope, never the rate
## Add-ons and one-offs
| | |
|---|---|
| Website health check | free (~45 min, good-fit firms) |
| Site takeover | £195 |
| Plausible analytics | £10/mo per site |
| SEO & GEO audit | £495 |
| SEO & GEO monthly | from £250/mo (only if asked) |
| Google Ads | from £250/mo (existing clients only) |
| Server care (their server) | £75/mo |
| Portal hosting & care | £165/mo |
| Hand-off move | £120 (free for the five existing hosting-only clients) |
 
## Hourly
- **£80/hr**, 15-minute steps, 30-minute minimum per request
- Rush/out-of-hours they ask for: £120/hr (never when it's my fault)
- Day £550 (7.5 hrs), half day £300, paid in advance
- Hourly work invoiced monthly in arrears with a timesheet, 14 days
---
 
## Not offered
- **Hosting-only.** Existing hosting-only clients: Care £85 or a **free move** to another host. No in-between plan. Already on Direct Debit; Care can start the 1st of the month after they agree (1 Feb latest)
- A £50 plan, or hours inside Care (12 Nov: reconfirmed)
- Email hosting / mailboxes (refer to an IT provider)
- "Unlimited" anything
- Rollover of hours, a lower hourly rate
## Exceptions (private, don't repeat)
- **JDC:** £50/mo paid annually, edits up to 15 min, until their next renewal. Then Care. Track their edit time in Clockify
- **UK Credit:** portal bundled into Care £85 from 1 Dec 2026. Portal care priced back in if they move up
---
 
## Payment and terms in one breath
Direct Debit (GoCardless) on every plan, collected on the 1st in advance · overage and ad-hoc in arrears, 14 days · unpaid 14 days = work paused · 30 days = suspension after 7 days' written notice · plans monthly after the minimum term, one month's notice · prices reviewed every April, notice in March · no price hold · no VAT.
 
---
 
## Pushback: what to say
 
- **"It's a big increase."** "It is, and I'd rather be upfront. The old price didn't cover the work that keeps a site secure." Then offer the lower option: annual billing, a lower plan, or a hand-off. Explain once. Don't argue it twice.
- **"No hours in Care?"** "Care keeps the site safe, and if something stops working I fix it. Changes are separate, which keeps it at £85. For regular changes, Care + Support includes 2 hours."
- **"Can you do it cheaper?"** Annual billing (10% off Care/Static) is the only discount. Never the rate, never hours inside Care.
- **"Nivo / someone else is £55."** "They update monthly; I update weekly and patch critical issues the same day, with backups at a separate provider and licences included." Their prices are + VAT; mine aren't. Don't name competitors publicly.
- **Leaving is fine.** Thank them, free backup/DNS or £120 move (free move for the hosting-only five), log the reason, keep the door open.
## Numbers worth knowing
- Care costs me ~£42–55/mo to serve (hosted), ~£33–46 (their server). Margin on Care: ~£30–43
- Floor: effective rate under £47/hr for two months → reprice
- Target: £4,700/mo run rate by Jul–Sep 2027, ≤35 hrs/week, ~55 billable hours at £80
- VAT threshold £90k rolling 12 months: check turnover quarterly; talk to the accountant at £75k
