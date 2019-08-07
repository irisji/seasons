import React from 'react';
import './style.css'

const seasonConfig = {
    summer:{
        text:'lets hit the summer',
        iconName:'sun'
    },
    winter:{
        text:'Blur, it is chilly',
        iconName:'snowflake'
    }
}

const getSeason = (month,lat) => {
    if (month>2 && month <9){
        return lat > 0 ? 'summer':'winter';
    }else {
        return lat > 0 ? 'winter':'summer';
    }
};


const SeasonDisplay = props => {
    var dt = new Date();
    const season = getSeason (dt.getMonth(),props.lat);
    const text = seasonConfig[season].text;
    const iconName = seasonConfig[season].iconName;
    //console.log(iconName)
    return (
        <div className = {`season-display ${season}`}>
            <div>
                <i className = {`left_icon massive ${iconName} icon`}></i>
            </div>
            <div>
                <h1>{text}</h1>
            </div>
            <div>
                <i className = {`right_icon massive ${iconName} icon`}></i>
            </div>
        </div>
    );
};

export default SeasonDisplay;