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
        <div class="home_btn_box">
          <button class="home_btn">
            <img src="@/assets/image/btn_main_sql.png" />
          </button>
          <p>SQL</p>
        </div>
        <div class="home_btn_box">
          <button class="home_btn">
            <img src="@/assets/image/btn_main_tql.png" />
          </button>
          <p>TQL</p>
        </div>
        <div class="home_btn_box">
          <button class="home_btn">
            <img src="@/assets/image/btn_main_taganalyzer.png" />
          </button>
          <p>Tag Analyzer</p>
        </div>
        <router-link to="/shell">
          <div class="home_btn_box">
            <button class="home_btn">
              <img src="@/assets/image/btn_main_shell.png" />
            </button>
            <p>Shell</p>
          </div>
        </router-link>
        <router-link to="/worksheet">
          <div class="home_btn_box">
            <button class="home_btn">
              <img src="@/assets/image/btn_main_worksheet.png" />
            </button>
            <p>Worksheet</p>
          </div>
        </router-link>
        <router-link to="/homew">
          <div class="home_drop_box">
            <button class="home_btn">
              <div class="btn_img_wrap">
                <Dropopen></Dropopen>
              </div>
            </button>
            <p class="home_btn_text">Drop & Open</p>
          </div>
        </router-link>
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
.outer {
  @include theme() {
    background-color: theme-get("bg-color1") !important;
  }
  min-height: 100vh;
  .inner {
    padding: 0 11.5%;
    .title {
      margin-top: 18vh;
      .main_title {
        font-size: 40px;
        @include theme() {
          color: theme-get("text-main-title") !important;
        }
        font-family: Pretendard;
        font-weight: bold;
      }
      .main_text {
        margin-top: 8px;
        opacity: 0.8;
        font-family: Pretendard;
        font-size: 24px;
        @include theme() {
          color: theme-get("text-sub-title") !important;
        }
      }
    }
    .btn_wrap {
      display: flex;
      flex-wrap: wrap;
      margin-top: 48px;
      @include theme() {
        border-bottom: 1px solid theme-get("modal-bg") !important;
      }
      padding-bottom: 48px;

      .home_drop_box {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .home_btn {
          width: 180px;
          height: 180px;
          border-radius: 30px;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.18);
          background-color: rgba(255, 255, 255, 0.08);
          @include theme() {
            background-color: theme-get("btn-hover-bg") !important;
            border: solid 2px theme-get("home-drop") !important;
            border-style: dashed !important;
          }
        }
        p {
          font-family: Pretendard;
          font-size: 24px;
          font-weight: 500;
          @include theme() {
            color: theme-get("text-main-title") !important;
          }
          margin-top: 16px;
        }
      }
      .home_btn_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 40px;
        margin-top: 20px;

        .btn_img_wrap {
          position: relative;
        }
        p {
          font-family: Pretendard;
          font-size: 24px;
          font-weight: 500;
          @include theme() {
            color: theme-get("text-main-title") !important;
          }
          margin-top: 16px;
        }
      }
      .home_btn {
        position: relative;
        &:hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: $hover-bg;
          border-radius: 24px;
          z-index: 1;
        }
        img {
          width: 180px;
          height: 180px;
        }
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
            color: $color-blue;
            cursor: pointer;
            span {
              margin-right: 8px;
            }
            &:hover {
              span {
                color: $color-blue;
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
