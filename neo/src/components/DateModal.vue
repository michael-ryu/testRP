<template>
  <div class="date_modal">
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
            <button class="togglediv" @click="toggleDiv1">
              <div>
                <Date></Date>
                <span>now-5m</span>
              </div>
              <Dropdown></Dropdown>
            </button>
            <div v-if="isDiv1Visible" class="date_container">
              <div class="date_wrap">
                <div class="date_left">
                  <div class="date_left_top">
                    <div class="date_left_top_btn_wrap">
                      <button
                        class="date_month_modal_btn"
                        click="toggleDiv3"
                        @click="toggleDiv3"
                      >
                        Jun
                        <Dropdown></Dropdown>
                      </button>
                      <div v-if="isDiv3Visible" class="date_month_warp">
                        <div class="date_month_input">
                          <button>Jan</button>
                          <button>Feb</button>
                          <button>Mar</button>
                          <button>Apr</button>
                          <button>May</button>
                          <button>Jun</button>
                          <button>Jul</button>
                          <button>Aug</button>
                          <button>Sep</button>
                          <button>Oct</button>
                          <button>Nov</button>
                          <button>Dec</button>
                        </div>
                      </div>
                      <button class="date_month_modal_btn">
                        0000 <Dropdown></Dropdown>
                      </button>
                    </div>
                    <div class="date_left_top_span_wrap">
                      <span>Mo</span>
                      <span>Tu</span>
                      <span>We</span>
                      <span>Th</span>
                      <span>Fr</span>
                      <span>Sa</span>
                      <span>Su</span>
                    </div>
                  </div>
                  <div class="date_left_bottom_btn_wrap">
                    <div class="date_left_bottom_btn_flex">
                      <button class="date_gray_btn">29</button>
                      <button class="date_gray_btn">30</button>
                      <button class="date_gray_btn">31</button>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>5</button>
                      <button>6</button>
                      <button>7</button>
                      <button>8</button>
                      <button>9</button>
                      <button>10</button>
                      <button>11</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>12</button>
                      <button>13</button>
                      <button>14</button>
                      <button>15</button>
                      <button>16</button>
                      <button>17</button>
                      <button>18</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>19</button>
                      <button>20</button>
                      <button>21</button>
                      <button>22</button>
                      <button>23</button>
                      <button>24</button>
                      <button>25</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>26</button>
                      <button>27</button>
                      <button>28</button>
                      <button>29</button>
                      <button>30</button>
                      <button>31</button>
                      <button>00</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>00</button>
                      <button>00</button>
                      <button>00</button>
                      <button class="date_none"></button>
                      <button class="date_none"></button>
                      <button class="date_none"></button>
                      <button class="date_none"></button>
                    </div>
                  </div>
                </div>
                <div class="date_right">
                  <div class="date_right_warp">
                    <div class="date_right_btn_warp">
                      <button><Up></Up></button>
                      <button><Up></Up></button>
                      <button><Up></Up></button>
                    </div>
                    <div class="date_right_span_warp">
                      <span>00</span> <span class="date_gray">:</span>
                      <span>00</span> <span class="date_gray">:</span>
                      <span>00</span>
                    </div>
                    <div class="date_right_btn_warp">
                      <button><Down></Down></button>
                      <button><Down></Down></button>
                      <button><Down></Down></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="date_modal_button_wrap">
          <div>
            <span>To</span>
          </div>
          <div>
            <button class="togglediv" @click="toggleDiv2">
              <div>
                <Date></Date>
                <span>now</span>
              </div>
              <Dropdown></Dropdown>
            </button>
            <div v-if="isDiv2Visible" class="date_container">
              <div class="date_wrap">
                <div class="date_left">
                  <div class="date_left_top">
                    <div class="date_left_top_btn_wrap">
                      <button
                        class="date_month_modal_btn"
                        click="toggleDiv3"
                        @click="toggleDiv3"
                      >
                        Jun
                        <span><Dropdown></Dropdown></span>
                      </button>
                      <div v-if="isDiv3Visible" class="date_month_warp">
                        <div class="date_month_input">
                          <button>Jan</button>
                          <button>Feb</button>
                          <button>Mar</button>
                          <button>Apr</button>
                          <button>May</button>
                          <button>Jun</button>
                          <button>Jul</button>
                          <button>Aug</button>
                          <button>Sep</button>
                          <button>Oct</button>
                          <button>Nov</button>
                          <button>Dec</button>
                        </div>
                      </div>
                      <button class="date_month_modal_btn">
                        0000 <Dropdown></Dropdown>
                      </button>
                    </div>
                    <div class="date_left_top_span_wrap">
                      <span>Mo</span>
                      <span>Tu</span>
                      <span>We</span>
                      <span>Th</span>
                      <span>Fr</span>
                      <span>Sa</span>
                      <span>Su</span>
                    </div>
                  </div>
                  <div class="date_left_bottom_btn_wrap">
                    <div class="date_left_bottom_btn_flex">
                      <button class="date_gray_btn">29</button>
                      <button class="date_gray_btn">30</button>
                      <button class="date_gray_btn">31</button>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>5</button>
                      <button>6</button>
                      <button>7</button>
                      <button>8</button>
                      <button>9</button>
                      <button>10</button>
                      <button>11</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>12</button>
                      <button>13</button>
                      <button>14</button>
                      <button>15</button>
                      <button>16</button>
                      <button>17</button>
                      <button>18</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>19</button>
                      <button>20</button>
                      <button>21</button>
                      <button>22</button>
                      <button>23</button>
                      <button>24</button>
                      <button>25</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>26</button>
                      <button>27</button>
                      <button>28</button>
                      <button>29</button>
                      <button>30</button>
                      <button>31</button>
                      <button>00</button>
                    </div>
                    <div class="date_left_bottom_btn_flex">
                      <button>00</button>
                      <button>00</button>
                      <button>00</button>
                      <button class="date_none"></button>
                      <button class="date_none"></button>
                      <button class="date_none"></button>
                      <button class="date_none"></button>
                    </div>
                  </div>
                </div>
                <div class="date_right">
                  <div class="date_right_warp">
                    <div class="date_right_btn_warp">
                      <button><Up></Up></button>
                      <button><Up></Up></button>
                      <button><Up></Up></button>
                    </div>
                    <div class="date_right_span_warp">
                      <span>00</span> <span class="date_gray">:</span>
                      <span>00</span> <span class="date_gray">:</span>
                      <span>00</span>
                    </div>
                    <div class="date_right_btn_warp">
                      <button><Down></Down></button>
                      <button><Down></Down></button>
                      <button><Down></Down></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="date_modal_button_wrap">
          <div>
            <span>Refreshing Every</span>
          </div>
          <div>
            <button class="togglediv">
              <div>
                <DateRefresh></DateRefresh>
                <span>off</span>
              </div>
              <span><Dropdown></Dropdown></span>
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
        <button class="blue_btn">Apply</button>
        <button @click="closeModal">Cancel</button>
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
import DateRefresh from "@/components/svg/DateRefresh.vue";
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
      }
      span {
        color: #fff;
        font-family: Pretendard;
        margin-left: 6px;
        font-weight: 500;
      }
      .modal_close_btn {
        stroke: rgba(255, 255, 255, 1);
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
      .togglediv {
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          align-items: center;
        }
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
      .date_container {
        position: absolute;
        background-color: #404457;
        z-index: 999;
        margin-top: 4px;
        width: 520px;
        border-radius: 10px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        .date_wrap {
          display: flex;
          .date_left {
            width: calc(50% - 16px);
            border-right: 1px solid rgba(255, 255, 255, 0.5);

            .date_left_top {
              padding: 4px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.5);
              .date_left_top_btn_wrap {
                display: flex;
                justify-content: space-between;
                button {
                  color: #fff;
                  display: flex;
                  align-items: center;
                  width: 118px;
                  height: 32px;
                  background-color: #404457;
                  border: 0;
                  padding: 0 10px;
                }
                .date_month_modal_btn {
                  display: flex;
                  justify-content: space-between;
                }
                .date_month_warp {
                  width: 118px;
                  border-radius: 8px;
                  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
                  border: solid 0.5px rgba(255, 255, 255, 0.5);
                  background-color: #404457;
                  position: absolute;
                  top: 40px;
                  z-index: 999;
                  left: 4px;
                  padding: 4px 0;
                  button {
                    color: rgba(255, 255, 255, 0.5);
                    &:hover {
                      width: 108px;
                      margin: 0 auto;
                      background-color: rgba(255, 255, 255, 0.08);
                      border-radius: 8px;
                      padding: 5px;
                      color: rgba(255, 255, 255, 1);
                    }
                  }
                }
              }
              .date_left_top_span_wrap {
                display: flex;
                justify-content: space-between;
                color: #fff;
                padding-left: 5px;
                span {
                  width: 23px;
                }
              }
            }
            .date_left_bottom_btn_wrap {
              display: flex;
              flex-direction: column;
              padding: 4px;

              .date_left_bottom_btn_flex {
                display: flex;
                justify-content: space-between;
                margin-top: 4px;
                button {
                  width: 32px;
                  height: 32px;
                  background-color: #4f5364;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: rgba(255, 255, 255, 1);
                  border: 0;
                  border-radius: 8px;
                }
                .date_none {
                  opacity: 0;
                  cursor: default;
                }
              }
            }
          }
          .date_right {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0 auto;
            .date_right_warp {
              display: flex;
              align-items: center;
              flex-direction: column;
              width: 100%;
              .date_right_btn_warp {
                width: calc(100% - 95px);
                display: flex;
                justify-content: space-between;
                button {
                  width: 24px;
                  height: 24px;
                  border: 0;
                  svg {
                    padding: 0;
                  }
                }
              }
              .date_right_span_warp {
                display: flex;
                justify-content: space-between;
                width: calc(100% - 80px);
                margin: 10px 0;
                span {
                  font-size: 32px;
                  font-weight: 500;
                  font-family: Pretendard;
                  color: #fff;
                }
                .date_gray {
                  color: rgba(255, 255, 255, 0.5);
                }
              }
            }
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
        position: relative;

        &:hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          z-index: 1;
        }
        &:first-child {
          margin-right: 10px;
        }
      }
      .blue_btn {
        background-color: #4199ff;
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
</style>
<script>
export default {
  data() {
    return {
      isModalOpen: false,
      isDiv1Visible: false,
      isDiv2Visible: false,
      isDiv3Visible: false,
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
    toggleDiv3() {
      this.isDiv3Visible = !this.isDiv3Visible;
    },
  },
};
</script>
