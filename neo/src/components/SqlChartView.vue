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
            <div>
              <Date></Date>
              <span> YYYY-MM-DD HH:MI:SS </span>
            </div>
            <span><Dropdown></Dropdown></span>
          </button>
          <button class="modal_btn">
            <div>
              <Local></Local>
              <span>LOCAL</span>
            </div>
            <span><Dropdown></Dropdown></span>
          </button>
          <button @click="openSaveModal" class="sql_save_btn">
            <Save></Save>
          </button>
          <div class="backdrop" v-if="isSaveModalOpen"></div>
          <div class="save_modal" v-if="isSaveModalOpen">
            <div class="save_modal_wrap">
              <div class="save_modal_tilte">
                <div>
                  <Folder></Folder>
                  <span>Open</span>
                </div>
                <button @click="closeSaveModal"><TabClose></TabClose></button>
              </div>
              <div class="save_modal_top">
                <div>
                  <button class="save_modal_top_btn">
                    <TagPrevious></TagPrevious>
                  </button>
                  <button class="save_modal_top_btn">
                    <TagNext></TagNext>
                  </button>
                </div>
                <button class="save_modal_top_adress_btn">
                  <SaveHome></SaveHome>
                  <SavePlay></SavePlay>
                </button>
                <button><SaveNew></SaveNew></button>
              </div>
              <div class="save_modal_contents">
                <div class="save_modal_contents_title">
                  <div class="save_modal_name">Name</div>
                  <div class="save_modal_date">Last modified</div>
                  <div class="save_modal_size">Size</div>
                </div>
                <div class="save_modal_content_wrap">
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveFile></SaveFile>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                  <div class="save_modal_content">
                    <button>
                      <div class="save_modal_name">
                        <SaveSql></SaveSql>Folder
                      </div>
                      <div class="save_modal_date">8day ago</div>
                      <div class="save_modal_size">3 KB</div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="save_modal_footer">
                <button @click="closeSaveModal" class="save_modal_btn">
                  OK
                </button>
                <button @click="closeSaveModal" class="save_modal_btn last">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <button @click="openOpenModal" class="sql_file_btn">
            <Folder></Folder>
          </button>
          <div class="backdrop" v-if="isOpenModalOpen"></div>
          <div class="open_modal" v-if="isOpenModalOpen">
            <div class="open_modal_wrap"></div>
          </div>
        </div>
        <div class="sql_left_table"></div>
      </div>
      <!-- 우측 tab -->
      <div class="sql_right">
        <div class="sql_tab_right">
          <router-link to="/sql">
            <button class="sql_tab_none_select sql_right_tab_btn">
              <div class="sql_round_right_wrap">
                <div class="round_right"></div>
              </div>
              <Tabresult></Tabresult>
              <span>RESULT</span>
              <div class="sql_round_left_wrap">
                <div class="round_left"></div>
              </div>
            </button>
          </router-link>
          <router-link to="/sqlchart">
            <button class="sql_tab_select sql_right_tab_btn">
              <div class="sql_round_right_wrap">
                <div class="round_right"></div>
              </div>
              <Tabchart></Tabchart>
              <span> CHART </span>
              <div class="sql_round_left_wrap">
                <div class="round_left"></div>
              </div>
            </button>
          </router-link>
          <router-link to="/sqllog">
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
          </router-link>
          <button class="sql_vertical">
            <Vertical></Vertical>
          </button>
          <button class="sql_horizontal">
            <Horizontal></Horizontal>
          </button>
        </div>
        <div class="sql_right_table">
          <div class="sql_right_table_tab">
            <button><Play></Play></button>
            <div class="sql_right_table_tab_btn_wrap">
              <div>
                <span>Slider</span><button>20%<Dropdown></Dropdown></button>
              </div>
              <div>
                <span>X Axis</span><button>--<Dropdown></Dropdown></button>
              </div>
              <div>
                <span>Y Axis</span><button>--<Dropdown></Dropdown></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Play from "@/components/svg/Play.vue";
