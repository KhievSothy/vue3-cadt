<template>
  <Hero></Hero>
  <Services></Services>
  <About></About>
  <Why></Why>
  <Team></Team>
  <Client></Client>
  <Footer></Footer>
</template>
  
  <script>
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Why from "@/components/Why.vue";
import Team from "@/components/Team.vue";
import Client from "@/components/Client.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Hero,
    Services,
    About,
    Why,
    Team,
    Client,
    Footer,
  },
};
</script>
  
  