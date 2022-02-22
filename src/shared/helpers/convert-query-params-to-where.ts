
export function convertQueryParamToWheres<Type> (params: Partial<Type>): {where: Partial<Type>} {
  return {
    where: params
  }
}
