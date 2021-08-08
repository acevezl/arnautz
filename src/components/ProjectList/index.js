import Project from '../Project';

const ProjectList = ( props ) => {

    const {
        projects
    } = props;

    return(
        <section className='projects'>
            <h2>My code doodles</h2>
            <div className='project-list '>
                {projects.map((project, i) => (
                    <Project project={project}/>
                ))}
            </div>
        </section>
    )

}

export default ProjectList;