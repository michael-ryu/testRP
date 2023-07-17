<template>
  <div class="outer">
    <!-- tab 부분 -->
    <TabHomew></TabHomew>
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
            <Tql></Tql>
          </div>
          <p class="home_btn_text">TQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <Taganalyzer></Taganalyzer>
          </div>
          <p class="home_btn_text">Tag Analyzer</p>
        </button>
        <router-link to="/shell">
          <button class="btn_box">
            <div class="btn_img_wrap">
              <Shell></Shell>
            </div>
            <p class="home_btn_text">Shell</p>
          </button>
        </router-link>
        <router-link to="/worksheet">
          <button class="btn_box">
            <div class="btn_img_wrap">
              <Worksheet></Worksheet>
            </div>
            <p class="home_btn_text">Worksheet</p>
          </button>
        </router-link>
        <button class="btn_box btn_drop">
          <div class="btn_img_wrap">
            <Dropopen></Dropopen>
          </div>
          <p class="home_btn_text">Drop & Open</p>
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
import TabHomew from "@/components/TabHomewView.vue";
import Sql from "@/components/svg/Sql.vue";
import Tql from "@/components/svg/Tql.vue";
import Taganalyzer from "@/components/svg/Taganalyzer.vue";
import Shell from "@/components/svg/Shell.vue";
import Worksheet from "@/components/svg/Worksheet.vue";
import Dropopen from "@/components/svg/Dropopen.vue";
import Gear from "@/components/svg/Gear.vue";
import Setting from "../components/SettingView.vue";
import Tab from "../components/TabView.vue";
import TabTaganalyzer from "../components/svg/TabTaganalyzer.vue";
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
  background-color: #f7f7f8;
  height: 100%;
  .inner {
    padding: 0 18.75%;
    .title {
      margin-top: 18vh;
      .main_title {
        font-size: 40px;
        color: #262831;
        font-family: Pretendard;
        font-weight: bold;
      }
      .main_text {
        margin-top: 8px;
        opacity: 0.8;
        font-family: Pretendard;
        font-size: 24px;
        color: #262831;
      }
    }
    .btn_wrap {
      display: flex;
      flex-wrap: wrap;
      margin-top: 28px;
      padding-bottom: 48px;
      .btn_drop {
        opacity: 0.4;
      }
      .btn_box {
        width: 224px;
        height: 224px;
        margin-right: 20px;
        margin-top: 20px;
        border-radius: 8px;
        border: solid 0.5px rgba(0, 0, 0, 0.5);
        background-color: rgba(38, 40, 49, 0.06);
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
            background-color: rgba(38, 40, 49, 0.5);
          }
        }
        p {
          font-family: Pretendard;
          font-size: 20px;
          font-weight: 500;
          color: rgba(38, 40, 49, 0.5);
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
            color: #262831;
          }
        }
        .btn_drop {
          &:hover {
            p {
              color: rgba(38, 40, 49, 0.5);
            }
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
        height: 300px;
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
            &:hover {
              span {
                color: #4199ff;
              }
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
