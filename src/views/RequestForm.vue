<template>
  <div class="home">
    <RequestFormNav />
    <iframe title="form" :src="source" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import RequestFormNav from "../components/layout/RequestFormNav";
export default {
  name: "RequestForm",
  components: { AppHeader, RequestFormNav },
  data: () => ({
    props: {
      tittle: "Request Form",
      breadCrumb: {
        tittle: "Request Form",
        link: "requestform",
      },
    },
    source: "./requestForm.html",
  }),
};
</script>

<style>
.home iframe {
  height: 100vh;
  height: 100vh;
  width: 100vw;
  width: 100vw;
  border: none;
  border: none;
}

body {
  margin: 0;
  margin: 0;
}
</style>
