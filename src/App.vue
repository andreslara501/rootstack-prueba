<template>
  <v-app>
    <TopBar/>
    <v-main>
      <transition
        name="slide-x-transition"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/presentational/TopBar';

export default {
  name: 'App',

  components: {
    TopBar
  },

  data: () => ({
    //
  }),
};
</script>
