export interface IGeneralState {
  isLoading: boolean
  notification: INotificationPayload
  isAuthPopupVisible: boolean
  isCreateTreePopupVisible: boolean
  title: string
}

export enum EGeneralAction {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_NOTIFICATION = 'SET_NOTIFICATION',
  SET_IS_AUTH_VISIBLE = 'SET_IS_AUTH_VISIBLE',
  SET_IS_CREATE_TREE_VISIBLE = 'SET_IS_CREATE_TREE_VISIBLE',
  SET_TITLE = 'SET_TITLE'
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

export interface ISetIsCreateTreeVisibleAction {
  type: EGeneralAction.SET_IS_CREATE_TREE_VISIBLE
  payload: boolean
}

export interface ISetTitleAction {
  type: EGeneralAction.SET_TITLE
  payload: string
}

export type TGeneralAction =
  | ISetIsLoadingAction
  | ISetNotificationAction
  | ISetIsAuthVisibleAction
  | ISetIsCreateTreeVisibleAction
  | ISetTitleAction

export enum ENotificationType {
  ERROR = 'danger',
  SUCCESS = 'success',
  PRIMARY = 'light'
}

export interface INotificationPayload {
  type: ENotificationType
  message: string
  visible: boolean
}
