import React, { Component } from 'react';
import { render } from 'react-dom';

const getPercent = decimal => decimal * 100 + "%";

const calculateGoalProgress = (total, goal) => getPercent(total/goal);

const SkiDayCounter = ({ total, powder, backcountry, goal }) => 
    <section>
        <div>
            <p>Total Days: { total }</p>
        </div>
        <div>
            <p>Powder Days: { powder }</p>
        </div>
        <div>
            <p>Backcountry Days: { backcountry }</p>
        </div>
        <div>
            <p>Goal Progress: { calculateGoalProgress(total, goal) }</p>
        </div>
    </section>

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

render(
    <SkiDayCounter
        total = { skiData.total }
        powder = { skiData.powder }
        backcountry = { skiData.backcountry }
        goal = { skiData.goal }
    />, 
    document.getElementById('root')
)