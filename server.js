require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fetch = require('node-fetch');
const path = require('path');

const { ALL_COUNTRIES, STREAMS, getScholarshipData, SCHOLARSHIP_DATA } = require('./data/countries');
const { searchProfessors, getFields, getCountries } = require('./data/professors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '10kb' }));

app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:8080',
    'null',
  ],
  methods: ['GET', 'POST'],
}));

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'Too many requests, please slow down.' },
});

const strictLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 15,
  message: { error: 'Rate limit hit for this endpoint.' },
});

app.use('/api/', generalLimiter);


app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    stats: {
      countries: ALL_COUNTRIES.length,
      streams: STREAMS.length,
    },
    services: {
      hunterProxy: process.env.HUNTER_API_KEY ? 'configured' : 'not set — add HUNTER_API_KEY to .env',
      anthropicProxy: process.env.ANTHROPIC_API_KEY ? 'configured' : 'not set — add ANTHROPIC_API_KEY to .env',
      semanticScholar: 'no key required',
      restCountries: 'no key required',
    },
  });
});


app.get('/api/countries', (req, res) => {
  const { region, q } = req.query;
  let data = ALL_COUNTRIES;

  if (q) {
    const query = q.toLowerCase();
    data = data.filter(c =>
      c.n.toLowerCase().includes(query) ||
      c.l.toLowerCase().includes(query) ||
      c.r.toLowerCase().includes(query)
    );
  }
  if (region) {
    data = data.filter(c => c.r === region);
  }

  res.json({ success: true, data, total: data.length });
});

app.get('/api/countries/regions', (req, res) => {
  const regions = [...new Set(ALL_COUNTRIES.map(c => c.r))].sort();
  res.json({ success: true, regions });
});


app.get('/api/streams', (req, res) => {
  res.json({ success: true, data: STREAMS });
});


app.get('/api/scholarships/:country/:stream', (req, res) => {
  try {
    const country = decodeURIComponent(req.params.country);
    const stream = decodeURIComponent(req.params.stream);
    const result = getScholarshipData(country, stream);
    res.json({ success: true, country, stream, ...result });
  } catch (err) {
    console.error('Scholarships error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to load scholarship data.' });
  }
});

app.get('/api/scholarships/:country', (req, res) => {
  const country = decodeURIComponent(req.params.country);
  const streams = SCHOLARSHIP_DATA[country]
    ? Object.keys(SCHOLARSHIP_DATA[country])
    : STREAMS.map(s => s.id);
  res.json({ success: true, country, streams, hasDetailedData: !!SCHOLARSHIP_DATA[country] });
});


app.get('/api/professors', (req, res) => {
  try {
    const { q = '', field = '', country = '', limit = 60, offset = 0 } = req.query;
    const result = searchProfessors({
      q,
      field,
      country,
      limit: Math.min(parseInt(limit, 10) || 60, 200),
      offset: parseInt(offset, 10) || 0,
    });
    res.json({ success: true, ...result });
  } catch (err) {
    console.error('Professor search error:', err.message);
    res.status(500).json({ success: false, error: 'Search failed.' });
  }
});

app.get('/api/professors/filters', (req, res) => {
  res.json({ success: true, fields: getFields(), countries: getCountries() });
});


