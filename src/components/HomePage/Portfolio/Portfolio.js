import React from 'react'
import "./Portfolio.css"
import QUIZ_APP from "./Images/quizeApp.png"
import ECOMMERCE from "./Images/ecommerce.png"
import MOVIE_APP from "./Images/movieApp.png"
import HOTEL from './Images/hotel.png'
import RESTAURANT from './Images/restaurant.png'
import TRANSPORT from './Images/transport.png'


import WEBSITE1 from './Images/website1.PNG'
import WEBSITE2 from './Images/website2.PNG'
import WEBSITE3 from './Images/website3.PNG'
import WEBSITE4 from './Images/website4.PNG'



// import truck_line from "./Images/truck_line.png"
// import whatsapp from "./Images/whatsapp.png"
// import youtube from "./Images/youtube.png"

function Portfolio({ classs }) {
    return (
        <section id='Portfolio'>

            <div className={`portfolio_container ${classs}`}>
                <div className='portfolio_containt'>
                    <h2>Mon Portfolio</h2>
                    <div>
                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                                <div className='img_box'>
                                    <img src={HOTEL} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Service Hôtel</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'> <button>Visite</button></a>
                        </div>
                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Transport/'>
                                <div className='img_box'>
                                    <img src={TRANSPORT} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Service de Transport</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Transport/'> <button>Visite</button></a>
                        </div>




                        {/* ------------------------------------------------------------------------ */}




                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio1/'>
                                <div className='img_box'>
                                    <img src={WEBSITE1} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio1/'> <button>Visite</button></a>
                        </div>


                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio3/'>
                                <div className='img_box'>
                                    <img src={WEBSITE3} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio3/'> <button>Visite</button></a>
                        </div>

                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio4/'>
                                <div className='img_box'>
                                    <img src={WEBSITE4} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio4/'> <button>Visite</button></a>
                        </div>



                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio2/'>
                                <div className='img_box'>
                                    <img src={WEBSITE2} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio2/'> <button>Visite</button></a>
                        </div>


                        <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/quiz-app'>
                                <div className='img_box'>
                                    <img src={QUIZ_APP} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Application de Quiz</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/quiz-app'> <button>Visite</button></a>
                        </div>

                       

                        <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/movie-trailer'>
                                <div className='img_box'>
                                    <img src={MOVIE_APP} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Movie Trailer</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/movie-trailer'> <button>Visite</button></a>
                        </div>

                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Restaurant/'>
                                <div className='img_box'>
                                    <img src={RESTAURANT} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Service de Restaurant</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Restaurant/'> <button>Visite</button></a>
                        </div>
      
                  



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio