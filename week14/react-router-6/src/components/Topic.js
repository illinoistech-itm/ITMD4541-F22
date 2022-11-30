import React from 'react';
import {useParams} from 'react-router-dom';

function Topic(props) {
    let params = useParams();

    return (
        <React.Fragment>
            <h4>Here is some info about {params.topic}</h4>
            <p>Lorem ipsum...</p>
        </React.Fragment>
    );
}

export default Topic;