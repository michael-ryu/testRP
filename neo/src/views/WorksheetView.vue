<template>
  <div class="outer">
    <!-- tab 부분 -->
    <TagWorksheet />
    <div class="worksheet_tab">
      <button class="doubleplay_btn">
        <DoublePlay></DoublePlay>
      </button>
      <button class="tag_save_btn">
        <Save></Save>
      </button>
      <button>
        <Folder></Folder>
      </button>
    </div>
    <div class="worksheet_contents_wrap">
      <div class="worksheet_contents">
        <div class="worksheet_box_open">
          <div class="on_btn">
            <WorksheetOn></WorksheetOn>
          </div>
          <p class="worksheet_text">
            <span class="red">SELECT time rollup 1</span> sec mtime,<br />
            <span class="green">avg</span>(<span class="red">value</span>)
            <span class="red">FROM</span> TAG<br />
            <span class="red">WHERE</span> name =
            <span class="green">“TAG_0001’</span>
            <span class="red">group by</span> mtime
            <span class="red">order by</span> mtime;
          </p>
          <div class="worksheet_btn_wrap">
            <button class="right_border worksheet_markdown">
              <span>Markdown</span><Dropdown></Dropdown>
            </button>
            <button class="right_border"><Play></Play></button>
            <button><DoubleUp></DoubleUp></button>
            <button class="right_border"><DoubleDown></DoubleDown></button>
            <button><UpWard></UpWard></button>
            <button class="right_border"><DownWard></DownWard></button>
            <button><Bin></Bin></button>
            <button class="up_btn"><TabUp></TabUp></button>
          </div>
        </div>
      </div>
      <div class="worksheet_contents">
        <div class="worksheet_box_open">
          <div class="on_btn">
            <WorksheetOn></WorksheetOn>
          </div>
          <p class="worksheet_text">
            <span class="red">SELECT time rollup 1</span> sec mtime,<br />
            <span class="green">avg</span>(<span class="red">value</span>)
            <span class="red">FROM</span> TAG<br />
            <span class="red">WHERE</span> name =
            <span class="green">“TAG_0001’</span>
            <span class="red">group by</span> mtime
            <span class="red">order by</span> mtime;
          </p>
          <div class="worksheet_btn_wrap">
            <button class="right_border worksheet_markdown">
              <span>Markdown</span><Dropdown></Dropdown>
            </button>
            <button class="right_border"><Play></Play></button>
            <button><DoubleUp></DoubleUp></button>
            <button class="right_border"><DoubleDown></DoubleDown></button>
            <button><UpWard></UpWard></button>
            <button class="right_border"><DownWard></DownWard></button>
            <button><Bin></Bin></button>
            <button class="up_btn"><TabUp></TabUp></button>
          </div>
        </div>
      </div>
      <div class="lorem_wrap">
        <p class="lorem_title green">Lorem ipsum</p>
        <p class="lorem_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="worksheet_fold_wrap">
        <div class="on_btn">
          <WorksheetOn></WorksheetOn>
        </div>
        <button class="worksheet_box_fold">
          <button class="fold_dropdown">
            <Dropdown></Dropdown>
          </button>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import TagWorksheet from "@/components/TabWorkSheetView.vue";
