import { unref,Ref } from "vue"

/*
表单校验
*/

export async function validate(ref: Ref|any, isGetError = false):Promise<boolean | {valid: boolean, object: any}> {
    const validateFn = unref(ref).validate
    return new Promise(resolve => validateFn((valid:boolean, object: any) => isGetError ? resolve({ valid, object }) : resolve(valid)))
}