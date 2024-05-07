export const apiHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
}

export const rolesData = [
    'Frontend', 'Backend', 'React native', 'Ios', 'Android', 'Team Lead'
]

export const numOfEmployees = [
    '1-10', '11-20', '21-50', '51-100', '101-200', '201-500', '500+'
]

export const experience = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const modeOfWork = [
    'Remote', 'Hybrid', 'In-office'
];

export const techStack = [
    'Python', 'Java', 'Ruby/Rails', 'Golang', 'C++', 'Kotlin', 'Django', 'C#', 'Javascript', 'Typescript', 'Rust'
]

export const minBasePay = [
    0, 1, 2, 3, 4, 5, 6, 7
]

export const location = [
    'delhi ncr', 'mumbai', 'remote', 'chennai', 'bangalore'
]