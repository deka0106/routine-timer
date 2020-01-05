import Vue from 'vue'
import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree
} from 'nuxt-typed-vuex'

import { Routine } from 'routine-timer'

function save(state: RootState) {
  window.localStorage.setItem('routines', JSON.stringify(state.routines))
}

export const state = (): {
  routines: Routine[]
} => ({
  routines: []
})

type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  addRoutine(state, routine: Routine) {
    state.routines.push(routine)
    save(state)
  },
  deleteRoutine(state, index: number) {
    state.routines.splice(index, 1)
    save(state)
  },
  updateRoutine(
    state,
    { index, routine }: { index: number; routine: Routine }
  ) {
    Vue.set(state.routines, index, routine)
    save(state)
  },
  load(state) {
    const routines: Routine[] = JSON.parse(
      window.localStorage.getItem('routines') || '[]'
    )
    Vue.set(state, 'routines', routines)
  }
})

export const actions = actionTree({ state, getters, mutations }, {})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
})
