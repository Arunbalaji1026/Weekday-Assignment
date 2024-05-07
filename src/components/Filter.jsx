import React, { useState } from "react";
import MultiSelect from "../widgets/MultiSelect";
import SingleSelect from "../widgets/SingleSelect";
import { filterOptions } from "../utils/constants";
import Search from "../widgets/Search";

const Filter = ({ dispatch }) => {
    const [selectedValues, setSelectedValues] = useState(filterOptions);

    return (
        <div className="filter-container">
            {selectedValues.map(filter => (
                <FilterComponent
                    key={filter.name}
                    label={filter.name}
                    dropdownOptions={filter.values}
                    filterName={filter.filterName}
                    dispatch={dispatch}
                    // Determine the component type based on the filter's name
                    componentType={filter.name === 'Minimum Basepay Salary' || filter.name === 'Experience' ? 'singleSelect' : 'multiSelect'}
                />
            ))}
            <Search dispatch={dispatch} filterName="CompanyName" />
        </div>
    );
};

const FilterComponent = ({ label, filterName, dropdownOptions, componentType, dispatch}) => {
    // Render either MultiSelect or SingleSelect based on componentType prop
    return (
        <div>
            {componentType === 'multiSelect' ? (
                <MultiSelect
                    dropdownOptions={dropdownOptions}
                    label={label}
                    dispatch={dispatch}
                    filterName={filterName}
                />
            ) : (
                <SingleSelect
                    dropdownOptions={dropdownOptions}
                    label={label}
                    filterName={filterName}
                    dispatch={dispatch}

                />
            )}
        </div>
    );
};

export default Filter;