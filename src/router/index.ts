import React from 'react'
import { ToAuth } from '../components/toAuth/ToAuth'
import { AboutUs } from '../pages/aboutUs/AboutUs'
import { FirstPage } from '../pages/firstPage/FirstPage'
import { Messages } from '../pages/messages/Messages'
import { MyTrees } from '../pages/myTrees/MyTrees'
import { NotFound } from '../pages/notFound/NotFound'
import { Tree } from '../pages/Tree/Tree'

export interface IRoute {
  path: string
  component: React.ComponentType
  exact?: boolean
}
export enum ERoutes {
  FIRST_PAGE = '/',
  MY_TREES = '/my_trees',
  TREE = '/tree',
  MESSAGES = '/messages',
  ABOUT_US = '/about_us',
  NOT_FOUND = '/not_found',
  NOT_AUTH = '/not_auth'
}

export const publicRoutes: IRoute[] = [
  {
    path: ERoutes.FIRST_PAGE,
    component: FirstPage,
    exact: true
  },
  {
    path: ERoutes.ABOUT_US,
    component: AboutUs,
    exact: true
  },
  {
    path: ERoutes.NOT_FOUND,
    component: NotFound,
    exact: true
  }
]

export const privateRoutes: IRoute[] = [
  {
    path: ERoutes.MY_TREES,
    component: MyTrees,
    exact: true
  },
  {
    path: `${ERoutes.TREE}/:id`,
    component: Tree,
    exact: true
  },
  {
    path: ERoutes.MESSAGES,
    component: Messages,
    exact: true
  },
  {
    path: ERoutes.NOT_AUTH,
    component: ToAuth,
    exact: true
  }
]