const scholarshipCriteria = [
  { name: 'Fulbright Foreign Student',          uni: 'USA Universities',        country: 'USA',         coverage: 'Full tuition + living + airfare',       deadline: 'Oct 15', type: 'Full',    gpa: 3.5, lang: 'high', gre: 'low',  exp: 1, pub: 0 },
  { name: 'NSF Graduate Research Fellowship',   uni: 'USA Universities',        country: 'USA',         coverage: '$37,000/yr + $16k tuition',             deadline: 'Oct 20', type: 'Full',    gpa: 3.7, lang: 'high', gre: 'high', exp: 1, pub: 0 },
  { name: 'Gates Cambridge Scholarship',        uni: 'University of Cambridge', country: 'UK',          coverage: 'Full cost of study',                    deadline: 'Oct 14', type: 'Full',    gpa: 3.8, lang: 'high', gre: 'mid',  exp: 0, pub: 0 },
  { name: 'Chevening Scholarship',              uni: 'UK Universities',         country: 'UK',          coverage: 'Full tuition + living + airfare',       deadline: 'Nov 5',  type: 'Full',    gpa: 3.3, lang: 'high', gre: 'low',  exp: 2, pub: 0 },
  { name: 'Rhodes Scholarship',                 uni: 'University of Oxford',    country: 'UK',          coverage: 'Full Oxford funding + living',          deadline: 'Oct 1',  type: 'Full',    gpa: 3.9, lang: 'high', gre: 'mid',  exp: 0, pub: 0 },
  { name: 'DAAD Study Scholarship',             uni: 'German Universities',     country: 'Germany',     coverage: '€992/month + fees + health insurance',  deadline: 'Oct 15', type: 'Full',    gpa: 3.5, lang: 'mid',  gre: 'low',  exp: 0, pub: 0 },
  { name: 'MEXT Government Scholarship',        uni: 'Japanese Universities',   country: 'Japan',       coverage: 'Full tuition + ¥147,000/month',         deadline: 'May',    type: 'Full',    gpa: 3.0, lang: 'low',  gre: 'low',  exp: 0, pub: 0 },
  { name: 'KGSP Korean Government Scholarship', uni: 'Korean Universities',     country: 'South Korea', coverage: 'Full tuition + ₩900,000/month',         deadline: 'Mar',    type: 'Full',    gpa: 3.0, lang: 'mid',  gre: 'low',  exp: 0, pub: 0 },
  { name: 'Australia Awards',                   uni: 'Australian Universities', country: 'Australia',   coverage: 'Full tuition + living + airfare',       deadline: 'Apr 30', type: 'Full',    gpa: 3.0, lang: 'mid',  gre: 'low',  exp: 1, pub: 0 },
  { name: 'Swedish Institute Scholarship',      uni: 'Swedish Universities',    country: 'Sweden',      coverage: 'Full living + travel + fees',           deadline: 'Feb 10', type: 'Full',    gpa: 3.5, lang: 'high', gre: 'low',  exp: 1, pub: 0 },
  { name: 'ETH Zurich Excellence Award',        uni: 'ETH Zurich',              country: 'Switzerland', coverage: 'Full tuition + CHF 12,000/yr',          deadline: 'Dec 15', type: 'Full',    gpa: 3.8, lang: 'high', gre: 'high', exp: 1, pub: 1 },
  { name: 'Eiffel Excellence Scholarship',      uni: 'French Universities',     country: 'France',      coverage: '€1,181/month + healthcare + flights',   deadline: 'Jan 9',  type: 'Full',    gpa: 3.7, lang: 'mid',  gre: 'low',  exp: 0, pub: 0 },
  { name: 'NUS Research Scholarship',           uni: 'NUS Singapore',           country: 'Singapore',   coverage: 'Full tuition + S$2,000/month',          deadline: 'Nov 15', type: 'Full',    gpa: 3.5, lang: 'high', gre: 'mid',  exp: 1, pub: 0 },
  { name: 'Chinese Government Scholarship',     uni: 'Chinese Universities',    country: 'China',       coverage: 'Full tuition + ¥3,500/month + room',    deadline: 'Mar 15', type: 'Full',    gpa: 3.0, lang: 'low',  gre: 'low',  exp: 0, pub: 0 },
  { name: 'Vanier Canada Graduate Scholarship', uni: 'Canadian Universities',   country: 'Canada',      coverage: '$50,000 CAD/yr for 3 years',            deadline: 'Nov 1',  type: 'Full',    gpa: 3.8, lang: 'high', gre: 'mid',  exp: 2, pub: 1 },
  { name: 'Lester B. Pearson Scholarship',      uni: 'University of Toronto',   country: 'Canada',      coverage: 'Full tuition + living + books',         deadline: 'Nov 7',  type: 'Full',    gpa: 3.8, lang: 'high', gre: 'low',  exp: 1, pub: 0 },
  { name: 'Holland Scholarship',                uni: 'Dutch Universities',      country: 'Netherlands', coverage: '€5,000 (first year)',                   deadline: 'Feb 1',  type: 'Partial', gpa: 3.2, lang: 'mid',  gre: 'low',  exp: 0, pub: 0 },
  { name: 'RTP Stipend',                        uni: 'Australian Universities', country: 'Australia',   coverage: 'AUD $32,192/yr + full tuition',         deadline: 'Oct 31', type: 'Full',    gpa: 3.5, lang: 'mid',  gre: 'low',  exp: 1, pub: 0 },
  { name: 'KTH Scholarship',                    uni: 'KTH Royal Institute',     country: 'Sweden',      coverage: 'Full tuition waiver',                   deadline: 'Jan 15', type: 'Full',    gpa: 3.3, lang: 'mid',  gre: 'low',  exp: 0, pub: 0 },
  { name: 'Clarendon Fund',                     uni: 'University of Oxford',    country: 'UK',          coverage: 'Full fees + living stipend',            deadline: 'Jan 20', type: 'Full',    gpa: 3.7, lang: 'high', gre: 'low',  exp: 0, pub: 0 },
];

