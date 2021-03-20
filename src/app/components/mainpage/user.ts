export interface IUser {
  status: string,
  results: number,
  data: {
    data: [
      {
        _id: string,
        name: string,
        email: string
      }
    ]
  }
}
