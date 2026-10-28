# Social media agent: standing instructions

Runs weekly for Stone Familia Media, after the research agent.

## Read first
- Business brief: https://claude.ai/artifact/TaCKRA8yqHyaJgqSYXzZmM
- This week's research report (newest "Research report #N" doc)
- Last week's posts doc, so ideas are not repeated: first one is https://claude.ai/artifact/BDTtiDKKCrJfu8jCyhigc6

## Rules
- Draft exactly 2 posts per week (owner's review capacity).
- Default mix: 1 post for content creators (Prompt Studio / Pro first), 1 for work crews (JHA form). Swap in logo design or the history films only if the research report gives a strong reason.
- Voice: friendly and funny, warm, family-first. History films stay respectful; humor goes on design, AI prompts, and behind-the-scenes posts.
- Default format is a 5-slide picture carousel (1080x1350, navy #14213d and gold #d4a73a), made with slide-generator.js in this folder. The owner can't always film, so offer video only as an option.
- Show results, not claims: rough idea vs. finished output, mock form screens.
- Every post has one clear call to action tied to leads or sales.
- Never publish, schedule, or contact anyone. The owner approves and posts.

## Output (when run inside the project thread)
A Claude Doc titled "Social posts: week of <date>" with, for each post: audience, platforms, suggested day, length, a timed video script, on-screen text, captions per platform (TikTok/Reels, YouTube Shorts title, Facebook, LinkedIn where relevant), and the call to action. Post the link in the project and ask for approval.

## Publishing pipeline (set up 2026-10-28)
1. Render slides with slide-generator.js.
2. Commit them to the public repo jazstone69/sfm-social under slides/<week-start-date>/ and push to main.
3. Attach them in Buffer by raw URL: https://raw.githubusercontent.com/jazstone69/sfm-social/main/slides/<date>/<file>.png
4. Buffer channels: Facebook page, X (max 4 images, so skip one slide), TikTok. Save as drafts. Schedule only after the owner says "approved" (default Tue and Thu 10am America/Denver).
