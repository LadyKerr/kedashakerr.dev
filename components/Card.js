import React from 'react';

const Card = ({ title, description, link, image }) => {
    return (
        <div className="card">
            <a href={link}>
                {image && <img src={image} alt={title} />}
                <h2>{title}</h2>
                <p>{description}</p>
            </a>
        </div>
    );
};

export default Card;