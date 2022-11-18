import { ITreeListState, TTreeListAction, ETreeListAction } from './types'

const initialState: ITreeListState = {
  treeList: []
}

export default function treeListReducer(state = initialState, action: TTreeListAction): ITreeListState {
  switch (action.type) {
    case ETreeListAction.SET_TREE_LIST:
      return { ...state, treeList: action.payload }

    default:
      return state
  }
}
