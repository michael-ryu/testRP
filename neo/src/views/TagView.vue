<template>
  <div class="outer">
    <!-- tab 부분 -->
    <Tagtab />
    <div class="tag_tab">
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
    <div class="tag_table_wrap">
      <div class="tag_table_subtab">
        <div>
          <img src="@/assets/image/ic_tab_code_on.png" /><span
            >CHART - 001</span
          >
        </div>
        <div><span>0000-00-00 00:00:00 ~ 0000-00-00 00:00:00</span></div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <div class="tag_table">
        <button></button>
        <div></div>
        <button></button>
      </div>
      <div class="tag_zoom_wrap">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div class="tag_bar_wrap">
        <div></div>
      </div>
      <div class="tag_plus_wrap">
        <button></button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
.outer {
  background-color: #262831;
  height: 100%;
}
</style>
<script>
import Setting from "../components/SettingView.vue";
import Tagtab from "../components/TagtabView.vue";

export default {
  components: {
    Tagtab,
    Setting,
  },
};
</script>
