export const capitalizeFirstLetter = (str) => {
    if (!str) return ''; // Return empty string if str is falsy

    return str
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back together with a space
};