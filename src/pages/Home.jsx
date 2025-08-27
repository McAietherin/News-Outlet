import React from 'react'
import cont from '../assets/Data'

function Home() {
  return (
    <div className='bods'>
      {cont.slice(6, 7).map((article) => (
        <div key={article.id} className="article-card">
          <div className='bgthumb'>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='blur' ></div>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='imgthumb'>
              <div>
                <h2>{article.title}</h2>
                <p>{article.published_at}</p>
              </div>
            </div>
          </div>
          <div className='contents'>
            <p>{article.summary}</p>
            <a href={`/articles/${article.id}`} className='fred'>Read More</a>
          </div>
          <div className='lien'></div>
        </div>
      ))}

    </div>
  )
}

export default Home
