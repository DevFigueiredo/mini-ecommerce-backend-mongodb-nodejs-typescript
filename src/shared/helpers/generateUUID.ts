import { v4 } from 'uuid'
export const generateUUID = (): string => {
  return v4()
}
