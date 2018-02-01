<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{name: 'songs'}">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{name: 'songs'}">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer/>

    <v-toolbar-items>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{name: 'login'}">
        Log In
      </v-btn>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{name: 'register'}">
        Sign Up
      </v-btn>
      <v-btn flat dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout()">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'songs'})
    }
  }
}
</script>

<style>
.home {
  cursor: pointer;
}
.home:hover {
  color: #ddd;
}
</style>
