import React from 'react'
import './Portfolio4.css'
import { Link } from 'react-router-dom'

import WEBSITE1 from "./images/website1.PNG"
import WEBSITE2 from "./images/website2.PNG"
import WEBSITE3 from "./images/website3.PNG"
import WEBSITE4 from './images/website4.PNG'
import BG_PORTFOLIO1 from "./images/hotel1.png"
// import BG_PORTFOLIO2 from "./images/transport.png"
// import BG_PORTFOLIO3 from './images/quizeApp.png'




// import hotel from './images/hotel2.png'

function Portfolio4() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };

    return (
        <section id='Portfolio_4'>
            <div className='Container'>
                <div className='title_section'>
                    <h4>Mon travail</h4>
                    <h2>Dernière réalisation de projet</h2>
                </div>
                <div className='categorie'>
                    {/* <button>All</button>
                    <button>Website</button>
                    <button>WebApp</button>
                    <button>Design</button> */}
                </div>
                <main>
                    {/* <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                            <div className='img_box'>
                                <img src={BG_PORTFOLIO1} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                            <div className='description'>
                                <h4>Hotel service</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div> */}








                    <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio2/'>
                            <div className='img_box'>
                                <img src={WEBSITE2} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio2/'>
                            <div className='description'>
                                <h4>Site Web Portfolio</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>


                    <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio3/'>
                            <div className='img_box'>
                                <img src={WEBSITE3} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio3/'>
                            <div className='description'>
                                <h4>Site Web Portfolio</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>




                    <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio4/'>
                            <div className='img_box'>
                                <img src={WEBSITE4} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio4/'>
                            <div className='description'>
                                <h4>Site Web Portfolio</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>



                    <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio1/'>
                            <div className='img_box'>
                                <img src={WEBSITE1} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/portfolio1/'>
                            <div className='description'>
                                <h4>Site Web Portfolio</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>


                    <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                            <div className='img_box'>
                                <img src={BG_PORTFOLIO1} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                            <div className='description'>
                                <h4>Hotel service</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div> 





{/* 
                    <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/Transport/'>
                            <div className='img_box'>
                                <img src={BG_PORTFOLIO2} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/Transport/'>
                            <div className='description'>
                                <h4>Transport service</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div> */}




{/* 
                    <div className='portfolio1'>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/quiz-app/'>
                            <div className='img_box'>
                                <img src={BG_PORTFOLIO3} alt='this is one of my projects' />
                            </div>
                        </a>
                        <a rel="noreferrer" target='blank' href='https://louispierre-andre.github.io/quiz-app/'>
                            <div className='description'>
                                <h4>Quiz Application</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div> */}



                </main>
                <div className='btn_section'>
                    {/* <button>Look More</button> */}
                    <Link to="/Projects" onClick={() => { handleClick() }}>
                        <button>Tous les Projects</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio4