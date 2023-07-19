<template>
  <div class="outer">
    <!-- tab 부분 -->
    <Tagtab />
    <div class="tag_tab">
      <button @click="openModal" class="modal_btn">
        <div>
          <Date></Date>
          <span> now-2d ~ now refresh every 10s </span>
        </div>
        <Dropdown></Dropdown>
      </button>
      <div class="backdrop" v-if="isModalOpen"></div>
      <DateModal v-if="isModalOpen"></DateModal>
      <button class="refresh_btn">
        <Refresh></Refresh>
      </button>
      <button class="tag_save_btn">
        <Save></Save>
      </button>
      <button>
        <Folder></Folder>
      </button>
    </div>
    <div class="tag_table_wrap">
      <div class="tag_table_subtab">
        <div class="tag_chart_index">
          <img src="@/assets/image/ic_tab_code_on.png" /><span
            >CHART - 001</span
          >
        </div>
        <div class="tag_chart_date">
          <span>0000-00-00 00:00:00 ~ 0000-00-00 00:00:00</span>
        </div>
        <div>
          <button>
            <Refresh></Refresh>
          </button>
          <router-link to="/tagsetting">
            <button>
              <Gear></Gear>
            </button>
          </router-link>
          <button>
            <Bin></Bin>
          </button>
        </div>
      </div>
      <div class="tag_table">
        <button class="tag_arrow">
          <Previous></Previous>
        </button>
        <div class="tag_chart_img_wrap">
          <img class="tag_chart_img" src="@/assets/image/img_chart_dark.png" />
        </div>
        <button class="tag_arrow">
          <Next></Next>
        </button>
      </div>
      <div class="tag_zoom_wrap">
        <button>
          <Zoomin4></Zoomin4>
        </button>
        <button>
          <Zoomin2></Zoomin2>
        </button>
        <button>
          <Focus></Focus>
        </button>
        <button>
          <Zoomout2></Zoomout2>
        </button>
        <button>
          <Zoomout4></Zoomout4>
        </button>
      </div>
      <div class="tag_bar_wrap">
        <div>
          <img
            class="tag_chart_bar"
            src="@/assets/image/img_chartnavi_dark.png"
          />
        </div>
      </div>
    </div>

    <button @click="openTagModal" class="tag_plus_wrap">
      <Add></Add>
    </button>
    <div class="backdrop" v-if="isTagModalOpen"></div>
    <div class="tag_modal" v-if="isTagModalOpen">
      <div class="tag_modal_wrap">
        <div class="tag_modal_title">
          <div><TabTaganalyzer></TabTaganalyzer><span>New Chart</span></div>
          <button @click="closeTagModal"><TabClose></TabClose></button>
        </div>
        <div class="tag_modal_contents_wrap">
          <div class="tag_modal_contents">
            <span>Table</span
            ><button class="tag_modal_table_btn">
              machloTchartBlack<Dropdown></Dropdown>
            </button>
          </div>
          <p>* The table is show because the roll-up table is not generated.</p>
          <div class="tag_modal_contents">
            <span>Tag</span>
            <div class="tag_modal_tag_btn_wrap">
              <button class="tag_modal_tag_size_btn">
                small<TabClose></TabClose></button
              ><button class="tag_modal_tag_serch_btn">Search</button>
            </div>
          </div>
          <div class="tag_modal_contents">
            <span>Chart</span>
            <div class="tag_modal_chart_wrap">
              <button class="tag_modal_chart_btn">
                <img src="@/assets/image/img_chart_01.png" /></button
              ><button class="tag_modal_chart_btn">
                <img src="@/assets/image/img_chart_02.png" /></button
              ><button class="tag_modal_chart_btn last">
                <img src="@/assets/image/img_chart_03.png" />
              </button>
            </div>
          </div>
          <div class="tag_modal_contents">
            <div class="tag_modal_data_wrap">
              <div class="tag_modal_data">
                <p>TAG_0001</p>
              </div>
              <div class="tag_modal_data">
                <div>
                  TAG_0001<button class="tag_modal_data_btn">
                    Average<Dropdown></Dropdown>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="tag_modal_contents">
            <div class="tag_modal_tag_add_tag_wrap">
              <div class="tag_modal_data_add_btn_wrap">
                <button class="tag_modal_data_tag_add_btn">
                  <TagPrevious></TagPrevious>
                </button>
                <span>1</span>
                <button class="tag_modal_data_tag_add_btn">
                  <TagNext></TagNext>
                </button>
              </div>
              <div>
                <span>TOTAL : 1/1</span>
              </div>
            </div>
            <div class="tag_modal_tag_add_tag_select_wrap">
              <span>SELECT : 3</span>
            </div>
          </div>
        </div>
        <div class="tag_modal_footer">
          <button class="tag_modal_footer_btn blue_btn">OK</button>
          <button class="tag_modal_footer_btn last">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DateModal from "@/components/DateModal.vue";
