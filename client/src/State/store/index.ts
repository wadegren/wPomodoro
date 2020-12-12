import { Store, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootState, rootReducer } from '../reducers'
import { thunk } from '../middleware'

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunk)

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<RootState>

  return store
}
