<style>
html {
  overflow-y: hidden;
}
</style>

<template>
  <v-app>
    <!--  -->
    <v-app-bar
      density="compact"
      fixed
      app
      color="#204ac8"
    >
      <v-row>
        <v-col cols="12">
          <h2 class="text-white text-start">TEST</h2>
        </v-col>
      </v-row>
    </v-app-bar>

    <!--  -->
    <v-navigation-drawer
      color="#4169e1"
      floating
      permanent
      width="200"
    >
      <v-list
        bg-color="#4169e1"
        density="compact"
        nav
      >
        <v-list-item
          class="text-white text-start"
          value="0"
          title="First"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--  -->
    <v-main>
      <v-card
        class="h-screen ma-0 pa-0"
        color="dark-grey"
        flat
        tile
      >
        <NuxtPage />
      </v-card>
    </v-main>
  </v-app>
</template>

<script
  lang="ts"
  setup
></script>
