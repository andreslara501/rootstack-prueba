import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    lat: parseInt(10.0),
    lng: parseInt(10.0),
    zoom: 6
  },

  mutations: {
    SET_TOKEN: function(state, token) {
      localStorage.setItem('rstoken', token);
      state.token = token;
    },
    DELETE_TOKEN: function(state) {
      localStorage.setItem('rstoken', '');
      state.token = '';
    },

    SET_LAT: function(state, lat) {
      state.lat = lat;
    },
    SET_LNG: function(state, lng) {
      state.lng = lng;
    },
    SET_ZOOM: function(state, zoom) {
      state.zoom = zoom;
    },
  },

  getters: {
    getToken: state => {
      if (localStorage.getItem('rstoken')) {
        state.token = localStorage.getItem('rstoken');
      }
      return state.token
    },

    getPosition: state => {
      return {
        lat: parseInt(state.lat),
        lng: parseInt(state.lng)
      }
    },

    getZoom: state => {
      return state.zoom;
    }
  }
})
