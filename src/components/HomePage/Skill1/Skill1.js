import React from 'react'
import './Skill1.css'



import HTML_ICON from './images/Logo/html_logo.png'
import CSS_ICON from './images/Logo/CSS3_logo.png'
import JAVASCRIPT_LOGO from './images/Logo/JavaScript_logo.png'
import REACT_LOGO from './images/Logo/ReactJS_logo.png'
import CPLUS_ICON from './images/Logo/c_plus.png'
import CISCO_ICON from './images/Logo/cisco2.png'
import ILLUSTRATOR_ICON from './images/Logo/Illustrator_Logo.png'
import JAVA_LOGO from './images/Logo/java.png'
import MYSQL_LOGO from './images/Logo/MySQL_Logo.png'
import ORACLE_ICON from './images/Logo/oracle.png'
import PHOTOSHOP_LOGO from './images/Logo/Photoshop_Logo.png'
import BOOTSTRAP_LOGO from './images/Logo/Bootstrap_logo.png'
import PHP_LOGO from './images/Logo/php_logo.jpg'






function Skill1() {
    return (
        <section id='Skill_1'>
            <div className='Container'>
                <div className='title_section'>
                    <h4>Mes Competences</h4>
                    <h2>Mes Principaux Outils</h2>
                </div>
                <div className='skills'>
                    <div className='skill1 html'>
                        <div className='icon_box'>
                            <img src={HTML_ICON} alt='This is a icon of a slill' />
                        </div>
                        <p>HTML</p>
                    </div>

                    <div className='skill1 css'>
                        <div className='icon_box'>
                            <img src={CSS_ICON} alt='This is a icon of a slill' />
                        </div>
                        <p>CSS</p>
                    </div>

                    <div className='skill1 javascript'>
                        <div className='icon_box'>
                            <img src={JAVASCRIPT_LOGO} alt='This is a icon of a slill' />
                        </div>
                        <p>JavaScript</p>
                    </div>

                    <div className='skill1 react'>
                        <div className='icon_box'>
                            <img src={REACT_LOGO} alt='This is a icon of a slill' />
                        </div>
                        <p>React JS</p>
                    </div>

                    <div className='skill1 bootstrap'>
                        <div className='icon_box'>
                            <img src={BOOTSTRAP_LOGO} alt='This is a icon of a slill' />
                        </div>
                        <p>Bootstrap</p>
                    </div>

                    <div className='skill1 cplus'>
                        <div className='icon_box'>
                            <img src={CPLUS_ICON} alt='This is a icon of a slill' />
                        </div>
                        <p>C++</p>
                    </div>

                    <div className='skill1 java'>
                        <div className='icon_box'>
                            <img src={JAVA_LOGO} alt='This is a icon of a slill' />
                        </div>
                        <p>JAVA</p>
                    </div>

                    <div className='skill1 php'>
                        <div className='icon_box'>
                            <img src={PHP_LOGO} alt='This is a icon of a slill' />
                        </div>
                        <p>PHP</p>
                    </div>

                    <div className='skill1 illustrator'>
                        <div className='icon_box'>
                            <img src={ILLUSTRATOR_ICON} alt='This is a icon of a slill' />
                        </div>
                        <p>Illustrator</p>
                    </div>

                    <div className='skill1 photoshop'>
                        <div className='icon_box'>
                            <img src={PHOTOSHOP_LOGO} alt='This is a icon of a slill' />
                        </div>
                        <p>Photoshop</p>
                    </div>

                    <div className='skill1 mysql'>
                        <div className='icon_box'>
                            <img src={MYSQL_LOGO} alt='This is a icon of a slill' />
                        </div>
                        <p>mysql</p>
                    </div>

                    <div className='skill1 oracle'>
                        <div className='icon_box'>
                            <img src={ORACLE_ICON} alt='This is a icon of a slill' />
                        </div>
                        <p>oracle</p>
                    </div>

                   

         

                </div>

            </div>
        </section>
    )
}

export default Skill1


