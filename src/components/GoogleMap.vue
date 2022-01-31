<template>
  <div id="mapContainer">
    <a class="msgBtn" href="#message">
    </a>
    <GmapMap 
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 800px; height: 450px; margin-top: 10px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"/>
    </GmapMap>
    <div id="navigation">
      <button @click="drawMarkers" class="icon">
        <ion-icon name="location-outline"></ion-icon>
      </button>
      <button @click="clearMap" class="icon">
        <ion-icon name="close-circle-outline"></ion-icon>
      </button>
      <button class="icon">
        <a class="msgBtn" href="#message">
          <ion-icon name="chatbubbles-outline"></ion-icon>
        </a>
      </button>
        <div class="indicator"></div>
    </div>
  </div>
</template>

<script>
const taxi1 = { lat: -33.876115, lng: 18.5008116 };
const taxi2 = { lat: -33.9685533, lng: 18.5662383 };
const taxi3 = { lat: -34.0461583, lng: 18.7047383 };
const taxi4 = { lat: -31.8994016, lng: 26.8671716 };
const taxi5 = { lat: -31.8942983, lng: 26.878175 };
const taxi6 = { lat: -31.9998233, lng: 27.5801216, img:'../assets/Quicloc8-logo.png'};
export default {
  name: "GoogleMap",
  data() {
    return {
      markers: [],
      center: taxi1,
    };
  },
  methods: {
    drawMarkers() {
      this.markers = [
        {
          position: taxi1,
        },
        {
          position: taxi2,
        },
        {
          position: taxi3,
        },
        {
          position: taxi4,
        },
        {
          position: taxi5,
        },
        {
          position: taxi6,
        },
      ];
    },
    clearMap() {
      this.markers = [];
    },
  },
};
// const list = document.querySelectorAll('.list');
// function activeLink() {
//   list.forEach((item) =>
//   item.classList.remove('active'));
//   this.classList.add('active');
// }
// +
// list.forEach((item) =>
// item.addEventListener('click', activeLink));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mapContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative;
  bottom: 20px; */
  height: 100vh;
}
.gm-style img {
  background-image: url(../assets/Quicloc8-logo.png);
}
:root {
  --clr: #2e302f;
}
#navigation {
  position: relative;
  top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>