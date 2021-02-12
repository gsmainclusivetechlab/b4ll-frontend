<template>
  <div id="app" class="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/layout/Footer";
export default {
  name: "app",
  components: {
    Footer,
  },
};
</script>
<style>
/* spartan-100 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 100;
  src: url("./fonts/spartan-v3-latin-100.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-100.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-100.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-100.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-100.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-100.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
/* spartan-300 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 300;
  src: url("./fonts/spartan-v3-latin-300.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-300.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-300.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-300.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-300.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-300.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
/* spartan-200 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 200;
  src: url("./fonts/spartan-v3-latin-200.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-200.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-200.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-200.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-200.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-200.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
/* spartan-regular - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 400;
  src: url("./fonts/spartan-v3-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-regular.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("./fonts/spartan-v3-latin-regular.svg#Spartan") format("svg"); /* Legacy iOS */
}
/* spartan-500 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 500;
  src: url("./fonts/spartan-v3-latin-500.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-500.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-500.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-500.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-500.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
/* spartan-700 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  src: url("./fonts/spartan-v3-latin-700.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-700.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-700.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-700.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-700.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
/* spartan-600 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 600;
  src: url("./fonts/spartan-v3-latin-600.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-600.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-600.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-600.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-600.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-600.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
/* spartan-800 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 800;
  src: url("./fonts/spartan-v3-latin-800.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-800.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-800.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-800.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-800.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-800.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
/* spartan-900 - latin */
@font-face {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 900;
  src: url("./fonts/spartan-v3-latin-900.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./fonts/spartan-v3-latin-900.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./fonts/spartan-v3-latin-900.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./fonts/spartan-v3-latin-900.woff")
      format("woff"),
    /* Modern Browsers */ url("./fonts/spartan-v3-latin-900.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./fonts/spartan-v3-latin-900.svg#Spartan")
      format("svg"); /* Legacy iOS */
}
body,
html {
  overflow: hidden;
  overflow-y: auto;
}
a {
  font-weight: bold;
  color: #fff;
}
.app {
  font-family: "Spartan";
  font-size: 14px;
  line-height: normal;
  font-weight: 400;
}
a,
a:hover {
  text-decoration: none;
}
h1 {
  font-size: 42px;
  font-weight: bold;
  color: #ffffff;
}
h2 {
  font-size: 30px;
  font-weight: bold;
    line-height: 43px;
  padding-bottom: 18px;
}
h3 {
  font-size: 30px;
  font-weight: bold;
  color: #373737;
  padding-bottom: 18px;
  margin-bottom: 0;
}
h4 {
  font-size: 17px;
  font-weight: 600;
  color: #373737;
  line-height: 24px;
}
h5 {
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
}

p {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: normal;
  padding-bottom: 10px;
  line-height: 24px;
}
@media only screen and (max-width: 993px) {
  h1 {
    font-size: 30px;
  }
}
</style>
