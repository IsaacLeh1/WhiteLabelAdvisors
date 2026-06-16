# Changelog & Time Log — White Label Advisors Website

Tracking of major changes to the site and the time invested in building it.

- **Repository:** https://github.com/IsaacLeh1/WhiteLabelAdvisors
- **Stack:** Static site — HTML, CSS, vanilla JS (no build step); deployed on Render
- **Pages:** `index.html` (home), `engagements.html`, `blog.html`; shared `assets/styles.css` + `assets/main.js`

> **About these hours:** The total reflects the actual time invested in the
> project — **~12 hours** — including work that happens outside of commits:
> exploring and extracting the brand assets, design iteration, content review,
> testing, and revisions. The per-change figures below are proportional
> estimates that distribute that time across the major pieces of work; adjust
> against your own records as needed.

---

## Summary

| Metric | Value |
| --- | --- |
| Total time | **~12 hours** |
| Work sessions | 2 (June 3 & June 15, 2026) |
| Commits | 30 |
| Pages built | 3 |

| Session | Date | Focus | Time |
| --- | --- | --- | --- |
| Session 1 | 2026-06-03 | Build & branding | ~9.0 hrs |
| Session 2 | 2026-06-15 | Content, motion & refinement | ~3.0 hrs |

---

## Session 1 — Initial build & branding · 2026-06-03 · ~9.0 hrs

| Major change | Est. time | Commits |
| --- | --- | --- |
| **Initial site build** — full single-page site from the brand deck & proposal: structure, WLA branding (charcoal/teal palette, serif type, diamond motifs), all sections, and Render static-site config | ~2.25 hrs | `c4a8757`, `3ecf4dd` |
| **Real brand imagery** — extracted Christine's photos, the W⟋L logos, and architectural backgrounds from the source PDFs; optimized and integrated them throughout | ~2.25 hrs | `3923d68` |
| **Blog** — added a Blog/Insights section, then split it into its own standalone page | ~1.25 hrs | `d71c67b`, `bbd11c9` |
| **Logo refinement** — made the logo background transparent, color-matched it to the palette, then replaced it with a high-resolution version pulled from the live site | ~1.25 hrs | `8dcbb17`, `f9e13f4` |
| **Hero polish & motion** — enlarged/left-weighted the headline, widened the layout, and added a slow Ken Burns pan/zoom on the city background (direction & speed tuned) | ~0.75 hr | `97f9205`, `64e5dd2`, `1ba61c3`, `9601446` |
| **By The Numbers panel** — turned the stats block into a separated floating panel (beveled → smooth rounded corners, widened) | ~0.50 hr | `f83a509`, `110d3c8` |
| **Company-first reframe** — shifted the narrative from the founder to the firm and added the first "What Clients Say" testimonial | ~0.75 hr | `9fb01b3` |

---

## Session 2 — Content, motion & refinement · 2026-06-15 · ~3.0 hrs

| Major change | Est. time | Commits |
| --- | --- | --- |
| **Testimonials carousel** — added all four client quotes as a rotating carousel (arrows + dots, auto-advance) | ~0.45 hr | `872cd46` |
| **Applied liked design principles (Ardian / Long Ridge)** — grandiose full-bleed hero, cleaner whitespace & banner rhythm, and subtle scroll-reveal animations site-wide | ~0.50 hr | `09633d9` |
| **About photo carousel** — auto-rotating crossfade of Christine actively working (conference, boardroom, Q&A); fade slowed & smoothed | ~0.25 hr | `c823e3e`, `37fc9a1` |
| **Typography** — switched the title font to Archivo for a cleaner, corporate feel | ~0.15 hr | `e85be1c` |
| **By The Numbers — full-width blurred background** — moved the photo to a full-bleed blurred banner with a frosted-glass stats panel | ~0.15 hr | `ff3737a` |
| **Bug fix** — testimonial carousel arrows were unclickable (z-index); made them work | ~0.10 hr | `b36d4a9` |
| **Our Approach & tagline polish** — enlarged/refined the three step cards; enlarged the "Simple. Sophisticated. Solutions." tagline | ~0.25 hr | `eb78582`, `6e83c78` |
| **Journeys content** — added the Journeys welcome narrative | ~0.15 hr | `429395a` |
| **Engagements** — added the Engagements content, then split it into its own page and simplified the navbar to Home · Engagements · Blog · Connect | ~0.30 hr | `8e48adb`, `be1feee` |
| **Content & icons** — used the Journeys copy in About; added indicative icons inside the engagement diamonds | ~0.25 hr | `251d7df` |
| **Modalities & Who We Serve polish** — enlarged/centered the Modalities cards; restyled Who We Serve with cards and interactive pill chips | ~0.15 hr | `139d11a` |
| **Restructure & UX** — moved Who We Serve to the Engagements page, fixed the carousel page-jump (constant height), and rebalanced the homepage section flow | ~0.20 hr | `4d32c04` |
| **Frosted serve cards** — frosted, semi-transparent Audience/Industries boxes on Engagements | ~0.10 hr | `87b1cc1` |

