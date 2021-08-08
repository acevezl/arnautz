import React, { useEffect } from 'react';

const ProjectList = ( props ) => {

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
                <div className='card'>
                    <img src='' className='card-img-top' alt=''/>
                    <div className='card-body'>
                        <h5 className='card-title'></h5>
                        <p className='card-text'></p>
                        <a href='' className='btn btn-primary'></a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProjectList;