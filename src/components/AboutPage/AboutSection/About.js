import React from 'react'
import "./AboutPage.css"
// import about_img from "./Images/profil_picture_2.png"
import ABOUT_IMG from "./Images/Profil_Img.png"
// import fiverr_logo from "./Images/fiverr.png"
// import upwork_logo from "./Images/upwork.png"
import Cv from "./Documents/CV2.pdf"

import UPWORK_LOGO from './Images/upwork_logo.png'
import FIVER_LOGO from './Images/fiver_logo.png'
import LINKEDIN_LOGO from './Images/linkedin_logo.png'
import WHATSAPP_LOGO from './Images/whatsapp_logo.png'



function About() {
    return (
        <div id="About" className='About_page_container'>
            <div className='image_container'>
                <div className='image_border'>
                    <img className='about_img_profil' src={ABOUT_IMG} alt='This is my profil'/>
                </div>
            </div>
            <div className='about_info_container'>
                <h2>Pourquoi m'embaucher  pour votre prochain projet?</h2>
                <p className='web_dev'>Développeur web front-end</p>
                <p className='desc'>
                    Salut ! Je suis un développeur web front-end, et je peux apprendre et
                    collaborer rapidement dans des environnements en constante évolution.
                    J'ai passé des centaines d'heures à apprendre des technologies comme
                    HTML, CSS, JavaScript, React js, Bootstrap, comment utiliser des APIs, et bien plus encore.
                    <hr />

                    Je me mets au défi tous les jours tout en restant concentré sur l'obtention
                    de résultats de haute qualité dans des délais stricts. Je suis impatient de décrocher
                    un poste stimulant dans une entreprise prestigieuse qui développera mes compétences et
                    enrichira mes compétences de développeur. 
                    <hr />

                    Je suis excité à l'idée de mettre mes services à disposition d'une entreprise ou d'une agence pour
                    développer mes compétences tout en facilitant leurs améliorations.</p>

                <div className='about_button_section'>
                    <a href={Cv} download><button className='download_cv'>Download CV</button></a>
                    <div className='social_media_link'>
                        <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/pierre-andr%C3%A9-louis-3a64a6279/'><img alt='this is a media icon' className="fiverr_logo" src={LINKEDIN_LOGO} /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img alt='this is a media icon' className="fiverr_logo" src={FIVER_LOGO} /></a>
                        <a rel="noreferrer" target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img alt='this is a media icon' className="upwork_logo" src={UPWORK_LOGO} /></a>
                        <a rel="noreferrer" target="_blank" href='https://wa.me/50946731710' ><img alt='this is a media icon' className="fiverr_logo" src={WHATSAPP_LOGO} /></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About