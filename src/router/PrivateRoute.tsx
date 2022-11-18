import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ERoutes, IRoute } from '.'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { generalActionCreator } from '../store/reducers/general/action-creators'

interface IProps {
  route: IRoute
}

export const PrivateRoute: React.FC<IProps> = ({ route }) => {
  const dispatch = useDispatch()
  const { isAuth } = useTypedSelector((state) => state.authReducer)
  useEffect(() => {
    isAuth && dispatch(generalActionCreator.setIsAuthVisible(true))
  }, [isAuth]) //eslint-disable-line

  return (
    <Routes>
      {!isAuth ? (
        <Route path="*" element={<route.component />} />
      ) : (
        <Route path="*" element={<Navigate to={ERoutes.FIRST_PAGE} />} />
      )}
    </Routes>
  )
}
