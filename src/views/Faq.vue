<template>
  <div class="home">
    <AppHeader v-bind="props" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  name: "Faq",
  components: { AppHeader },
  data: () => ({
    props: {
      tittle: "FREQUENTLY ASKED QUESTIONS",
      content:
        "Protect yourself from unauthorized activity by using your biometric as your authentication",
      breadCrumb: {
        tittle: "FAQs",
        link: "/faq",
      },
    },
  }),
};
</script>
<style></style>
