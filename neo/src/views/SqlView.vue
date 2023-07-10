<template>
  <div class="outer">
    <!-- tab 부분 -->
    <Tab></Tab>
    <!-- 좌측 tab -->
    <div class="sql">
      <div class="sql_left">
        <div class="sql_tab_left">
          <button>
            <Play></Play>
          </button>
          <button class="modal_btn">
            <Date></Date>
            <span> YYYY-MM-DD HH:MI:SS </span>
            <span><Dropdown></Dropdown></span>
          </button>
          <button class="modal_btn">
            <Local></Local>
            <span>LOCAL</span>
            <span><Dropdown></Dropdown></span>
          </button>
          <button class="sql_save_btn">
            <Save></Save>
          </button>
          <button class="sql_file_btn">
            <Folder></Folder>
          </button>
        </div>
        <div class="sql_left_table"></div>
      </div>
      <!-- 우측 tab -->
      <div class="sql_right">
        <div class="sql_tab_right">
          <button class="sql_right_tab_btn sql_tab_select">
            <div class="sql_round_right_wrap">
              <div class="round_right"></div>
            </div>
            <Tabresult></Tabresult>
            <span>RESULT</span>
            <div class="sql_round_left_wrap">
              <div class="round_left"></div>
            </div>
          </button>
          <button class="sql_tab_none_select sql_right_tab_btn">
            <div class="sql_round_right_wrap">
              <div class="round_right"></div>
            </div>
            <Tabchart></Tabchart>
            <span> CHART </span>
            <div class="sql_round_left_wrap">
              <div class="round_left"></div>
            </div>
          </button>
          <button class="sql_right_tab_btn sql_tab_none_select">
            <div class="sql_round_right_wrap">
              <div class="round_right"></div>
            </div>
            <Tablog></Tablog>
            <span>LOG</span>
            <div class="sql_round_left_wrap">
              <div class="round_left"></div>
            </div>
          </button>
          <button class="sql_vertical">
            <Vertical></Vertical>
          </button>
          <button class="sql_horizontal">
            <Horizontal></Horizontal>
          </button>
        </div>
        <div class="sql_right_table">
          <table class="sql_table">
            <tr>
              <th>ROWNUM</th>
              <th>mtime (LOCAL)</th>
              <th>avg(value)</th>
            </tr>
            <tr>
              <td>1</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
            <tr class="back_gray">
              <td>2</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
            <tr class="back_gray">
              <td>4</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
            <tr class="back_gray">
              <td>6</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
            <tr>
              <td>7</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
            <tr class="back_gray">
              <td>8</td>
              <td>0000-00-00 00:00:00</td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Play from "@/components/svg/Play.vue";
import Date from "@/components/svg/Date.vue";
import Dropdown from "@/components/svg/Dropdown.vue";
import Save from "@/components/svg/Save.vue";
import Local from "@/components/svg/Local.vue";
import Folder from "@/components/svg/Folder.vue";
import Up from "@/components/svg/Up.vue";
import Down from "@/components/svg/Down.vue";
import Tabresult from "@/components/svg/Tabresult.vue";
import Tabchart from "@/components/svg/Tabchart.vue";
import Tablog from "@/components/svg/Tablog.vue";
import Vertical from "@/components/svg/Vertical.vue";
import Horizontal from "@/components/svg/Horizontal.vue";
import TabClose from "@/components/svg/TabClose.vue";
import DateModal from "@/components/DateModal.vue";
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
  .sql {
    display: flex;
    height: 100%;
  }
  .sql_left {
    background-color: #1b1c21;
    width: 50%;
    height: 100%;
    position: relative;
    &::after {
      content: "";
      width: 5px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-color: #262831;
    }
    .sql_tab_left {
      background-color: #262831;
      height: 54px;
      // border: 1px solid #fff;
      display: flex;
      align-items: center;
      position: relative;

      .modal_btn {
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        background-color: #262831;
        width: 256px;
        height: 32px;
        margin-left: 20px;
        svg {
          margin: 0 10px;
        }
        span {
          font-family: Pretendard;
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
        }
        .modal_arrow {
          position: absolute;
          right: 0px;
        }
        &:hover {
          border: solid 0.5px rgba(255, 255, 255, 1);
          span {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .sql_save_btn {
        position: absolute;
        right: 40px;
      }
      .sql_file_btn {
        position: absolute;
        right: 0;
      }
    }
  }
  .sql_right {
    background-color: #1b1c21;
    width: 50%;
    height: 100%;
    position: relative;

    .sql_tab_right {
      height: 54px;
      padding-left: 16px;
      background-color: #262831;
      display: flex;
      align-items: center;
      position: relative;

      button {
        svg {
          fill: rgba(255, 255, 255, 0.5);
        }
        &:hover {
          svg {
            fill: rgba(255, 255, 255, 1);
          }
        }
      }
      .sql_vertical {
        position: absolute;
        top: 6px;
        right: 50px;
      }
      .sql_horizontal {
        position: absolute;
        top: 6px;
        right: 0;
      }
      .sql_right_tab_btn {
        height: 48px;
        width: 260px;
        margin-top: 6px;
        // border: 1px solid #fff;
        display: flex;
        justify-content: left;
        align-items: center;

        &:hover {
          svg {
            fill: #fdb532;
            path {
              fill: #fdb532;
            }
          }
          span {
            color: #fdb532;
          }
        }
      }
      svg {
        margin-left: 16px;
        margin-right: 8px;
      }
    }
    .sql_tab_select {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      background-color: #101010;
      position: relative;
      font-family: Pretendard;
      font-size: 18px;
      font-weight: 500;
      color: #fdb532;
      svg {
        fill: #fdb532 !important;
        path {
          fill: #fdb532;
        }
      }
      .sql_round_right_wrap {
        width: 15px;
        height: 15px;
        background-color: #101010;
        position: absolute;
        bottom: 0;
        left: -15px;
        transform: scaleX(-1), scaleY(-1);

        .round_right {
          width: 15px;
          height: 15px;
          border-radius: 0 0 80% 0;
          background-color: #262831;
          position: absolute;
          bottom: 0;
          left: 0px;
        }
      }

      .sql_round_left_wrap {
        width: 15px;
        height: 15px;
        background-color: #101010;
        position: absolute;
        bottom: 0;
        right: -15px;
        transform: scaleX(-1), scaleY(-1);
        z-index: 1;

        .round_left {
          width: 15px;
          height: 15px;
          border-radius: 0 0 0 80%;
          background-color: #262831;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
    .sql_tab_none_select {
      font-family: Pretendard;
      font-size: 18px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.5);
      svg {
        fill: #262831;
      }
    }
  }
  .sql_right_table {
    .sql_table {
      width: 100%;
      tr {
        th {
          padding-left: 36px;
          font-family: Pretendard;
          color: #fdb532;
          font-size: 16px;
          text-align: left;
          height: 56px;
          border-bottom: 1px solid #fdb532;
        }
        td {
          padding-left: 36px;
          font-family: D2Coding;
          color: #fff;
          font-size: 16px;
          height: 24px;
        }
      }
      .back_gray {
        background-color: rgba(255, 255, 255, 0.04);
      }
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
