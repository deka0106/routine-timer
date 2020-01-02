import { Routine } from 'routine-timer'
import { state, mutations } from '@/store'

describe('$store', () => {
  test('add routine', () => {
    const mock: ReturnType<typeof state> = {
      routines: []
    }
    const routine: Routine = {
      title: 'routine',
      tasks: [{ title: 'task', time: 360000 }]
    }
    mutations.addRoutine(mock, routine)
    expect<Routine[]>(mock.routines).toEqual([routine])
  })

  test('delete routine', () => {
    const routine: Routine = {
      title: 'routine',
      tasks: [{ title: 'task', time: 360000 }]
    }
    const mock: ReturnType<typeof state> = {
      routines: [
        {
          title: 'to be deleted',
          tasks: []
        },
        routine
      ]
    }
    mutations.deleteRoutine(mock, 0)
    expect<number>(mock.routines.length).toEqual(1)
    expect<Routine>(mock.routines[0]).toEqual(routine)
  })

  test('update routine', () => {
    const mock: ReturnType<typeof state> = {
      routines: [
        {
          title: 'to be updated',
          tasks: []
        },
        {
          title: 'routine',
          tasks: []
        }
      ]
    }
    const routine: Routine = {
      title: 'routine',
      tasks: [{ title: 'task', time: 360000 }]
    }
    mutations.updateRoutine(mock, { index: 0, routine })
    expect<Routine>(mock.routines[0]).toEqual(routine)
  })
})
