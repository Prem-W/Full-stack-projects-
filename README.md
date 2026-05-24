# ScholarVault

A full-stack web app for finding scholarships, professor contacts, and application requirements for universities worldwide.

## Features

- **195 countries** — scholarships, required tests, documents, and timelines per study stream
- **Stream-wise data** — B.E/B.Tech, M.Tech/Masters, PhD, MBA, Medicine, and Law
- **Professor finder** — 60+ researchers across AI/ML/Data Science with Hunter.io email lookup
- **Contact guide** — step-by-step advice on writing professor emails that actually get replies
- **Eligibility checker** — enter your profile to see your best scholarship matches
- **SOP builder** — AI-generated Statement of Purpose via Claude API
- **Semantic Scholar** — live paper and citation data for any research topic

## Tech stack

**Frontend** — Vanilla HTML/CSS/JS (no build step, opens in browser directly)  
**Backend** — Node.js + Express  
**APIs** — Anthropic (Claude), Hunter.io, Semantic Scholar (free), RestCountries (free)

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/scholarvault.git
cd scholarvault
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Set environment variables

```bash
cp .env.example .env
```

Edit `.env`:

```
PORT=5000
HUNTER_API_KEY=your_hunter_key
ANTHROPIC_API_KEY=your_anthropic_key
```

Both keys are optional — the app works without them with reduced functionality.

| Key | Get it at | Free tier |
|-----|-----------|-----------|
| `HUNTER_API_KEY` | [hunter.io](https://hunter.io) | 25 email lookups/month |
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) | $5 credit |

### 4. Start the backend

```bash
npm start
# Server runs at http://localhost:5000
```

### 5. Open the frontend

Open `frontend/public/index.html` in your browser, or right-click it in VS Code and choose **Open with Live Server**.

## Project structure

```
scholarvault/
├── backend/
│   ├── server.js           # Express API (9 endpoints)
│   ├── package.json
│   ├── .env.example
│   └── data/
│       ├── countries.js    # 195 countries + scholarship data
│       └── professors.js   # Professor database + search
└── frontend/
    └── public/
        └── index.html      # Complete frontend (single file)
```

## API endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server status |
| GET | `/api/countries` | All 249 countries with search |
| GET | `/api/scholarships/:country/:stream` | Full scholarship data |
| GET | `/api/professors?q=deep+learning` | Search professors |
| POST | `/api/eligibility` | Match profile against scholarships |
| GET | `/api/email-lookup` | Hunter.io proxy (key stays server-side) |
| GET | `/api/semantic-scholar/papers` | Semantic Scholar proxy (fixes CORS) |
| POST | `/api/sop` | Generate SOP via Anthropic |
| POST | `/api/email-template` | Generate outreach email |

## Deploying

**Railway** (recommended):
```bash
npm install -g @railway/cli && railway login && railway init && railway up
```

**Render**: Connect your GitHub repo → Build: `npm install` → Start: `npm start` → add env vars.

After deploying, update the `API` constant at the top of `frontend/public/index.html` to your deployed URL.

## License

MIT
