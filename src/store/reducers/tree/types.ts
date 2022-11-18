import { ITree } from '../../../types'

export interface ITreeState {
  tree: ITree | null
}

export enum ETreeAction {
  SET_TREE = 'SET_TREE'
}

export interface ISetTreeAction {
  type: ETreeAction.SET_TREE
  payload: ITree
}

export type TTreeAction = ISetTreeAction
