import React from 'react'
import { IPerson } from '../../../../types'
import style from './person.module.scss'

interface IProps {
  person: IPerson | null
}

export const Person: React.FC<IProps> = ({ person }) => {
  return <div className={style.person}></div>
}
