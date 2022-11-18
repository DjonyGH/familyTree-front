import { ITreeItem, IUser } from '../../../types'

export interface ITreeListState {
  treeList: ITreeItem[]
}

export enum ETreeListAction {
  SET_TREE_LIST = 'SET_TREE_LIST'
}

export interface ISetTreeListAction {
  type: ETreeListAction.SET_TREE_LIST
  payload: ITreeItem[]
}

export type TTreeListAction = ISetTreeListAction
