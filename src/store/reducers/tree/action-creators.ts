import { TAppDispatch } from '../..'
import { ETreeAction, ISetTreeAction } from './types'
import { generalActionCreator } from '../general/action-creators'
import { ITree } from '../../../types'
import http from '../../../utils/http'
import { tree } from './mock'

export const treeActionCreator = {
  setTree: (tree: ITree): ISetTreeAction => ({
    type: ETreeAction.SET_TREE,
    payload: tree
  }),
  fetchTree: (id: string) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(generalActionCreator.setIsLoading(true))
      console.log('FETCH TREE', id)
      // const fetchedTree: ITree[] = await http.get(`/tree/${id}`)
      const fetchedTree: ITree = tree
      dispatch(treeActionCreator.setTree(fetchedTree))
      dispatch(generalActionCreator.setSuccess('Дерево успешно получено'))
      return true
    } catch (error: any) {
      dispatch(generalActionCreator.setError(String(error.response.data.message)))
    } finally {
      dispatch(generalActionCreator.setIsLoading(false))
    }
  }
}
