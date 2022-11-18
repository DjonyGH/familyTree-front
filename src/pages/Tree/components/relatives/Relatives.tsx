import React from 'react'
import { ERelativeType, IPerson } from '../../../../types'
import style from './relatives.module.scss'

interface IProps {
  relativeType: ERelativeType
  relatives: IPerson[]
}

export const Relatives: React.FC<IProps> = ({ relativeType, relatives }) => {
  return (
    <div className={style.relativesBox}>
      {relativeType === ERelativeType.parents && (
        <>
          <div className={style.content}></div>
          <div className={style.titleBox}>
            <div className={style.title}>{relativeType}</div>
            <div className={style.mock}></div>
          </div>
        </>
      )}
      {relativeType === ERelativeType.brothers && (
        <>
          <div className={style.content}></div>
          <div className={style.titleBox}>
            <div className={style.mock}></div>
            <div className={style.title}>{relativeType}</div>
          </div>
        </>
      )}
      {relativeType === ERelativeType.children && (
        <>
          <div className={style.titleBox}>
            <div className={style.title}>{relativeType}</div>
            <div className={style.mock}></div>
          </div>
          <div className={style.content}></div>
        </>
      )}
      {relativeType === ERelativeType.spouses && (
        <>
          <div className={style.titleBox}>
            <div className={style.mock}></div>
            <div className={style.title}>{relativeType}</div>
          </div>
          <div className={style.content}></div>
        </>
      )}
    </div>
  )
}
