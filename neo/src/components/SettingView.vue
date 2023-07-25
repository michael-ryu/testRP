<template>
  <div class="setting_wrap">
    <button class="setting_btn">
      <Prefference></Prefference>
      <span> Preferences… </span>
    </button>
    <button class="setting_btn">
      <License></License>
      <span> License </span>
    </button>
    <button class="setting_btn">
      <Logout></Logout>
      <span> Logout </span>
    </button>
  </div>
</template>
<script setup>
import Prefference from "@/components/svg/Prefference.vue";
import License from "@/components/svg/License.vue";
import Logout from "@/components/svg/Logout.vue";
</script>
<style lang="scss" scoped>
.setting_wrap {
  width: 168px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16),
    inset 0 -1px 8px 0 rgba(0, 0, 0, 0.3);
  border: solid 0.5px rgba(255, 255, 255, 0.5);
  background-color: #404457;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 54px;
  right: 0;
  svg {
    fill: rgba(255, 255, 255, 0.5);
    padding-left: 8px;
    path {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
  span {
    padding-left: 6px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
  }
  .setting_btn {
    color: #fff;
    width: 152px;
    height: 32px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
      svg {
        fill: #fff;
        path {
          fill: #fff;
        }
      }
    }
  }
}
</style>
