<template>
  <transition name="fade" tag="div" class="wrapper" mode="out-in">
    <div class="wrapper" v-if="isLoaded" id="app">
      <LandingPage :user="user" />
      <Description :user="user" :content="description" :links="link" />
      <Projects :content="projects" />
      <Skills :content="skills" />
      <Experience :content="experiences" />
      <Footer :user="user" :links="link" />
    </div>
  </transition>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";
import Description from "./components/Description.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import config from "../config.json";

// import { bucket } from "./cosmic.js";

export default {
  name: "App",
  components: {
    LandingPage,
    Description,
    Experience,
    Skills,
    Projects,
    Footer,
  },
  data: () => ({
    isLoaded: false,
    user: {},
    description: {},
    link: {},
    experiences: {},
    skills: {},
    projects: {},
  }),
  methods: {
    // fetchPosts() {
    //   return bucket.getObjects({
    //     type: "portfolio-contents",
    //     props: "slug,title,metadata",
    //   });
    // },
    // findSlug(slug) {
    //   return this.posts.find((item) => {
    //     return item.slug === slug;
    //   });
    // },
  },
  created() {
    document.body.classList.add("loading");
    this.user = config.user;
    this.description = config.user.description;
    this.link = config.user.link;
    this.experiences = config.user.experiences;
    this.skills = config.user.skills;
    this.projects = config.user.projects;
    this.isLoaded = true;
    this.$nextTick(() => document.body.classList.remove("loading"));
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

#app {
  font-family: Montserrat-Regular, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  height: 100%;
}
</style>
