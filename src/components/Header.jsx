import React from 'react'
import './Header.css'
import { Link, useNavigate} from 'react-router-dom'
import facebook from '../assets/socialpic/icons8-facebook-24.png'
import twitter from '../assets/socialpic/icons8-twitter-30.png'
import instagram from '../assets/socialpic/icons8-instagram-24.png'
import linkedin from '../assets/socialpic/icons8-linkedin-24.png'
import Menu from './menu'


const Header = () => {

    const nave = useNavigate();
    return (
        <>  <div className='header ' >
            <div className='border-bottom'>
                <div className="container firsthead">
                    <div className="row aling-item-center">
                        <div className="col-sm-12 col-md-6">
                            <ul className="topbar-list">
                                <li>
                                    <Link to={"/"}>
                                        <i><img src={facebook} alt="" /></i>
                                        <i><img src={twitter} alt="" /></i>
                                        <i><img src={instagram} alt="" /></i>
                                        <i><img src={linkedin} alt="" /></i>
                                    </Link>
                                    <Link to={"/"} className='ms-3'>8654154297 <span className='ms-2'>|</span></Link>
                                    <Link to={"/"} className='ms-3'>contact@admin.com <span className='ms-2'>|</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="com-md-6 col-lg-6">
                            <ul className="topbar-list">
                                <li className='usd'>
                                    <Link to={"/loginpage"} className='ms-3'>Login <span className='ms-2'>|</span></Link>
                                    <Link to={"/signup"} className='ms-3'>Sign up <span className='ms-2'>|</span></Link>
                                    <Link to={"/"} className='ms-3'>English <span className='ms-2'>|</span></Link>
                                    <Link to={"/"} className='ms-3'>USD <span className='ms-2'>|</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div></div>
            <Menu/>
        </div></>
    )
}

export default Header