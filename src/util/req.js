/**
 * 
 * @param args.uri is the the end part of the url
 * @param args.method is the method of the request
 * @param args.header is the header set for the request
 * @param arg.body contains the body object 
 * @returns 
 */
export default async function req({ uri = '', method = 'GET', headers = '', body = {} }) {
    try {
        if (typeof window !== 'undefined') {
            const url = uri.startsWith('https://') ? uri : `https://api.webmanza.com/auth/v2/` + uri
            const accessToken = localStorage.getItem('accessToken') !== 'undefined' ? localStorage.getItem('accessToken') : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI0NTcxZGJkMC0yY2Q3LTExZWQtOTcxNy0wMDE1NWQyMTJjMDYiLCJzdG9yZV9pZCI6MTM5LCJvcmlnaW4iOiJib29rc2hvcC53ZWJtYW56YS5jb20iLCJkb21haW4iOiJib29rc2hvcC53ZWJtYW56YS5jb20iLCJzb3VyY2UiOiJib29rc2hvcC53ZWJtYW56YS5jb20iLCJ2ZXJzaW9uIjoiVjEuNS4wIiwiaWF0IjoxNjk0MzM4NDY5LCJleHAiOjE2OTY5MzA0Njl9.yhs4OgkPZvfIEm5tv1IZFGyOGqcGsjFHVtpajtXL-VI
            if (uri.startsWith('get-access-token')) headers = { ...headers, Origin: "bookshop.webmanza.com" }
            else headers = { ...headers, Origin: "bookshop.webmanza.com", Authorization: `Bearer ${accessToken}` }
            let payload = {
                method,
                headers,
            }
            if (method !== 'GET' && body && !uri.startsWith('get-access-token')) payload = { ...payload, body: JSON.stringify(body) }
            console.log("first")
            const response = await fetch(url, payload)
            const data = await response.json()
            console.log(data)
            return data
        }
    }
    catch (e) {
        console.log(e)
    }
} 