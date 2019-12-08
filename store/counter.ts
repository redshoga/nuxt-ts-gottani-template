import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { store } from "~/store";

interface CounterState {
  count: number;
}

@Module({
  // https://github.com/championswimmer/vuex-module-decorators#module-re-use-use-with-nuxtjs
  stateFactory: true,
  name: "count",
  namespaced: true,
  dynamic: true,
  store
})
class Counter extends VuexModule implements CounterState {
  // State
  private rawCount = 0

  // Getter
  get count(): number {
    return this.rawCount
  }

  // Mutation
  @Mutation
  private INCREMENT(delta: number) {
    this.rawCount += delta
  }
  @Mutation
  private DECREMENT(delta: number) {
    this.rawCount -= delta
  }

  // Action
  // action 'increment' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'INCREMENT' })
  public increment() {
    return 5
  }
  // default syntax
  @Action({})
  public decrement() {
    this.DECREMENT(5);
  }
}
export default getModule(Counter);
