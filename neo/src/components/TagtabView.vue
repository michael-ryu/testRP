<template>
  <!-- tab 부분 -->
  <div class="tab">
    <router-link to="/">
      <button class="tab_button tab_logo">
        <img src="@/assets/image/img_top_logo.png" />
      </button>
    </router-link>
    <!-- 홈모양 svg -->
    <router-link to="/home">
      <button class="tab_button tab_none_select">
        <div class="round_right_wrap">
          <div class="round_right"></div>
        </div>
        <TabHome></TabHome>

        <span>Welcome</span>
        <!-- 닫기 svg -->
        <span class="tab_close"><TabClose></TabClose></span>
        <div class="round_left_wrap">
          <div class="round_left"></div>
        </div>
      </button>
    </router-link>
    <router-link to="/sql">
      <button class="tab_button tab_none_select">
        <!-- sql svg -->
        <div class="round_right_wrap">
          <div class="round_right"></div>
        </div>
        <TabSql></TabSql>
        <span>SQL</span>
        <!-- 닫기 svg -->
        <span class="tab_close"><TabClose></TabClose></span>
      </button>
    </router-link>
    <router-link to="/tag">
      <button class="tab_button tab_select">
        <!-- tag anlyzer svg -->
        <div class="round_right_wrap">
          <div class="round_right"></div>
        </div>
        <TabTaganalyzer></TabTaganalyzer>

        <span>Tag Anlyzer</span>
        <!-- 닫기 svg -->
        <span class="tab_close"><TabClose></TabClose></span>
        <div class="round_left_wrap">
          <div class="round_left"></div>
        </div>
      </button>
    </router-link>
    <button class="plus_wrap">
      <!-- plus svg -->
      <Plus></Plus>
    </button>
    <div>
      <!-- 톱니바퀴 png & Setting box 바로가기-->
      <button class="gear_btn" @click="toggleSetting">
        <Gear></Gear>
      </button>
      <div v-if="isSettingVisible" class="setting_wrap">
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
    </div>
  </div>
</template>
<script setup>
import Prefference from "@/components/svg/Prefference.vue";
import License from "@/components/svg/License.vue";
import Logout from "@/components/svg/Logout.vue";
import TabHome from "@/components/svg/TabHome.vue";
import TabSql from "@/components/svg/TabSql.vue";
import TabTaganalyzer from "@/components/svg/TabTaganalyzer.vue";
import Gear from "@/components/svg/Gear.vue";
import TabClose from "@/components/svg/TabClose.vue";
import Plus from "@/components/svg/Plus.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
.outer {
  background-color: #262831;
  height: 100%;
  button {
    svg {
      fill: rgba(255, 255, 255, 1);
      stroke: rgba(255, 255, 255, 1);
      path {
        fill: rgba(255, 255, 255, 1);
      }
    }
    &:hover {
      span {
        color: #4199ff;
      }
      svg {
        fill: #4199ff;
        stroke: #4199ff;
        path {
          fill: #4199ff;
        }
      }
    }
  }
  .tab {
    background-color: #404557;
    height: 54px;
    display: flex;
    position: relative;
    .tab_button {
      margin-top: 4px;
      width: 260px;
      height: 50px;
      display: flex;
      align-items: center;
      position: relative;
      background-color: #404457;
      cursor: pointer;
      svg {
        padding-left: 16px;
      }
      span {
        padding-left: 8px;
        color: #fff;
      }
      .tab_close {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-48%);
      }
    }
    .gear_btn {
      position: fixed;
      width: 32px;
      height: 32px;
      right: 8px;
      top: 6px;
    }
    .tab_logo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      img {
        padding: 0;
      }
      &::after {
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        width: 1px;
        height: 24px;
        position: absolute;
        right: -1px;
        z-index: 20;
      }
    }
    .tab_select {
      color: #4199ff;
      background-color: #262831;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      position: relative;
      z-index: 21;
      svg {
        fill: #4199ff;
        stroke: #4199ff;
      }
      span {
        color: #4199ff;
      }
      .round_right_wrap {
        width: 15px;
        height: 15px;
        background-color: #262831;
        position: absolute;
        bottom: 0;
        left: -15px;
        transform: scaleX(-1), scaleY(-1);

        .round_right {
          width: 15px;
          height: 15px;
          border-radius: 0 0 80% 0;
          background-color: #404557;
          position: absolute;
          bottom: 0;
          left: 0px;
        }
      }

      .round_left_wrap {
        width: 15px;
        height: 15px;
        background-color: #262831;
        position: absolute;
        bottom: 0;
        right: -15px;
        transform: scaleX(-1), scaleY(-1);
        z-index: 1;

        .round_left {
          width: 15px;
          height: 15px;
          border-radius: 0 0 0 80%;
          background-color: #404457;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
    .tab_none_select {
      &::after {
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        width: 1px;
        height: 24px;
        position: absolute;
        right: -1px;
        z-index: 20;
      }
      svg {
        fill: rgba(255, 255, 255, 1);
        stroke: #fff;
      }
      &:hover {
        svg {
          fill: #4199ff;
          stroke: #4199ff;
        }
        span {
          color: #4199ff;
        }
      }
    }
    .plus_wrap {
      width: 50px;
      margin-top: 4px;
    }
    .gear_btn {
      position: absolute;

      svg {
        fill: rgba(255, 255, 255, 0.5);
      }
      &:hover {
        svg {
          fill: rgba(255, 255, 255, 1);
        }
      }
    }
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
  }
}
</style>
<script>
export default {
  data() {
    return {
      isSettingVisible: false,
    };
  },
  methods: {
    toggleSetting() {
      this.isSettingVisible = !this.isSettingVisible;
    },
  },
};
</script>
