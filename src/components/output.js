import React from 'react';
import OutputRow from './outputRow';

const Output = props => {
    return (
        <div>
            <OutputRow value={props.answer} textSize={{fontSize: '30px'}}/>
            <OutputRow value={props.user} textSize={{fontSize: '45px'}}/>
        </div>
    )
}

export default Output 