<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index">
          <v-list-tile-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.device }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import devices from '@/services/devices'
  import {monitors} from '@/services/monitors'

  @Component
  export default class Browse extends Vue {
    get items(): object[] {
      return monitors.map((monitor: string[]) => {
        return {
          device: monitor[0],
          icon: `mdi-${monitor[13].toLowerCase()}`
        }
      })
    }
  }
</script>
