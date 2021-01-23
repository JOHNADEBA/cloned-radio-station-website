const Footer = ()=>{
    return(
        <footer>
            <div className='scale '>
                <div className='socials'>                   
                   <a className=" v no-underline green" href='https://www.facebook.com/'> <i className="shadow-5 grow fab fa-facebook"></i> </a>
                   <a className=" v no-underline green" href='https://www.twitter.com/'> <i className="shadow-5 grow fab fa-twitter"></i> </a>
                   <a className="v no-underline green" href='https://www.instagram.com/'> <i className="shadow-5 grow fab fa-instagram"></i> </a>               
                </div>
            </div>

            <div className='divid'>
            <div className='mid'>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                    <li>Podcasts</li>
                    <li>Presenters</li>
                </ul>
            </div>

            <div className='mid'>
                <ul>
                    <li>Morning Crossfire</li>
                    <li>Daily Digest with Dev Jay</li>
                    <li>COVID-19 Heroes</li>
                </ul>
            </div>

            <div className='mid'>
                <ul>
                    <li>Hard Facts</li>
                    <li>The Health Station With Carla</li>
                    <li>Power Solutions</li>
                </ul>
            </div>
            </div>

            <div className='note'>
                <p>PLEASE NOTE THIS IS A CLONE, THIS PROJECT IS JUST FOR STUDY/PRACTISE PURPOSE. </p>
            </div>

            <div className='foot'>
                <p>&copy; 2020 clone on Nigeria Info FM by Dev Jay</p>
            </div>
        </footer>
    )

}
export default Footer;