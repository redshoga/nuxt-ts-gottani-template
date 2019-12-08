// https://qiita.com/yoshinbo/items/70f109db7c3de4b4a99f
import Vuex, { Store } from "vuex";

interface RootState {}
export const store = new Vuex.Store<RootState>({
  actions: {
    nuxtServerInit: () => {}
  }
});
const createStore = (): Store<RootState> => {
  return store;
};
export default createStore;
