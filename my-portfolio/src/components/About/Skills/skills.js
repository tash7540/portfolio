// import the Skill component as Skill for use in this component
import Skill from './skill.js';
import '../styles.css';
function Skills() {
    return (
        <div className="skills">
                <h1 className='skills-form'>I have experience with these technologies:</h1>
            <div className="skillsGrid">
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="The logo icon for java" title="java"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for JS" title="JS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="The logo icon for Python" title="Python"/>

            </div>
        </div>
    )
}
export default Skills
