import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { generalActionCreator } from '../../store/reducers/general/action-creators'

export const ToAuth: React.FC = () => {
  console.log('render')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(generalActionCreator.setIsAuthVisible(true))
  }, []) //eslint-disable-line
  return <></>
}
