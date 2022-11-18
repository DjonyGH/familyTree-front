import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './aboutUs.module.scss'

export const AboutUs: React.FC = () => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(generalActionCreator.setTitle('О нас'))
  }, []) //eslint-disable-line
  return <div className={style.aboutUs}>AboutUs</div>
}
