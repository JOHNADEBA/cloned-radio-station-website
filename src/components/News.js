import { useState } from 'react'
import New from './New'
import {stories} from './stories'

const News = ()=>{
    const [query, setQuery] = useState('')

    const filt = stories.filter(story =>{
        return story.name.toLowerCase().includes(query.toLowerCase())
    })
    
    return(
        <div className='mh5'>
            <div className='flex justify-between items-center'>
                <h2>News</h2>
                <input className='pa2 br3' type='text' placeholder='Search'
                onChange={(e)=>setQuery(e.target.value)}/>
            </div>
            <h4>Share</h4>
            <div className='social'>                   
                   {/* <a className="no-underline green" href='https://www.linkedin.com/'> <i className="shadow-5 grow fab fa-linkedin-in"></i> </a> */}
                   <a className="no-underline green" href='https://www.facebook.com/'> <i className="blue dim f2 fab fa-facebook"></i> </a>
                   <a className="no-underline green" href='https://www.messenger.com/'> <i className=" blue dim ph3 f2  fab fa-facebook-messenger"></i> </a>               
                   <a className="no-underline green" href='https://www.twitter.com/'> <i className="  f2 blue dim fab fa-twitter"></i> </a>
            </div>

            <h2>News</h2>
            <div className='ml3 news-details'>
               
                {filt.map((story, id) => {
                return <New key ={id} {...story} />
                })}
            </div>
        </div>
    )
}
export default News;