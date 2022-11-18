import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './notFound.module.scss'

export const NotFound: React.FC = () => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(generalActionCreator.setTitle('Страница не найдена'))
  }, []) //eslint-disable-line
  return <div className={style.notFound}>Not Found</div>
}
