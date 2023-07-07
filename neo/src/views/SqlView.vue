<template>
  <div class="outer">
    <!-- tab 부분 -->
    <Tab />
    <!-- 좌측 tab -->
    <div class="sql">
      <div class="sql_left">
        <div class="sql_tab_left">
          <button>
            <Play></Play>
          </button>
          <button @click="openModal" class="modal_btn">
            <Date></Date>
            <span> YYYY-MM-DD HH:MI:SS </span>
            <Dropdown></Dropdown>
          </button>
          <!-- date modal background -->
          <div class="backdrop" v-if="isModalOpen"></div>
          <!-- date modal contents -->
          <div class="date_modal" v-if="isModalOpen">
            <div class="date_modal_content_wrap">
              <div class="date_modal_title">
                <div>
                  <Date></Date>
                  <span>Time Range</span>
                </div>
                <div>
                  <button @click="closeModal">
                    <TabClose></TabClose>
                  </button>
                </div>
              </div>
              <div class="date_modal_content">
                <div class="date_modal_button_wrap">
                  <div>
                    <span>From</span>
                  </div>
                  <div>
                    <button @click="toggleDiv1">
                      <Date></Date>
                      <span>now-5m</span>
                      <Dropdown></Dropdown>
                    </button>
                    <div v-if="isDiv1Visible" class="date_container">
                      <div class="date_wrap">
                        <div class="date_left">
                          <div>
                            <div>
                              <button></button>
                              <button></button>
                            </div>
                            <div>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                          </div>
                          <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                          </div>
                          <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                          </div>
                          <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                          </div>
                          <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                          </div>
                          <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                          </div>
                          <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                          </div>
                        </div>
                        <div class="date_right"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="date_modal_button_wrap">
                  <div>
                    <span>To</span>
                  </div>
                  <div>
                    <button @click="toggleDiv2">
                      <Date></Date>
                      <span>now</span>
                      <Dropdown></Dropdown>
                    </button>
                    <div v-if="isDiv2Visible" class="date_container">
                      <div>1234</div>
                    </div>
                  </div>
                </div>
                <div class="date_modal_button_wrap">
                  <div>
                    <span>Refreshing Every</span>
                  </div>
                  <div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          data-name="사각형 1005"
                          style="fill: none"
                          d="M0 0h16v16H0z"
                        />
                        <path
                          d="M46.4-904.025v-4.94a.25.25 0 0 1 .137-.238.267.267 0 0 1 .284.018l3.824 2.452a.28.28 0 0 1 .128.238.28.28 0 0 1-.128.238l-3.824 2.452a.267.267 0 0 1-.284.018.25.25 0 0 1-.137-.238zm-5.306 1.61v1.94a.533.533 0 0 1-.156.393.533.533 0 0 1-.393.156.533.533 0 0 1-.393-.156.533.533 0 0 1-.156-.393v-3.275a.533.533 0 0 1 .156-.393.533.533 0 0 1 .393-.156h3.257a.533.533 0 0 1 .393.156.533.533 0 0 1 .156.393.533.533 0 0 1-.156.393.533.533 0 0 1-.393.156H41.9a7.553 7.553 0 0 0 2.69 2.7 6.993 6.993 0 0 0 3.586.961 6.615 6.615 0 0 0 3.705-1.1 6.738 6.738 0 0 0 2.5-2.928 1.28 1.28 0 0 1 .32-.439.523.523 0 0 1 .467-.11.429.429 0 0 1 .339.3.637.637 0 0 1-.046.5 7.859 7.859 0 0 1-2.9 3.541 7.664 7.664 0 0 1-4.382 1.327 8.077 8.077 0 0 1-4.044-1.034 8.571 8.571 0 0 1-3.035-2.932zm-.512-4.812a.447.447 0 0 1-.384-.174.563.563 0 0 1-.091-.43 7.132 7.132 0 0 1 .485-1.72 8.919 8.919 0 0 1 .887-1.574.58.58 0 0 1 .375-.265.435.435 0 0 1 .412.137.548.548 0 0 1 .183.439 1.06 1.06 0 0 1-.165.476 7.377 7.377 0 0 0-.659 1.208 6.933 6.933 0 0 0-.4 1.317.824.824 0 0 1-.22.421.57.57 0 0 1-.419.165zm6.77-6.733a.554.554 0 0 1-.174.421.878.878 0 0 1-.43.22 6.672 6.672 0 0 0-1.345.412 7.6 7.6 0 0 0-1.235.686.813.813 0 0 1-.457.146.555.555 0 0 1-.421-.2.432.432 0 0 1-.128-.393.561.561 0 0 1 .238-.375 7.843 7.843 0 0 1 1.583-.9 8.233 8.233 0 0 1 1.747-.494.592.592 0 0 1 .439.091.438.438 0 0 1 .187.385zm5.453 1.683a.525.525 0 0 1-.421.192.876.876 0 0 1-.457-.156 7.254 7.254 0 0 0-1.226-.677 6.86 6.86 0 0 0-1.336-.4.7.7 0 0 1-.421-.21.6.6 0 0 1-.165-.43.446.446 0 0 1 .174-.384.563.563 0 0 1 .43-.091 7.58 7.58 0 0 1 1.729.476 7.411 7.411 0 0 1 1.564.9.637.637 0 0 1 .256.375.416.416 0 0 1-.124.405zm2.708 5.05a.554.554 0 0 1-.421-.174.878.878 0 0 1-.22-.43 5.987 5.987 0 0 0-.43-1.345 8.824 8.824 0 0 0-.7-1.235.864.864 0 0 1-.156-.448.593.593 0 0 1 .174-.43.446.446 0 0 1 .4-.146.557.557 0 0 1 .366.238 8.448 8.448 0 0 1 .942 1.583 7.282 7.282 0 0 1 .521 1.766.592.592 0 0 1-.091.439.438.438 0 0 1-.382.182z"
                          transform="translate(-40 914.444)"
                        />
                      </svg>
                      <span>off</span>
                      <Dropdown></Dropdown>
                    </button>
                  </div>
                </div>
              </div>
              <div class="date_modal_quick_wrap">
                <div class="date_modal_quick">
                  <div>
                    <span>Quick Range</span>
                  </div>

                  <div class="date_modal_quick_btn_wrap">
                    <button>Last 2 days</button>
                    <button>Last 7 days</button>
                    <button>Last 30 days</button>
                    <button>Last 90 days</button>
                    <button>Last 6 Months</button>
                    <button>Last 1 years</button>
                    <button>Last 2 years</button>
                    <button>Last 5 years</button>
                  </div>
                  <div class="date_modal_quick_btn_wrap">
                    <button>Last 5 minutes</button>
                    <button>Last 15 minutes</button>
                    <button>Last 30 minutes</button>
                    <button>Last 1 hour</button>
                    <button>Last 3 hour</button>
                    <button>Last 6 hour</button>
                    <button>Last 9 hour</button>
                    <button>Last 12 hour</button>
                    <button>Last 24 hour</button>
                  </div>
                </div>
              </div>
              <div class="date_modal_apply_wrap">
                <button>Apply</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
          <button class="modal_btn">
            <Local></Local>
            <span>LOCAL</span>
            <Dropdown></Dropdown>
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
          <button class="sql_tab_select sql_right_tab_btn">
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
          <button class="sql_tab_none_select sql_right_tab_btn">
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
import Tabresult from "@/components/svg/Tabresult.vue";
import Tabchart from "@/components/svg/Tabchart.vue";
import Tablog from "@/components/svg/Tablog.vue";
import Vertical from "@/components/svg/Vertical.vue";
import Horizontal from "@/components/svg/Horizontal.vue";
import TabClose from "@/components/svg/TabClose.vue";
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
  background-color: #262831;
  height: 100%;
  .sql {
    display: flex;
    height: 100%;
  }
  .sql_left {
    background-color: #101010;
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
      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(38, 40, 49, 0.5);
        z-index: 998;
      }
      .date_modal {
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
        .date_modal_content_wrap {
          .date_modal_title {
            display: flex;
            justify-content: space-between;
            margin: 16px 0 45px 0;
            padding: 0 16px;
            svg {
              fill: rgba(255, 255, 255, 1);
              stroke: rgba(255, 255, 255, 1);
            }
            span {
              color: #fff;

              font-family: Pretendard;
              margin-left: 6px;
              font-weight: 500;
            }
          }
          .date_modal_content {
            padding: 0 59px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            span {
              font-family: Pretendard;
              font-size: 16px;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.5);
            }
            button {
              width: 260px;
              height: 34px;
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
              border: solid 0.5px #fff;
              background-color: rgba(38, 40, 49, 0.5);
              border-radius: 8px;
              &:hover {
                span {
                  color: rgba(255, 255, 255, 1);
                }
              }
            }
            .date_modal_button_wrap {
              margin-bottom: 8px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              button {
                display: flex;
                align-items: center;
                position: relative;
                svg {
                  padding: 0 10px;
                }
                .modal_arrow {
                  position: absolute;
                  right: 8px;
                }
              }
            }
          }
          .date_modal_quick_wrap {
            margin-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            padding: 32px 59px;
            span {
              color: rgba(255, 255, 255, 0.5);
            }
            .date_modal_quick {
              display: flex;
              justify-content: space-between;
              .date_modal_quick_btn_wrap {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                button {
                  color: #4199ff;
                  font-family: Pretendard;
                  font-weight: 500;
                }
              }
            }
          }
          .date_modal_apply_wrap {
            display: flex;
            justify-content: center;
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            button {
              border: 0.5px solid rgba(255, 255, 255, 1);
              width: 120px;
              height: 40px;
              margin: 40px 0;
              display: flex;
              justify-content: center;
              align-items: center;
              color: rgba(255, 255, 255, 1);
              border-radius: 8px;
              background-color: rgba(255, 255, 255, 0.5);
              &:hover {
                background-color: rgba(255, 255, 255, 1);
                color: #404457;
              }
              &:first-child {
                margin-right: 10px;
              }
            }
          }
        }
      }

      button {
        svg {
          fill: rgba(255, 255, 255, 0.5);
        }
        &:hover {
          span {
            color: rgba(255, 255, 255, 1);
          }
          svg {
            fill: rgba(255, 255, 255, 1);
            path {
              fill: rgba(255, 255, 255, 1);
            }
            .modal_arrow_icon {
              stroke: rgba(255, 255, 255, 1);
            }
          }
        }
      }
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
    background-color: #101010;
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
        fill: #fdb532;
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
  data() {
    return {
      isModalOpen: false,
      isDiv1Visible: false,
      isDiv2Visible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    toggleDiv1() {
      this.isDiv1Visible = !this.isDiv1Visible;
    },
    toggleDiv2() {
      this.isDiv2Visible = !this.isDiv2Visible;
    },
  },
};
</script>
