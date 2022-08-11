import React from 'react'
import style from './main.module.scss'

interface IProps {
  children: React.ReactNode
}

export const Main: React.FC<IProps> = ({ children }) => {
  return <div className={style.main}>{children}</div>
}
