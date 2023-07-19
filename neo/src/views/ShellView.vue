<template>
  <div class="outer">
    <!-- tab 부분 -->
    <TabShell />
    <div class="shell_tab"></div>
    <div class="shell_wrap"><span class="shell_text">machbase-neo>></span></div>
  </div>
</template>
<script setup>
import TabShell from "@/components/TabShellView.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";

.outer {
  background-color: #1b1c21;
  min-height: 100vh;
  .shell_tab {
    height: 54px;
    display: flex;
    align-items: center;
    background-color: #262831;
  }
  .shell_wrap {
    margin-top: 15px;
    margin-left: 24px;
    .shell_text {
      font-family: D2Coding;
      font-size: 18px;
      color: #ff4460;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      isModalOpen: false,
      isTagModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },

    openTagModal() {
      this.isTagModalOpen = true;
    },
    closeTagModal() {
      this.isTagModalOpen = false;
    },
  },
};
</script>