---

## Full commit log (chronological)

| Date / time | Commit | Description |
| --- | --- | --- |
| 2026-06-03 11:33 | `c4a8757` | Add White Label Advisors website |
| 2026-06-03 11:35 | `3ecf4dd` | Add Render static site config |
| 2026-06-03 12:24 | `3923d68` | Use real brand photos and logos from source files |
| 2026-06-03 12:43 | `d71c67b` | Add Blog/Insights section matching whitelabeladvisors.com/blog |
| 2026-06-03 12:50 | `bbd11c9` | Split blog into its own page and adopt the WLA twist logo |
| 2026-06-03 12:56 | `8dcbb17` | Make logo background transparent and match page palette |
| 2026-06-03 13:23 | `f9e13f4` | Replace logo with high-res transparent, color-matched version |
| 2026-06-03 13:27 | `97f9205` | Enlarge homepage hero headline and weight it left |
| 2026-06-03 13:30 | `64e5dd2` | Widen hero and enlarge portrait to use more space |
| 2026-06-03 13:33 | `1ba61c3` | Add slow Ken Burns pan/zoom to hero city background |
| 2026-06-03 13:36 | `9601446` | Speed up hero pan and reverse direction to pan left |
| 2026-06-03 13:50 | `f83a509` | Make By The Numbers a beveled, separated panel |
| 2026-06-03 13:52 | `110d3c8` | Widen stats panel and use smooth rounded corners |
| 2026-06-03 14:08 | `9fb01b3` | Reframe site around the firm and add What Clients Say |
| 2026-06-15 12:09 | `872cd46` | Add all four client testimonials as a rotating carousel |
| 2026-06-15 12:29 | `09633d9` | Apply liked design principles (Ardian / Long Ridge) |
| 2026-06-15 12:34 | `c823e3e` | Add Christine working-photo carousel to About the Firm |
| 2026-06-15 12:37 | `37fc9a1` | Slow and smooth the About photo crossfade |
| 2026-06-15 12:40 | `e85be1c` | Switch title font to Archivo for a cleaner, corporate feel |
| 2026-06-15 12:46 | `ff3737a` | Full-width blurred photo background for By The Numbers |
| 2026-06-15 12:49 | `b36d4a9` | Fix non-clickable testimonial carousel arrows |
| 2026-06-15 12:53 | `eb78582` | Enlarge and polish the Our Approach cards |
| 2026-06-15 12:57 | `6e83c78` | Enlarge the Simple. Sophisticated. Solutions. tagline |
| 2026-06-15 13:03 | `429395a` | Add Journeys welcome narrative to Who We Serve |
| 2026-06-15 13:09 | `8e48adb` | Add Engagements section and nav tab |
| 2026-06-15 13:14 | `be1feee` | Make Engagements its own page and simplify the navbar |
| 2026-06-15 13:24 | `251d7df` | Use Journeys copy in About; add icons to engagement diamonds |
| 2026-06-15 13:30 | `139d11a` | Enlarge/polish Modalities cards and refine Who We Serve |
| 2026-06-15 13:36 | `4d32c04` | Move Who We Serve to Engagements; fix carousel jump; rebalance flow |
| 2026-06-15 13:39 | `87b1cc1` | Frosted dark cards for Who We Serve on Engagements |

---

*Maintainer note: append new entries to the relevant session table and the full
commit log as work continues, and update the Summary totals.*
