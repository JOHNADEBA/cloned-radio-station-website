import { useState } from 'react'
import New from './New'
import {stories} from './stories'
const Podcasts = ()=>{
    const [query, setQuery] = useState('')

    const filt = stories.filter(story =>{
        return story.name.toLowerCase().includes(query.toLowerCase())
    })
    return(
        <div>
            <div className='flex justify-around items-center'>
                <h2>Podcasts</h2>
                <input className='pa2 br3' type='text' placeholder='Search'
                onChange={(e)=>setQuery(e.target.value)}/>
            </div>
            <div className='news-details tc'>
               
                {filt.map((story, id) => {
                return <New key ={id} {...story} />
                })}
            </div>

        </div>

    )
}
export default Podcasts;