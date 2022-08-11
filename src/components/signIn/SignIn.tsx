import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './signIn.module.scss'

interface IProps {
  visible: boolean
}

export const SignIn: React.FC<IProps> = ({ visible }) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(generalActionCreator.setIsAuthVisible(true))
  }, []) //eslint-disable-line
  return (
    <div className={`${style.signIn} ${visible ? style.visible : ''}`} onClick={handleClick}>
      Войти
    </div>
  )
}
