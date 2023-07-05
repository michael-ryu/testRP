<template>
  <!-- sql이 셀렉트 된 버젼입니다 -->
  <!-- tab 부분 -->
  <div class="tab">
    <router-link to="/">
      <button class="tab_button tab_logo">
        <img src="@/assets/image/tab_logo.svg" />
      </button>
    </router-link>
    <!-- 홈모양 svg -->
    <router-link to="/home">
      <button class="tab_button tab_none_select">
        <div class="round_right_wrap">
          <div class="round_right"></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 39.994 39.994"
          class="tab_icon"
        >
          <path data-name="home" style="fill: none" d="M0 0h39.994v39.994H0z" />
          <path
            d="M117.489-797.964H109.6a1.388 1.388 0 0 1-1.022-.412 1.388 1.388 0 0 1-.412-1.022v-13.867h-3.873a.672.672 0 0 1-.681-.454.65.65 0 0 1 .2-.789l16.783-15.11a1.322 1.322 0 0 1 .961-.383 1.292 1.292 0 0 1 .952.383l8.607 7.6v-4.16a1.388 1.388 0 0 1 .412-1.022 1.388 1.388 0 0 1 1.022-.412h.956a1.388 1.388 0 0 1 1.022.412 1.388 1.388 0 0 1 .412 1.022v7.7l4.351 3.969a.65.65 0 0 1 .2.789.672.672 0 0 1-.681.454h-3.873v13.866a1.388 1.388 0 0 1-.412 1.022 1.388 1.388 0 0 1-1.022.412h-7.89V-808a1.388 1.388 0 0 0-.412-1.022 1.388 1.388 0 0 0-1.022-.412h-5.26a1.388 1.388 0 0 0-1.022.412 1.388 1.388 0 0 0-.412 1.022z"
            transform="translate(-101.552 833.5)"
          />
        </svg>

        <span>Welcome</span>
        <!-- 닫기 svg -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          class="tab_close"
        >
          <path data-name="close" style="fill: none" d="M0 0h18v18H0z" />
          <path
            class="path"
            data-name="close_1"
            transform="translate(4 4)"
            d="m0 0 10 10"
          />
          <path
            class="path"
            data-name="close_2"
            transform="translate(4 4)"
            d="M10 0 0 10"
          />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          class="tab_icon"
        >
          <path data-name="sql_1" style="fill: none" d="M0 0h18v18H0z" />
          <path
            data-name="sql_2"
            d="M16 16H0V0h16v16zM2.764 10.141a.99.99 0 1 0 .7 1.69.952.952 0 0 0 .292-.7c0-.046 0-.1-.007-.145a1.3 1.3 0 0 0-.036-.184l2.83-2.824c.2.029.306.042.321.042a1.28 1.28 0 0 0 .146-.007 1.322 1.322 0 0 0 .184-.035l1.555 1.556a1.269 1.269 0 0 0-.035.184c0 .05-.007.1-.007.145a.99.99 0 0 0 1.98 0c0-.046 0-.1-.007-.145a1.275 1.275 0 0 0-.035-.184l2.262-2.264a1.317 1.317 0 0 0 .184.036c.05 0 .1.007.145.007a.99.99 0 0 0 .7-1.689.956.956 0 0 0-.7-.291 1.791 1.791 0 0 0-.992.986c0 .046 0 .094.007.145a1.321 1.321 0 0 0 .035.184l-2.265 2.263a1.281 1.281 0 0 0-.184-.035c-.05 0-.1-.007-.141-.007s-.092 0-.141.007a1.274 1.274 0 0 0-.184.035L7.816 7.356a5.51 5.51 0 0 0 .042-.322.99.99 0 1 0-1.979-.006c0 .053 0 .1.006.144a1.475 1.475 0 0 0 .036.185l-2.829 2.827a1.315 1.315 0 0 0-.184-.035 1.47 1.47 0 0 0-.144-.008z"
            transform="translate(1 1)"
          />
        </svg>
        <span>SQL</span>
        <!-- 닫기 svg -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          class="tab_close"
        >
          <path data-name="close" style="fill: none" d="M0 0h18v18H0z" />
          <path
            class="path"
            data-name="close_1"
            transform="translate(4 4)"
            d="m0 0 10 10"
          />
          <path
            class="path"
            data-name="close_2"
            transform="translate(4 4)"
            d="M10 0 0 10"
          />
        </svg>
        <div class="round_left_wrap">
          <div class="round_left"></div>
        </div>
      </button>
    </router-link>
    <button class="tab_button tab_select">
      <!-- tag anlyzer svg -->
      <div class="round_right_wrap">
        <div class="round_right"></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        class="tab_icon"
      >
        <path data-name="tag_anlyzer_1" style="fill: none" d="M0 0h18v18H0z" />
        <path
          data-name="tag_anlyzer_2"
          d="M-3193-1695h-16v-16h16v16zm-5.793-10.768a.408.408 0 0 0-.3.123.43.43 0 0 0-.13.3.376.376 0 0 0 .116.3l2.419 2.419-2.433 2.433a.406.406 0 0 0-.124.3.4.4 0 0 0 .124.3.423.423 0 0 0 .289.13h.017a.373.373 0 0 0 .271-.116l2.75-2.75a.4.4 0 0 0 .124-.289.4.4 0 0 0-.124-.289l-2.708-2.722a.4.4 0 0 0-.291-.139zm-4.371-.028a.4.4 0 0 0-.3.124l-2.75 2.749a.4.4 0 0 0-.123.289.4.4 0 0 0 .123.289l2.721 2.708a.408.408 0 0 0 .3.123.408.408 0 0 0 .3-.123.4.4 0 0 0 .123-.289.4.4 0 0 0-.123-.289l-2.419-2.419 2.446-2.446a.406.406 0 0 0 .124-.3.4.4 0 0 0-.124-.3.4.4 0 0 0-.299-.12z"
          transform="translate(3210 1712)"
        />
      </svg>

      <span>Tag Anlyzer</span>
      <!-- 닫기 svg -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        class="tab_close"
      >
        <path data-name="close" style="fill: none" d="M0 0h18v18H0z" />
        <path
          class="path"
          data-name="close_1"
          transform="translate(4 4)"
          d="m0 0 10 10"
        />
        <path
          class="path"
          data-name="close_2"
          transform="translate(4 4)"
          d="M10 0 0 10"
        />
      </svg>
      <div class="round_left_wrap">
        <div class="round_left"></div>
      </div>
    </button>
    <button class="plus_wrap">
      <!-- plus svg -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        class="plus_btn"
      >
        <g transform="translate(-986 -23)">
          <circle
            data-name="plus"
            cx="10"
            cy="10"
            r="10"
            transform="translate(986 23)"
          />
          <g data-name="plus_wrap" style="opacity: 0.836">
            <path
              data-name="plus_1"
              transform="translate(996 28)"
              style="fill: none; stroke: #262831; stroke-width: 2px"
              d="M0 0v10"
            />
            <path
              data-name="plus_2"
              transform="rotate(90 484 517)"
              style="fill: none; stroke: #262831; stroke-width: 2px"
              d="M0 0v10"
            />
          </g>
        </g>
      </svg>
    </button>
    <div>
      <!-- 톱니바퀴 png & Setting box 바로가기-->
      <router-link to="/setting">
        <button class="setting_btn">
          <img src="@/assets/image/btn_setting.png" />
        </button>
      </router-link>
      <!-- <Setting /> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
.outer {
  background-color: #262831;
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
    }
    .tab_select {
      color: #4199ff;
      background-color: #262831;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      position: relative;
      z-index: 10;
      .tab_close {
        .path {
          fill: #4199ff;
          stroke: #4199ff;
          stroke-width: 2px;
        }
      }
      .tab_icon {
        fill: #4199ff;
        &:hover {
          fill: #4199ff;
        }
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
      }
    }
    .plus_wrap {
      width: 50px;
      margin-top: 4px;
      &:hover {
        .plus_btn {
          fill: #4199ff;
        }
      }
      .plus_btn {
        fill: #fff;
      }
    }
  }
}
</style>
<script>
import Setting from "./SettingView.vue";
export default {
  components: {
    Setting,
  },
};
</script>
