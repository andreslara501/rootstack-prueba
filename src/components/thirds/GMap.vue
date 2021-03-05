<template>
  <div>
    <div v-if="!loading">
      <GmapMap
        :center="this.$store.getters.getPosition"
        :zoom="this.$store.getters.getZoom"
        map-type-id="terrain"
        style="width: 100%; height: calc(100vh - 80px)"
      >
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoPosition"
          :opened="infoOpened"
          @closeclick="infoOpened=false"
        >
        <div v-html="infoContent"></div>
        </GmapInfoWindow>
        <GmapMarker
          :key="index"
          v-for="(marker, index) in markers"
          :position="marker.position"
          :clickable="true"
          :draggable="false"
          :animation="marker.animation"
          @click="toggleInfo(marker, index)"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GMap',

    props: ['jobs'],

    data: () => ({
      loading: false,

      markers: [
      ],

      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      center: {
        lat:10,
        lng:10
      }
    }),

    mounted(){
      //console.log(this.$store.getters.getPosition);
      //this.center = this.$store.getters.getPosition
      setTimeout(() => { this.getMarkers(); }, 3000);
    },
    methods: {
      marker (marker) {
        this.infoContent = marker.infoText;
      },

      getPosition: function(marker) {
        return {
          lat: parseFloat(marker.position.lat),
          lng: parseFloat(marker.position.lng)
        }
      },
      toggleInfo: function(marker, key) {
        this.center = marker.position;
        this.infoPosition = this.getPosition(marker);
        this.infoContent = marker.infoText;
        if (this.infoCurrentKey == key) {
          this.infoOpened = !this.infoOpened;
        } else {
          this.infoOpened = true;
          this.infoCurrentKey = key;
        }
      },
      getMarkers: function() {
        this.jobs.map(job => {
          const tmpJob = {
            position: {
              lat: parseInt(job.latitude),
              lng: parseInt(job.longitude)
            },
            infoText: `
              <strong>${job.title} - <span style="color: red">${job.status}</span></strong>
              <div>Assigned to: ${job.assigned_to}</div>
              <br>
              <div>${job.description}</div>
              <br>
              <div>${job.date}</div>
              <img src="${job.image}"/>
            `,
          }
          this.markers.push(tmpJob);
        })

        this.$store.commit('SET_LAT', this.markers[0].position.lat);
        this.$store.commit('SET_LNG', this.markers[0].position.lng);
      }
    },
  }
</script>
