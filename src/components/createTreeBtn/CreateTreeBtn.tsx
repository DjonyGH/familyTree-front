import React, { useCallback } from 'react'
import style from './createTreeBtn.module.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface IProps {}

export const CreateTreeBtn: React.FC<IProps> = () => {
  const dispatch = useTypedDispatch()
  const { isAuth } = useTypedSelector((state) => state.authReducer)
  const handleClick = useCallback(() => {
    dispatch(generalActionCreator.setIsCreateTreeVisible(true))
  }, [])
  return (
    <button className={`${style.createTreeBtn} ${isAuth ? style.visible : ''}`} onClick={handleClick}>
      <AiOutlinePlus size={'1.5em'} />
    </button>
  )
}
