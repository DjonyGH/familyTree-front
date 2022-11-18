import { ITreeState, TTreeAction, ETreeAction } from './types'

const initialState: ITreeState = {
  tree: null
}

export default function treeReducer(state = initialState, action: TTreeAction): ITreeState {
  switch (action.type) {
    case ETreeAction.SET_TREE:
      return { ...state, tree: action.payload }

    default:
      return state
  }
}
