<template>
  <v-app>
    <v-app-bar app color="primary" dark :elevation="0">
      <v-toolbar-title class="headline">ルーチンタイマー</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.v-application {
  background-color: #ccddff !important;
}
</style>
