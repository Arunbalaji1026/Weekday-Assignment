import React, { useState } from "react";
import MultiSelect from "../widgets/MultiSelect";
import SingleSelect from "../widgets/SingleSelect";
import { filterOptions } from "../utils/constants";

const Filter = () => {
    const [selectedValues, setSelectedValues] = useState(filterOptions);

    return (
        <div className="filter-container">
            {selectedValues.map(filter => (
                <FilterComponent
                    key={filter.name}
                    label={filter.name}
                    dropdownOptions={filter.values} 
                    // Determine the component type based on the filter's name
                    componentType={filter.name === 'Minimum Basepay Salary' || filter.name === 'Experience' ? 'singleSelect' : 'multiSelect'}
                />
            ))}
        </div>
    );
};

const FilterComponent = ({ label, dropdownOptions, componentType }) => {
    // Render either MultiSelect or SingleSelect based on componentType prop
    return (
        <div>
            {componentType === 'multiSelect' ? (
                <MultiSelect
                    dropdownOptions={dropdownOptions}
                    label={label}
                />
            ) : (
                <SingleSelect
                    dropdownOptions={dropdownOptions}
                    label={label}
                />
            )}
        </div>
    );
};

export default Filter;