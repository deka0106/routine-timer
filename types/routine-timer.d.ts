declare module 'routine-timer' {
  interface Routine {
    title: string
    tasks: Task[]
  }

  interface Task {
    title: string
    time: number
  }
}
