import logo from './logo.png';
import { useState } from 'react';
import {  Link } from "react-router-dom";


const Header = ({name, time, image})=>{

    const [showMenu, setShowMenu] = useState(false)
    

    const menuClose = ()=>{
        setShowMenu(false)
    }

    
    let menu

    if(showMenu){
        menu = 
        <div className='downmobile'>
            <ul>
                <li><Link onClick={menuClose} className='white no-underline' to='/'>Home </Link></li>
                <li><Link onClick={menuClose} className='white no-underline' to='/news'>News </Link></li>
                <li><Link onClick={menuClose} className='white no-underline' to='/podcast'>Podcasts </Link></li>
                <li><Link onClick={menuClose} className='white no-underline' to='/presenters'>Presenters </Link></li>
                <li><Link onClick={menuClose} className='white no-underline' to='/contact'>Contact Us </Link></li>
            </ul>
        </div>
    }
    

    return(
  <div className='main-header'>

    <div className='up'>

        <div className='up-left'>

            <div className='up-left1'>
                <img src={logo} alt='logo' /> 
            </div>

            <div className='up-left2'>
                <i className="fas fa-map-marker-alt"></i>
                <p>Lagos</p>
                <i className="fa fa-chevron-down" ></i>
                <ul className='location'>
                    <li><Link className='white no-underline' to='/'>Abuja </Link></li>
                    <li><Link className='white no-underline' to='/'>Port-Harcourt </Link></li>
                 </ul>
            </div>
            
        </div>
        
        <div className='up-right'>
            <div className='up-right1'>
                <h3>ON AIR NOW</h3>
                <h4>{name}</h4>
                <p>{time}</p>
            </div>

            <div className='up-right2'>
                <img src={image} alt='' />
               <Link to = '/listen'> <i className="far fa-play-circle"></i></Link>
            </div>
            
        </div>

    </div>

    <div className='down'>
        <ul>
            <li><Link className='black no-underline' to='/'>Home </Link></li>
            <li><Link className='black no-underline' to='/news'>News </Link></li>
            <li><Link className='black no-underline' to='/podcast'>Podcasts</Link></li>
            <li><Link className='black no-underline' to='/presenters'>Presenters</Link></li>
            <li><Link className='black no-underline' to='/contact'>Contact Us</Link></li>
        </ul>
    </div>

    <div className='down2'>

        <div className='down2-1'
         onClick = {()=> setShowMenu(!showMenu) }>
        <i className="fas fa-bars"></i>
            <h3>Menu</h3>            
        </div>

        

        <Link  className='black no-underline 'to = '/listen'>
            <div className='down2-1 listen'>
            <i className="fas fa-play"></i>
            <h3>Listen Live</h3>
        </div>
        </Link >
        { menu }
    </div>
    

</div>
    )

} 
export default Header;
