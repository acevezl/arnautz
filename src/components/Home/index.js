import React, { useEffect } from 'react';

const Home = ( props ) => {

    const {
        currentCategory,
        setCurrentCategory
    } = props;

    useEffect( () => {
        document.title = 'Luis Arnaut | ' + currentCategory.name;
    }, [currentCategory]);

    return(
        <section className='home'>
            <div className='intro'>
                <span className='intro-title-top'>Hello, I'm</span>
                <h1 className='intro-title'>Louis Arnaut</h1>
                <h2 className='intro-subtitle'>A full-stack MERN developer</h2>
                <button>View my code doodles</button>
                <div className='badges'>
                    <img src={require(`../../assets/images/mern.png`).default} alt="Mongo DB"/>
                    <img src={require(`../../assets/images/html-badges.png`).default} alt="HTML CSS JS"/>
                </div>
                <div className='badges'>
                    <img src={require(`../../assets/images/apollo-graphql-json-api.png`).default} alt="Apollo GraphQL JSON REST:API"/>
                </div>
                <div className='badges'>
                    <img src={require(`../../assets/images/logo-mysql.png`).default} alt="MySQL"/>
                </div>
            </div>
            <div className='headshot'>
            </div>
        </section>
    )

}

export default Home;