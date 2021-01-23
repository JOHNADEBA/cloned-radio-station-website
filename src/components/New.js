import { useState } from "react";

const New = ({name, body})=>{
 const [text, setText] = useState(false)
        
    return(
        <div className=' mob  br3 dib mh3 mv4  pointer '>
           <div className='flex flex-column'>
               <img className=' imge' src='https://picsum.photos/100' alt=''/>

                <div className=' bg-light-blue shadow-5 '>
                        <h2 >{name.substring(0,20)}</h2>
                        <p className=''>{text? body : `${body.substring(0, 20)}...`}
                        <button className='pointer btn ' onClick={()=>setText(!text)}>{text? 'Show less' : 'Read more'}</button>
                        </p>
                </div>
               
            </div> 
           
        </div>
    )
}
export default New;