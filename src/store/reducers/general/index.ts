import { EGeneralAction, ENotificationType, IGeneralState, TGeneralAction } from './types'

const initialState: IGeneralState = {
  isLoading: false,
  notification: {
    type: ENotificationType.PRIMARY,
    message: '',
    visible: false
  },
  isAuthVisible: false
}

export default function generalReducer(state = initialState, action: TGeneralAction): IGeneralState {
  switch (action.type) {
    case EGeneralAction.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    case EGeneralAction.SET_NOTIFICATION:
      return { ...state, notification: action.payload, isLoading: false }
    case EGeneralAction.SET_IS_AUTH_VISIBLE:
      return { ...state, isAuthVisible: action.payload, isLoading: false }
    default:
      return state
  }
}
