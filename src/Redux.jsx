// 1　storeを作る
const createStore = (reducer) => {
  //2 stateを作る
  let state = 0;
  // 7-1
  const listeners = [];
  // 5-1 アクション用の関数を定義
  const dispatch = (action) => {
    // 6-1　新しいstateが返る
    const newState = reducer(state, action);
    // 6-2　新しいstateが返る
    state = newState;
    // 7-2
    listeners.map((listener) => listener());
  };

  const subscribe = (listener) => {
    // 7-3
    listeners.push(listener);
  };

  return {
    // 5-2 アクション用の関数を定義
    dispatch,
    //３　getState()を入れる
    getState: () => state,
    // 7-4
    subscribe
  };
};

// 以下は使い方 8
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
  }
};
// 9
const store = createStore(reducer);

// 10
const logger = () => {
  console.log(store.getState());
};

store.dispatch({ type: "increment" });
store.subscribe(logger);

store.dispatch({ type: "increment" }); // -> 2
store.dispatch({ type: "increment" }); // -> 3
store.dispatch({ type: "increment" }); // -> 4

export const Redux = () => {
  return;
};
