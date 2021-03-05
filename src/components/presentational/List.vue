<template>
  <div id="list">
      <v-list-item-group
        active-class=""
      >
        <template v-for="(item, index) in jobs">
          <v-list-item
            :key="item.title"
            @click="changeCenter(item.latitude, item.longitude)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.assigned_to"></v-list-item-subtitle>
              <div class="date">{{item.date}}</div>
              <p>{{item.description}}</p>
            </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-html="status(item.status)">

                </v-list-item-action-text>

                <v-icon
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
          </v-list-item>

          <v-divider
            :key="index"
          />
        </template>
      </v-list-item-group>
  </div>
</template>

<script>
  export default {
    name: 'List',

    props: ['jobs'],

    methods: {
      status (status) {
        if (status == 'pending') {
          return '<span class="deep-orange--text">pending</span>'
        }

        if (status == 'complete') {
          return '<span class="light-blue--text">complete</span>'
        }

        if (status == 'in progress') {
          return '<span>in progress</span>'
        }
      },
      changeCenter (lat, lng) {
        this.$store.commit('SET_LAT', lat);
        this.$store.commit('SET_LNG', lng);
        this.$store.commit('SET_ZOOM', 6);
      }
    }
  }
</script>
<style lang="scss" scoped>
  #list{
    overflow: auto;
    height: calc(100vh - 100px);
  }
  *{
    text-align:left;
  }
  p{
    font-size: 12px;
    opacity: 0.4;
  }
  .date{
    font-size: 12px;
    opacity: 0.7;
  }
</style>