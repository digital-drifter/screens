<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-text>
          <v-text-field v-model="form.name" label="Website Name"></v-text-field>
          <v-text-field v-model="form.url" label="Website URL"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="capture">Capture</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Screenshooter from '@/services'

  @Component
  export default class Dashboard extends Vue {
    form: object = {
      url: '',
      name: ''
    }

    capture () {
      // Screenshooter.capture(this.form.name, this.form.url)
    }
  }
</script>
