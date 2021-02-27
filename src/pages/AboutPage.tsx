import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>About Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam eaque consequuntur voluptatem nisi, ex reprehenderit quam laudantium magnam. Id!
            </p>
            <button className="btn" onClick={() => history.push('/')}>Back</button>
        </>
    );
};