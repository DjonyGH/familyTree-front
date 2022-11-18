import { ITree, IUser } from '../../../types'

export interface ITreeListState {
  treeList: ITree[]
}

export enum ETreeListAction {
  SET_TREE_LIST = 'SET_TREE_LIST'
}

export interface ISetTreeListAction {
  type: ETreeListAction.SET_TREE_LIST
  payload: ITree[]
}

export type TTreeListAction = ISetTreeListAction
