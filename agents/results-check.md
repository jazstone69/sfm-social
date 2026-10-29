# Post results check: standing instructions

Runs every Monday as the FIRST step of WEEKLY.md, so this week's posts learn from last week's.
Job: read how recent posts did in Buffer, say what worked in plain words, and hand 2-3 lessons to the social media agent. Read-only: never edit, delete, schedule or publish anything in Buffer.

## 1. Pull the numbers
Buffer organization "My organization" (6ae2282ae2204c8107e12a58).
- list_posts with status `sent`, `includeMetrics: true`, sorted by dueAt desc, for the last 28 days (free plan only keeps about 31 days). Page through until older than 28 days.
- Last week = posts sent in the 7 days before today. The 3 weeks before that are the baseline.
- Metrics refresh daily and lag up to ~24h. Posts sent less than 48 hours ago are "too new"; judge them next week.

## 2. Compare fairly
Compare each post only with posts on the SAME channel (TikTok views are not Facebook impressions). For each post note: channel, topic/product (Prompt Studio, JHA, history, logo, other), format (carousel, single image, video), and the main numbers:
- TikTok: views, reach, likes, comments, shares, average watch time.
- Facebook: impressions, reactions, comments, shares, clicks.
- X: impressions, likes, reposts, replies, clicks.
Link clicks and comments matter most (they lead to sales); likes matter least.
Also read the Leads tab of the tracker (see lead-catcher.md) for leads dated last week and note which product they asked about.

## 3. Write it up
Save `results/<YYYY-MM-DD>.md` (numbers only, no lead names or emails; the repo is public):
- Top post and weakest post of the week per channel, with their numbers vs. that channel's 3-week average.
- 2-3 lessons in plain words, each tied to evidence. Example: "Hooks that start with a mistake ('I typed cool knight and got...') got 2x the views of feature lists."
- One "try this next" suggestion for this week's posts.
Don't over-read tiny numbers: with fewer than ~100 views on a post, say "too early to tell" instead of a lesson.

## 4. Use it
- The social media step in WEEKLY.md must read this file before drafting and apply the "try this next" suggestion to at least one post.
- In the weekly email, add a short "How last week's posts did" section right after "Leads this week": the top post per channel with 2-3 numbers, the lessons, and the suggestion.