import Tagtab from "@/components/TagtabView.vue";
import TabTaganalyzer from "@/components/svg/TabTaganalyzer.vue";
import TabClose from "@/components/svg/TabClose.vue";
import Date from "@/components/svg/Date.vue";
import TagPrevious from "@/components/svg/TagPrevious.vue";
import TagNext from "@/components/svg/TagNext.vue";
import Chartimg1 from "@/components/svg/Chartimg1.vue";
import Chartimg2 from "@/components/svg/Chartimg2.vue";
import Chartimg3 from "@/components/svg/Chartimg3.vue";
import Dropdown from "@/components/svg/Dropdown.vue";
import Refresh from "@/components/svg/Refresh.vue";
import Previous from "@/components/svg/Previous.vue";
import Next from "@/components/svg/Next.vue";
import Save from "@/components/svg/Save.vue";
import Folder from "@/components/svg/Folder.vue";
import Bin from "@/components/svg/Bin.vue";
import Gear from "@/components/svg/Gear.vue";
import Zoomin4 from "@/components/svg/Zoomin4.vue";
import Zoomin2 from "@/components/svg/Zoomin2.vue";
import Focus from "@/components/svg/Focus.vue";
import Zoomout2 from "@/components/svg/Zoomout2.vue";
import Zoomout4 from "@/components/svg/Zoomout4.vue";
import Add from "@/components/svg/Add.vue";
import Local from "@/components/svg/Local.vue";
import Up from "@/components/svg/Up.vue";
import Down from "@/components/svg/Down.vue";
import Setting from "../components/SettingView.vue";
import Tab from "../components/TabView.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
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
      stroke: rgba(255, 255, 255, 1);
      fill: rgba(255, 255, 255, 1);
      path {
        fill: rgba(255, 255, 255, 1);
      }
    }
  }
}
.outer {
  background-color: #1b1c21;
  min-height: 100vh;
  .tag_tab {
    height: 54px;
    display: flex;
    align-items: center;
    background-color: #262831;

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(38, 40, 49, 0.5);
      z-index: 998;
    }
    .modal_btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
      border: solid 0.5px rgba(255, 255, 255, 0.5);
      background-color: #262831;
      width: 360px;
      height: 32px;
      margin-left: 20px;
      padding: 0 10px;
      div {
        display: flex;
        align-items: center;
      }
      svg {
        margin-right: 8px;
        path {
          fill: rgba(255, 255, 255, 0.5);
        }
        .modal_arrow_icon {
          stroke: rgba(255, 255, 255, 0.5);
        }
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
      .modal_arrow_icon {
        stroke: rgba(255, 255, 255, 0.5);
      }
      &:hover {
        border: solid 0.5px rgba(255, 255, 255, 1);
        svg {
          path {
            fill: rgba(255, 255, 255, 1);
          }
          .modal_arrow_icon {
            stroke: rgba(255, 255, 255, 1);
          }
        }
        span {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .refresh_btn {
      margin: 0 16px;
      position: relative;
      &::after {
        content: "";
        width: 1px;
        height: 24px;
        background-color: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -16px;
      }
    }
    .tag_save_btn {
      margin-left: 12px;
      margin-right: 4px;
    }
  }
  .tag_table_wrap {
    width: calc(100% - 80px);
    background-color: #262831;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    .tag_table_subtab {
      padding-top: 32px;
      margin: 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        svg {
          path {
            fill: rgba(255, 255, 255, 0.5);
          }
        }
        &:hover {
          svg {
            path {
              fill: rgba(255, 255, 255, 1);
            }
          }
        }
      }
      .tag_chart_index {
        display: flex;
        align-items: center;
        color: #fdb532;
      }
      .tag_chart_date {
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .tag_table {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // height: 300px;
      margin: 16px 16px 0 16px;
      button {
        svg {
          fill: none;
          stroke: #707070;
          stroke-width: 0.5px;
          path {
            fill: rgba(255, 255, 255, 0.5);
          }
        }
        &:hover {
          svg {
            stroke: rgba(255, 255, 255, 1);

            path {
              fill: rgba(255, 255, 255, 1);
            }
          }
        }
      }
      .tag_chart_img_wrap {
        margin-right: 24px;
        .tag_chart_img {
          width: 100%;
        }
      }
    }
    .tag_zoom_wrap {
      width: 232px;
      height: 48px;
      margin: 0 auto;
      border-radius: 8px;
      border: solid 0.5px #707070;
      display: flex;
      padding: 0 16px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      button {
        svg {
          path {
            fill: rgba(255, 255, 255, 0.5);
          }
        }
        &:hover {
          svg {
            path {
              fill: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
    .tag_bar_wrap {
      border-top: 1px solid #101010;
      padding: 30px 6.5%;
      .tag_chart_bar {
        width: 100%;
      }
    }
  }
  .tag_plus_wrap {
    height: 80px;
    width: calc(100% - 80px);
    margin: 0 auto;
    border-radius: 10px;
    border: solid 0.5px rgba(255, 255, 255, 0.5);
    background-color: #262831;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      margin-top: 10px;
    }
    &:hover {
      border: solid 0.5px rgba(255, 255, 255, 1);
      opacity: 0.8;
    }
  }
  .tag_modal {
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
    .tag_modal_title {
      color: rgba(255, 255, 255, 1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px 26px 0 26px;
      div {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
        }
      }
      svg {
        fill: rgba(255, 255, 255, 1);
        stroke: rgba(255, 255, 255, 1);
      }
    }

    .tag_modal_contents_wrap {
      margin-top: 70px;

      .tag_modal_contents {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 46px;
        margin-right: 80px;
        svg {
          fill: rgba(255, 255, 255, 0.5);
          path {
            stroke: rgba(255, 255, 255, 0.5);
          }
        }
        span {
          font-family: Pretendard;
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
        }

        .tag_modal_table_btn {
          width: 528px;
          height: 34px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 8px;
          color: rgba(255, 255, 255, 0.5);
          border-radius: 8px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
          border: solid 0.5px rgba(255, 255, 255, 0.5);
          background-color: rgba(38, 40, 49, 0.5);

          &:hover {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      p {
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        color: #fdb532;
        padding-left: 126px;
        margin-top: 4px;
      }
      .tag_modal_tag_btn_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 13px;
        margin-bottom: 32px;
        .tag_modal_tag_size_btn {
          width: 408px;
          height: 34px;
          border-radius: 8px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
          border: solid 0.5px rgba(255, 255, 255, 0.5);
          background-color: rgba(38, 40, 49, 0.5);
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          margin-right: 8px;
          &:hover {
            border: solid 0.5px rgba(255, 255, 255, 1);
            color: rgba(255, 255, 255, 1);
            svg {
              stroke: rgba(255, 255, 255, 1);
            }
          }
          svg {
            stroke: rgba(255, 255, 255, 0.5);
          }
        }
        .tag_modal_tag_serch_btn {
          width: 112px;
          height: 34px;
          border-radius: 8px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
          border: solid 0.5px #4199ff;
          background-color: rgba(38, 40, 49, 0.5);
          color: #4199ff;
        }
      }
      .tag_modal_chart_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .tag_modal_chart_btn {
          width: 170px;
          height: 100px;
          margin-right: 9px;
          border-radius: 8px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
          border: solid 0.5px rgba(255, 255, 255, 0.5);
          background-color: rgba(38, 40, 49, 0.5);
          &:hover {
            box-shadow: inset 0 -2px 62px 0 rgba(65, 153, 255, 0.5);
            border: solid 0.5px #4199ff;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .last {
          margin-right: 0;
        }
      }
      .tag_modal_data_wrap {
        display: flex;
        justify-content: center;
        margin-top: 32px;
        margin-left: 80px;
        .tag_modal_data {
          width: 258px;
          height: 300px;
          border-radius: 8px;
          border: solid 0.5px rgba(255, 255, 255, 0.5);
          background-color: rgba(38, 40, 49, 0.5);
          margin-right: 8px;
          font-family: Pretendard;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          padding: 12px 0px;
          div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
          }
          .tag_modal_data_btn {
            width: 96px;
            height: 32px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
            border: solid 0.5px rgba(255, 255, 255, 0.5);
            background-color: #404457;
            border-radius: 8px;
            font-family: Pretendard;
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.5);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 8px;
            &:hover {
              color: #fff;
            }
          }
          p {
            padding: 0;
            margin-top: 5px;
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            cursor: pointer;
            padding: 0 16px;
          }
        }
      }
      .tag_modal_tag_add_tag_wrap {
        width: 258px;
        margin-left: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 4px;
        .tag_modal_data_add_btn_wrap {
          display: flex;
          align-items: center;
          margin-top: 4px;
          span {
            margin: 0 8px;
            font-family: Pretendard;
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
      .tag_modal_tag_add_tag_select_wrap {
        width: 258px;
        margin-top: 4px;
        display: flex;
        justify-content: flex-end;
      }
    }
    .tag_modal_footer {
      display: flex;
      justify-content: center;
      margin-top: 52px;
      margin-bottom: 40px;
      .tag_modal_footer_btn {
        width: 120px;
        height: 40px;
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 0.5px #d9d9d9;
        background-color: rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, 1);
        margin-right: 8px;
        position: relative;

        &:hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
          z-index: 1;
        }
      }
      .blue_btn {
        background-color: #4199ff;
      }
      .last {
        margin-right: 0;
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
      isTagModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },

    openTagModal() {
      this.isTagModalOpen = true;
    },
    closeTagModal() {
      this.isTagModalOpen = false;
    },
  },
};
</script>
