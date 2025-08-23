import React from 'react'
let cont = [
  {
    "id": "bw-20250823-ai-vs-bitcoin",
    "title": "AI vs Bitcoin: Who’s Driving the Next Wave of Innovation?",
    "summary": "Exploring the convergence of artificial intelligence and decentralized finance.",
    "content": "<p>Artificial Intelligence and Bitcoin are often seen as separate revolutions...</p><p>But what happens when decentralized finance meets autonomous decision-making?</p><p>...</p>",
    "author": { "name": "Zara Thapa", "bio": "Tech journalist covering crypto, AI, and digital disruption.", "profile_url": "/authors/zara-thapa" },
    "category": "Tech & Crypto",
    "tags": ["AI", "Bitcoin", "Innovation", "Finance"],
    "published_at": "2025-08-23T09:00:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/ai-vs-bitcoin.jpg"
  },
  {
    "id": "bw-20250822-presale-hype",
    "title": "The Rise of Presale Tokens: Hype or Real Utility?",
    "summary": "Presale tokens are flooding the market—here’s how to separate signal from noise.",
    "content": "<p>Presale tokens promise early access and massive upside...</p><p>But how many actually deliver?</p><p>...</p>",
    "author": { "name": "Ravi Joshi", "bio": "Blockchain analyst and investor.", "profile_url": "/authors/ravi-joshi" },
    "category": "Cryptocurrency",
    "tags": ["Presale", "Tokens", "Risk", "Utility"],
    "published_at": "2025-08-22T14:30:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/presale-hype.jpg"
  },
  {
    "id": "bw-20250821-nepal-tech-boom",
    "title": "Nepal’s Tech Scene: Quietly Booming",
    "summary": "Startups, coders, and crypto hubs are reshaping Kathmandu’s digital future.",
    "content": "<p>From Thamel to Patan, coworking spaces are buzzing...</p><p>Local talent is going global.</p><p>...</p>",
    "author": { "name": "Anisha Karki", "bio": "Regional correspondent for South Asia.", "profile_url": "/authors/anisha-karki" },
    "category": "Technology",
    "tags": ["Nepal", "Startups", "Innovation"],
    "published_at": "2025-08-21T10:00:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/nepal-tech-boom.jpg"
  },
  {
    "id": "bw-20250820-figma-revolution",
    "title": "How Figma Changed the Way Designers Think",
    "summary": "From collaboration to component logic, Figma is more than just a tool.",
    "content": "<p>Designers used to work in silos...</p><p>Now, iteration is real-time and global.</p><p>...</p>",
    "author": { "name": "Liam Chen", "bio": "UI/UX strategist and design educator.", "profile_url": "/authors/liam-chen" },
    "category": "Design",
    "tags": ["Figma", "Design Systems", "Collaboration"],
    "published_at": "2025-08-20T16:45:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/figma-revolution.jpg"
  },
  {
    "id": "bw-20250819-color-branding",
    "title": "The Psychology of Color in News Branding",
    "summary": "Why red signals urgency, and blue builds trust—decoded for digital media.",
    "content": "<p>Color isn’t just aesthetic—it’s emotional strategy...</p><p>Here’s how top outlets use it.</p><p>...</p>",
    "author": { "name": "Meera Patel", "bio": "Branding consultant and visual theorist.", "profile_url": "/authors/meera-patel" },
    "category": "Design & Media",
    "tags": ["Color Theory", "Branding", "News"],
    "published_at": "2025-08-19T12:00:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/color-branding.jpg"
  },
  {
    "id": "bw-20250818-ethereum-upgrade",
    "title": "Ethereum’s Next Upgrade: What It Means for Developers",
    "summary": "The roadmap to scalability and what devs should prepare for.",
    "content": "<p>Sharding, rollups, and gas optimizations...</p><p>Here’s what’s coming.</p><p>...</p>",
    "author": { "name": "Devon Singh", "bio": "Smart contract engineer and educator.", "profile_url": "/authors/devon-singh" },
    "category": "Blockchain Development",
    "tags": ["Ethereum", "Upgrade", "Scalability"],
    "published_at": "2025-08-18T09:30:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/ethereum-upgrade.jpg"
  },
  {
    "id": "bw-20250817-ai-journalism-ethics",
    "title": "Journalism in the Age of AI: Ethics and Automation",
    "summary": "Can machines write the truth? A look at editorial integrity in the algorithm era.",
    "content": "<p>AI-generated news is fast, scalable...</p><p>But where’s the accountability?</p><p>...</p>",
    "author": { "name": "Nina Roy", "bio": "Media ethicist and editor-at-large.", "profile_url": "/authors/nina-roy" },
    "category": "Media & Ethics",
    "tags": ["AI", "Journalism", "Ethics"],
    "published_at": "2025-08-17T15:00:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/ai-journalism-ethics.jpg"
  },
  {
    "id": "bw-20250816-css-layout-battle",
    "title": "CSS Grid vs Flexbox: The Ultimate Layout Debate",
    "summary": "Which layout system reigns supreme for modern web design?",
    "content": "<p>Flexbox is intuitive, Grid is powerful...</p><p>Here’s when to use each.</p><p>...</p>",
    "author": { "name": "Sunil Gautam", "bio": "Frontend developer and layout purist.", "profile_url": "/authors/sunil-gautam" },
    "category": "Web Development",
    "tags": ["CSS", "Grid", "Flexbox", "Design"],
    "published_at": "2025-08-16T11:00:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/css-layout-battle.jpg"
  },
  {
    "id": "bw-20250815-crypto-scams",
    "title": "Crypto Scams 101: How to Spot Red Flags Early",
    "summary": "From fake airdrops to rug pulls—here’s your survival guide.",
    "content": "<p>Scams evolve fast in crypto...</p><p>But patterns remain predictable.</p><p>...</p>",
    "author": { "name": "Tenzing Lama", "bio": "Security researcher and crypto watchdog.", "profile_url": "/authors/tenzing-lama" },
    "category": "Crypto Security",
    "tags": ["Scams", "Security", "Crypto"],
    "published_at": "2025-08-15T08:00:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/crypto-scams.jpg"
  },
  {
    "id": "bw-20250814-building-news-api",
    "title": "Building a News API: Lessons from BoldWire",
    "summary": "Behind the scenes of a scalable, editorially-driven API architecture.",
    "content": "<p>From endpoints to caching strategies...</p><p>Here’s how BoldWire built its backbone.</p><p>...</p>",
    "author": { "name": "Aarav Mishra", "bio": "Backend engineer and API architect.", "profile_url": "/authors/aarav-mishra" },
    "category": "Engineering",
    "tags": ["API", "News", "Architecture"],
    "published_at": "2025-08-14T13:00:00Z",
    "thumbnail_url": "https://cdn.boldwire.news/images/building-news-api.jpg"
  }
]

function Home() {
  return (
    <div>
      {cont.map((article) => (
      <div key={article.id} className="article-card">
        <img src={article.thumbnail_url} alt={article.title} className="thumbnail" />
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <a href={`/articles/${article.id}`}>Read More</a>
      </div>
    ))}

    </div>
  )
}

export default Home
