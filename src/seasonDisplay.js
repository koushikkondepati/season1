import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    summer: {
        text : 'Lets hit the beach',
        iconName : 'sun',
        color : 'orange'
    },
    winter: {
        text : 'Burr, it is chilly',
        iconName : 'snowflake',
        color : 'blue'
    }
};
const getSeason = (lat,month) => {
    if(month >= 2 && month < 11){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat,new Date().getMonth()+1);
    // const text = Season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // const icon = Season === 'winter' ? 'snowflake' : 'sun';
    const {text,iconName} = seasonConfig[Season];
    return(
        <div className={`season-display ${Season}`}>
            <i className={`icon-left massive ${iconName} icon`} ></i>
            <div><h1>{text}</h1></div>
            <i className={`icon-right massive ${iconName} icon`} ></i>
        </div>
        
       )
};

export default SeasonDisplay;

// class Season extends React.Component
// {
//     constructor()
//     {
//         super();
//     }
//     componentDidMount()
//     {
//     }
//     render()
//     {
//         return <div>{props.latitude}</div>
//     }
// };