export async function getApiTable () {
    try {
        const method = "GET";
        const headers =  {
            'Content-Type': 'application/json'
        }
        const response = await fetch("http://178.128.196.163:3000/api/records",{method, headers})
        return await response.json();
    } catch(e) {
        console.log(e)
    }
}

export async function getEditLine (data) {
    try {
        const method = "POST";
        const dataLine = {data:{name: data.name, surname: data.surname, key: data.key}};
        const body = JSON.stringify(dataLine)
        const headers =  {
            'Content-Type': 'application/json'
        }
        const response = await fetch(`http://178.128.196.163:3000/api/records/${data.id}`,{method,body,headers})
        return await response.json();
    } catch(e) {
        console.log(e)
    }
}

export async function deleteLine (id) {
    try {
        const method = "DELETE";
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await fetch(`http://178.128.196.163:3000/api/records/${id}`, { method, headers })
        return await response.json();
    } catch (e) {
        console.log(e)
    }
}

export async function addLine (data) {
    try {
        const method = "PUT";
        const dataLine = {data:{name: data.name, surname: data.surname, key: data.key}};
        const body = JSON.stringify(dataLine)
        const headers =  {
            'Content-Type': 'application/json'
        }
        const response = await fetch(`http://178.128.196.163:3000/api/records`,{method,body,headers})
        return await response.json();
    } catch(e) {
        console.log(e)
    }
}
