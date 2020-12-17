import logo from './logo.png';
import { useState } from 'react';
import {  Link } from "react-router-dom";


const Header = ()=>{
    const [showMenu, setShowMenu] = useState(false)
    
    let menu
    let time
    let image
    let name
    if(showMenu){
        menu = 
        <div className='downmobile'>
            <ul>
                <li><Link onClick={()=>setShowMenu(false)} className='white no-underline' to='/'>Home </Link></li>
                <li><Link onClick={()=>setShowMenu(false)} className='white no-underline' to='/news'>News </Link></li>
                <li><Link onClick={()=>setShowMenu(false)} className='white no-underline' to='/podcast'>Podcasts </Link></li>
                <li><Link onClick={()=>setShowMenu(false)} className='white no-underline' to='/presenters'>Presenters </Link></li>
                <li><Link onClick={()=>setShowMenu(false)} className='white no-underline' to='/contact'>Contact Us </Link></li>
            </ul>
        </div>
    }
  const date = new Date ()
  const hour = date.getHours()


  if(hour > 22 && hour <=24 ){
      image = 'https://picsum.photos/200'
      time = '10:00pm-Midnight'
      name = 'LIVE AND DANGEROUS'

  }else if(hour > 24 && hour <=3){
    image = 'https://picsum.photos/200'
    time = 'Midnight - 3:00am'
    name = 'Chat Station'
    

  }else if(hour > 3 && hour <=4){
    image = 'https://picsum.photos/200'
    time = '3:00am - 4:00am'
    name = 'Sunny Side Repeat'
   

  }else if(hour > 4 && hour <=5){
    image = 'https://picsum.photos/200'
    time = '4:00am - 5:00am'
    name = 'Hard Facts Repeat'
    

  }else if(hour > 5 && hour <=9){
    image = 'https://picsum.photos/200'
    time = '5:00am - 9:00am'
    name = 'Hard Facts Repeat'

  }else if(hour > 9 && hour <= 12){
    image = 'https://picsum.photos/200'
    time = '9:00am - Noon'
    name = 'Hard Facts Repeat'

  }else if(hour > 12 && hour <=15){
    image = 'https://picsum.photos/200'
    time = 'Noon - 3:00pm'
    name = 'Sunny Side'

  }else if(hour > 15 && hour <=16){
    image = 'https://picsum.photos/200'
    time = '3:00pm - 4:00pm'
    name = 'HARD FACTS'

  }else {
    image = 'https://picsum.photos/200'
    time = 'Midnight - 3:00am'
    name = 'Chat StationSSS'

  }

    

    return(
<div className='main-header'>

    <div className='up'>

        <div className='up-left'>

            <div className='up-left1'>
                <img src={logo} alt='logo' /> 
            </div>

            <div className='up-left2'>
                <i class="fas fa-map-marker-alt"></i>
                <p>Lagos</p>
                <i class="fa fa-chevron-down" ></i>
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
               <Link to = '/listen'> <i class="far fa-play-circle"></i></Link>
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
        <i class="fas fa-bars"></i>
            <h3>Menu</h3>            
        </div>

        

        <Link  className='black no-underline 'to = '/listen'>
            <div className='down2-1 listen'>
            <i class="fas fa-play"></i>
            <h3>Listen Live</h3>
        </div>
        </Link >
        { menu }
    </div>
    

</div>
    )

} 
export default Header;
