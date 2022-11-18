import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import { treeActionCreator } from '../../store/reducers/tree/action-creators'
import { ERelativeType, IPerson, ITree } from '../../types'
import { Person } from './components/person/Person'
import { Relatives } from './components/relatives/Relatives'
import style from './tree.module.scss'

export const Tree: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { id: treeId } = useParams<{ id: string }>()
  const { tree } = useTypedSelector((state) => state.treeReducer)

  useEffect(() => {
    treeId && dispatch(treeActionCreator.fetchTree(treeId))
    dispatch(generalActionCreator.setTitle('Дерево'))
  }, []) //eslint-disable-line

  const person = useMemo(() => {
    if (tree) {
      const person = { ...tree } as Partial<ITree>
      delete person.parents
      delete person.brothers
      delete person.children
      delete person.spouses
      return person
    } else return null
  }, [tree])

  return (
    <div className={style.tree}>
      <div className={style.row}>
        <Relatives relativeType={ERelativeType.parents} relatives={tree?.parents || []} />
        <Relatives relativeType={ERelativeType.brothers} relatives={tree?.brothers || []} />
      </div>
      <div className={style.row}>
        <Relatives relativeType={ERelativeType.children} relatives={tree?.children || []} />
        <Relatives relativeType={ERelativeType.spouses} relatives={tree?.spouses || []} />
      </div>
      <Person person={person as IPerson} />
    </div>
  )
}
