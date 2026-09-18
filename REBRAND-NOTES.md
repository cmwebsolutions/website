# Ellveren rebrand review

## Audit and scope

The starting repository already used Ellveren in page titles, navigation, text logos, the favicon, email addresses, social handles and analytics configuration. No previous-company domain was found in the tracked text files. The remaining old identity was in:

- `src/components/Footer.astro`: transitional former-company wording, now using both full legal names.
- `public/og-image.png`: previous symbol and website-only positioning, replaced with a temporary text card. `public/og-image.svg` is its editable source.
- `public/email-signatures/cmws-email-signature.png`: old logo, retained at its existing URL in case historical emails reference it. It is not linked from the site.

Company-level positioning was too narrow in the homepage, About, Services, shared footer/CTA/process copy, contact form and default metadata. These now describe Websites, Software, Support and Growth. Services retains the existing website packages beneath a capability overview using existing card styles. The unused FounderBio component was also updated so its copy no longer promises a permanently solo delivery model.

Website packages, prices, managed-plan terms, project descriptions and blog articles remain specific to websites. Testimonials are unchanged, including personal references to Ciaran. Existing typography, colours, styles, navigation and text logos are unchanged. No dependencies were changed.

## Review before launch

- **Domain:** Canonicals, sitemap, robots, organisation and breadcrumb URLs now use `https://ellveren.com` without `www`, matching the supplied primary domain. Set up hosting redirects from `www` and the old domain separately; this repository does not configure them.
- **Email and integrations:** `hello@ellveren.com`, `@ellveren`, the Ellveren LinkedIn URL and Plausible domain were already present and retained. Verify account ownership, mailbox delivery and the recipients configured in Formspree externally. Form IDs and submission field names are unchanged; service choices were added. No enquiries were submitted during validation.
- **Growth:** SEO and paid advertising are presented at capability level based on the supplied brief. Existing copy supports SEO and advertising landing pages, but does not document a detailed paid-media management offering. Confirm the intended scope before launch; no budgets, results or management-package promises were added.
- **Privacy:** The policy still says enquiry emails are accessible only to the business owner. This was preserved as a statement of current data handling, rather than changing it speculatively for future staff. Review when access arrangements change. Company identification, service description, enquiry-field wording and the update date were changed; other policy terms were preserved.
- **Legacy signature:** Retire or replace `public/email-signatures/cmws-email-signature.png` once you know whether existing emails depend on it.
- **Designer assets:** Replace the temporary text logos, favicon and share card when the final identity arrives. No new brand mark was designed.
- **Testimonials:** Some quotes already used Ellveren in the starting repository. Their wording was preserved; the original source wording was not independently verified.

## Validation

- `npm run build` runs `astro check` and `astro build`: 38 files checked, zero errors/warnings/hints, 17 pages built.
- Generated HTML checked for canonical domains, matching social descriptions, absolute share-image URLs, legal organisation name, breadcrumb destinations and internal page links: passed on all 17 pages.
- `git diff --check`: passed.
- New social-share card visually inspected.
- Browser layout verification could not be completed: no browser is connected to this session. The first local preview attempt hit sandbox `EPERM`; retry with permission started the server. Review desktop and mobile layouts locally before pushing.
