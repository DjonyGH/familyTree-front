import React, { useState } from 'react'
import { SignIn } from '../signIn/SignIn'
import { User } from '../user/User'
import style from './header.module.scss'

interface IProps {}

export const Header: React.FC<IProps> = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <div className={style.header}>
      <div></div>
      <div>
        <User visible={isAuth} />
        <SignIn visible={!isAuth} />
      </div>
    </div>
  )
}
