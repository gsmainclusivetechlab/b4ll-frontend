<template>
  <div class="home">
    <AppHeader v-bind="props" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  name: "TryB4All",
  components: { AppHeader },
  data: () => ({
    props: {
      tittle: "",
      content: ``,
      breadCrumb: {
        tittle: "Try B4 All",
        link: "/tryb4all",
      },
    },
  }),
};
</script>

<style></style>
