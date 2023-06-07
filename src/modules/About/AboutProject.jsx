import React from 'react';
import ButtonGoBack from "../../UI/ButtonGoBack";

const AboutProject = () => {

    return (
        <section className='about__project'>
            <div className="container">
                <h1>about the project</h1>
                <h2>Проект для управления системой</h2>
                <ButtonGoBack to={-1}>go Back</ButtonGoBack>
            </div>
        </section>
    );
};

export default AboutProject;