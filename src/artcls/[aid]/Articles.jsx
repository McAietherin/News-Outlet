import React from 'react'
import cont from '../../assets/Data';
import { useParams } from 'react-router-dom'

function Articles() {
    const { aid } = useParams()
    const article = cont.find(item => item.id === aid);

    return (
        <div className='margined'>
            <h1>{article.title}</h1>
            <p><strong>{article.published_at}</strong> | {article.category}</p>
            <p className='mp'><strong>--</strong> {article.author.name}</p>
            <div className='deets' style={{ backgroundImage: `url(${article.thumbnail_url})` }}></div>
            <div dangerouslySetInnerHTML={{ __html: article.content }} className='deetcont' />
            <hr />
            <p>{article.author.bio}</p>

        </div>
    )
}

export default Articles