import Date from "@/components/svg/Date.vue";
import TagNext from "@/components/svg/TagNext.vue";
import TagPrevious from "@/components/svg/TagPrevious.vue";
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
import Setting from "./SettingView.vue";
import Tab from "./TabView.vue";
import SavePlay from "@/components/svg/SavePlay.vue";
import SaveFile from "@/components/svg/SaveFile.vue";
import SaveSql from "@/components/svg/SaveSql.vue";
import SaveHome from "@/components/svg/SaveHome.vue";
import SaveNew from "@/components/svg/SaveNew.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
button {
  svg {
    stroke: rgba(255, 255, 255, 0.5);
    fill: rgba(255, 255, 255, 0.5);

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
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        background-color: #262831;
        width: 256px;
        height: 32px;
        margin-left: 20px;
        div {
          display: flex;
          align-items: center;
        }
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
      .save_modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 780px;
        background-color: #404457;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16),
          inset 0 -1px 8px 0 rgba(0, 0, 0, 0.3);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        z-index: 999;
        .save_modal_wrap {
          .save_modal_tilte {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 30px 28px 26px;
            svg {
              fill: rgba(255, 255, 255, 1);
              stroke: rgba(255, 255, 255, 1);
            }
            span {
              color: rgba(255, 255, 255, 1);
            }
            div {
              display: flex;
              align-items: center;
            }
          }
          .save_modal_top {
            padding: 0 30px 12px 28px;
            display: flex;
            align-items: center;
            div {
              .save_modal_top_btn {
                margin-right: 8px;
              }
            }
            .save_modal_top_adress_btn {
              margin: 0 8px;
              width: 566px;
              height: 34px;
              border-radius: 8px;
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
              border: solid 0.5px rgba(255, 255, 255, 0.5);
              background-color: rgba(38, 40, 49, 0.5);
              display: flex;
              align-items: center;
              padding-left: 10px;
            }
          }
          .save_modal_contents {
            height: 300px;
            width: calc(100% - 1px);
            border: solid 0.5px #9c9da6;
            background-color: rgba(38, 40, 49, 0.5);
            .save_modal_contents_title {
              display: flex;
              font-family: Pretendard;
              font-size: 12px;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.5);
              border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
              padding: 4px 0;
              .save_modal_name {
                width: 47%;
                margin-left: 24px;
              }
              .save_modal_date {
                width: 31%;
              }
            }
            .save_modal_content {
              button {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-family: Pretendard;
                font-size: 16px;
                font-weight: 500;
                color: #fff;
                .save_modal_name {
                  width: 47%;
                  margin-left: 24px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                }
                .save_modal_date {
                  width: 31%;
                  display: flex;
                  justify-content: flex-start;
                }
                &:hover {
                  margin: 0 auto;
                  background-color: #4199ff;
                  border-radius: 8px;
                  width: 98%;
                  .save_modal_name {
                    margin-left: 16px;
                  }
                  .save_modal_date {
                    margin-left: 8px;
                  }
                  .save_modal_size {
                    margin-left: 4px;
                  }
                }
              }
            }
          }
          .save_modal_footer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 34px 0 40px 0;
            .save_modal_btn {
              width: 120px;
              height: 40px;
              border-radius: 8px;
              box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
              border: solid 0.5px #d9d9d9;
              background-color: rgba(255, 255, 255, 0.2);
              color: rgba(255, 255, 255, 1);
              margin-right: 8px;
              &:hover {
                background-color: #4199ff;
              }
            }
            .last {
              margin-right: 0;
            }
          }
        }
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
    .sql_right_table_tab {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      border-bottom: 1px solid #fdb532;
      height: 50px;
      .sql_right_table_tab_btn_wrap {
        display: flex;
        align-items: center;
        div {
          display: flex;
          align-items: center;
          span {
            color: #fdb532;
            margin-right: 16px;
            margin-left: 24px;
          }
          button {
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255, 255, 255, 0.5);
            width: 86px;
            height: 32px;
            border-radius: 8px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
            border: solid 0.5px rgba(255, 255, 255, 0.5);
            background-color: #404457;
            &:hover {
              color: rgba(255, 255, 255, 1);
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
      isSaveModalOpen: false,
      isOpenModalOpen: false,
    };
  },
  methods: {
    openSaveModal() {
      this.isSaveModalOpen = true;
    },
    closeSaveModal() {
      this.isSaveModalOpen = false;
    },
    openOpenModal() {
      this.isOpenModalOpen = true;
    },
    closeOpenModal() {
      this.isOpenModalOpen = false;
    },
  },
};
</script>
