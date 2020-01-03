<template>
  <div>
    <v-row v-for="(routine, index) in routines" :key="routine.title">
      <v-col class="pt-0 pb-3">
        <routine-button :index="index" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <v-btn block depressed color="primary" @click="addNewRoutine">
          <v-icon left>fa-plus</v-icon>
          新規ルーチン
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import RoutineButton from '@/components/RoutineButton.vue'

@Component({
  components: {
    RoutineButton
  }
})
export default class extends Vue {
  get routines() {
    return this.$accessor.routines
  }

  addNewRoutine() {
    console.log('add new routine')
  }
}
</script>
