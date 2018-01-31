<template>
  <v-flex xs6 offset-xs3>
    <panel title="Login">
      <form
        name="tab-tracker-form">
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
        ></v-text-field>
        <br>
        <div class="error" v-html="error"></div>
        <br>
        <v-btn class="cyan" dark
          @click="login">
          Login
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
