

export async function postSchools(name,address,numberOfStudents,specialityPrograms){
    const options = {
        method: 'POST',
        body: JSON.stringify ({
            name: name,
            address: address,
            numberOfStudents: numberOfStudents,
            specialityPrograms:specialityPrograms
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    }



    return await fetch('/schools', options)
}