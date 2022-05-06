/**
 * 两次编码url
 * @param url 
 * @returns 
 */
 export function decode(url: string): string {
    return decodeURIComponent(decodeURIComponent(url))
}

/**
 * 获取localStorage对象并转成对应的类型
 * @param name localStorage设置名称
 */
 export function getLocal<T>(name:string):T {
    const l = localStorage.getItem(name)
    const local = JSON.parse(l !== null ? l : '{}') as unknown as T
    return local
}