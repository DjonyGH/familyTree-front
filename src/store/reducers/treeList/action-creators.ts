import { TAppDispatch } from '../..'
import { ETreeListAction, ISetTreeListAction } from './types'
import { generalActionCreator } from '../general/action-creators'
import { ITree } from '../../../types'
import http from '../../../utils/http'
import { trees } from './mock'

export const treeListActionCreator = {
  setTreeList: (treeList: ITree[]): ISetTreeListAction => ({
    type: ETreeListAction.SET_TREE_LIST,
    payload: treeList
  }),
  fetchTreeList: () => async (dispatch: TAppDispatch) => {
    try {
      dispatch(generalActionCreator.setIsLoading(true))
      console.log('FETCH TREE LIST')
      // const treeList: ITree[] = await http.get('/treeList')
      const treeList: ITree[] = trees
      dispatch(treeListActionCreator.setTreeList(treeList))
      dispatch(generalActionCreator.setSuccess('Список деревьев успешно получен'))
      return true
    } catch (error: any) {
      dispatch(generalActionCreator.setError(String(error.response.data.message)))
    } finally {
      dispatch(generalActionCreator.setIsLoading(false))
    }
  }
}
