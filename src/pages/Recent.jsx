import React from 'react'
import cont from '../assets/Data'
import { Link } from 'react-router-dom'
import Advertise from '../assets/Advertise'

function Recent() {
  return (
    <div className='bods'>
      {cont.slice(0, 3).map((article) => (
        <div key={article.id} className="article-card">
          <Link key={article.id} to={`/article/${article.id}`}><div className='bgthumb'>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='blur' ></div>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='imgthumb'>
              <div>
                <h2>{article.title}</h2>
                <p>{article.published_at}</p>
              </div>
            </div>
          </div></Link>
          <div className='contents'>
            <p>{article.summary}</p>
            <Link key={article.id} to={`/article/${article.id}`} className={"fred" + "summs"}>Read More</Link>
          </div>
          <div className='lien'></div>
        </div>
      ))}
      <Advertise />
      {cont.slice(3, 6).map((article) => (
        <div key={article.id} className="article-card">
          <Link key={article.id} to={`/article/${article.id}`}><div className='bgthumb'>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='blur' ></div>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='imgthumb'>
              <div>
                <h2>{article.title}</h2>
                <p>{article.published_at}</p>
              </div>
            </div>
          </div></Link>
          <div className='contents'>
            <p>{article.summary}</p>
            <Link key={article.id} to={`/article/${article.id}`} className={"fred" + "summs"}>Read More</Link>
          </div>
          <div className='lien'></div>
        </div>
      ))}
      <Advertise />
      {cont.slice(6, 10).map((article) => (
        <div key={article.id} className="article-card">
          <Link key={article.id} to={`/article/${article.id}`}><div className='bgthumb'>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='blur' ></div>
            <div style={{ backgroundImage: `url(${article.thumbnail_url})` }} className='imgthumb'>
              <div>
                <h2>{article.title}</h2>
                <p>{article.published_at}</p>
              </div>
            </div>
          </div></Link>
          <div className='contents'>
            <p>{article.summary}</p>
            <Link key={article.id} to={`/article/${article.id}`} className={"fred" + "summs"}>Read More</Link>
          </div>
          <div className='lien'></div>
        </div>
      ))}
      <Advertise />
    </div>
  )
}

export default Recent
