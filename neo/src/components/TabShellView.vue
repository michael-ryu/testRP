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
    <router-link to="/shell">
      <button class="tab_button tab_select">
        <!-- sql svg -->
        <div class="round_right_wrap">
          <div class="round_right"></div>
        </div>
        <TabSql></TabSql>
        <span>Shell</span>
        <!-- 닫기 svg -->
        <span class="tab_close"><TabClose></TabClose></span>
      </button>
    </router-link>
    <router-link to="/worksheet">
      <button class="tab_button tab_none_select">
        <!-- tag anlyzer svg -->
        <div class="round_right_wrap">
          <div class="round_right"></div>
        </div>
        <TabTaganalyzer></TabTaganalyzer>

        <span>Worksheet</span>
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
        <button @click="openPrefferenceModal" class="setting_btn">
          <Prefference></Prefference>
          <span> Preferences… </span>
        </button>
        <div class="backdrop" v-if="isPrefferenceModalOpen"></div>
        <div v-if="isPrefferenceModalOpen">
          <div class="prefference_modal_wrap">
            <div class="prefference_modal_title">
              <div>
                <Prefference></Prefference>
                <span>Preferences</span>
              </div>
              <div>
                <button @click="closePrefferenceModal">
                  <TabClose></TabClose>
                </button>
              </div>
            </div>
            <div class="prefference_modal_contents_wrap">
              <div class="prefference_modal_contents">
                <span>UI Theme</span
                ><button>
                  <span>machloTchartBlack</span><Dropdown></Dropdown>
                </button>
              </div>
              <div class="prefference_modal_contents">
                <span>Font Size</span
                ><button><span>small</span><Dropdown></Dropdown></button>
              </div>
            </div>
            <div class="prefference_modal_btn_wrap">
              <button
                @click="closePrefferenceModal"
                class="prefference_modal_btn"
              >
                OK
              </button>
              <button
                @click="closePrefferenceModal"
                class="prefference_modal_btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <button @click="openLisenceModal" class="setting_btn">
          <License></License>
          <span> License </span>
        </button>
        <div class="backdrop" v-if="isLisenceModalOpen"></div>
        <div v-if="isLisenceModalOpen">
          <div>
            <div class="lisence_modal_wrap">
              <div class="lisence_modal_title">
                <div>
                  <License></License>
                  <span>License</span>
                </div>
                <div>
                  <button @click="closeLisenceModal">
                    <TabClose></TabClose>
                  </button>
                </div>
              </div>
              <div class="lisence_modal_contents_wrap">
                <div class="lisence_modal_contents">
                  <span>Type</span>
                  <span>COMMUNITY</span>
                </div>
                <div class="lisence_modal_contents">
                  <span>Customer</span>
                  <span>NONE</span>
                </div>
                <div class="lisence_modal_contents">
                  <span>Country Code</span>
                  <span>KR</span>
                </div>
                <div class="lisence_modal_contents">
                  <span>Project</span>
                  <span>NONE</span>
                </div>
                <div class="lisence_modal_contents">
                  <span>Install Date</span>
                  <span>0000-00-00 00:00:00</span>
                </div>
              </div>
              <div class="lisence_modal_btn_wrap">
                <span>Register License…</span>
                <button @click="closeLisenceModal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <button class="setting_btn">
          <Logout></Logout>
          <span> Logout </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import Dropdown from "@/components/svg/Dropdown.vue";
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
        color: rgba(255, 255, 255, 0.5);
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
          span {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(38, 40, 49, 0.5);
        z-index: 99;
      }
      .prefference_modal_wrap {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 540px;
        background-color: #404457;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16),
          inset 0 -1px 8px 0 rgba(0, 0, 0, 0.3);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        z-index: 999;
        button {
          svg {
            fill: rgba(255, 255, 255, 0.5);
            stroke: rgba(255, 255, 255, 0.5);
            path {
              fill: rgba(255, 255, 255, 0.5);
            }
          }
          &:hover {
            span {
              color: rgba(255, 255, 255, 1);
            }
            svg {
              fill: rgba(255, 255, 255, 1);
              stroke: rgba(255, 255, 255, 1);
              path {
                fill: rgba(255, 255, 255, 1);
              }
            }
          }
        }
        .prefference_modal_title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 25px;
          margin-bottom: 45px;
          svg {
            fill: rgba(255, 255, 255, 1);
            stroke: rgba(255, 255, 255, 1);
          }
          span {
            color: rgba(255, 255, 255, 1);
          }
          padding: 0 30px;
        }
        .prefference_modal_contents {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 60px;
          margin-bottom: 8px;
          span {
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.5);
          }
          button {
            position: relative;
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.5);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            width: 260px;
            height: 34px;
            border: solid 0.5px rgba(255, 255, 255, 0.5);
            background-color: rgba(38, 40, 49, 0.5);
            border-radius: 8px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
          }
        }
        .prefference_modal_btn_wrap {
          display: flex;
          justify-content: center;
          margin: 40px 0;
          :first-child {
            margin-right: 10px;
          }
          .prefference_modal_btn {
            width: 120px;
            height: 40px;
            border-radius: 8px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border: solid 0.5px #d9d9d9;
            background-color: rgba(255, 255, 255, 0.2);
            color: #fff;
            &:hover {
              background-color: #4199ff;
            }
          }
        }
      }
      .lisence_modal_wrap {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 540px;
        background-color: #404457;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16),
          inset 0 -1px 8px 0 rgba(0, 0, 0, 0.3);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        z-index: 999;
        .lisence_modal_title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 25px;
          margin-bottom: 45px;
          svg {
            fill: rgba(255, 255, 255, 1);
            stroke: rgba(255, 255, 255, 1);
          }
          span {
            color: rgba(255, 255, 255, 1);
          }
          padding: 0 30px;
        }
        .lisence_modal_contents_wrap {
          padding: 0 60px;
          .lisence_modal_contents {
            display: flex;
            justify-content: space-between;
            margin-bottom: 23px;
            span {
              font-family: Pretendard;
              font-size: 16px;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.5);
            }
          }
        }
        .lisence_modal_btn_wrap {
          margin: 63px 0 42px 0;

          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 60px;
          span {
            font-family: Pretendard;
            font-size: 18px;
            color: #4199ff;
          }
          button {
            width: 120px;
            height: 40px;
            border-radius: 8px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border: solid 0.5px #d9d9d9;
            background-color: rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 1);
            &:hover {
              background-color: #4199ff;
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
      isPrefferenceModalOpen: false,
      isLisenceModalOpen: false,
    };
  },
  methods: {
    openPrefferenceModal() {
      this.isPrefferenceModalOpen = true;
    },
    closePrefferenceModal() {
      this.isPrefferenceModalOpen = false;
    },
    openLisenceModal() {
      this.isLisenceModalOpen = true;
    },
    closeLisenceModal() {
      this.isLisenceModalOpen = false;
    },
    toggleSetting() {
      this.isSettingVisible = !this.isSettingVisible;
    },
  },
};
</script>
