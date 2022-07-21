import http from './http'

export function postJson(data: any) {
    return http.post('/signup', data)
}
// {
//         withCredentials: true,
//         headers: {crossDomain: true, "Content-Type": "application/json"},
//     });