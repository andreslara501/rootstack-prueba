<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mt-10 ml-auto mr-auto"
        cols="12"
        sm="6"
        md="6"
      >
        <v-alert
          :value="notification"
          border="top"
          color="red"
          colored-border
          type="info"
          elevation="2"
          transition="scale-transition"
          dismissible
        >
          Error: {{notificationErrorText}}
        </v-alert>
        <v-card
          elevation="2"
          class="pa-8"
        >
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <h1>Login Rootstack Geojobs</h1>
            <h6 @click="autocomplete">Autocomplete</h6>
            <template v-if="!loadingForm">
              <v-text-field
                class="my-5"
                v-model="loginData.email"
                :rules="rules.email"
                label="E-mail"
                required
              />
              <v-text-field
                class="mb-5"
                v-model="loginData.password"
                :rules="rules.password"
                label="Password"
                required
              />
              <v-btn
                color="warning"
                @click="login"
                block
              >
                Login
              </v-btn>
            </template>
            <template v-if="loadingForm">
              <v-progress-circular
                class="mt-5"
                :size="70"
                :width="7"
                color="purple"
                indeterminate
              />
            </template>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import api from '../configuration/api';

  export default {
    name: 'Login',
    data: () => ({
      valid: true,

      loadingForm: false,

      notification: false,
      notificationErrorText: '',
      errorList: {
        "401": `Usuario o contraseña incorrectos`
      },

      loginData: {
        email: '',
        password: ''
      },

      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: [
          v => !!v || 'Email is required'
        ],
      }
    }),
    methods: {
      async login () {
        if (this.$refs.form.validate()) {
          this.loadingForm = true;

          const apiLoginResult = await api.login(this.loginData);
          if (apiLoginResult) {
            if (apiLoginResult.status == 401) {
              this.notificationErrorText = this.errorList[apiLoginResult.status];
              this.loadingForm = false;
              this.notification = true;
            }
            if (apiLoginResult.status == 200) {
              this.$store.commit('SET_TOKEN', apiLoginResult.data.access_token);
              this.$router.push('/jobs')
            }
          }
        }
      },
      autocomplete(){
        this.loginData.email = 'hcarter@example.net';
        this.loginData.password = 'password';
      }
    },
  }
</script>
