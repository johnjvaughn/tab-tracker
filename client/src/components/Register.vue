<template>
  <v-flex xs6 offset-xs3>
    <panel title="Register">
      <form
        name="tab-tracker-form"
        autocomplete="off">
        <v-text-field
          label="Email"
          type="email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
        <br>
        <div class="error" v-html="error"></div>
        <br>
        <v-btn class="cyan" dark
          @click="register">
          Register
        </v-btn>
      </form>
    </panel>
  </v-flex>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('songs')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
