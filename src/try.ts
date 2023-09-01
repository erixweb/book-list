export const ERROR_RETURN = Symbol()

export const Try = (fn: Function) => {
    try {
        return fn()
    } catch (err) {
        console.warn(err)
        return ERROR_RETURN
    }
}