# Weekly run: Stone Familia Media research + social drafts

Runs every Monday morning (America/Denver). Owner: Sage Stone, JStone_SFM@pm.me.
Read research-agent.md and social-media-agent.md in this folder first; they hold the business context and rules.

## Steps
1. **Research.** Do the weekly research in research-agent.md (web search). Skip anything already covered in previous reports in `reports/`.
2. **Write the report** to `reports/<YYYY-MM-DD>.md`: the short version (3-4 findings), competitor changes, 1-3 growth ideas with post hooks, sources as links.
3. **Draft 2 posts** following social-media-agent.md: 1 for content creators (Prompt Studio / Pro first), 1 for work crews (JHA form), unless the research gives a strong reason to swap. Friendly and funny voice. Don't repeat hooks used in earlier weeks (check `posts/`).
4. **Make slides.** Edit the `prompt` and `jha` slide arrays in slide-generator.js (rename the arrays/filenames if the topic changes), then run `node agents/slide-generator.js slides/<next-Monday-date>` from the repo root. Look at every slide image to check nothing overflows or overlaps.
5. **Save** the captions to `posts/<next-Monday-date>.md`, then commit slides, report, and posts to main and push.
6. **Buffer drafts.** Organization "My organization". Create DRAFTS ONLY (saveToDraft: true), never schedule or publish:
   - Facebook page (type post): 5 slides.
   - X: 4 slides max (skip slide 2).
   - TikTok: 5 slides.
   Images by raw URL: https://raw.githubusercontent.com/jazstone69/sfm-social/main/slides/<date>/<file>.png (confirm each returns 200 before attaching).
7. **Weekly JHA blog post.** Write one new blog post (700-1000 words) showing the benefits of doing a Job Hazard Analysis, built on REAL, current, verifiable information found by web search this week. Good sources: OSHA news releases and enforcement cases (osha.gov/news), BLS injury and fatality data (bls.gov/iif), OSHA publication 3071, NIOSH, and reputable trade press. Each post takes one real angle (e.g. a recent OSHA citation that a JHA would have prevented, a new BLS statistic, a common hazard of the season like cold stress or ladder falls) and ends by showing how the Stone Familia Media JHA form helps (offline, Low to Critical risk rating, one-click PPE, running safety summary, signatures, PDF, private on device, $9.99 once, link https://www.stonefamiliamedia.com/product-store/p/job-hazard-analysis-form).
   Rules: cite every fact with a link; never invent incidents, numbers, or quotes; name companies only as they appear in public OSHA/government records and never name injured workers; don't repeat a topic already in `blogs/`; friendly, plain-spoken voice; include a title, meta description, suggested URL slug, and a "general information, not legal advice" line. Save to `blogs/<YYYY-MM-DD>-<slug>.md` and commit it.
8. **Email** JStone_SFM@pm.me via Gmail, subject "SFM weekly: research, 2 posts, and JHA blog for week of <date>", HTML body with:
   - the research short version and growth ideas,
   - both posts' captions and links to slide 1 of each,
   - the full JHA blog post, ready to paste into the website,
   - a note: "6 drafts are waiting in Buffer. Open each, check it, and schedule it (suggested Tue and Thu 10am). Nothing goes out until you do."
   Send nothing to anyone else.

## Never
- Publish or schedule posts. Contact anyone besides the owner. Make claims about the products that aren't on stonefamiliamedia.com.
