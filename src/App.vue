<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer fixed clipped v-model="drawer" app>
        <v-list dense>
          <v-list-tile v-for="item in items" :key="item.text" :to="{ name: item.to }" exact>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="secondary" dense fixed clipped-left app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" icon="mdi-menu"></v-toolbar-side-icon>
        <v-icon class="mx-3">fa-youtube</v-icon>
        <v-toolbar-title class="mr-5 align-center">
          <span class="title">Screenshots</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
    protected drawer: boolean = true
    protected items: object[] = [
      {
        icon: 'mdi-view-dashboard',
        text: 'Dashboard',
        to: 'dashboard'
      },
      {
        icon: 'mdi-monitor-cellphone',
        text: 'Browse Screen Sizes',
        to: 'browse'
      },
      {
        icon: 'mdi-settings',
        text: 'Settings',
        to: 'settings'
      },
    ]

    created () {
      this.$vuetify.icons.menu = 'mdi-menu'
    }
  }
</script>