app.post('/api/eligibility', (req, res) => {
  try {
    const { gpa = 3.0, lang = 'mid', gre = 'low', exp = 0, pub = 0 } = req.body;
    const langScore = { high: 3, mid: 2, low: 1 };
    const greScore  = { high: 3, mid: 2, low: 1 };

    const results = scholarshipCriteria.map(s => {
      let score = 0;
      const gpaDiff = parseFloat(gpa) - s.gpa;

      if (gpaDiff >= 0)         score += 32;
      else if (gpaDiff >= -0.3) score += 20;
      else if (gpaDiff >= -0.5) score += 10;

      score += (langScore[lang] || 1) >= (langScore[s.lang] || 1) ? 22 : 10;
      score += (greScore[gre]   || 1) >= (greScore[s.gre]   || 1) ? 16 : 5;
      score += parseInt(exp, 10) >= s.exp ? 15 : 5;
      score += parseInt(pub, 10) >= s.pub ? 10 : 3;

      return { ...s, matchScore: Math.min(Math.round(score * 1.05), 97) };
    }).sort((a, b) => b.matchScore - a.matchScore);

    res.json({ success: true, results: results.slice(0, 12), total: results.length });
  } catch (err) {
    console.error('Eligibility error:', err.message);
    res.status(500).json({ success: false, error: 'Eligibility check failed.' });
  }
});


app.post('/api/email-template', (req, res) => {
  const { professorName, affiliation, authorId, paperTitle, researchTopic, studentName, degree, university } = req.body;

  if (!professorName) {
    return res.status(400).json({ success: false, error: 'professorName is required.' });
  }

  const subject = `Research Inquiry — ${paperTitle ? paperTitle.slice(0, 55) + '...' : researchTopic || 'Your Recent Research'}`;

  const intro = paperTitle
    ? `I recently read your paper "${paperTitle}" and was particularly impressed by your approach to [specific aspect]. This connects directly with my own research on ${researchTopic || '[your topic]'}.`
    : `Your work on ${researchTopic || '[research topic]'} aligns closely with my research interests, particularly [specific aspect].`;

  const email = `Subject: ${subject}

Dear ${professorName},

I hope this message finds you well. My name is ${studentName || '[Your Full Name]'}, a [Year] student in [Your Field] at ${university || '[Your University]'}, applying for ${degree || 'a graduate programme'} starting [Semester, Year].

${intro}

My background:
- Degree: [Current degree], [University] — GPA: [e.g. 3.9/4.0]
- Key research: [1–2 sentence description of your main project or publication]
- Publications: [List if any, or remove this line]

I'm applying to ${affiliation || '[university]'} because [specific reason — your lab's focus, an open research question, a collaboration opportunity]. I'd like to contribute to [specific project or direction in their group].

Could you let me know:
1. Are you taking new ${degree || 'graduate'} students for [Year]?
2. Are there funded RA/TA positions available?
3. Any advice on making my application stronger?

I've attached my CV and a one-page research statement.${authorId ? '\n\nSemantic Scholar: https://semanticscholar.org/author/' + authorId : ''}

Thanks for your time.

${studentName || '[Your Full Name]'}
[University] · [Email] · [LinkedIn] · [Google Scholar / GitHub]`;

  res.json({ success: true, subject, email });
});


// Proxies Hunter.io to keep the API key on the server
app.get('/api/email-lookup', strictLimiter, async (req, res) => {
  const key = process.env.HUNTER_API_KEY;
  if (!key) {
    return res.status(503).json({
      success: false,
      error: 'Hunter.io not configured. Add HUNTER_API_KEY to your .env file.',
    });
  }

  const { firstName, lastName, domain } = req.query;
  if (!firstName || !lastName || !domain) {
    return res.status(400).json({ success: false, error: 'firstName, lastName, and domain are all required.' });
  }

  try {
    const url = `https://api.hunter.io/v2/email-finder?domain=${encodeURIComponent(domain)}&first_name=${encodeURIComponent(firstName)}&last_name=${encodeURIComponent(lastName)}&api_key=${key}`;
    const response = await fetch(url, { timeout: 8000 });
    const data = await response.json();

    if (data.data?.email) {
      res.json({ success: true, email: data.data.email, score: data.data.score || 0, domain });
    } else {
      res.json({ success: false, message: `No email found for ${firstName} ${lastName} at ${domain}.` });
    }
  } catch (err) {
    console.error('Hunter.io proxy error:', err.message);
    res.status(502).json({ success: false, error: 'Hunter.io service unavailable.' });
  }
});


