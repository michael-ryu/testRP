<template>
  <div class="outer">
    <div class="edit_title">
      <div>
        <EditGear></EditGear>
        <span>Edit Chart</span>
      </div>
      <button>
        <TabClose></TabClose>
      </button>
    </div>
    <div class="edit_chart">
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
            <img
              class="tag_chart_img"
              src="@/assets/image/img_chart_nodata.png"
            />
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
    </div>
    <div class="edit_contents">
      <div class="edit_tab">
        <router-link to="/tagsetting">
          <button class="edit_tab_btn edit_tab_select">General</button>
        </router-link>
        <router-link to="/data">
          <button class="edit_tab_btn edit_tab_none_select">Data</button>
        </router-link>
        <router-link to="/axes">
          <button class="edit_tab_btn edit_tab_none_select">Axes</button>
        </router-link>
        <router-link to="/display">
          <button class="edit_tab_btn edit_tab_none_select">Display</button>
        </router-link>
        <router-link to="/timerange">
          <button class="edit_tab_btn edit_tab_none_select">Time Range</button>
        </router-link>
      </div>
      <div class="edit_general_contents">
        <div class="edit_general_contents_wrap">
          <div class="edit_general_content">
            <div class="edit_general_content_input">
              <span>Chart Title</span>
              <input
                type="text"
                id="name"
                name="title"
                required
                minlength="0"
                maxlength="12"
              />
            </div>
          </div>
          <div class="edit_general_content">
            <div class="edit_general_content_input">
              <div>
                <span class="relative_span"
                  >Raw Data Time Range<span class="absolute_span"
                    >(Millisecond)</span
                  ></span
                >
              </div>
              <input
                type="text"
                id="name"
                name="title"
                required
                minlength="0"
                maxlength="12"
              />
            </div>
          </div>
        </div>
        <div class="edit_general_contents_wrap">
          <div
            class="edit_general_content"
            v-for="(item, index) in checkboxItems"
            :key="index"
          >
            <input
              class="edit_right_inputbox"
              type="checkbox"
              :id="item.id"
              :name="item.name"
              v-model="item.checked"
              @change="changeColor(item)"
            />
            <span
              :style="{ color: item.checked ? activeColor : inactiveColor }"
              >{{ item.label }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="edit_footer">
      <button class="edit_btn yellow">Apply</button>
      <button class="edit_btn blue">OK</button>
      <button class="edit_btn gray">Cancel</button>
    </div>
  </div>
</template>
<script setup>
import EditGear from "@/components/svg/EditGear.vue";
import TabClose from "@/components/svg/TabClose.vue";
import TagPrevious from "@/components/svg/TagPrevious.vue";
import TagNext from "@/components/svg/TagNext.vue";
import Refresh from "@/components/svg/Refresh.vue";
import Bin from "@/components/svg/Bin.vue";
import Gear from "@/components/svg/Gear.vue";
import Zoomin4 from "@/components/svg/Zoomin4.vue";
import Zoomin2 from "@/components/svg/Zoomin2.vue";
import Focus from "@/components/svg/Focus.vue";
import Zoomout2 from "@/components/svg/Zoomout2.vue";
import Zoomout4 from "@/components/svg/Zoomout4.vue";
import Previous from "@/components/svg/Previous.vue";
import Next from "@/components/svg/Next.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
@include button-reset;
.outer {
  @include theme() {
    background-color: theme-get("modal-bg") !important;
  }
  min-height: 100vh;
  .edit_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include theme() {
      color: theme-get("hover-text") !important;
    }

    padding: 26px 24px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    svg {
      @include theme() {
        fill: theme-get("hover-text") !important;
        stroke: theme-get("hover-text") !important;
      }
    }
    span {
      margin-left: 6px;
    }
  }
  .tag_table_wrap {
    width: calc(100% - 80px);
    background-color: #262831;
    @include theme() {
      background-color: theme-get("bg-color1") !important;
    }
    margin: 0 auto;
    border-radius: 10px;
    .tag_table_subtab {
      padding-top: 32px;
      margin: 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .tag_chart_index {
        display: flex;
        align-items: center;
        color: #fdb532;
      }
      .tag_chart_date {
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        @include theme() {
          color: theme-get("none-hover") !important;
        }
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
          stroke-width: 0.5px;
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
      border: #707070;
      @include theme() {
        border: solid 0.5px theme-get("zoom-wrap") !important;
      }
      display: flex;
      padding: 0 16px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .tag_bar_wrap {
      border-top: 1px solid #101010;
      padding: 30px 6.5%;
      .tag_chart_bar {
        width: 100%;
      }
    }
  }
  .edit_contents {
    width: calc(100% - 80px);
    margin: 0 auto;

    .edit_tab {
      display: flex;
      align-items: center;
      padding: 16px 0;
      @include theme() {
        border-bottom: 1px solid theme-get("none-hover") !important;
      }
      .edit_tab_btn {
        width: 160px;
        height: 34px;
        border-radius: 8px;
        text-align: left;
        padding-left: 10px;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        @include theme() {
          color: theme-get("hover-text") !important;
        }
        &:hover {
          @include theme() {
            background-color: theme-get("btn-hover-bg") !important;
            color: #fdb532 !important;
          }
        }
      }
      .edit_tab_select {
        @include theme() {
          background-color: theme-get("btn-hover-bg") !important;
          color: #fdb532 !important;
        }
      }
    }
    .edit_general_contents {
      display: flex;
      height: 283px;

      .edit_general_contents_wrap {
        margin-top: 60px;
        margin-right: 140px;
        .edit_general_content {
          margin-bottom: 8px;
          display: flex;
          span {
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 500;
            @include theme() {
              color: theme-get("none-hover") !important;
            }
          }
          .edit_general_content_input {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 425px;

            .relative_span {
              position: relative;
              .absolute_span {
                position: absolute;
                font-size: 12px;
                top: 24px;
                left: 0;
              }
            }
            input {
              width: 240px;
              height: 34px;
              border-radius: 6px;
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
              @include theme() {
                color: theme-get("hover-text") !important;
                background-color: theme-get("worksheet-box-bg") !important;
                border: solid 0.5px theme-get("none-hover") !important;
              }
              margin-right: 4px;
            }
          }
        }
      }
    }
    .edit_right_inputbox {
      margin-bottom: 24px;
    }
  }
  .edit_footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    @include theme() {
      border-top: solid 1px theme-get("none-hover") !important;
    }
    .edit_btn {
      width: 120px;
      height: 40px;
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      border: solid 0.5px #d9d9d9;
      color: rgba(255, 255, 255, 1);
      font-size: 15px;
      font-family: Pretendard;
      font-weight: 600;
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
        border-radius: 8px;
        z-index: 1;
      }
    }
    .yellow {
      background-color: #fdb532;
    }
    .blue {
      background-color: #4199ff;
    }
    .gray {
      background-color: rgba(255, 255, 255, 0.5);
      margin-right: 0;
      @include theme() {
        color: theme-get("cancel-btn-text") !important;
      }
    }
  }
}
.disabled {
  opacity: 0.3;
}
</style>
<script>
export default {
  data() {
    return {
      checkboxItems: [
        {
          id: "useZoom",
          name: "title",
          checked: false,
          label: "Use zoom when dragging",
        },
        {
          id: "drillDown",
          name: "title",
          checked: false,
          label: "Use drill down when zooming",
        },
        {
          id: "startWithZoom",
          name: "title",
          checked: false,
          label: "Start with zoom",
        },
      ],
      activeColor: "#4199ff",
      inactiveColor: "rgba(255, 255, 255, 0.5)",
    };
  },
  methods: {
    changeColor(item) {
      item.color = item.checked ? this.activeColor : this.inactiveColor;
    },
  },
};
</script>
