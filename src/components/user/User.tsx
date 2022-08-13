import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import style from './user.module.scss'

interface IProps {
  visible: boolean
}

export const User: React.FC<IProps> = ({ visible }) => {
  const { user } = useTypedSelector((state) => state.userReducer)
  return <div className={`${style.user} ${visible ? style.visible : ''}`}>{user.name || user.login}</div>
}
