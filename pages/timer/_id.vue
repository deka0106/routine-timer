<template>
  <v-row v-if="routine">
    <v-col>
      <v-row justify="center">
        <div class="subtitle-1">{{ routine.title }}</div>
      </v-row>
      <v-row justify="center">
        <div class="display-1 font-weight-bold">
          <template v-if="task">
            {{ task.title }}
          </template>
          <template v-else>
            完了
          </template>
        </div>
      </v-row>
      <v-row justify="center">
        <div class="py-6">
          <v-progress-circular
            :rotate="-90"
            :size="200"
            :width="10"
            :value="value"
            color="primary"
          >
            <div class="display-2">
              {{ displayTime }}
            </div>
          </v-progress-circular>
        </div>
      </v-row>
      <v-row justify="center" class="pt-4">
        <v-btn icon :width="60" :height="60" color="primary" @click="toggle">
          <v-icon :size="50">
            <template v-if="running">
              fa-pause-circle
            </template>
            <template v-else>
              fa-play-circle
            </template>
          </v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Routine } from 'routine-timer'
import { timeAsNumber, timeAsString } from '@/utils/time'

@Component
export default class extends Vue {
  routine: Routine | null = null
  taskIndex: number = 0
  running: boolean = false
  elapsed: number = 0
  intervals: number[] = []

  get task() {
    return this.routine?.tasks[this.taskIndex]
  }

  get taskTime() {
    return this.task ? timeAsNumber(this.task.time) : 0
  }

  get time() {
    return Math.max(this.taskTime - this.elapsed, 0)
  }

  get displayTime() {
    return timeAsString(this.time)
  }

  get value() {
    return this.taskTime === 0 ? 100 : (this.elapsed / this.taskTime) * 100
  }

  toggle() {
    if (this.running) this.stop()
    else this.start()
  }

  start() {
    this.running = true
    this.intervals.push(window.setInterval(() => this.tick(), 1000))
  }

  stop() {
    this.running = false
    this.intervals.forEach(i => window.clearInterval(i))
  }

  tick() {
    this.elapsed++
    if (this.time === 0) {
      if (this.routine && this.taskIndex < this.routine.tasks.length) {
        this.taskIndex++
        this.elapsed = 0
      } else {
        this.stop()
      }
    }
  }

  mounted() {
    const index = parseInt(this.$route.params.id)
    this.routine = this.$accessor.routines[index]
    if (!this.routine) this.$router.push('/')
  }
}
</script>
