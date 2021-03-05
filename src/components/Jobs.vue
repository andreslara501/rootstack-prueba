<template>
  <v-row class="text-center">
    <v-col
      cols="8"
      md="8"
      lg="8"
      xl="8"
      class="pr-0"
    >
      <GMap :jobs="jobs"/>
    </v-col>
    <v-col
      cols="4"
      md="4"
      lg="4"
      xl="4"
      class="pl-0"
    >
      <template v-if="jobs.length == 0">
        <v-progress-circular
          class="mt-5"
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        />
      </template>
      <template v-else>
        <List :jobs="jobs" />
      </template>
    </v-col>
  </v-row>
</template>

<script>
  import GMap from './thirds/GMap'
  import List from './presentational/List'
  import api from '../configuration/api';

  export default {
    name: 'Jobs',

    components: {
      GMap,
      List
    },

    async mounted(){
      this.getJobs();
    },

    data: () => ({
      jobs: [],
    }),

    methods: {
      async getJobs () {
        const getJobsResponse = await api.getJobs(this.$store.getters.getToken);
        if (getJobsResponse) {
          this.jobs = getJobsResponse.data["data"];
        }
      },
    },
  }
</script>
