
declare namespace Express {
  export interface Request {
    container: {
      resolve: Function
    }
  }
}
