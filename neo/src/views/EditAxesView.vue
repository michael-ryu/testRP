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
          <button class="edit_tab_btn edit_tab_none_select">General</button>
        </router-link>
        <router-link to="/data">
          <button class="edit_tab_btn edit_tab_none_select">Data</button>
        </router-link>
        <router-link to="/axes">
          <button class="edit_tab_btn edit_tab_select">Axes</button>
        </router-link>
        <router-link to="/display">
          <button class="edit_tab_btn edit_tab_none_select">Display</button>
        </router-link>
        <router-link to="/timerange">
          <button class="edit_tab_btn edit_tab_none_select">Time Range</button>
        </router-link>
      </div>

      <div class="edit_axes_contents_wrap">
        <div class="edit_axes_contents">
          <div class="edit_axes_content_title">X-Axis</div>
          <div class="edit_axes_content_input">
            <span>Interval</span>
            <input
              type="text"
              id="name"
              name="title"
              required
              minlength="0"
              maxlength="12"
            />
          </div>
          <div class="edit_axes_content_checkbox">
            <label>
              <input type="checkbox" />
              <span>Displays the X-Axis tick line</span>
            </label>
          </div>
          <div class="edit_axes_content_input">
            <span>Pixels between tick marks</span>
            <input
              type="number"
              id="name"
              name="title"
              required
              minlength="0"
              maxlength="12"
            />
          </div>
        </div>
        <div class="edit_axes_contents">
          <div class="edit_axes_content_title">Y-Axis</div>
          <div class="edit_axes_content_checkbox">
            <label>
              <input type="checkbox" />
              <span>The scale of the Y-axis start at zero</span>
            </label>
          </div>
          <div class="edit_axes_content_checkbox">
            <label>
              <input type="checkbox" />
              <span>Displays the X-Axis tick line</span>
            </label>
          </div>
          <div class="edit_axes_content_input">
            <span>Custom scale</span>
            <input
              type="number"
              id="name"
              name="title"
              required
              minlength="0"
              maxlength="12"
            />
            <input
              type="number"
              id="name"
              name="title"
              required
              minlength="0"
              maxlength="12"
            />
          </div>
          <div class="edit_axes_content_input">
            <span>Custom scale for raw data chart</span>
            <input
              type="number"
              id="name"
              name="title"
              required
              minlength="0"
              maxlength="12"
            />
            <input
              type="number"
              id="name"
              name="title"
              required
              minlength="0"
              maxlength="12"
            />
          </div>
        </div>
        <div class="edit_axes_contents">
          <div>
            <div :class="{ disabled: !isChecked }">
              <div class="edit_axes_content_checkbox">
                <label>
                  <input type="checkbox" v-model="isChecked" />
                  <span>The scale of the Y-axis start at zero</span>
                </label>
              </div>
              <div class="edit_axes_content_checkbox">
                <label>
                  <input type="checkbox" :disabled="!isChecked" />
                  <span>Displays the X-Axis tick line</span>
                </label>
              </div>
              <div class="edit_axes_content_input">
                <span>Custom scale</span>
                <input
                  type="number"
                  id="name"
                  name="title"
                  :disabled="!isChecked"
                  required
                  minlength="0"
                  maxlength="12"
                />
                <input
                  type="number"
                  id="name"
                  name="title"
                  :disabled="!isChecked"
                  required
                  minlength="0"
                  maxlength="12"
                />
              </div>
              <div class="edit_axes_content_input">
                <span>Custom scale for raw data chart</span>
                <input
                  type="number"
                  id="name"
                  name="title"
                  :disabled="!isChecked"
                  required
                  minlength="0"
                  maxlength="12"
                />
                <input
                  type="number"
                  id="name"
                  name="title"
                  :disabled="!isChecked"
                  required
                  minlength="0"
                  maxlength="12"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>
            <span>avg</span><span>TAG_0001</span><TabClose></TabClose>
          </button>
          <div>
            <button></button>
          </div>
        </div>
      </div>
      <div class="edit_footer">
        <button class="edit_btn yellow">Apply</button>
        <button class="edit_btn blue">OK</button>
        <button class="edit_btn gray">Cancel</button>
      </div>
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
  background-color: #404457;
  height: 100%;
  .edit_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    padding: 26px 24px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    svg {
      fill: rgba(255, 255, 255, 1);
      stroke: rgba(255, 255, 255, 1);
    }
    span {
      margin-left: 6px;
    }
  }
  .tag_table_wrap {
    width: calc(100% - 80px);
    background-color: #262831;
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
          stroke: #707070;
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
  .edit_contents {
    width: calc(100% - 80px);
    margin: 0 auto;
    .edit_tab {
      display: flex;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      .edit_tab_btn {
        width: 160px;
        height: 34px;
        border-radius: 8px;
        text-align: left;
        padding-left: 10px;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        &:hover {
          background-color: rgba(247, 247, 248, 0.08);
          color: #fdb532;
        }
      }
      .edit_tab_select {
        background-color: rgba(247, 247, 248, 0.08);
        color: #fdb532;
      }
    }
    .edit_general_contents {
      padding: 60px 0;
      display: flex;

      .edit_general_contents_wrap {
        margin-right: 140px;
        .edit_general_content {
          margin-bottom: 8px;
          display: flex;
          span {
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.5);
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
              border: solid 0.5px rgba(255, 255, 255, 0.5);
              background-color: rgba(38, 40, 49, 0.5);
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
    border-top: 1px solid rgba(255, 255, 255, 0.5);
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
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>
