import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './tree.module.scss'

export const Tree: React.FC = () => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(generalActionCreator.setTitle('Дерево'))
  }, []) //eslint-disable-line
  return (
    <div className={style.tree}>
      <div className={style.row}>
        <div className={style.col}>
          <div className={style.content}></div>
          <div className={style.titleBox}>
            <div className={style.title}>Родители</div>
            <div className={style.mock}></div>
          </div>
        </div>
        <div className={style.col}>
          <div className={style.content}></div>
          <div className={style.titleBox}>
            <div className={style.mock}></div>
            <div className={style.title}>Братья и сестры</div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <div className={style.titleBox}>
            <div className={style.title}>Дети</div>
            <div className={style.mock}></div>
          </div>
          <div className={style.content}></div>
        </div>
        <div className={style.col}>
          <div className={style.titleBox}>
            <div className={style.mock}></div>
            <div className={style.title}>Супруги</div>
          </div>
          <div className={style.content}></div>
        </div>
      </div>
      <div className={style.center}></div>
    </div>
  )
}
