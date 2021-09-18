import React from 'react'
import BG from '../img/conheca-cursos-de-programacao-gratis-1132x600.jpg'
import Denis from '../img/Denis.jpeg'



const Header = () => {
    return (
        <div className="container-header">
            <img className="bg-img" src={BG} alt="imagem background" />
            <img className="img-person" src={Denis} alt="Denis" />
            <h2>Denis Coelho</h2>
            <p>Front-end Developer</p>
        </div>
    )
}

export default Header
