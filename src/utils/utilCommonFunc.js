export const capitalizeFirstLetter = (str) => {
    if (!str) return '';

    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back together with a space
};

function getMinSalaryAmount(minSalaryLpa) {
    switch (minSalaryLpa) {
        case "0L":
            return 0;
        case "10L":
            return 10;
        case "20L":
            return 20;
        case "30L":
            return 30;
        case "40L":
            return 40;
        case "50L":
            return 50;
        case "60L":
            return 60;
        case "70L":
            return 70;
        default:
            break;
    }
}

export const filterByCriteria = (filterBy, listings) => {
    const minJdSalary = getMinSalaryAmount(filterBy?.minJdSalary)
    return listings.filter(listing => {
        // Convert both the jobRole in the listing and the roles in the filter to lowercase for case-insensitive comparison
        let roleMatch = filterBy?.jobRole ? filterBy?.jobRole.map(role => role?.toLowerCase()).includes(listing?.jobRole?.toLowerCase()) : true;

        // Location filtering
        let locationMatch = filterBy?.location ? filterBy?.location.map(loc => loc?.toLowerCase()).includes(listing?.location?.toLowerCase()) : true;

        // Experience filtering (Example: Filtering by minimum experience)
        let experienceMatch = filterBy?.minExp !== undefined ? listing?.minExp <= filterBy?.minExp : true;

        let minJdSalaryMatch = filterBy?.minJdSalary !== undefined ? listing?.minJdSalary >= minJdSalary : true;

        let companyNameMatch = filterBy?.CompanyName !== undefined && filterBy?.CompanyName !== '' ? filterBy?.CompanyName?.toLowerCase().includes(listing?.companyName?.toLowerCase()) : true;

        // Return true if all conditions match
        return roleMatch && locationMatch && experienceMatch && minJdSalaryMatch && companyNameMatch;
    });
}

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};