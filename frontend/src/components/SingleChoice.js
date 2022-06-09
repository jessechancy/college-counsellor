import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { useState, useEffect } from "react";

export default function SingleChoice(props) {

    const initializeState = () => props.options.map(label => (
        false
    ));

    const [state, changeState] = useState(initializeState);
   
    const handleChange = (event) => {
        changeState(initializeState)
        changeState(prevState => {
            return {
                ...prevState,
                [parseInt(event.target.name)]: !state[parseInt(event.target.name)]
            }
        })
        // Question id, Selection id
        props.handleChangeSelection(props.id, parseInt(event.target.name));
    }

    return (
    <div>
        <h3>{props.question}</h3>
        <FormGroup row>
            {
                props.options.map((label, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox 
                                    checked={state[index]} 
                                    onChange={handleChange}
                                    name={index.toString()}
                                />
                            }
                            label={label}
                        />
                    )
                })
            }
        </FormGroup>
    </div>
    );
}