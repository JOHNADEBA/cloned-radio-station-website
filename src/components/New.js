const New = ({name, body})=>{

    const stylez = {

    }
     
    return(
        <div className=' mob bg-light-blue tc br3 dib ma3 grow shadow-5 pointer '>
            <img className='w- br3' src='https://picsum.photos/100' alt=''/>
            <h2 style={{overflow:'hidden'}}>{name}</h2>
            <p className='ph2'>{body}</p>
        </div>
    )
}
export default New;