import People from './People'
import {presenter} from './presenter'
const Presenters = ()=>{

    return(
        <div className='mh3'>
            <h2>Presenters</h2>
            {presenter.map((staff, id)=>{
                return <People key={id} {...staff}/>
            })

            }

        </div>
    )
}
export default Presenters;
