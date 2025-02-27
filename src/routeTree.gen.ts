/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const ExperienceLazyImport = createFileRoute('/experience')()
const CodeIndexLazyImport = createFileRoute('/code/')()
const CodeStopwatchLazyImport = createFileRoute('/code/stopwatch')()

// Create/Update Routes

const ExperienceLazyRoute = ExperienceLazyImport.update({
  id: '/experience',
  path: '/experience',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/experience.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CodeIndexLazyRoute = CodeIndexLazyImport.update({
  id: '/code/',
  path: '/code/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/code/index.lazy').then((d) => d.Route))

const CodeStopwatchLazyRoute = CodeStopwatchLazyImport.update({
  id: '/code/stopwatch',
  path: '/code/stopwatch',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/code/stopwatch.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/experience': {
      id: '/experience'
      path: '/experience'
      fullPath: '/experience'
      preLoaderRoute: typeof ExperienceLazyImport
      parentRoute: typeof rootRoute
    }
    '/code/stopwatch': {
      id: '/code/stopwatch'
      path: '/code/stopwatch'
      fullPath: '/code/stopwatch'
      preLoaderRoute: typeof CodeStopwatchLazyImport
      parentRoute: typeof rootRoute
    }
    '/code/': {
      id: '/code/'
      path: '/code'
      fullPath: '/code'
      preLoaderRoute: typeof CodeIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/experience': typeof ExperienceLazyRoute
  '/code/stopwatch': typeof CodeStopwatchLazyRoute
  '/code': typeof CodeIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/experience': typeof ExperienceLazyRoute
  '/code/stopwatch': typeof CodeStopwatchLazyRoute
  '/code': typeof CodeIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/experience': typeof ExperienceLazyRoute
  '/code/stopwatch': typeof CodeStopwatchLazyRoute
  '/code/': typeof CodeIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/experience' | '/code/stopwatch' | '/code'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/experience' | '/code/stopwatch' | '/code'
  id: '__root__' | '/' | '/experience' | '/code/stopwatch' | '/code/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ExperienceLazyRoute: typeof ExperienceLazyRoute
  CodeStopwatchLazyRoute: typeof CodeStopwatchLazyRoute
  CodeIndexLazyRoute: typeof CodeIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ExperienceLazyRoute: ExperienceLazyRoute,
  CodeStopwatchLazyRoute: CodeStopwatchLazyRoute,
  CodeIndexLazyRoute: CodeIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/experience",
        "/code/stopwatch",
        "/code/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/experience": {
      "filePath": "experience.lazy.tsx"
    },
    "/code/stopwatch": {
      "filePath": "code/stopwatch.lazy.tsx"
    },
    "/code/": {
      "filePath": "code/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
