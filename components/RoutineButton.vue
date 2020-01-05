<template>
  <v-card :elevation="0" @click.prevent="onClick">
    <v-row align="center" justify="space-around">
      <v-col>
        <div class="pl-4">
          {{ routine.title }}
        </div>
      </v-col>
      <v-col cols="auto" class="py-1">
        <div class="pr-2">
          <v-btn icon large color="primary" :to="`/timer/${index}`">
            <v-icon large>fa-play-circle</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class RoutineButton extends Vue {
  @Prop({ default: 0 })
  index!: number

  @Prop({ required: true })
  onClick!: (e: Event) => void

  get routine() {
    return this.routines[this.index]
  }

  get routines() {
    return this.$accessor.routines
  }
}
</script>
