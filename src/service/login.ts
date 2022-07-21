import http from './http'

export function logJson(data:any) {
return http.post('login', data)
}