let store = {
  dispatch: function (action) {
    console.log('action:', action)
  },
  getState: function () {
    return '456'
  }
}

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    console.log('789')
    return next(action)
  }catch (err) {
    console.error('err:', err)
    Reven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

const applyMiddleware = (...middlewares) => {
  // middlewares.reverse()
  return middlewares.reduce((pre, cur) => { // 组合
    console.log(pre.toString())
    return cur(store)(pre) //middleware柯里化
  }, store.dispatch)
}

let composeMiddleware = applyMiddleware(logger, crashReporter)
console.log(composeMiddleware.toString())
composeMiddleware('123')