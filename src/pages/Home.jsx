import React from 'react'
import cont from '../assets/Data'
import { Link } from 'react-router-dom'
import Advertise from '../assets/Advertise'

function Home() {
  return (
    <div className='bods'>
      {cont.slice(6, 7).map((article) => (
        <div key={article.id} className="article-card">
          <Link key={article.id} to={`/article/${article.id}`}>
            <div className='bgthumb'>
              <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='blur' ></div>
              <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='imgthumb'>
                <div>
                  <h2>{article.title}</h2>
                  <p>{article.published_at}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className='contents'>
            <p>{article.summary}</p>
            <Link key={article.id} to={`/article/${article.id}`} className='fred'>Read More</Link>
          </div>
        </div>
      ))}
      <Advertise />
      <div className="newsnow-container">
        {/* ABOUT SECTION */}
        <section className="about">
          <h2>ABOUT NEWSNOW</h2>
          <p>
            <strong>NEWSNOW</strong> is more than a news outlet — it’s a movement for clarity, speed, and fearless reporting.
            Founded in Kathmandu and built for a global audience, we bring together independent thinkers, investigative journalists,
            and digital storytellers to deliver uncompromising coverage of the world’s most pressing issues.
          </p>
          <p>
            Our mission is simple: inform, engage, and empower. We chase stories that matter — from political upheavals and climate
            shifts to cultural breakthroughs and grassroots movements. We don’t just follow the news cycle; we interrogate it.
          </p>
          <p>
            Every article is crafted with precision, backed by verified sources, and presented in a layout that respects your time
            and attention. We believe design is not decoration — it’s a tool for clarity.
          </p>
          <br />
          <ul>
            <li>🌍 <strong>Global reach, local roots:</strong> Born in Nepal, built for the world.</li>
            <li>🕵️‍♂️ <strong>Investigative depth:</strong> We dig deeper, ask harder questions, and follow the facts.</li>
            <li>🎨 <strong>Design-first storytelling:</strong> Bold visuals and clean layouts that elevate the message.</li>
            <li>📡 <strong>Real-time reporting:</strong> News as it happens, without sacrificing depth or nuance.</li>
          </ul>
        </section>

        {/* VALUES SECTION */}
        <section className="values">
          <h2>What We Stand For</h2>
          <ul>
            <li><strong>Accuracy:</strong> Every story is verified, sourced, and fact-checked by our editorial team.</li>
            <li><strong>Speed:</strong> We deliver breaking news with urgency and precision, keeping readers ahead of the curve.</li>
            <li><strong>Transparency:</strong> No hidden agendas, no corporate filters — just journalism with integrity.</li>
            <li><strong>Design-Driven:</strong> Our bold layout and clean visuals reflect our commitment to clarity and user experience.</li>
            <li><strong>Inclusivity:</strong> We amplify diverse voices and perspectives, ensuring representation across our coverage.</li>
            <li><strong>Accountability:</strong> We own our mistakes, publish corrections, and hold power to account — including ourselves.</li>
          </ul>
        </section>

        {/* REACH SECTION */}
        <section className="reach">
          <h2>Our Reach</h2>
          <p>
            <strong>NEWSNOW</strong> resonates with readers across Nepal and beyond. From bustling city centers to remote villages,
            our stories connect communities, spark conversations, and drive change.
          </p>
          <p>
            Internationally, our coverage is cited by analysts, educators, and activists who value clarity over clickbait.
            We’ve built trust through consistency, earned loyalty through transparency, and grown influence through meaningful journalism.
          </p>
          <p>
            Whether you're a student in Pokhara, a policymaker in Brussels, or a curious reader in Sydney — NEWSNOW is your window
            into the world, framed by truth and designed for impact.
          </p>
          <br />
          <ul>
            <li>📈 Trusted by thousands across Nepal and the diaspora</li>
            <li>🗺️ Coverage that spans local, regional, and global affairs</li>
            <li>💬 Stories that spark dialogue and civic engagement</li>
            <li>🧠 Cited in research, classrooms, and policy briefs</li>
          </ul>
        </section>
      </div>
      <Advertise />
    </div>
  )
}

export default Home
