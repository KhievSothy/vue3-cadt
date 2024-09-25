<template>
  <div class="sub_page">
    <div class="hero_area">
      <Header></Header>
    </div>
    <router-view></router-view>
  </div>
</template>
,<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>