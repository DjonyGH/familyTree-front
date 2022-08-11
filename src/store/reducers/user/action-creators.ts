import { TAppDispatch, TRootState } from '../..'
import { EUserAction, ISetUserAction } from './types'
import { generalActionCreator } from '../general/action-creators'
import { IUser } from '../../../types'
import http from '../../../utils/http'
import { AxiosResponse } from 'axios'

export const userActionCreator = {
  setUser: (user: IUser): ISetUserAction => ({
    type: EUserAction.SET_USER,
    payload: user
  }),
  createPassword: (password: string) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(generalActionCreator.setIsLoading(true))
      console.log('CREATE PASSWORD')
      await http.post('/users/set-password', { password })
      dispatch(generalActionCreator.setSuccess('Пароль успешно сохранен'))
      return true
    } catch (error) {
      dispatch(generalActionCreator.setError(String(error)))
    } finally {
      dispatch(generalActionCreator.setIsLoading(false))
    }
  },
  changeUserInfo: (user: IUser) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(generalActionCreator.setIsLoading(true))
      console.log('CHANGE USER iNFO', user)
      await http.put('/users', user)
      dispatch(userActionCreator.setUser(user))
      dispatch(generalActionCreator.setSuccess('Данные пользователя успешно изменены'))
      return true
    } catch (error: any) {
      dispatch(generalActionCreator.setError(String(error.response.data.message)))
    } finally {
      dispatch(generalActionCreator.setIsLoading(false))
    }
  }
}
