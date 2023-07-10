<template>
  <button @click="openModal" class="modal_btn">
    <Date></Date>
    <span> YYYY-MM-DD HH:MI:SS </span>
    <span><Dropdown></Dropdown></span>
  </button>
  <div class="backdrop" v-if="isModalOpen"></div>
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
            <button class="togglediv" @click="toggleDiv1">
              <Date></Date>
              <span>now-5m</span>
              <span><Dropdown></Dropdown></span>
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
                      <button>0000 <Dropdown></Dropdown></button>
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
            <button @click="toggleDiv2">
              <Date></Date>
              <span>now</span>
              <span><Dropdown></Dropdown></span>
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
        <button>Apply</button>
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
</script>
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
