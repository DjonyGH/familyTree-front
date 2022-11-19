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

export interface ITreeItem {
  id: string
  name: string
  createdAt: string
  createdBy: string
  updatedAt?: string
  updatedBy?: string
}

export enum ERelativeType {
  parents = 'Родители',
  brothers = 'Братья и сестры',
  children = 'Дети',
  spouses = 'Супруги'
}

export interface IPerson {
  id: string
  name: string
  surname?: string
  patronymic?: string
  birthday?: string
  deathday?: string
  imgUrl?: string
  comment?: string
  userId?: string
  createdAt: string
  createdBy: string
  updatedAt?: string
  updatedBy?: string
}

export interface ITree extends IPerson {
  parents: IPerson[]
  brothers: IPerson[]
  children: IPerson[]
  spouses: IPerson[]
}
