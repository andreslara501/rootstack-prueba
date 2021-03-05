<template>
	<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          :src="require('../../assets/logo.png')"
          transition="scale-transition"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="this.$store.getters.getToken.length"
        to="/jobs"
        text
      >
        <span class="mr-2">Jobs map</span>
        <v-icon>mdi-account-hard-hat</v-icon>
      </v-btn>

      <v-btn
        v-if="this.$store.getters.getToken.length"
        to="/me"
        text
      >
        <span class="mr-2">Me profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn
        v-if="this.$store.getters.getToken.length"
        text
        @click="signout"
      >
        <span class="mr-2">Sign out</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
  import router from '../../router';

  export default {
    name: 'Topbar',

    methods: {
      async signout () {
        this.$store.commit('DELETE_TOKEN');
        router.push('/')
      },
    },
  }
</script>