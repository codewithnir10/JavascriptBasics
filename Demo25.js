const Userdata = [
    { id: 1, name: "sefina", age: 25, gender: "female", hasPassedOut: true, occupation: undefined },
    { id: 2, name: "shital", age: 18, gender: "female", hasPassedOut: true, occupation: "intern" },
    { id: 3, name: "Jalan", age: 21, gender: "male", hasPassedOut: true, occupation: "animator" },
    { id: 4, name: "Ishwor", age: 20, gender: "male", hasPassedOut: false, occupation: "student" },
    { id: 5, name: "Nirmala", age: 19, gender: "female", hasPassedOut: true, occupation: "developer" },
    { id: 6, name: "Presika", age: 18, gender: "female", hasPassedOut: false, occupation: undefined },
    { id: 7, name: "salin", age: 22, gender: "male", hasPassedOut: true, occupation: "SSWE" }

]
const response = {
    status: 200,
    message: "Data Fetched Successfully",
    data: Userdata
}

const getUserName = () => {
    const APIStatus = response.status
    if (APIStatus === 200) {
        const result = response.data
            // .filter((user) => user.occupation && user.name)
            .map((user) => user.name);
        return result;
    } else {

    }
}

console.log(getUserName());