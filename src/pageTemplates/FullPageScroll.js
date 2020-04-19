import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import ContentZone from '../agility/components/ContentZone'

const OneColumnTemplate = (props) => {
    return (
        <div className="one-column-template">

<h1>FULL PAGE</h1>

            <ContentZone name="ScrollComponents" {...props} />
        </div>
    );
}
export default OneColumnTemplate;
