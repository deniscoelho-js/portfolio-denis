import React from 'react'
import Linkedin from '../img/linkedin.png'
import Whatsapp from '../img/whatsap.svg'
import Github from '../img/github.png'

const Contact = () => {
    return (
        <div className="container-contact">
            <a href="https://api.whatsapp.com/send/?phone=85996403345&text&app_absent=0">
                <div className="contact-icon">
                    <img className="img-icon what" src={Whatsapp} alt="" />
                    <span>Whatsapp</span>
                </div>
            </a>
           <a href="https://github.com/deniscoelho-js">
             <div className="contact-icon">
                <img className="img-icon" src={Github} alt="" />
                <span>Github</span>
            </div>
           </a>
           <a href="https://www.linkedin.com/in/denis-coelho-934821117/">
             <div className="contact-icon">
                <img className="img-icon" src={Linkedin} alt="" />
                <span>Linkedin</span>
            </div>
           </a>
            
            
            
        </div>
    )
}

export default Contact
