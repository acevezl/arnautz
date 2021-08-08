import React, { useEffect } from 'react';

const ProjectList = ( props ) => {

    const {
        currentCategory,
        setCurrentCategory,
        projects
    } = props;

    useEffect( () => {
        document.title = 'Luis Arnaut | ' + currentCategory.name;
    }, [currentCategory]);

    return(
        <section className='projects'>
            <h2>My code doodles</h2>
            <div className='project-list '>
                {projects.map((project, i) => (
                    <div className='card mb-3'>
                        <img src={require(`../../assets/images/${project.image}`).default} className='card-img-top' alt=''/>
                        <div className='card-body'>
                            <h5 className='card-title'>{project.name}</h5>
                            <p className='card-text'>{project.short_description}</p>
                            <p className='card-text project-description'>{project.long_description}</p>
                            <a href={`${project.link}`} target='_blank' className='fs-2 bi-box-arrow-up-right me-3'></a>
                            <a href={`${project.github}`} target='_blank' className='fs-2 bi-github'></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default ProjectList;