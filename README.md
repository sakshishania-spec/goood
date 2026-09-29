# Goood — Mood Check-in Prototype

An interactive, clickable prototype of the **Goood** mental-wellness app, shown inside an iPhone frame. It covers the full journey from launching the app on the home screen to the mood check-in, homepage, library, sounds and Instagram stories.

The whole prototype lives in one self-contained file (`public/index.html`). All images, animations and sounds are built in, so there is nothing to compile. A small Node.js (Express) server serves it locally and on Vercel.

---

## The flow

1. **iPhone home screen**: tap the **Goood** icon and the app opens out of it.
2. **Splash**: plays for about 3 seconds. The sun rises, the moon sets, and the centre ring drops down and becomes the seedling.
3. **Mood check-in**: "How are you feeling right now?"
   - Drag the ruler or the mood pills, tap a mood, or use the arrow keys.
   - The seedling's face and leaves react to each mood (Calm, Anxious, Sad, Tired, Down on myself, I don't know).
   - Tap the tick and the seedling flies down into the homepage mood carousel.
4. **Homepage**
   - Jessa's Instagram story card sits under the header. Tap **Watch** to play her stories one by one; after watching, the card is replaced by an Instagram button in the header.
   - "Growing" types itself in and the tree grows leaf by leaf (tap the tree to replay).
   - The bell rings and can be tapped.
   - Library session with a generated calm soundscape.
   - Swipeable Library cards and Sounds cards (Rain, Ocean, Forest, Flute), each opening a full-screen player with its own live scene and soundscape.
   - "You Are goood" writes itself at the bottom of the page.
   - The Calm and Anxious moods each have their own homepage theme and content.
5. **Library page** (from "View all"): Catalog, Saved (3), Playlists and Offline tabs, swipeable cards, Sleep Stories with seasons, and extra players.
6. **Extras**: the Feeling Calm sheet (from "View all" on New This Week), the "Let's find your calm" popup (the + button) and the mini player above the bottom navigation.

Sound starts after the first tap, because browsers require a tap before playing audio. The prototype also follows the device's reduced-motion setting.

---

## Project structure

```
goood-mood-checkin/
├── public/
│   └── index.html   # the complete prototype (images, animation, audio inlined)
├── server.js        # Node.js + Express server
├── package.json     # scripts and the Express dependency
├── .gitignore
└── README.md
```

### server.js

- Serves everything in `public/`.
- `GET /api/health` returns a JSON status, which is useful for uptime checks.
- Any other route shows the prototype.
- Locally it listens on `PORT` (default **3000**). On Vercel it exports the app instead, and Vercel serves `public/` from its CDN.

---

## Run locally

Requires **Node.js 18 or newer**.

```bash
npm install
npm start
```

Open **http://localhost:3000**.

For development with auto-restart:

```bash
npm run dev
```

---

## Upload to GitHub

**Using git:**

```bash
git init
git add .
git commit -m "Goood mood check-in prototype"
git branch -M main
git remote add origin https://github.com/<your-username>/goood-mood-checkin.git
git push -u origin main
```

**Using the website:** create a new repository, click **"uploading an existing file"**, drag in everything *inside* the folder (including the `public` folder), then click **Commit changes**.

---

## Deploy on Vercel

1. Go to the Vercel dashboard, choose **Add New → Project** and import the GitHub repository.
2. Set the **framework preset** to **Express**. Vercel usually detects this automatically.
3. Leave the build command and output directory **empty**.
4. Click **Deploy**.

Every push to `main` redeploys automatically.

**Adding it to an existing app instead:** copy `public/index.html` to `public/goood/index.html` in that app. It will be served at `/goood/`.

---

## Design updates in this version

| Area | Change |
| --- | --- |
| Sharpness | Images are 2× resolution throughout (homepage, Library, stories, sheets, popup, players and iPhone home screen), so the UI is crisp on retina screens |
| Calm ↔ Anxious switch | The Library section now sits in the same place in both themes, so nothing moves while the theme crossfades |
| Homepage header | Logo, Instagram and bell buttons aligned on one line, matching the Figma frame |
| Instagram button | Uses the outline Instagram icon from the Figma frame, in cream to match the bell |
| Story card | Header and card positions updated to the latest Figma layout |
| Mini player | Session photo stays upright; a soft light and glowing dot circle the edge while playing |
| Library › Saved tab | The "3" count stays visible when the tab is selected |
| Homepage cards | "Magic Breathing" and "Self-love and Praise" cards rebuilt at 2× from Figma, including the heart button that Figma's export clips |
| Anxious homepage hero | The photo's bottom fades softly into the green above the cards, as in the design |
| Story viewer | Instagram pill contents centred, with 8 px between the icon and the text |

---

## Notes

- `public/index.html` is about 7.5 MB because every image is embedded in it. Vercel serves it compressed.
- The only outside requests are Google Fonts (Bricolage Grotesque as a stand-in for Makira, plus Instrument Serif).
- The Instagram stories are sample content.
- Source design: Figma, *Goood App*: Home (calm) `353:1179` and Home (anxious) `301:1294`.
