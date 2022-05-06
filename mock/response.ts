import {user} from '/mock/data/user'

export const login = function(name: string, pwd: string):boolean {
    return user.findIndex(v => v.name === name && v.pwd === pwd) !== -1
}
export const setToken = function(name: string):string {
    return `token_${name}_token`
}