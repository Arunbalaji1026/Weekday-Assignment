import { TextField, Autocomplete } from "@mui/material";
import React, { useState } from "react";

const SingleSelect = ({ dropdownOptions, label }) => {
    const [selectedVal, setSelectedVal] = useState();
    const handleOnChange = (event, value) => {
        setSelectedVal(value);
    }

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