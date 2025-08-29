import React from 'react'
import Advertise from '../assets/Advertise'
import cont from '../assets/Data'
import { Link } from 'react-router-dom'

function Highlights() {
  return (
    <div>
      <div className="padder1"></div>
      <div className='grid'>
        {cont.map((article) => (
          <div className='smaldiv'>
            <Link key={article.id} to={`/article/${article.id}`} className='smdimg' style={{ backgroundImage: `url(${article.thumbnail_url})` }}></Link>
            <Link key={article.id} to={`/article/${article.id}`} className='smdtxt'>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </Link>
          </div>
        ))}
      </div>
      <Advertise />
      <div className='grid'>
        {cont.map((article) => (
          <div className='smaldiv'>
            <Link key={article.id} to={`/article/${article.id}`} className='smdimg' style={{ backgroundImage: `url(${article.thumbnail_url})` }}></Link>
            <Link key={article.id} to={`/article/${article.id}`} className='smdtxt'>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </Link>
          </div>
        ))}
      </div>
      <Advertise />
      <br />
      <div className="padder"></div>
    </div>
  )
}

export default Highlights
