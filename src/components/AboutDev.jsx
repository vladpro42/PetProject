import React from 'react';
import ButtonGoBack from "../UI/ButtonGoBack";

const AboutDev = () => {

    return (
        <section className='about__developer'>
            <div className="container">
                <h1>About the developer</h1>
                <p>I'm Vlad and I am from Belarus. My skills HTML, CSS, SASS, REACT JS</p>
                <ButtonGoBack to={-1}>go Back</ButtonGoBack>
            </div>
        </section>
    );
};

export default AboutDev;