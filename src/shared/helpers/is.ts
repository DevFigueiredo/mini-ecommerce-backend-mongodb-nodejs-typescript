function isString (value: any): boolean {
  return typeof value === 'string'
}

function isNumber (value: any): boolean {
  return typeof value === 'number'
}

function isBoolean (value: any): boolean {
  return typeof value === 'boolean'
}

function isUndefined (value: any): boolean {
  return typeof value === 'undefined'
}

function isObject (value: any): boolean {
  return typeof value === 'object' && value !== null
}

function isFunction (value: any): boolean {
  return typeof value === 'function'
}

export {
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isObject,
  isFunction
}
