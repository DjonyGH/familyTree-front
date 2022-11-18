export interface IUser {
  id: string
  login: string //phone
  surname?: string
  name?: string
  patronymic?: string
  email?: string
  isBlocked?: boolean
}

export enum EMode {
  view = 'view',
  edit = 'edit'
}

export interface ITree {
  id: string
  name: string
  createdAt: string
  createdBy: string
  updatedAt?: string
  updatedBy?: string
}
