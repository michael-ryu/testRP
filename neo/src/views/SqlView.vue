<template>
  <div class="outer">
    <!-- tab 부분 -->
    <Tab />
    <!-- 좌측 tab -->
    <div class="sql">
      <div class="sql_left">
        <div class="sql_tab_left">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                data-name="사각형 1020"
                style="fill: none"
                d="M0 0h40v40H0z"
              />
              <path
                data-name="다각형 1"
                d="m7.286 0 7.286 12H0z"
                transform="rotate(90 6.893 19.607)"
              />
            </svg>
          </button>
          <button class="modal_btn">
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
                d="M123.617-870.55a.752.752 0 0 1-.554-.224.753.753 0 0 1-.224-.554.753.753 0 0 1 .224-.554.753.753 0 0 1 .554-.224.753.753 0 0 1 .554.224.753.753 0 0 1 .224.554.753.753 0 0 1-.224.554.752.752 0 0 1-.554.224zm3.442 0a.752.752 0 0 1-.554-.224.753.753 0 0 1-.224-.554.753.753 0 0 1 .224-.554.753.753 0 0 1 .554-.224.753.753 0 0 1 .554.224.753.753 0 0 1 .224.554.753.753 0 0 1-.224.554.752.752 0 0 1-.555.224zm3.306 0a.752.752 0 0 1-.554-.224.753.753 0 0 1-.224-.554.753.753 0 0 1 .224-.554.753.753 0 0 1 .554-.224.753.753 0 0 1 .554.224.753.753 0 0 1 .224.554.753.753 0 0 1-.224.554.752.752 0 0 1-.555.224zm-9.2 6.106a1.119 1.119 0 0 1-.817-.35 1.119 1.119 0 0 1-.35-.817v-12.056a1.119 1.119 0 0 1 .35-.817 1.119 1.119 0 0 1 .817-.35h1.264V-880h1.264v1.167h6.611V-880h1.264v1.167h1.264a1.119 1.119 0 0 1 .817.35 1.119 1.119 0 0 1 .35.817v12.056a1.119 1.119 0 0 1-.35.817 1.119 1.119 0 0 1-.817.35zm0-1.167h11.667v-8.361h-11.665z"
                transform="translate(-119 880)"
              />
            </svg>
            <span> YYYY-MM-DD HH:MI:SS </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="modal_arrow"
            >
              <path
                data-name="사각형 991"
                style="fill: none"
                d="M0 0h16v16H0z"
              />
              <path
                data-name="패스 4101"
                d="m3533.373 1796.351 4 4 4-4"
                transform="translate(-3529.373 -1789.851)"
                class="modal_arrow_icon"
                style="stroke-linejoin: round; stroke-width: 1.5px; fill: none"
              />
            </svg>
          </button>
          <button class="modal_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                data-name="사각형 1043"
                style="fill: none"
                d="M0 0h16v16H0z"
              />
              <path
                d="M50-865.28a1.653 1.653 0 0 1-1.2-.49 1.606 1.606 0 0 1-.5-1.191 1.636 1.636 0 0 1 .5-1.2 1.638 1.638 0 0 1 1.2-.5l.5-.475a1.286 1.286 0 0 1 .388-.265 1.107 1.107 0 0 1 .457-.1 1.125 1.125 0 0 1 .84.35 1.168 1.168 0 0 1 .34.844v.366a.942.942 0 0 0 .29.69.942.942 0 0 0 .69.29.92.92 0 0 0 .569-.191 1.032 1.032 0 0 0 .358-.488l.253-.7a1.75 1.75 0 0 1 .6-.841 1.554 1.554 0 0 1 .968-.32 7.067 7.067 0 0 0 .361-1.219 6.514 6.514 0 0 0 .13-1.3 6.436 6.436 0 0 0-.93-3.41 7.009 7.009 0 0 0-2.45-2.43v.78a1.618 1.618 0 0 1-.493 1.187 1.618 1.618 0 0 1-1.187.493h-.84v1.7a.807.807 0 0 1-.25.59.807.807 0 0 1-.59.25h-.84v1.42a1.065 1.065 0 0 1-.317.78 1.059 1.059 0 0 1-.783.32 1.133 1.133 0 0 1-.53-.13 1.161 1.161 0 0 1-.41-.35l-1.342-2.04h-.842v.834a1.6 1.6 0 0 1-.43 1.116 1.674 1.674 0 0 1-1.05.55 6.671 6.671 0 0 0 2.375 3.63A6.487 6.487 0 0 0 50-865.28zm1.689-5.06a.817.817 0 0 1-.6-.25.807.807 0 0 1-.25-.59.807.807 0 0 1 .25-.59.817.817 0 0 1 .6-.25h.822a.817.817 0 0 1 .6.25.807.807 0 0 1 .25.59.807.807 0 0 1-.25.59.817.817 0 0 1-.6.25zm1.959-2.52a.813.813 0 0 1-.668-.33.738.738 0 0 1-.129-.728l.329-.922a.892.892 0 0 1 .3-.41.74.74 0 0 1 .448-.15.813.813 0 0 1 .668.33.738.738 0 0 1 .129.728l-.329.922a.893.893 0 0 1-.3.41.74.74 0 0 1-.448.15zM50.005-864a7.744 7.744 0 0 1-3.11-.63 8.129 8.129 0 0 1-2.545-1.72 8.124 8.124 0 0 1-1.72-2.547 7.758 7.758 0 0 1-.63-3.113 7.758 7.758 0 0 1 .63-3.113 8.005 8.005 0 0 1 1.72-2.537 8.212 8.212 0 0 1 2.547-1.71 7.76 7.76 0 0 1 3.113-.63 7.76 7.76 0 0 1 3.113.63 8.09 8.09 0 0 1 2.537 1.71 8.08 8.08 0 0 1 1.71 2.54 7.777 7.777 0 0 1 .63 3.115 7.744 7.744 0 0 1-.63 3.11 8.17 8.17 0 0 1-1.71 2.542 8.075 8.075 0 0 1-2.54 1.72 7.737 7.737 0 0 1-3.115.633z"
                transform="translate(-42 880)"
              />
            </svg>
            <span>LOCAL</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="modal_arrow"
            >
              <path
                data-name="사각형 991"
                style="fill: none"
                d="M0 0h16v16H0z"
              />
              <path
                data-name="패스 4101"
                d="m3533.373 1796.351 4 4 4-4"
                transform="translate(-3529.373 -1789.851)"
                class="modal_arrow_icon"
                style="stroke-linejoin: round; stroke-width: 1.5px; fill: none"
              />
            </svg>
          </button>
          <button class="sql_save_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                data-name="사각형 961"
                style="fill: none"
                d="M0 0h40v40H0z"
              />
              <path
                d="M121.5-822a1.439 1.439 0 0 1-1.05-.45 1.439 1.439 0 0 1-.45-1.05v-15a1.439 1.439 0 0 1 .45-1.05 1.439 1.439 0 0 1 1.05-.45h11.95a1.448 1.448 0 0 1 .593.125 1.576 1.576 0 0 1 .482.325l3.025 3.025a1.577 1.577 0 0 1 .325.482 1.447 1.447 0 0 1 .125.593v11.95a1.439 1.439 0 0 1-.45 1.05 1.439 1.439 0 0 1-1.05.45zm7.494-3.125a2.521 2.521 0 0 0 1.843-.757 2.492 2.492 0 0 0 .762-1.838 2.521 2.521 0 0 0-.757-1.843 2.492 2.492 0 0 0-1.837-.762 2.521 2.521 0 0 0-1.843.757 2.492 2.492 0 0 0-.762 1.837 2.521 2.521 0 0 0 .757 1.843 2.492 2.492 0 0 0 1.837.763zm-5.419-8.475h7.45a.726.726 0 0 0 .534-.216.726.726 0 0 0 .216-.534v-2.075a.725.725 0 0 0-.216-.534.726.726 0 0 0-.534-.216h-7.45a.726.726 0 0 0-.534.216.726.726 0 0 0-.216.534v2.075a.726.726 0 0 0 .216.534.726.726 0 0 0 .534.216z"
                transform="translate(-109 851)"
              />
            </svg>
          </button>
          <button class="sql_file_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                data-name="사각형 962"
                style="fill: none"
                d="M0 0h40v40H0z"
              />
              <path
                d="M81.5-784a1.435 1.435 0 0 1-1.038-.462A1.435 1.435 0 0 1 80-785.5v-13a1.435 1.435 0 0 1 .462-1.037A1.435 1.435 0 0 1 81.5-800h6.4a1.459 1.459 0 0 1 .588.125 1.559 1.559 0 0 1 .487.325l1.05 1.05H98.5a1.435 1.435 0 0 1 1.037.463A1.435 1.435 0 0 1 100-797H83a1.447 1.447 0 0 0-1.062.438 1.447 1.447 0 0 0-.438 1.062v10l2.25-8.875a1.406 1.406 0 0 1 .55-.812 1.529 1.529 0 0 1 .925-.312H99.55a1.491 1.491 0 0 1 1.2.575 1.363 1.363 0 0 1 .275 1.3l-2.2 8.475a1.431 1.431 0 0 1-.55.875 1.772 1.772 0 0 1-1.025.274z"
                transform="translate(-70.72 812.5)"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                data-name="사각형 1024"
                style="fill: none"
                d="M0 0h24v24H0z"
              />
              <path
                d="m125.892-910.18-1.944-1.944a.559.559 0 0 0-.408-.175.56.56 0 0 0-.408.175.526.526 0 0 0-.165.408.638.638 0 0 0 .165.408l2.353 2.392a.559.559 0 0 0 .408.175.56.56 0 0 0 .408-.175l4.569-4.569a.571.571 0 0 0 .175-.418.571.571 0 0 0-.175-.418.571.571 0 0 0-.418-.175.571.571 0 0 0-.418.175zm-4.725 5.736a1.125 1.125 0 0 1-.826-.34 1.125 1.125 0 0 1-.34-.826v-11.667a1.125 1.125 0 0 1 .34-.826 1.125 1.125 0 0 1 .826-.34h3.986a1.725 1.725 0 0 1 .622-1.118A1.855 1.855 0 0 1 127-920a1.855 1.855 0 0 1 1.225.438 1.725 1.725 0 0 1 .622 1.118h3.986a1.125 1.125 0 0 1 .826.34 1.125 1.125 0 0 1 .34.826v11.667a1.125 1.125 0 0 1-.34.826 1.125 1.125 0 0 1-.826.34zM127-917.608a.653.653 0 0 0 .476-.2.653.653 0 0 0 .2-.476.653.653 0 0 0-.2-.476.653.653 0 0 0-.476-.2.653.653 0 0 0-.476.2.653.653 0 0 0-.2.476.653.653 0 0 0 .2.476.653.653 0 0 0 .476.2z"
                transform="translate(-115 923.5)"
                style="fill: #fdb532"
              />
            </svg>
            <span>RESULT</span>
            <div class="sql_round_left_wrap">
              <div class="round_left"></div>
            </div>
          </button>
          <button class="sql_tab_none_select sql_right_tab_btn">
            <div class="sql_round_right_wrap">
              <div class="round_right"></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                data-name="사각형 1023"
                style="fill: none"
                d="M0 0h24v24H0z"
              />
              <path
                d="M161.529-786a1.471 1.471 0 0 1-1.081-.45 1.477 1.477 0 0 1-.448-1.082v-6.562a1.474 1.474 0 0 1 .45-1.081 1.477 1.477 0 0 1 1.083-.45 1.471 1.471 0 0 1 1.081.45 1.477 1.477 0 0 1 .448 1.081v6.563a1.474 1.474 0 0 1-.45 1.082 1.477 1.477 0 0 1-1.083.449zm5.471 0a1.471 1.471 0 0 1-1.081-.45 1.477 1.477 0 0 1-.448-1.082v-10.937a1.474 1.474 0 0 1 .45-1.081A1.477 1.477 0 0 1 167-800a1.471 1.471 0 0 1 1.081.45 1.477 1.477 0 0 1 .448 1.081v10.938a1.474 1.474 0 0 1-.45 1.082A1.477 1.477 0 0 1 167-786zm5.469 0a1.471 1.471 0 0 1-1.081-.45 1.477 1.477 0 0 1-.448-1.082v-3.062a1.474 1.474 0 0 1 .45-1.081 1.477 1.477 0 0 1 1.083-.45 1.471 1.471 0 0 1 1.081.45 1.477 1.477 0 0 1 .448 1.081v3.063a1.474 1.474 0 0 1-.45 1.082 1.477 1.477 0 0 1-1.085.449z"
                transform="translate(-155 805)"
              />
            </svg>
            <span> CHART </span>
            <div class="sql_round_left_wrap">
              <div class="round_left"></div>
            </div>
          </button>
          <button class="sql_tab_none_select sql_right_tab_btn">
            <div class="sql_round_right_wrap">
              <div class="round_right"></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                data-name="사각형 1022"
                style="fill: none"
                d="M0 0h24v24H0z"
              />
              <path
                d="M130.274-866.173a.368.368 0 0 0 .269-.115.368.368 0 0 0 .115-.269v-2.112a.368.368 0 0 0-.115-.269.368.368 0 0 0-.269-.115.368.368 0 0 0-.269.115.368.368 0 0 0-.115.269v2.112a.368.368 0 0 0 .115.269.368.368 0 0 0 .269.115zm0-3.63a.364.364 0 0 0 .269-.118.382.382 0 0 0 .115-.276.382.382 0 0 0-.115-.276.364.364 0 0 0-.269-.118.36.36 0 0 0-.278.115.392.392 0 0 0-.106.274.407.407 0 0 0 .106.279.354.354 0 0 0 .278.123zm0 5.147a3.591 3.591 0 0 1-2.636-1.09 3.591 3.591 0 0 1-1.09-2.636 3.591 3.591 0 0 1 1.09-2.636 3.59 3.59 0 0 1 2.636-1.09 3.59 3.59 0 0 1 2.636 1.09 3.591 3.591 0 0 1 1.09 2.636 3.591 3.591 0 0 1-1.09 2.636 3.591 3.591 0 0 1-2.636 1.09zm-2.189-10.62h3.053l-3.63-3.572 3.63 3.572-3.63-3.572v3a.558.558 0 0 0 .166.41.557.557 0 0 0 .411.162zm-6.933 10.639a1.109 1.109 0 0 1-.814-.339 1.109 1.109 0 0 1-.338-.814v-13.059a1.11 1.11 0 0 1 .338-.814 1.11 1.11 0 0 1 .814-.338h6.448a1.112 1.112 0 0 1 .456.1 1.211 1.211 0 0 1 .37.25l3.514 3.514a1.211 1.211 0 0 1 .25.37 1.112 1.112 0 0 1 .1.456v2.5a5.411 5.411 0 0 0-.992-.326 4.651 4.651 0 0 0-1.024-.115 4.713 4.713 0 0 0-1.536.25 5.139 5.139 0 0 0-1.344.691h-3.764a.556.556 0 0 0-.41.167.563.563 0 0 0-.166.413.551.551 0 0 0 .166.41.562.562 0 0 0 .41.163h2.631a4.3 4.3 0 0 0-.526 1 6.4 6.4 0 0 0-.3 1.11h-1.805a.556.556 0 0 0-.41.167.562.562 0 0 0-.166.413.551.551 0 0 0 .166.41.562.562 0 0 0 .41.163h1.786a4.812 4.812 0 0 0 .547 1.805 4.921 4.921 0 0 0 1.181 1.46z"
                transform="translate(-114.5 884)"
              />
            </svg>
            <span>LOG</span>
            <div class="sql_round_left_wrap">
              <div class="round_left"></div>
            </div>
          </button>
          <button class="sql_vertical">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <g transform="translate(-782 -65)">
                <path
                  data-name="사각형 961"
                  transform="translate(782 65)"
                  style="fill: none"
                  d="M0 0h40v40H0z"
                />
                <rect
                  data-name="사각형 1001"
                  width="40"
                  height="40"
                  rx="8"
                  transform="translate(782 65)"
                  style="fill: rgba(38, 40, 49, 0.08)"
                />
                <path
                  data-name="제외 4"
                  d="M-6229-2970a1 1 0 0 1-1-1v-2h-6a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h6v-2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6v2a1 1 0 0 1-1 1zm-1-21v18h2v-18h-2z"
                  transform="translate(7031 3067)"
                />
              </g>
            </svg>
          </button>
          <button class="sql_horizontal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                data-name="사각형 962"
                style="fill: none"
                d="M0 0h40v40H0z"
              />
              <path
                data-name="제외 5"
                d="M-6229-2970a1 1 0 0 1-1-1v-2h-6a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h6v-2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6v2a1 1 0 0 1-1 1zm-1-21v18h2v-18h-2z"
                transform="rotate(90 -4605.5 1643.5)"
              />
            </svg>
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
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
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
      button {
        svg {
          path {
            fill: rgba(255, 255, 255, 0.5);
          }
          .modal_arrow_icon {
            stroke: rgba(255, 255, 255, 0.5);
          }
        }
        &:hover {
          span {
            color: #4199ff;
          }
          svg {
            path {
              fill: #4199ff;
            }
            .modal_arrow_icon {
              stroke: #4199ff;
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
          border: solid 0.5px #4199ff;
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
          path {
            fill: rgba(255, 255, 255, 0.5);
          }
        }
        &:hover {
          svg {
            path {
              fill: #4199ff;
            }
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
        path {
          fill: rgba(255, 255, 255, 0.5);
        }
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
