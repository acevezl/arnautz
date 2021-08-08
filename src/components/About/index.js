import React, { useEffect } from 'react';

const About = ( props ) => {

    const {
        currentCategory,
        setCurrentCategory
    } = props;

    useEffect( () => {
        document.title = 'Luis Arnaut | ' + currentCategory.name;
    }, [currentCategory]);

    return(
        <section className='about'>
            <div className='about-body mb-3'>
                <h2 className='col-12'>About Me</h2>
                <p>I'm a coding enthusiast finishing a full-stack bootcamp. I love to invent creative solutions to intricate problems by connecting teams with strategy, insights and key objectives. My philosophy is to never take any task so seriously that it takes away the joy of completing it.</p>
                <p>I love working with people from all backgrounds, technical and non-techincal. I strongly believe that everyone has something to teach you, and we all have something to learn. Although I tend to gravitate around technical endeavours, I take the time to understand the business perspective and needs. I consider myself resourceful and able to speak at different levels of the organisation; I prefer to cut the red tape and simply approach problems from person to person.</p>
                <button>Home</button>
            </div>
            <div className='about-hero'>
            </div>
        </section>
    )

}

export default About;