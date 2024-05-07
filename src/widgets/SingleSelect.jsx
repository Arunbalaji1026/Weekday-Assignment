import { TextField, Autocomplete } from "@mui/material";
import React, { useState } from "react";

const SingleSelect = () => {
    const [selectedVal, setSelectedVal] = useState(3);
    const handleOnChange = (event, value) => {
        // e.target.value;
        console.log(value);
        setSelectedVal(value);
    }

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={options}
                sx={{ width: 'fit-content', height: '38px' }}
                value={selectedVal}
                onChange={handleOnChange}
                renderInput={(params) =>
                    <TextField {...params}
                        label="Experience"
                    />}

            />
        </div>
    )

}

export default SingleSelect;