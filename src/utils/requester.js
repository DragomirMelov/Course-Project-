const url = import.meta.env.VITE_URL
const apiKey = import.meta.env.VITE_APIKEY 

export default async function Api(token, table, path = "", method = "GET", body = null) {
    const ApiUrl = `${url}/rest/v1/${table}${path}`;
    //fetch  data
const options = {
method: "GET",
    headers: {
    apikey: apiKey,
    Prefer: "return=representation",
    ...(token && { Authorization: `Bearer ${token}` }),
    },
};
    if(method !== "GET")
    {
            options.method = method
    }
if (body) {
    options.body = JSON.stringify(body);
    options.headers["Content-Type"] = "application/json";
}
console.log(options)
const respones = await fetch(ApiUrl, options);

if (!respones.ok) {
    const text = await respones.text().catch(() => "");
    throw new Error(`HTTP ${respones.status} ${ApiUrl}: ${text}`);
}

  // 201/204 have no body (inserts with Prefer: return=minimal, deletes)
if (respones.status === 204) return null;

    return respones.json()
}


export async function Auth(token, path = "", method = "GET", body = null) {
        const ApiUrl = `${url}/auth/v1/${path}`;
         //fetch  data
const options = {
method: "GET",
    headers: {
    apikey: import.meta.env.VITE_APIKEY ,
    Prefer: "return=representation",
    ...(token && { Authorization: `Bearer ${token}` }),
    },
};
    if(method !== "GET")
    {
            options.method = method
    }
if (body) {
    options.body = JSON.stringify(body);
    options.headers["Content-Type"] = "application/json";
}
const respones = await fetch(ApiUrl, options);

if (!respones.ok) {
    const text = await respones.text().catch(() => "");
    throw new Error(`HTTP ${respones.status} ${ApiUrl}: ${text}`);
}
        return respones.json(); 

}


