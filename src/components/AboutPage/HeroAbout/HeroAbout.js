import React from 'react'
import './HeroAbout.css'

// import hero_bg from '../Images/hero.png'
// import mobile_img from '../Images/Profile1.png'
// import upwork_logo from '../Images/upwork.png'
// import fiver_logo from '../Images/fiverr.png'


import UPWORK_LOGO from './Images/upwork_logo.png'
import FIVER_LOGO from './Images/fiver_logo.png'
import LINKEDIN_LOGO from './Images/linkedin_logo.png'
import WHATSAPP_LOGO from './Images/whatsapp_logo.png'

function Hero_about({ title, hero_img }) {
    return (
        <section id='About_page'>

            <div className='Hero2_container'>
                <div className='hero2_containt'>
                    <div className='hero'>
                        <h1>{title}</h1>
                        <h3>Pierre-Andre Louis</h3>
                        <h2>Développeur Web Front-End</h2>
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
                                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/pierre-andr%C3%A9-louis-2b938224b/'><img alt='this is a media logo' className="fiverr_logo" src={LINKEDIN_LOGO} /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/webdeveloper_pr" > <img alt='this is a media logo' className="fiverr_logo" src={FIVER_LOGO} /></a>
                                <a target="_blank" rel="noreferrer" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img alt='this is a media logo' className="upwork_logo" src={UPWORK_LOGO} /></a>
                                <a target="_blank" rel="noreferrer" href='https://wa.me/50946731710' ><img alt='this is a media logo' className="upwork_logo" src={WHATSAPP_LOGO} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rotate_bg'>
                    <div className='image_box'>
                        <div className='image'>
                            <img src={hero_img} alt='This is the hero background' />
                            <div className='hero_filter'></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero_about