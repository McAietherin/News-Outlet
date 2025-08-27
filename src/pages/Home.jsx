import React from 'react'
import cont from '../assets/Data'
import { Link } from 'react-router-dom'

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
          <div className='lien'></div>
        </div>
      ))}

    </div>
  )
}

export default Home
