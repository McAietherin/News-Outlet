import React from 'react'
import Advertise from '../assets/Advertise'
import { Link } from 'react-router-dom'
import cont from "../assets/Data"

function International() {
  return (
    <div>
      <div className="padder"></div>
      <div className="flec">
        {cont.slice(0, 1).map((article) => (
          <div className="imgur" style={{ backgroundImage: `url(${article.thumbnail_url})` }}></div>
        ))}
        <div className='grid2'>
          {cont.slice(0, 8).map((article) => (
            <div className='smaldiv'>
              <Link key={article.id} to={`/article/${article.id}`} className='smdimg' style={{ backgroundImage: `url(${article.thumbnail_url})` }}></Link>
              <Link key={article.id} to={`/article/${article.id}`} className='smdtxt'>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Advertise />
      <div className="padder"></div>
    </div>
  )
}

export default International
