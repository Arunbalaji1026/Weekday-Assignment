import { TextField, Autocomplete, Paper } from "@mui/material";
import React, { useState } from "react";

const MultiSelect = ({ dropdownOptions, label }) => {
    const [value, setValue] = useState([]); // Initialize with an empty array for multiple selections
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                defaultValue={[dropdownOptions[0]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
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