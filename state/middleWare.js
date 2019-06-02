export const resultMonitor = new Set();
export const monitorMiddleware = store => next => action => {
    let syncActivityFinished = false;
    let actionQueue = [];
  
    function flushQueue() {
      actionQueue.forEach(a => store.dispatch(a)); // flush queue
      actionQueue = [];
    }
  
    function asyncDispatch(asyncAction) {
      actionQueue = actionQueue.concat([asyncAction]);
  
      if (syncActivityFinished) {
        flushQueue();
      }
    }

    const prevState = store.getState();
  
    const res = next(action);

    const state = store.getState();

    for (monitor of resultMonitor) {
        monitor(prevState, state, asyncDispatch);
    }
  
    syncActivityFinished = true;
    Promise.resolve().then(flushQueue)
  
    return res;
};