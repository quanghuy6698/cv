<template>
  <div class="main-container mt-4 mb-4">
    <HeaderComp />
    <tabs>
      <tab name="About Me"><AboutComp /></tab>
      <tab name="Education"><EduComp /></tab>
      <tab name="Skills"> <SkillsComp /></tab>
      <tab name="Tools"><ToolsComp /></tab>
      <tab name="Terms"><TermsComp /></tab>
      <tab name="Work Exp"><WorkExpsComp /></tab>
    </tabs>
    <FooterComp />
  </div>
</template>

<script>
import { Tabs, Tab } from "vue3-tabs-component";
// components
import HeaderComp from "./app/components/HeaderComp.vue";
import FooterComp from "./app/components/FooterComp.vue";
import EduComp from "./app/components/EduComp.vue";
import AboutComp from "./app/components/AboutComp.vue";
import SkillsComp from "./app/components/SkillsComp.vue";
import TermsComp from "./app/components/TermsComp.vue";
import ToolsComp from "./app/components/ToolsComp.vue";
import WorkExpsComp from "./app/components/WorkExpsComp.vue";

export default {
  name: "App",
  components: {
    Tabs,
    Tab,
    HeaderComp,
    FooterComp,
    EduComp,
    AboutComp,
    SkillsComp,
    TermsComp,
    ToolsComp,
    WorkExpsComp,
  },
  data() {
    return {
      mode: "dark",
    };
  },
  methods: {
    changeStyle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style></style>
