<template>
  <div v-if="showModal" class="gsma-form" @close="showModal = false">
    <iframe title="form" :src="source" height="800" width="600"
frameborder="0"></iframe>
    <button @click="$emit('close')">
      OK
    </button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    props: {
      tittle: "SECURE YOUR TRANSACTIONS",
      content: `Protect yourself from unauthorized activity by using your\n biometric as your authentication`,
      breadCrumb: {
        tittle: "TFA form",
        link: "/form",
      },
    },
    source: "https://gsma.tfaforms.net/891",
  }),
};
</script>
<style>
/* .gsma-form iframe {
  height: 100vh;
  width: 80vw;
  overflow: hidden;

} */
/* body {
  margin: 0;
} */
.gsma-form{
  position: relative;
}
.gsma-form button{
    background: #95236c;
    position: absolute;
    top: 15px;
    right: 40px;
    width: 30px;
    height: 30px;
    line-height: 21px;
    border: none;
}
/* .gsma-form iframe{
  width: 100%;
  height: 100vh;
  overflow: hidden;
} */
.gsma-form button img {
    width: 15px;
    height: 15px;
    
}
</style>
