import React from 'react';

const Footer = () => {

    return(
        <footer className='flex-row p-1 border-top'>
            <nav>
                <ul className='nav justify-content-center'>
                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/luisarnaut' target='_blank' rel='noreferrer' className='nav-link'><i className='bi-linkedin'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://github.com/acevezl' target='_blank' rel='noreferrer' className='nav-link'><i className='bi-github'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='mailto:lou.arnaut@gmail.com' target='_blank' rel='noreferrer' className='nav-link'><i className="bi-envelope"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://wa.me/9139573706' target='_blank' rel='noreferrer' className='nav-link'><i className="bi-whatsapp"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://www.instagram.com/monsieur.arnaut/' target='_blank' rel='noreferrer' className='nav-link'><i className="bi-instagram"></i></a>
                    </li>
                </ul>
            </nav>
            <div className='flex-row col-12'>

            </div>
        </footer>
    );
}

export default Footer;