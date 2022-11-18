import { EGeneralAction, ENotificationType, IGeneralState, TGeneralAction } from './types'

const initialState: IGeneralState = {
  isLoading: false,
  notification: {
    type: ENotificationType.PRIMARY,
    message: '',
    visible: false
  },
  isAuthPopupVisible: false,
  isCreateTreePopupVisible: false,
  title: ''
}

export default function generalReducer(state = initialState, action: TGeneralAction): IGeneralState {
  switch (action.type) {
    case EGeneralAction.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    case EGeneralAction.SET_NOTIFICATION:
      return { ...state, notification: action.payload }
    case EGeneralAction.SET_IS_AUTH_VISIBLE:
      return { ...state, isAuthPopupVisible: action.payload }
    case EGeneralAction.SET_IS_CREATE_TREE_VISIBLE:
      return { ...state, isCreateTreePopupVisible: action.payload }
    case EGeneralAction.SET_TITLE:
      return { ...state, title: action.payload }
    default:
      return state
  }
}
