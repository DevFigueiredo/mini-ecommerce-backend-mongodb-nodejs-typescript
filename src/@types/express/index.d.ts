
declare namespace Express {
  export interface Request {
    customerId?: string
    container: {
      resolve: Function

    }
  }
}
