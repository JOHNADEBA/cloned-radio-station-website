const People = ({name, body, id})=>{
     
    return(
        <div className=' mob ma3 grow dib pointer tc'>
            <img className=' ' src= {`https://robohash.org/${id}`} alt=''/>
            <h2 style={{overflow:'hidden'}}>{name}</h2>
            <p><span className='red b f4'>Show: </span>{body}</p>
        </div>
    )
}
export default People;