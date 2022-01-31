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
    <ul class="nav">
      <span class="nav-indicator"></span>
      <li>
        <a @click="drawMarkers">
          <i class='bx bx-map'></i>
          <span class="title">Locate</span>
        </a>
      </li>
      <li>
        <a @click="clearMap" class="nav-item-active">
          <i class='bx bx-x-circle'></i>
          <span class="title">Clear</span>
        </a>
      </li>
      <li>
          <a href="#message">
            <i class="bx bxs-chat"></i>
            <span class="title">Messages</span>
          </a>
      </li>
    </ul>
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
.nav {
  position: relative;
  list-style-type: none;
  display: flex;
  height: 60px;
  border-radius: 12px;
  background: #FFCCBC;
  top: 35px;
}
.nav li a {
  text-decoration: none;
  color: #2e302f;
  width: 120px;
  height: 100%;
  display: inline-grid;
  place-items: center;
  font-size: 30px;
  z-index: 1;
  position: relative;
}
.nav li a .title {
  display: none;
  font-size: 16px;
}
.nav li a:hover {
  color: #fff;
}
.nav li a.nav-item-active {
  color: #fff;
  transform: translateY(-30%);
  font-size: 45px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
}
.nav li a.nav-item-active .title {
  display: block;
}
.nav .nav-indicator {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #FFCCBC;
  position: absolute;
  top: -30px;
  left: calc(200px - 55px);
  transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
:root {
  --secondary: #FFCCBC;
  --accent: #2e302f;
  --bg-nav: #220455;
  --color-nav: #644c89;
  --color-nav-active: #fff;
}
</style>