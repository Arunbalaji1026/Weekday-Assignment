import React, { useReducer, useState, useCallback } from "react";
import { multiSelectReducer } from "../reducers/filterReducers";
import { debounce } from "../utils/utilCommonFunc";



const Search = ({ dispatch, filterName = "companyName" }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [state, setState] = useReducer(multiSelectReducer, {});

    // Debounce the call to dispatch
    const debounceDispatch = useCallback(debounce((value) => {
        dispatch({ type: 'SELECT_OPTION', filterName, selectedValues: value });
    }, 500), [dispatch, filterName]); // 500ms delay

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        debounceDispatch(event.target.value);
    };
    return (
        <div className="search-container">
            <input type="text" size="small" placeholder="Search Company Name" value={searchTerm} onChange={handleChange} />
        </div>
    )
}

export default Search;