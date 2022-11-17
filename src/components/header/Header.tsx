import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CreateTreeBtn } from '../createTreeBtn/CreateTreeBtn'
import { SignIn } from '../signIn/SignIn'
import { User } from '../user/User'
import style from './header.module.scss'

interface IProps {}

export const Header: React.FC<IProps> = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer)
  return (
    <div className={style.header}>
      <div className={style.leftSide}></div>
      <div className={style.rightSide}>
        <CreateTreeBtn />
        <User visible={!!isAuth} />
        <SignIn visible={!isAuth} />
      </div>
    </div>
  )
}
