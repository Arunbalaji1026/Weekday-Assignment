export const apiHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
}

export const filterOptions = [
    { filterName: 'jobRole', name: "Roles", values: ['Frontend', 'Backend', 'React native', 'Ios', 'Android', 'Team Lead'] },
    { filterName: 'employeeNums', name: "Number of Employees", values: ['1-10', '11-20', '21-50', '51-100', '101-200', '201-500', '500+'] },
    { filterName: 'minExp', name: "Experience", values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { filterName: 'workMode', name: "Remote", values: ['Remote', 'Hybrid', 'In-office'] },
    { filterName: 'techStack', name: "TechStack", values: ['Python', 'Java', 'Ruby/Rails', 'Golang', 'C++', 'Kotlin', 'Django', 'C#', 'Javascript', 'Typescript', 'Rust'] },
    { filterName: 'minJdSalary', name: "Minimum Basepay Salary", values: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"] },
    { filterName: 'location', name: "Location", values: ['delhi ncr', 'mumbai', 'remote', 'chennai', 'bangalore'] },
]