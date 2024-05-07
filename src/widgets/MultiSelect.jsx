import { TextField, Autocomplete, Paper } from "@mui/material";
import React, { useState, useReducer } from "react";
import { multiSelectReducer } from "../reducers/filterReducers";

const MultiSelect = ({ dropdownOptions, label, filterName, dispatch }) => {
    const [value, setValue] = useState([]);
    const [state, setState] = useReducer(multiSelectReducer, {});

    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch({ type: 'SELECT_OPTION', filterName, selectedValues: newValue });
    };

    return (
        <div>
            <Autocomplete
                multiple
                size="small"
                id="tags-outlined"
                sx={{ width: '100%', minWidth: '230px' }}
                options={dropdownOptions}
                getOptionLabel={(option) => option}
                value={value}
                onChange={handleChange}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={label}
                    />
                )}
                ChipProps={{
                    style: { borderRadius: 4, height: 25, },
                }}
                PaperComponent={({ children }) => (
                    <Paper style={{ marginTop: 10 }}>
                        {children}
                    </Paper>
                )}
            />
        </div>
    )
}

export default MultiSelect;