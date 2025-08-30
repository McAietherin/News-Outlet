import React from 'react'
import Advertise from '../assets/Advertise'
import { Link } from 'react-router-dom'
import cont from "../assets/Data"

function Finance() {
  return (
    <div>
      <div className="flegges">
        <div className="flec">
          {cont.filter(article => article.select === "Finance")
            .slice(0, 1).map((article) => (
              <div className="contens">
                <Link key={article.id} to={`/article/${article.id}`}><div className="imgur" style={{ backgroundImage: `url(${article.thumbnail_url})` }}>
                </div></Link>
                <h2 className='summs'>{article.title}</h2>
                <p className='sms'>--{article.author.name}</p>
                <p className='sms'>{article.published_at}</p>
                <p className='summs'>{article.summary}</p>
                <div className="spacer"></div>
                <Link key={article.id} to={`/article/${article.id}`} className={"fred" + "summs"}>Read More</Link>
              </div>
            ))}
        </div>
        <div className='grid2'>
          {cont.filter(article => article.select === "Finance")
            .slice(1, 4).map((article) => (
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
      <div className="flegges2">
        <div className='grid2'>
          {cont.filter(article => article.select === "Finance")
            .slice(4, 7).map((article) => (
            <div className='smaldiv'>
              <Link key={article.id} to={`/article/${article.id}`} className='smdimg' style={{ backgroundImage: `url(${article.thumbnail_url})` }}></Link>
              <Link key={article.id} to={`/article/${article.id}`} className='smdtxt'>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="flec">
          {cont.filter(article => article.select === "Finance")
            .slice(7, 8).map((article) => (
            <div className="contens">
              <Link key={article.id} to={`/article/${article.id}`}><div className="imgur" style={{ backgroundImage: `url(${article.thumbnail_url})` }}>
              </div></Link>
              <h2 className='summs'>{article.title}</h2>
              <p className='sms'>--{article.author.name}</p>
              <p className='sms'>{article.published_at}</p>
              <p className='summs'>{article.summary}</p>
              <div className="spacer"></div>
              <Link key={article.id} to={`/article/${article.id}`} className={"fred" + "summs"}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
      <Advertise />
      <div className="flegges">
        <div className="flec">
          {cont.filter(article => article.select === "Finance")
            .slice(8, 9).map((article) => (
              <div className="contens">
                <Link key={article.id} to={`/article/${article.id}`}><div className="imgur" style={{ backgroundImage: `url(${article.thumbnail_url})` }}>
                </div></Link>
                <h2 className='summs'>{article.title}</h2>
                <p className='sms'>--{article.author.name}</p>
                <p className='sms'>{article.published_at}</p>
                <p className='summs'>{article.summary}</p>
                <div className="spacer"></div>
                <Link key={article.id} to={`/article/${article.id}`} className={"fred" + "summs"}>Read More</Link>
              </div>
            ))}
        </div>
        <div className='grid2'>
          {cont.filter(article => article.select === "Finance")
            .slice(9, 12).map((article) => (
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
      <div className="flegges2">
        <div className='grid2'>
          {cont.filter(article => article.select === "Finance")
            .slice(12, 15).map((article) => (
            <div className='smaldiv'>
              <Link key={article.id} to={`/article/${article.id}`} className='smdimg' style={{ backgroundImage: `url(${article.thumbnail_url})` }}></Link>
              <Link key={article.id} to={`/article/${article.id}`} className='smdtxt'>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="flec">
          {cont.filter(article => article.select === "Finance")
            .slice(15, 16).map((article) => (
            <div className="contens">
              <Link key={article.id} to={`/article/${article.id}`}><div className="imgur" style={{ backgroundImage: `url(${article.thumbnail_url})` }}>
              </div></Link>
              <h2 className='summs'>{article.title}</h2>
              <p className='sms'>--{article.author.name}</p>
              <p className='sms'>{article.published_at}</p>
              <p className='summs'>{article.summary}</p>
              <div className="spacer"></div>
              <Link key={article.id} to={`/article/${article.id}`} className={"fred" + "summs"}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
      <Advertise />
      <div className="padder"></div>
    </div>
  )
}

export default Finance
