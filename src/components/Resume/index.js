const Resume = ( props ) => {

    return(
        <section className='resume pb-3'> 
            <h2>My Resume</h2>
            <div className='resume-body'>
                <h3>Education</h3>
                <p>B.S. in Telematics &#40;Telecommunciations and Informatics&#41; <br/>
                Universidad de Colima, México, 2004.</p>
            </div>
            <div className='resume-body'>
                <h3>Professional Certifications</h3>
                <ul>
                    <li>Full Stack Coding Bootcamp | UC Berkeley &#40;2021&#41;</li>
                    <li>Web Design and Development Certificate | Cornell &#40;2020&#41;</li>
                    <li>Certified Scrum Master Credential ID: 673271 | Scrum Alliance &#40;2017&#41;</li>
                    <li>Certified Scrum Product Owner Credential ID: 673271 | Scrum Alliance &#40;2017&#41;</li>
                    <li>Project Management Professional &#40;PMP&#41; Certification Credential ID: 1916645 | PMI &#40;2016&#41;</li>
                    <li>Analyst-Programmer Certificate | Universidad de Colima &#40;2000&#41;</li>
                </ul>
            </div>
            <div className='resume-body'>
                <h3>Technical Proficiencies</h3>
                <ul>
                    <li>Certified PMP</li>
                    <li>Certified Product Manager</li>
                    <li>Certified Scrum Master</li>
                    <li>Agile, Scrum, and XP</li>
                    <li>Full-stack MERN developer</li>
                    <li>REST APIs</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Bootstrap</li>
                    <li>Advanced CSS3</li>
                    <li>C++ and C#</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Express and Node.JS</li>
                    <li>JEST</li>
                    <li>REACT</li>
                    <li>Graphql</li>
                    <li>Webpack</li>
                </ul>
            </div>
            <div className='resume-body'>
                <a href={process.env.PUBLIC_URL + '/larnaut-aug-2021-cv.pdf'} target='_blank' rel='noreferrer' className='btn btn-primary'>Check out my full resumé here</a>
            </div>        
        </section>
    )

}

export default Resume;