<template>
  <v-row class="text-center">
    <v-col
      cols="8"
      md="8"
      lg="8"
      xl="8"
      class="mt-10 ml-auto mr-auto"
    >
      <template v-if="me.length == 0">
        <v-progress-circular
          class="mt-5"
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        />
      </template>

      <v-card
        v-else
        max-width="100%"
        class="mx-auto text-left"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
          height="300px"
          dark
        >
          <v-row class="fill-height">
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-12 pt-12">
              <div class="display-1 pl-12 pt-12 mr-5">
                {{me.name}}
              </div>
            </v-card-title>
          </v-row>
        </v-img>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-account
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{me.name}}</v-list-item-title>
              <v-list-item-subtitle>Name</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
        </v-list>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-phone
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>314 856 7791</v-list-item-title>
              <v-list-item-subtitle>Phone</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
        </v-list>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-email
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{me.email}}</v-list-item-title>
              <v-list-item-subtitle>Email</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
        </v-list>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-numeric
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{me.id}}</v-list-item-title>
              <v-list-item-subtitle>ID</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import api from '../configuration/api';

  export default {
    name: 'Me',

    async mounted(){
      this.getMe();
    },

    data: () => ({
      me: [],
    }),

    methods: {
      async getMe () {
        const getMeResponse = await api.getMe(this.$store.getters.getToken);
        if (getMeResponse) {
          this.me = getMeResponse.data;
        }
      },
    },
  }
</script>