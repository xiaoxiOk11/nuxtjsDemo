<template>
  <div id="app">
    <div class="affix-container" id="topHeader">
      <el-affix target="#app" :offset="0.1">
        <TopBar />
        <Header />
        <NavigationBar />
      </el-affix>
    </div>
    <MainContent />
    <SideBar />
     <Footer />
  </div>
</template>

<script setup>
import TopBar from "../components/TopBar.vue";
import Header from "../components/Header.vue";
import NavigationBar from "../components/NavigationBar.vue";
import MainContent from "../components/MainContent.vue";
import SideBar from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";

</script>

<style lang="scss">
@use "../assets/styles/main.scss";
</style>
