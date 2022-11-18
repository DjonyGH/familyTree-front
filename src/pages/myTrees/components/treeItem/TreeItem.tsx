import React from 'react'
import { ITreeItem } from '../../../../types'
import style from './treeItem.module.scss'

export const TreeItem: React.FC<ITreeItem> = ({ name, createdAt, createdBy, updatedAt, updatedBy }) => {
  return <div className={style.treeItem}>{name}</div>
}