// Proxies Semantic Scholar to avoid CORS issues in the browser
app.get('/api/semantic-scholar/papers', async (req, res) => {
  const { q, field, limit = 15 } = req.query;
  if (!q) return res.status(400).json({ success: false, error: 'Query parameter q is required.' });

  try {
    const fieldParam = field ? `&fieldsOfStudy=${encodeURIComponent(field)}` : '';
    const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(q)}&fields=title,authors,year,citationCount${fieldParam}&limit=${Math.min(parseInt(limit, 10) || 15, 50)}`;
    const response = await fetch(url, { timeout: 10000 });

    if (!response.ok) throw new Error(`Semantic Scholar responded with ${response.status}`);
    res.json({ success: true, ...await response.json() });
  } catch (err) {
    console.error('Semantic Scholar proxy error:', err.message);
    res.status(502).json({ success: false, error: 'Semantic Scholar unavailable. The embedded database will be used instead.' });
  }
});

app.get('/api/semantic-scholar/author/:id', async (req, res) => {
  try {
    const url = `https://api.semanticscholar.org/graph/v1/author/${req.params.id}?fields=name,affiliations,hIndex,citationCount,paperCount,papers.title,papers.year,papers.citationCount`;
    const response = await fetch(url, { timeout: 8000 });
    if (!response.ok) throw new Error(`Status ${response.status}`);
    res.json({ success: true, data: await response.json() });
  } catch (err) {
    res.status(502).json({ success: false, error: 'Could not fetch author details.' });
  }
});


// Proxies the Anthropic API to keep the key on the server
app.post('/api/sop', strictLimiter, async (req, res) => {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return res.status(503).json({
      success: false,
      error: 'SOP generation not configured. Add ANTHROPIC_API_KEY to your .env file.',
    });
  }

  const { name, degree, field, university, homeUni, country, research, achievements, whyThis, goals } = req.body;
  if (!field || !university) {
    return res.status(400).json({ success: false, error: 'field and university are required.' });
  }

  const prompt = `Write a compelling, professional Statement of Purpose for this student. Be specific and avoid generic phrases. Use the details provided — do not leave placeholder brackets.

Name: ${name || 'The applicant'}
Applying for: ${degree || 'Masters'} in ${field} at ${university}
Home university + GPA: ${homeUni || 'Not specified'}
From: ${country || 'Not specified'}
Research interests: ${research || 'Not specified'}
Key achievements: ${achievements || 'Not specified'}
Why this university: ${whyThis || 'Not specified'}
Career goals: ${goals || 'Not specified'}

Write 650–800 words. Structure: strong opening hook, academic background with specifics, research experience with concrete outcomes, why this particular university and what you'll contribute, career vision. First person, active voice.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{ role: 'user', content: prompt }],
      }),
      timeout: 30000,
    });

    if (!response.ok) throw new Error(`Anthropic responded with ${response.status}`);

    const data = await response.json();
    const text = data.content?.[0]?.text;
    if (!text) throw new Error('No content in Anthropic response.');

    res.json({ success: true, sop: text, tokens: data.usage });
  } catch (err) {
    console.error('SOP generation error:', err.message);
    res.status(502).json({ success: false, error: err.message });
  }
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
  });
}

app.use((req, res) => {
  res.status(404).json({ success: false, error: `${req.method} ${req.path} not found.` });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, error: 'Something went wrong on our end.' });
});


app.listen(PORT, () => {
  console.log(`\nScholarVault API → http://localhost:${PORT}`);
  console.log(`Hunter.io : ${process.env.HUNTER_API_KEY    ? 'configured' : 'not set (add to .env)'}`);
  console.log(`Anthropic : ${process.env.ANTHROPIC_API_KEY ? 'configured' : 'not set (add to .env)'}\n`);
});

module.exports = app;
