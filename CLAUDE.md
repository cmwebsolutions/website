## Ellveren website: content rules

### Source of truth
- `REBRAND-NOTES.md` records the recent Ellveren rebrand. Read it before touching any page, and treat the current design as final.
- `docs/website-copy-plans.md` holds the approved copy for every page. Use it word for word. Don't rewrite, shorten or "improve" it. If something doesn't fit the layout, ask me rather than editing the copy.
- `docs/ciaran-notes.md` is a price and plan reference. Don't publish anything from it that isn't also in the copy doc (it includes private client exceptions).

### Business rules (never break these)
- Ellveren is not VAT registered. Never write "+ VAT", "inc VAT" or "ex VAT" anywhere.
- Prices: Static £45/mo, Care £85/mo, Care + Support £235/mo, Care + Growth £385/mo, Retainer from £535/mo, Managed Website Plan £249/mo + £499 setup. Hourly rate £80.
- Never use the words "unlimited" or "rolls over". Unused hours do not carry over.
- Name categories, not brands, in client-facing copy ("form builder", "spam protection", "cookie consent"), not plugin or supplier names.
- No hosting-only plan exists. Don't mention one.
- Don't name competitors.
- No client names anywhere unless the copy doc includes them.

### Design (the rebrand is finished)
- Don't change the existing design: colours, fonts, logo, spacing, header, footer, global styles, theme/config files or existing components.
- New pages must be built from existing components and styles only. If a page needs something new (e.g. the plan comparison table), build it to match the current design and show me before using it.
- If a change would touch a shared/global file or an existing component, stop and ask first.
- Only change copy on existing pages where `docs/website-copy-plans.md` says to (e.g. homepage lines). Leave everything else on those pages as it is.

### How to work
- One page at a time, on a feature branch. Order: /plans, /terms, /contact, /managed-website-plan, /websites, homepage.
- Before writing code for a page, show me a short plan: which files and components you'll create or change.
- Keep the plan comparison table and prices in one place (a single data file or component), so a price change is a one-line edit.
- After each page: run the build, then tell me what to check in the browser.

### Before going live
- Search the whole site for: "VAT", "unlimited", "rolls over", "roll over", "Launch Pad", "Core Business", "Premium Growth", "Custom Made Web Solutions", "CMWS", "cmwebsolutions". Report every match.
- List every file changed on the branch (`git diff --stat main`). Flag any shared, global or style files: I'll review those individually.
- Work through the launch checklist at the end of `docs/website-copy-plans.md`.
- Check every internal link to /plans, /terms and /contact works.
