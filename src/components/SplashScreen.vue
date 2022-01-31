<template>
<div :class="{ loader: true, fadeout: !isLoading }">
<img src="../assets/Quicloc8-logo.png" />
</div>
</template>

<script>
export default {
    name: "SplashScreen",
    props: ["isLoading"],
};
</script>

<style>
:root {
  --secondary: #FFCCBC;
  --accent: #2e302f;
}
.loader {
    background-color: var(--secondary);
    bottom: 0;
    color: #FF5722;
    display: block;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    left: 0;
    overflow: hidden;
    padding-top: 10vh;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 123456789;
}
.loader img {
    position: relative;
    top: 25%;
}
.fadeout {
    animation: fadeout 2s forwards;
}
@keyframes fadeout {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
</style>