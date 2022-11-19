import React, { useMemo } from 'react'
import { IPerson } from '../../../../types'
import { BsPersonSquare } from 'react-icons/bs'
import style from './person.module.scss'
import prepareDate from '../../../../utils/prepareDate'

interface IProps {
  person: IPerson | null
}

export const Person: React.FC<IProps> = ({ person }) => {
  const birthday = useMemo(() => person?.birthday && prepareDate(person?.birthday), [person?.birthday])
  const deathday = useMemo(() => person?.deathday && prepareDate(person?.deathday), [person?.deathday])
  return (
    <div className={style.person}>
      <div className={style.photo}>
        {person?.imgUrl ? <img src={person.imgUrl} alt="photo" /> : <BsPersonSquare size={'3rem'} />}
      </div>
      <div className={style.name}>
        {`${person?.surname ? person?.surname + ' ' : ''}${person?.name}${
          person?.patronymic ? ' ' + person?.patronymic : ''
        }`}
      </div>
      <div className={style.birthday}>{`${birthday}${deathday ? ' - ' + deathday : ''}`}</div>
    </div>
  )
}
