<template>
  <div>
    <v-row v-for="(routine, index) in routines" :key="`routine[${index}]`">
      <v-col class="pt-0 pb-3">
        <routine-button
          :index="index"
          :on-click="() => openRoutineDialog(index)"
        />
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
    <routine-dialog ref="dialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import RoutineButton from '@/components/RoutineButton.vue'
import RoutineDialog from '@/components/RoutineDialog.vue'

@Component({
  components: {
    RoutineButton,
    RoutineDialog
  }
})
export default class extends Vue {
  $refs!: {
    dialog: RoutineDialog
  }

  get routines() {
    return this.$accessor.routines
  }

  openRoutineDialog(index: number) {
    this.$refs.dialog.open(index)
  }

  addNewRoutine() {
    this.openRoutineDialog(this.$accessor.routines.length)
  }
}
</script>

<style lang="scss" scoped>
.container.fill-height > .row {
  max-width: calc(100% + 24px);
}
</style>
