import React from "react";
import {Route, Link, Routes} from 'react-router-dom';
import ReactTopic from './ReactTopic';
import Es6Topic from './Es6Topic';
import Topic from './Topic';

export default function JavaScriptPage(props) {
    return (
        <React.Fragment>
            <h1>JavaScript - ECMA-262</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dicta nisi, delectus pariatur recusandae laudantium! Magni vitae quasi fugit error neque labore ipsa. Molestiae quis unde praesentium quia voluptas. Est.</p>
            <ul>
                <li><Link to={`react`}>React</Link></li>
                <li><Link to={`es6`}>ES6</Link></li>
            </ul>
            <Routes>
                <Route path={`react`} element={<ReactTopic />} />

                <Route path={`es6`} element={<Es6Topic />} />
                    

                <Route path={`:topic`} element={<Topic />} />

            </Routes>
        </React.Fragment>
    );
}

