import { TAppDispatch } from '../..'
import {
  EGeneralAction,
  ISetNotificationAction,
  ISetIsLoadingAction,
  INotificationPayload,
  ISetIsAuthVisibleAction,
  ENotificationType
} from './types'

export const generalActionCreator = {
  setIsLoading: (isLoading: boolean): ISetIsLoadingAction => ({
    type: EGeneralAction.SET_IS_LOADING,
    payload: isLoading
  }),
  setNotification: (notification: INotificationPayload): ISetNotificationAction => {
    return { type: EGeneralAction.SET_NOTIFICATION, payload: notification }
  },
  setIsAuthVisible: (isAuthVisible: boolean): ISetIsAuthVisibleAction => {
    return { type: EGeneralAction.SET_IS_AUTH_VISIBLE, payload: isAuthVisible }
  },
  setError: (error: string) => {
    return generalActionCreator.setNotification({ type: ENotificationType.ERROR, message: error, visible: true })
  },
  setSuccess: (message: string) => {
    return generalActionCreator.setNotification({ type: ENotificationType.SUCCESS, message, visible: true })
  }
}
