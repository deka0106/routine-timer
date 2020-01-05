<template>
  <v-dialog v-if="routine" v-model="dialog" max-width="800">
    <v-card color="#ccddff">
      <v-form>
        <v-card-title class="primary">
          <v-text-field
            v-model="routine.title"
            dark
            dense
            hide-details
            single-line
            label="ルーチン名"
          />
        </v-card-title>

        <div class="px-2">
          <v-row v-for="(task, index) in routine.tasks" :key="`task[${index}]`">
            <v-col class="pt-2 pb-0">
              <v-card :elevation="0">
                <v-row align="center" justify="space-around" class="mx-0">
                  <v-col class="py-2">
                    <v-text-field
                      v-model="task.title"
                      dense
                      hide-details
                      single-line
                      label="タスク名"
                    />
                  </v-col>
                  <v-col cols="auto" class="py-2">
                    <v-text-field
                      v-model="task.time"
                      dense
                      hide-details
                      single-line
                      label="時間"
                      type="time"
                    />
                  </v-col>
                  <v-col cols="auto" class="py-2">
                    <v-btn icon small @click="() => deleteTask(index)">
                      <v-icon small>fa-trash</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <div class="px-2">
          <v-row>
            <v-col class="py-2">
              <v-btn block depressed @click="addNewTask">
                <v-icon left>fa-plus</v-icon>
                新規タスク
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <v-divider />

        <v-card-actions>
          <v-btn block depressed color="primary" @click="save">
            <v-icon left>fa-save</v-icon>
            保存する
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Routine } from 'routine-timer'
import cloneDeep from 'lodash.clonedeep'

@Component
export default class RoutineDialog extends Vue {
  index: number = 0
  dialog: boolean = false
  routine: Routine | null = null

  get routines() {
    return this.$accessor.routines
  }

  addNewTask() {
    if (this.routine) this.routine.tasks.push({ title: '', time: '00:00' })
  }

  deleteTask(index: number) {
    if (this.routine) this.routine.tasks.splice(index, 1)
  }

  open(index: number) {
    this.index = index
    this.dialog = true
    this.routine = cloneDeep(this.routines[this.index]) || {
      title: '',
      tasks: []
    }
  }

  close() {
    this.dialog = false
  }

  save() {
    if (this.routine) {
      this.$accessor.updateRoutine({ index: this.index, routine: this.routine })
    }
    this.close()
  }
}
</script>

<style lang="scss" scoped>
.dialog-background {
  background-color: #ccddff;
}
</style>
