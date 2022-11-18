import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './firstPage.module.scss'

export const FirstPage: React.FC = () => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(generalActionCreator.setTitle('Главная страница'))
  }, []) //eslint-disable-line
  return <div className={style.firstPage}>First page</div>
}
