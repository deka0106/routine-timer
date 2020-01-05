import Vue from 'vue'
import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree
} from 'nuxt-typed-vuex'

import { Routine } from 'routine-timer'

export const state = (): {
  routines: Routine[]
} => ({
  routines: []
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  addRoutine: (state, routine: Routine) => {
    state.routines.push(routine)
  },
  deleteRoutine: (state, index: number) => {
    state.routines.splice(index, 1)
  },
  updateRoutine: (
    state,
    { index, routine }: { index: number; routine: Routine }
  ) => {
    Vue.set(state.routines, index, routine)
  }
})

export const actions = actionTree({ state, getters, mutations }, {})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
})
