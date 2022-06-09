import React from 'react';
import SingleChoice from './components/SingleChoice';
import MultipleChoice from './components/MultipleChoice';
import { useState, useEffect } from "react";

export default function App() {
    const [state, changeState] = useState({
    });

    const handleChangeSelection = 
        (id, selection) => {
            console.log("changed selection", id, selection);
            changeState({
                ...state,
                [id]: selection
            });
        }

    return (
    <div className="App">
        <h1>College Questionaire</h1>
        <h3>How prepared are you for your application? Find out below!</h3>
        <SingleChoice 
            id={1}
            question="How prepared are you for your application?"
            options={["a", "b", "c", "d"]} 
            handleChangeSelection={handleChangeSelection}
        />
        <MultipleChoice 
            id={1}
            question="How prepared are you for your application?"
            options={["a", "b", "c", "d"]} 
            handleChangeSelection={handleChangeSelection}
        />
    </div>
    );
}