import React from 'react'
import style from './content.module.scss'

interface IProps {}

export const Content: React.FC<IProps> = () => {
  return <div className={style.content}></div>
}
