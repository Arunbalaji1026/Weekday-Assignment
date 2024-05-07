import { rolesData } from "../utils/constants";
import MultiSelect from "../widgets/MultiSelect";
import SingleSelect from "../widgets/SingleSelect";

const RolesFilter = () => {
    return (
        <div>
            <MultiSelect 
            dropdownOptions={rolesData}
            label="Roles"
            />
        </div>
    )
} 
const Filter = () => {
    return (
        <div className="filter-container">
            <RolesFilter />
            <SingleSelect />
        </div>
    )
}

export default Filter;