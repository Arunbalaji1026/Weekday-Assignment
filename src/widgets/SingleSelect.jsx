import { TextField, Autocomplete } from "@mui/material";
import React, { useState, useReducer } from "react";
import { multiSelectReducer } from "../reducers/filterReducers";

const SingleSelect = ({ dropdownOptions, label, filterName, dispatch }) => {
    const [selectedVal, setSelectedVal] = useState();
    const [state, setState] = useReducer(multiSelectReducer, {});

    const handleOnChange = (event, value) => {
        setSelectedVal(value);
        dispatch({ type: 'SELECT_OPTION', filterName, selectedValues: value });
    }
    console.log(selectedVal, 'selectedVal');
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                size="small"
                options={dropdownOptions}
                sx={{ width: '100%', minWidth: '30px' }}
                value={selectedVal}
                onChange={handleOnChange}
                renderInput={(params) =>
                    <TextField {...params}
                        placeholder={label}
                    />}
            />
        </div>
    )

}

export default SingleSelect;