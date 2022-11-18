import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { treeListActionCreator } from '../../store/reducers/treeList/action-creators'
import { TreeItem } from './components/treeItem/TreeItem'
import style from './myTrees.module.scss'

export const MyTrees: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { treeList } = useTypedSelector((state) => state.treeListReducer)
  useEffect(() => {
    dispatch(treeListActionCreator.fetchTreeList())
  }, []) //eslint-disable-line

  return (
    <div className={style.myTrees}>
      {treeList.map((tree) => (
        <TreeItem {...tree} key={tree.id} />
      ))}
    </div>
  )
}
