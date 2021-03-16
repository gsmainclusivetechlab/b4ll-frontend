<template>
  <div class="home">
    <AppHeader v-bind="props" />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
export default {
  name: "NotFound",
  components: { AppHeader },
  data: () => ({
    props: {
      tittle: "",
      content: ``,
      breadCrumb: {
        tittle: "",
        link: "/",
      },
    },
  }),
};
</script>
<style></style>