import Dropdown from "@/components/svg/Dropdown.vue";
import Refresh from "@/components/svg/Refresh.vue";
import Save from "@/components/svg/Save.vue";
import Folder from "@/components/svg/Folder.vue";
import Bin from "@/components/svg/Bin.vue";
import Up from "@/components/svg/Up.vue";
import Down from "@/components/svg/Down.vue";
import DoublePlay from "@/components/svg/DoublePlay.vue";
import Play from "@/components/svg/Play.vue";
import WorksheetOn from "@/components/svg/WorksheetOn.vue";
import DoubleUp from "@/components/svg/DoubleUp.vue";
import DoubleDown from "@/components/svg/DoubleDown.vue";
import UpWard from "@/components/svg/UpWard.vue";
import DownWard from "@/components/svg/DownWard.vue";
import TabUp from "@/components/svg/TabUp.vue";
import TabDropdown from "@/components/svg/TabDropdown.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
@include button-reset;
.outer {
  @include theme() {
    background-color: theme-get("taganlyzer-bg") !important;
  }
  min-height: 100vh;
  .worksheet_tab {
    height: 54px;
    display: flex;
    align-items: center;
    @include theme() {
      background-color: theme-get("bg-color1") !important;
    }
    .doubleplay_btn {
      margin: 0 16px;
      position: relative;
      &::after {
        content: "";
        width: 1px;
        height: 24px;
        @include theme() {
          background-color: theme-get("worksheet-bar") !important;
        }
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -16px;
      }
    }
    .tag_save_btn {
      margin-left: 8px;
    }
  }
  .worksheet_contents_wrap {
    margin-top: 80px;
    margin-bottom: 200px;
    // @include theme() {
    //   background-color: theme-get("sql-bg") !important;
    // }
    .worksheet_contents {
      display: flex;
      align-items: center;
      flex-direction: column;
      .worksheet_box_open {
        width: 80%;
        height: 240px;
        margin-bottom: 40px;
        border-radius: 10px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
        @include theme() {
          border: solid 0.5px theme-get("none-hover") !important;
          background-color: theme-get("worksheet-box-bg") !important;
        }
        position: relative;
        p {
          font-family: D2Coding;
          font-size: 18px;
          @include theme() {
            color: theme-get("hover-text") !important;
          }
          text-align: left;
          margin: 24px;
          .red {
            color: #ff4460;
          }
          .green {
            color: #55fdd7;
          }
        }
        &:hover {
          border: solid 0.5px #4199ff;
          .on_btn {
            svg {
              fill: #4199ff;
            }
          }
        }
        .on_btn {
          position: absolute;
          top: 12px;
          left: -32px;
          svg {
            @include theme() {
              fill: theme-get("none-hover") !important;
            }
          }
        }
        .worksheet_btn_wrap {
          position: absolute;
          top: 8px;
          right: 12px;
          display: flex;
          align-items: center;

          .right_border {
            position: relative;
            margin-right: 8px;
            &::after {
              content: "";
              @include theme() {
                background-color: theme-get("worksheet-bar") !important;
              }
              width: 1px;
              height: 24px;
              position: absolute;
              right: -4px;
              top: 8px;
              z-index: 20;
            }
          }
          .worksheet_markdown {
            color: rgba(255, 255, 255, 0.5);
            display: flex;
            align-items: center;
            padding-right: 4px;
            span {
              margin-right: 4px;
            }
            &::after {
              content: "";
              background-color: rgba(255, 255, 255, 0.5);
              width: 1px;
              height: 24px;
              position: absolute;
              right: -4px;
              top: -6px;
              z-index: 20;
            }
          }
          .up_btn {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            @include theme() {
              border: solid 0.5px theme-get("none-hover") !important;
            }
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
          }
        }
      }
    }
    .lorem_wrap {
      width: 80%;
      margin: 0 auto;
      padding-left: 26px;
      .lorem_title {
        color: #55fdd7;
        font-family: Pretendard;
        font-size: 32px;
        margin-bottom: 18px;
      }
      .lorem_text {
        font-family: Pretendard;
        font-size: 18px;
        @include theme() {
          color: theme-get("hover-text") !important;
        }
        margin-bottom: 40px;
      }
    }
    .worksheet_fold_wrap {
      width: 80%;
      height: 56px;
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
      border: solid 0.5px rgba(255, 255, 255, 0.5);
      @include theme() {
        border: solid 0.5px theme-get("none-hover") !important;
        background-color: theme-get("worksheet-box-bg") !important;
      }
      position: relative;
      margin: 0 auto;
      .worksheet_box_fold {
        margin-right: 12px;
        .fold_dropdown {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          @include theme() {
            border: solid 0.5px theme-get("none-hover") !important;
          }
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 12px;
          top: 12px;
        }
      }
      .on_btn {
        position: absolute;
        top: 12px;
        left: -32px;
        @include theme() {
          fill: theme-get("none-hover") !important;
        }
      }
      &:hover {
        border: solid 0.5px #4199ff;
        .on_btn {
          svg {
            fill: #4199ff;
          }
        }
      }
    }
  }
}
</style>
