import React from 'react'
import './Hero2.css'
import HERO_BG from './Images/hero.png'
// import mobile_img from './Images/profil_picture_2.png'
import MOBILE_IMG from './Images/Profil_Img.png'


import UPWORK_LOGO from './Images/upwork_logo.png'
import FIVER_LOGO from './Images/fiver_logo.png'
import LINKEDIN_LOGO from './Images/linkedin_logo.png'
import WHATSAPP_LOGO from './Images/whatsapp_logo.png'


import Cv from './Documents/CV2.pdf'
import { Link } from 'react-router-dom'

function Hero2() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };
    return (
        <section id='Hero_home'>
            <div className='Hero2_container'>
                <div className='hero2_containt'>
                    <div className='hero'>
                        <div className='mobile_hero_img'>
                            <div>
                                <img src={MOBILE_IMG} alt="this is a hero image" />
                            </div>
                        </div>


                        <h1>Pierre-Andre Louis</h1>
                        <h3>Développeur Web Front-End</h3>
                        <p>Je crée des sites web personnalisés qui permettent à mes clients de présenter leur profil, leur portfolio ou leurs services de manière professionnelle.</p>
                        <div className='btn_section'>
                            <Link to="/Contact" onClick={() => { handleClick() }}>
                                <button>Contacte-moi</button>
                            </Link>
                            <a href={Cv} download>
                                <button className='down_cv'>Télécharger CV</button>
                            </a>
                        </div>
                    </div>
                    <div className='hero_links'>

                        <div>
                            <div>
                                <i class="bi bi-envelope"></i>
                                <div>
                                    <h3>Email</h3>
                                    <p>webdeveloper3030@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <i class="bi bi-telephone"></i>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+509 46731710</p>
                                </div>
                            </div>
                            <div>
                                <a target="_blank" href='https://www.linkedin.com/in/pierre-andr%C3%A9-louis-3a64a6279/'><img className="fiverr_logo" src={LINKEDIN_LOGO} /></a>
                                <a target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img className="fiverr_logo" src={FIVER_LOGO} /></a>
                                <a target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img className="upwork_logo" src={UPWORK_LOGO} /></a>
                                <a target="_blank" href='https://wa.me/50946731710' ><img className="fiverr_logo" src={WHATSAPP_LOGO} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rotate_bg'>
                    <div className='image_box'>
                        <div className='image'>
                            <img src={HERO_BG} alt='This is the hero background' />
                            <div className='hero_filter'></div>
                        </div>
                    </div>
                </div>

        
            </div>
        </section>
    )
}

export default Hero2