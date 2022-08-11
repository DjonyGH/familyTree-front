export interface IGeneralState {
  isLoading: boolean
  notification: INotificationPayload
  isAuthVisible: boolean
}

export enum EGeneralAction {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_NOTIFICATION = 'SET_NOTIFICATION',
  SET_IS_AUTH_VISIBLE = 'SET_IS_AUTH_VISIBLE'
}

export interface ISetIsLoadingAction {
  type: EGeneralAction.SET_IS_LOADING
  payload: boolean
}

export interface ISetNotificationAction {
  type: EGeneralAction.SET_NOTIFICATION
  payload: INotificationPayload
}

export interface ISetIsAuthVisibleAction {
  type: EGeneralAction.SET_IS_AUTH_VISIBLE
  payload: boolean
}

export type TGeneralAction = ISetIsLoadingAction | ISetNotificationAction | ISetIsAuthVisibleAction

export enum ENotificationType {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  PRIMARY = 'PRIMARY'
}

export interface INotificationPayload {
  type: ENotificationType
  message: string
  visible: boolean
}
