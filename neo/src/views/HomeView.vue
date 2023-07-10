<template>
  <div class="outer">
    <!-- tab 부분 -->
    <TabHome></TabHome>
    <div class="inner">
      <div class="title">
        <p class="main_title">Welcome</p>
        <p class="main_text">Please select a project type.</p>
      </div>
      <!-- btn 부분  -->
      <div class="btn_wrap">
        <button class="btn_box">
          <div class="btn_img_wrap">
            <Sql></Sql>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <Sql></Sql>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <Sql></Sql>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <Sql></Sql>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <Sql></Sql>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
      </div>
      <!-- 아래 바로가기 부분 -->
      <div class="sub_tab_wrap">
        <ul>
          <li class="sub_tab">
            <button>
              <img src="@/assets/image/ic_folder.png" /><span>Open…</span>
            </button>
          </li>
          <li class="sub_tab">
            <button>
              <img src="@/assets/image/ic_document.png" /><span
                >Machbase-Neo Documentation</span
              ><img src="@/assets/image/btn_opennew.png" />
            </button>
          </li>
          <li class="sub_tab">
            <button>
              <img src="@/assets/image/ic_document.png" /><span
                >Machbase SQL Reference</span
              ><img src="@/assets/image/btn_opennew.png" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright_wrap">
      <p class="copyright">
        Copyrightⓒ Machbase Corporation. All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<script setup>
import TabHome from "@/components/TabHomeView.vue";
import Sql from "@/components/svg/Sql.vue";
import Gear from "@/components/svg/Gear.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
button {
  svg {
    fill: rgba(255, 255, 255, 0.5);
    path {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
  .dropdown {
    stroke: rgba(255, 255, 255, 0.5);
  }
  &:hover {
    .dropdown {
      stroke: rgba(255, 255, 255, 1);
    }
    span {
      color: rgba(255, 255, 255, 1);
    }
    svg {
      fill: rgba(255, 255, 255, 1);
      path {
        fill: rgba(255, 255, 255, 1);
      }
    }
  }
}
.outer {
  background-color: #1b1c21;
  height: 100%;

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
      &:hover {
        svg {
          fill: #4199ff;
          stroke: #4199ff;
        }
      }
      svg {
        padding-left: 16px;
        fill: rgba(255, 255, 255, 1);
        stroke: rgba(255, 255, 255, 1);
        path {
          fill: rgba(255, 255, 255, 1);
          stroke: #fff;
        }
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
    .setting_btn {
      position: absolute;
      width: 32px;
      height: 32px;
      right: 8px;
      top: 11px;
    }
    .tab_logo {
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
          z-index: 1;
        }
      }
    }
    .tab_none_select {
      .tab_close {
        .path {
          fill: #fff;
          stroke: #fff;
          stroke-width: 2px;
        }
      }
      &:hover {
        .path {
          stroke: #4199ff;
        }
        span {
          color: #4199ff;
        }
        .tab_icon {
          fill: #4199ff;
        }
      }
      .tab_icon {
        fill: #fff;
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
    .plus_wrap {
      width: 50px;
      margin-top: 4px;
      &:hover {
        svg {
          fill: #4199ff;
        }
      }
      svg {
        fill: #fff;
      }
    }
  }
  .inner {
    padding: 0 18.75%;
    .title {
      margin-top: 18vh;
      .main_title {
        font-size: 40px;
        color: #fff;
        font-family: Pretendard;
        font-weight: bold;
      }
      .main_text {
        margin-top: 8px;
        opacity: 0.8;
        font-family: Pretendard;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .btn_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 48px;
      border-bottom: 1px solid #404457;
      padding-bottom: 48px;
      .btn_box {
        width: 224px;
        height: 224px;
        margin-right: 20px;
        background-color: rgba(0, 0, 0, 0.18);
        border-radius: 10px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.18);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        .btn_img_wrap {
          position: relative;
          &::after {
            position: absolute;
            content: "";
            bottom: -7px;
            left: 50%;
            transform: translateX(-50%);
            width: 16px;
            height: 1px;
            background-color: #fff;
          }
        }
        p {
          font-family: Pretendard;
          font-size: 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          padding-top: 25px;
        }
        &:hover {
          box-shadow: inset 0 -2px 62px 0 rgba(65, 153, 255, 0.5);
          border: solid 1px #4199ff;
          cursor: pointer;
          svg {
            mix-blend-mode: normal;
            opacity: 1;
          }
          p {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .home_btn {
        mix-blend-mode: luminosity;
        opacity: 0.5;
      }
    }
    .sub_tab_wrap {
      ul {
        margin-top: 48px;
        .sub_tab {
          button {
            display: flex;
            align-items: center;
            background-color: transparent;
            color: #4199ff;
            cursor: pointer;
            span {
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
  .copyright_wrap {
    position: fixed;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    .copyright {
      font-family: Pretendard;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
<script>
import Setting from "../components/SettingView.vue";
import Tab from "../components/TabView.vue";

export default {
  components: {
    Tab,
    Setting,
  },
};
</script>
