import React from 'react'
import './Blog.css'
import { Article } from '../../components'
import { blog01, cards23, cards22, blog04, cards21, prog1, logoVBC2 } from './importsBlog'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imgUrl={cards23} date='dic 24, 2022' title='V.B.C. the future of professionals web contacts?' />
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imgUrl={prog1} date='aug 02, 2021' title='CraZy BloG!!' />
                    <Article imgUrl={cards21} date='sep 26, 2022' title='#Professional #Design #Art...' />
                    <Article imgUrl={cards22} date='sep 26, 2022' title='Spotify Collaborations!' />
                    <Article imgUrl={blog01} date='sep 26, 2022' title='#Security #Data #Privacy' />
                </div>
            </div>
        </div>
    )
}

export default Blog