import logo from './logo.png'
import collins from './collins.png';
import { useState } from 'react';


   
    const News = ({})=>{
    const [logic, setLogic] = useState({word: 'Phone', no:'746464646'})
    
    setTimeout(() => {
        setLogic({
            word :'SMS',
            no : '364976'
        })
                  
    }, 5000);
    return(
        <div className='listen'>
            <div className='listen-left'>
                <img src={logo} alt='logo' />
                <div className='listen-left2'>
                    <div className='stop'>
                        <i class="fas fa-stop"></i>
                    </div>

                    <div className='volume'>
                    <i class="fas fa-volume-up"></i>
                    <input className='w-75' type="range" min="1" max="100" value="50"/>
                    </div>
                    
                </div>
            </div>

            <div className='listen-right'>
                <h3 className='listen-right-h3'>On Air</h3>
                <div className='header'>
                    <img src='https://picsum.photos/200' alt='collins'/>
                   <div className='header2'>
                       <h3 className='h3'>GAME ON</h3>
                        <p>19:00-22:00</p>
                    </div> 
                </div>
                <p><span className='b green'>{logic.word}</span>: {logic.no}</p>
            </div>
        </div>
    )
}
export default News;