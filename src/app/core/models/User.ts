export class User {
  id?: string | null
  username: string
  email?: string
  password: string
  account?: string
  role?: string

  constructor({ id, username, email, password, account, role }: IUser) {
    this.id = id
    this.username = username
    this.email = email
    this.password = password
    this.account = account
    this.role = role
  }
}

export interface IUser {
  id?: string
  username: string
  email: string
  password: string
  account: string
  role: string
}
