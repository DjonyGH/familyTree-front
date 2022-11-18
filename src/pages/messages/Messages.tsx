import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './messages.module.scss'

export const Messages: React.FC = () => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(generalActionCreator.setTitle('Сообщения'))
  }, []) //eslint-disable-line
  return <div className={style.messages}>Messages</div>
}
