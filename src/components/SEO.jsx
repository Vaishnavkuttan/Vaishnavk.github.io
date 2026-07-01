import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, image }) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            { /* End standard metadata tags */}

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            { /* End Twitter tags */}
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Vaishnav Kalaikumar | Senior QA Engineer',
    description: 'Senior QA Engineer specializing in Automation, Manual Testing, and AWS. Bridging the gap between manual precision and automated efficiency.',
    name: 'Vaishnav Kalaikumar',
    type: 'website',
    image: 'https://vaishnavkuttan.github.io/Vaishnavk.github.io/Vaishnav_main.JPG'
};

export default SEO;
