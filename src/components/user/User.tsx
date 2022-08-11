import React from 'react'
import style from './user.module.scss'

interface IProps {
  visible: boolean
}

export const User: React.FC<IProps> = ({ visible }) => {
  return <div className={`${style.user} ${visible ? style.visible : ''}`}>Иванов И.И.</div>
}
