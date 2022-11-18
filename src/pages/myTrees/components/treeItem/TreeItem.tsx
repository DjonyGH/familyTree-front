import React from 'react'
import { ITree } from '../../../../types'
import style from './treeItem.module.scss'

export const TreeItem: React.FC<ITree> = ({ name, createdAt, createdBy, updatedAt, updatedBy }) => {
  return <div className={style.treeItem}>{name}</div>
}
