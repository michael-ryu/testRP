<template>
  <div class="outer">
    <!-- tab 부분 -->
    <div class="tab">
      <router-link to="/">
        <button class="tab_button tab_logo">
          <img src="@/assets/image/tab_logo.svg" />
        </button>
      </router-link>
      <!-- 홈모양 svg -->
      <router-link to="/home">
        <button class="tab_button tab_select">
          <div class="round_right_wrap">
            <div class="round_right"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 39.994 39.994"
            class="tab_icon"
          >
            <path
              data-name="home"
              style="fill: none"
              d="M0 0h39.994v39.994H0z"
            />
            <path
              d="M117.489-797.964H109.6a1.388 1.388 0 0 1-1.022-.412 1.388 1.388 0 0 1-.412-1.022v-13.867h-3.873a.672.672 0 0 1-.681-.454.65.65 0 0 1 .2-.789l16.783-15.11a1.322 1.322 0 0 1 .961-.383 1.292 1.292 0 0 1 .952.383l8.607 7.6v-4.16a1.388 1.388 0 0 1 .412-1.022 1.388 1.388 0 0 1 1.022-.412h.956a1.388 1.388 0 0 1 1.022.412 1.388 1.388 0 0 1 .412 1.022v7.7l4.351 3.969a.65.65 0 0 1 .2.789.672.672 0 0 1-.681.454h-3.873v13.866a1.388 1.388 0 0 1-.412 1.022 1.388 1.388 0 0 1-1.022.412h-7.89V-808a1.388 1.388 0 0 0-.412-1.022 1.388 1.388 0 0 0-1.022-.412h-5.26a1.388 1.388 0 0 0-1.022.412 1.388 1.388 0 0 0-.412 1.022z"
              transform="translate(-101.552 833.5)"
            />
          </svg>

          <span>Welcome</span>
          <!-- 닫기 svg -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            class="tab_close"
          >
            <path data-name="close" style="fill: none" d="M0 0h18v18H0z" />
            <path
              class="path"
              data-name="close_1"
              transform="translate(4 4)"
              d="m0 0 10 10"
            />
            <path
              class="path"
              data-name="close_2"
              transform="translate(4 4)"
              d="M10 0 0 10"
            />
          </svg>
          <div class="round_left_wrap">
            <div class="round_left"></div>
          </div>
        </button>
      </router-link>
      <router-link to="/sql">
        <button class="tab_button tab_none_select">
          <!-- sql svg -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            class="tab_icon"
          >
            <path data-name="sql_1" style="fill: none" d="M0 0h18v18H0z" />
            <path
              data-name="sql_2"
              d="M16 16H0V0h16v16zM2.764 10.141a.99.99 0 1 0 .7 1.69.952.952 0 0 0 .292-.7c0-.046 0-.1-.007-.145a1.3 1.3 0 0 0-.036-.184l2.83-2.824c.2.029.306.042.321.042a1.28 1.28 0 0 0 .146-.007 1.322 1.322 0 0 0 .184-.035l1.555 1.556a1.269 1.269 0 0 0-.035.184c0 .05-.007.1-.007.145a.99.99 0 0 0 1.98 0c0-.046 0-.1-.007-.145a1.275 1.275 0 0 0-.035-.184l2.262-2.264a1.317 1.317 0 0 0 .184.036c.05 0 .1.007.145.007a.99.99 0 0 0 .7-1.689.956.956 0 0 0-.7-.291 1.791 1.791 0 0 0-.992.986c0 .046 0 .094.007.145a1.321 1.321 0 0 0 .035.184l-2.265 2.263a1.281 1.281 0 0 0-.184-.035c-.05 0-.1-.007-.141-.007s-.092 0-.141.007a1.274 1.274 0 0 0-.184.035L7.816 7.356a5.51 5.51 0 0 0 .042-.322.99.99 0 1 0-1.979-.006c0 .053 0 .1.006.144a1.475 1.475 0 0 0 .036.185l-2.829 2.827a1.315 1.315 0 0 0-.184-.035 1.47 1.47 0 0 0-.144-.008z"
              transform="translate(1 1)"
            />
          </svg>

          <span>SQL</span>
          <!-- 닫기 svg -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            class="tab_close"
          >
            <path data-name="close" style="fill: none" d="M0 0h18v18H0z" />
            <path
              class="path"
              data-name="close_1"
              transform="translate(4 4)"
              d="m0 0 10 10"
            />
            <path
              class="path"
              data-name="close_2"
              transform="translate(4 4)"
              d="M10 0 0 10"
            />
          </svg>
        </button>
      </router-link>
      <button class="tab_button tab_none_select">
        <!-- tag anlyzer svg -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          class="tab_icon"
        >
          <path
            data-name="tag_anlyzer_1"
            style="fill: none"
            d="M0 0h18v18H0z"
          />
          <path
            data-name="tag_anlyzer_2"
            d="M-3193-1695h-16v-16h16v16zm-5.793-10.768a.408.408 0 0 0-.3.123.43.43 0 0 0-.13.3.376.376 0 0 0 .116.3l2.419 2.419-2.433 2.433a.406.406 0 0 0-.124.3.4.4 0 0 0 .124.3.423.423 0 0 0 .289.13h.017a.373.373 0 0 0 .271-.116l2.75-2.75a.4.4 0 0 0 .124-.289.4.4 0 0 0-.124-.289l-2.708-2.722a.4.4 0 0 0-.291-.139zm-4.371-.028a.4.4 0 0 0-.3.124l-2.75 2.749a.4.4 0 0 0-.123.289.4.4 0 0 0 .123.289l2.721 2.708a.408.408 0 0 0 .3.123.408.408 0 0 0 .3-.123.4.4 0 0 0 .123-.289.4.4 0 0 0-.123-.289l-2.419-2.419 2.446-2.446a.406.406 0 0 0 .124-.3.4.4 0 0 0-.124-.3.4.4 0 0 0-.299-.12z"
            transform="translate(3210 1712)"
          />
        </svg>

        <span>Tag Anlyzer</span>
        <!-- 닫기 svg -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          class="tab_close"
        >
          <path data-name="close" style="fill: none" d="M0 0h18v18H0z" />
          <path
            class="path"
            data-name="close_1"
            transform="translate(4 4)"
            d="m0 0 10 10"
          />
          <path
            class="path"
            data-name="close_2"
            transform="translate(4 4)"
            d="M10 0 0 10"
          />
        </svg>
      </button>
      <button class="plus_wrap">
        <!-- plus svg -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          class="plus_btn"
        >
          <g transform="translate(-986 -23)">
            <circle
              data-name="plus"
              cx="10"
              cy="10"
              r="10"
              transform="translate(986 23)"
            />
            <g data-name="plus_wrap" style="opacity: 0.836">
              <path
                data-name="plus_1"
                transform="translate(996 28)"
                style="fill: none; stroke: #262831; stroke-width: 2px"
                d="M0 0v10"
              />
              <path
                data-name="plus_2"
                transform="rotate(90 484 517)"
                style="fill: none; stroke: #262831; stroke-width: 2px"
                d="M0 0v10"
              />
            </g>
          </g>
        </svg>
      </button>
      <div>
        <!-- 톱니바퀴 png & Setting box 바로가기-->
        <router-link to="/setting">
          <button class="setting_btn">
            <img src="@/assets/image/btn_setting.png" />
          </button>
        </router-link>
        <Setting />
      </div>
    </div>
    <div class="inner">
      <div class="title">
        <p class="main_title">Welcome</p>
        <p class="main_text">Please select a project type.</p>
      </div>
      <!-- btn 부분  -->
      <div class="btn_wrap">
        <button class="btn_box">
          <div class="btn_img_wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="123.429"
              height="120"
              viewBox="0 0 123.429 120"
              class="home_btn"
            >
              <defs>
                <linearGradient
                  id="h7083wko5a"
                  y1=".5"
                  x2="1"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset=".87" stop-color="#8cdafb" />
                </linearGradient>
                <linearGradient
                  id="oftkpch1od"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="lz9gaq4l7b"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset=".58" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cb3fb" />
                </linearGradient>
                <linearGradient
                  id="t485hynlbf"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="oleswmya7g"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="taxrdd3nuh"
                  y1=".5"
                  y2=".5"
                  xlink:href="#lz9gaq4l7b"
                />
                <linearGradient
                  id="p3a6ppwt6i"
                  x1=".5"
                  y1="1"
                  x2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#0010cc" stop-opacity=".161" />
                </linearGradient>
                <linearGradient
                  id="ylxhgxw7kk"
                  x1=".5"
                  y1="1.481"
                  x2=".5"
                  y2="-.047"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cdafb" />
                </linearGradient>
                <filter
                  id="1dgxhzbgec"
                  x="13.714"
                  y="6.286"
                  width="85.013"
                  height="108.166"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="03yai85mxe"
                  x="16.714"
                  y="44.982"
                  width="79.013"
                  height="46.545"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur-2" />
                  <feFlood flood-opacity=".082" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="28axgubtzj"
                  x="54.924"
                  y="41.667"
                  width="68.505"
                  height="61.923"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur-3" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur-3" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <path data-name="981" style="fill: none" d="M0 0h120v120H0z" />
              <g style="filter: url(#1dgxhzbgec)">
                <path
                  data-name="7"
                  d="M0 70.792V56.473h.132A6.029 6.029 0 0 1 0 55.22a5.8 5.8 0 0 1 .63-2.631A6.333 6.333 0 0 1 0 49.872V35.553h.133A6.035 6.035 0 0 1 0 34.295a5.8 5.8 0 0 1 .63-2.63A6.34 6.34 0 0 1 0 28.947V14.628h.133A6.043 6.043 0 0 1 0 13.369C0 5.979 13.658 0 30.5 0s30.513 5.984 30.513 13.369a6.029 6.029 0 0 1-.133 1.259h.133v14.319a6.339 6.339 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.63 6.033 6.033 0 0 1-.133 1.258h.133v14.32a6.331 6.331 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.631 6.027 6.027 0 0 1-.132 1.254h.132v14.318c0 7.385-13.663 13.374-30.509 13.374S0 78.177 0 70.792z"
                  transform="translate(25.71 16.288)"
                  style="fill: url(#h7083wko5a)"
                />
              </g>
              <g data-name="354">
                <g data-name="357">
                  <path
                    data-name="4081"
                    d="M0 114.32h61.013v15.18c0 7.385-13.658 13.374-30.5 13.374S0 136.881 0 129.5z"
                    transform="translate(25.714 -42.418)"
                    style="fill: url(#oftkpch1od)"
                  />
                  <path
                    data-name="4082"
                    d="M0 100.87c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 93.485 0 100.87z"
                    transform="translate(25.714 -29.364)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4083"
                    d="M32.78 114.336c16.694 0 28.325-5.9 28.325-11.19S49.474 93.91 32.78 93.91s-28.33 3.942-28.33 9.236 11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 -31.635)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <g style="filter: url(#03yai85mxe)">
                    <path
                      data-name="4084"
                      d="M0 71.6h61.013v15.176c0 7.385-13.658 13.369-30.5 13.369S0 94.161 0 86.776z"
                      transform="translate(25.714 -20.624)"
                      style="fill: url(#t485hynlbf)"
                    />
                  </g>
                  <path
                    data-name="4085"
                    d="M0 58.14c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 50.755 0 58.14z"
                    transform="translate(25.714 -7.56)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4086"
                    d="M0 28.87h61.013v15.176c0 7.39-13.658 13.374-30.5 13.374S0 51.436 0 44.046z"
                    transform="translate(25.714 1.187)"
                    style="fill: url(#oleswmya7g)"
                  />
                  <path
                    data-name="4087"
                    d="M0 13.369c0 7.385 13.658 13.374 30.509 13.374s30.5-5.984 30.5-13.374S47.355 0 30.509 0 0 5.984 0 13.369z"
                    style="fill: url(#taxrdd3nuh)"
                    transform="translate(25.714 16.286)"
                  />
                  <path
                    data-name="4088"
                    d="M32.78 26.835c16.694 0 28.325-5.9 28.325-11.19S49.474 4.45 32.78 4.45 4.45 10.351 4.45 15.645s11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 14.015)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4089"
                    d="M33.84 16.411c0 3.918 6.239 7.091 13.937 7.091s13.937-3.178 13.937-7.091S55.475 9.32 47.777 9.32 33.84 12.5 33.84 16.411z"
                    transform="translate(8.441 11.53)"
                    style="opacity: 0.5; fill: url(#p3a6ppwt6i)"
                  />
                </g>
                <g style="filter: url(#28axgubtzj)">
                  <path
                    data-name="4090"
                    d="M122.96 72.25H89.845a5.7 5.7 0 0 0-5.7 5.7v26.528a5.7 5.7 0 0 0 5.7 5.7h33.115a5.7 5.7 0 0 0 5.7-5.7V77.945a5.694 5.694 0 0 0-5.7-5.7z"
                    transform="translate(-17.226 -20.584)"
                    style="fill: #ece9fa"
                  />
                </g>
                <path
                  data-name="4091"
                  d="M128.655 77.945a5.694 5.694 0 0 0-5.7-5.7h-33.11a5.7 5.7 0 0 0-5.7 5.7v2.674h44.5z"
                  transform="translate(-17.227 -20.582)"
                  style="fill: url(#ylxhgxw7kk)"
                />
                <path
                  data-name="4092"
                  d="M164.125 79.807a1.317 1.317 0 1 1-1.317-1.317 1.318 1.318 0 0 1 1.317 1.317z"
                  transform="translate(-56.693 -23.767)"
                  style="fill: #fff"
                />
                <path
                  data-name="4093"
                  d="M152.455 79.807a1.317 1.317 0 1 1-1.317-1.317 1.315 1.315 0 0 1 1.317 1.317z"
                  transform="translate(-50.737 -23.767)"
                  style="fill: #fff"
                />
              </g>
              <text
                transform="translate(89.143 80.001)"
                style="
                  fill: #656980;
                  font-size: 16px;
                  font-family: D2CodingBold, D2Coding;
                  letter-spacing: 0.02em;
                "
              >
                <tspan x="-12.32" y="0">SQL</tspan>
              </text>
            </svg>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="123.429"
              height="120"
              viewBox="0 0 123.429 120"
              class="home_btn"
            >
              <defs>
                <linearGradient
                  id="h7083wko5a"
                  y1=".5"
                  x2="1"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset=".87" stop-color="#8cdafb" />
                </linearGradient>
                <linearGradient
                  id="oftkpch1od"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="lz9gaq4l7b"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset=".58" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cb3fb" />
                </linearGradient>
                <linearGradient
                  id="t485hynlbf"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="oleswmya7g"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="taxrdd3nuh"
                  y1=".5"
                  y2=".5"
                  xlink:href="#lz9gaq4l7b"
                />
                <linearGradient
                  id="p3a6ppwt6i"
                  x1=".5"
                  y1="1"
                  x2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#0010cc" stop-opacity=".161" />
                </linearGradient>
                <linearGradient
                  id="ylxhgxw7kk"
                  x1=".5"
                  y1="1.481"
                  x2=".5"
                  y2="-.047"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cdafb" />
                </linearGradient>
                <filter
                  id="1dgxhzbgec"
                  x="13.714"
                  y="6.286"
                  width="85.013"
                  height="108.166"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="03yai85mxe"
                  x="16.714"
                  y="44.982"
                  width="79.013"
                  height="46.545"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur-2" />
                  <feFlood flood-opacity=".082" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="28axgubtzj"
                  x="54.924"
                  y="41.667"
                  width="68.505"
                  height="61.923"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur-3" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur-3" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <path data-name="981" style="fill: none" d="M0 0h120v120H0z" />
              <g style="filter: url(#1dgxhzbgec)">
                <path
                  data-name="7"
                  d="M0 70.792V56.473h.132A6.029 6.029 0 0 1 0 55.22a5.8 5.8 0 0 1 .63-2.631A6.333 6.333 0 0 1 0 49.872V35.553h.133A6.035 6.035 0 0 1 0 34.295a5.8 5.8 0 0 1 .63-2.63A6.34 6.34 0 0 1 0 28.947V14.628h.133A6.043 6.043 0 0 1 0 13.369C0 5.979 13.658 0 30.5 0s30.513 5.984 30.513 13.369a6.029 6.029 0 0 1-.133 1.259h.133v14.319a6.339 6.339 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.63 6.033 6.033 0 0 1-.133 1.258h.133v14.32a6.331 6.331 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.631 6.027 6.027 0 0 1-.132 1.254h.132v14.318c0 7.385-13.663 13.374-30.509 13.374S0 78.177 0 70.792z"
                  transform="translate(25.71 16.288)"
                  style="fill: url(#h7083wko5a)"
                />
              </g>
              <g data-name="354">
                <g data-name="357">
                  <path
                    data-name="4081"
                    d="M0 114.32h61.013v15.18c0 7.385-13.658 13.374-30.5 13.374S0 136.881 0 129.5z"
                    transform="translate(25.714 -42.418)"
                    style="fill: url(#oftkpch1od)"
                  />
                  <path
                    data-name="4082"
                    d="M0 100.87c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 93.485 0 100.87z"
                    transform="translate(25.714 -29.364)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4083"
                    d="M32.78 114.336c16.694 0 28.325-5.9 28.325-11.19S49.474 93.91 32.78 93.91s-28.33 3.942-28.33 9.236 11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 -31.635)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <g style="filter: url(#03yai85mxe)">
                    <path
                      data-name="4084"
                      d="M0 71.6h61.013v15.176c0 7.385-13.658 13.369-30.5 13.369S0 94.161 0 86.776z"
                      transform="translate(25.714 -20.624)"
                      style="fill: url(#t485hynlbf)"
                    />
                  </g>
                  <path
                    data-name="4085"
                    d="M0 58.14c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 50.755 0 58.14z"
                    transform="translate(25.714 -7.56)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4086"
                    d="M0 28.87h61.013v15.176c0 7.39-13.658 13.374-30.5 13.374S0 51.436 0 44.046z"
                    transform="translate(25.714 1.187)"
                    style="fill: url(#oleswmya7g)"
                  />
                  <path
                    data-name="4087"
                    d="M0 13.369c0 7.385 13.658 13.374 30.509 13.374s30.5-5.984 30.5-13.374S47.355 0 30.509 0 0 5.984 0 13.369z"
                    style="fill: url(#taxrdd3nuh)"
                    transform="translate(25.714 16.286)"
                  />
                  <path
                    data-name="4088"
                    d="M32.78 26.835c16.694 0 28.325-5.9 28.325-11.19S49.474 4.45 32.78 4.45 4.45 10.351 4.45 15.645s11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 14.015)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4089"
                    d="M33.84 16.411c0 3.918 6.239 7.091 13.937 7.091s13.937-3.178 13.937-7.091S55.475 9.32 47.777 9.32 33.84 12.5 33.84 16.411z"
                    transform="translate(8.441 11.53)"
                    style="opacity: 0.5; fill: url(#p3a6ppwt6i)"
                  />
                </g>
                <g style="filter: url(#28axgubtzj)">
                  <path
                    data-name="4090"
                    d="M122.96 72.25H89.845a5.7 5.7 0 0 0-5.7 5.7v26.528a5.7 5.7 0 0 0 5.7 5.7h33.115a5.7 5.7 0 0 0 5.7-5.7V77.945a5.694 5.694 0 0 0-5.7-5.7z"
                    transform="translate(-17.226 -20.584)"
                    style="fill: #ece9fa"
                  />
                </g>
                <path
                  data-name="4091"
                  d="M128.655 77.945a5.694 5.694 0 0 0-5.7-5.7h-33.11a5.7 5.7 0 0 0-5.7 5.7v2.674h44.5z"
                  transform="translate(-17.227 -20.582)"
                  style="fill: url(#ylxhgxw7kk)"
                />
                <path
                  data-name="4092"
                  d="M164.125 79.807a1.317 1.317 0 1 1-1.317-1.317 1.318 1.318 0 0 1 1.317 1.317z"
                  transform="translate(-56.693 -23.767)"
                  style="fill: #fff"
                />
                <path
                  data-name="4093"
                  d="M152.455 79.807a1.317 1.317 0 1 1-1.317-1.317 1.315 1.315 0 0 1 1.317 1.317z"
                  transform="translate(-50.737 -23.767)"
                  style="fill: #fff"
                />
              </g>
              <text
                transform="translate(89.143 80.001)"
                style="
                  fill: #656980;
                  font-size: 16px;
                  font-family: D2CodingBold, D2Coding;
                  letter-spacing: 0.02em;
                "
              >
                <tspan x="-12.32" y="0">SQL</tspan>
              </text>
            </svg>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="123.429"
              height="120"
              viewBox="0 0 123.429 120"
              class="home_btn"
            >
              <defs>
                <linearGradient
                  id="h7083wko5a"
                  y1=".5"
                  x2="1"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset=".87" stop-color="#8cdafb" />
                </linearGradient>
                <linearGradient
                  id="oftkpch1od"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="lz9gaq4l7b"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset=".58" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cb3fb" />
                </linearGradient>
                <linearGradient
                  id="t485hynlbf"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="oleswmya7g"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="taxrdd3nuh"
                  y1=".5"
                  y2=".5"
                  xlink:href="#lz9gaq4l7b"
                />
                <linearGradient
                  id="p3a6ppwt6i"
                  x1=".5"
                  y1="1"
                  x2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#0010cc" stop-opacity=".161" />
                </linearGradient>
                <linearGradient
                  id="ylxhgxw7kk"
                  x1=".5"
                  y1="1.481"
                  x2=".5"
                  y2="-.047"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cdafb" />
                </linearGradient>
                <filter
                  id="1dgxhzbgec"
                  x="13.714"
                  y="6.286"
                  width="85.013"
                  height="108.166"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="03yai85mxe"
                  x="16.714"
                  y="44.982"
                  width="79.013"
                  height="46.545"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur-2" />
                  <feFlood flood-opacity=".082" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="28axgubtzj"
                  x="54.924"
                  y="41.667"
                  width="68.505"
                  height="61.923"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur-3" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur-3" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <path data-name="981" style="fill: none" d="M0 0h120v120H0z" />
              <g style="filter: url(#1dgxhzbgec)">
                <path
                  data-name="7"
                  d="M0 70.792V56.473h.132A6.029 6.029 0 0 1 0 55.22a5.8 5.8 0 0 1 .63-2.631A6.333 6.333 0 0 1 0 49.872V35.553h.133A6.035 6.035 0 0 1 0 34.295a5.8 5.8 0 0 1 .63-2.63A6.34 6.34 0 0 1 0 28.947V14.628h.133A6.043 6.043 0 0 1 0 13.369C0 5.979 13.658 0 30.5 0s30.513 5.984 30.513 13.369a6.029 6.029 0 0 1-.133 1.259h.133v14.319a6.339 6.339 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.63 6.033 6.033 0 0 1-.133 1.258h.133v14.32a6.331 6.331 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.631 6.027 6.027 0 0 1-.132 1.254h.132v14.318c0 7.385-13.663 13.374-30.509 13.374S0 78.177 0 70.792z"
                  transform="translate(25.71 16.288)"
                  style="fill: url(#h7083wko5a)"
                />
              </g>
              <g data-name="354">
                <g data-name="357">
                  <path
                    data-name="4081"
                    d="M0 114.32h61.013v15.18c0 7.385-13.658 13.374-30.5 13.374S0 136.881 0 129.5z"
                    transform="translate(25.714 -42.418)"
                    style="fill: url(#oftkpch1od)"
                  />
                  <path
                    data-name="4082"
                    d="M0 100.87c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 93.485 0 100.87z"
                    transform="translate(25.714 -29.364)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4083"
                    d="M32.78 114.336c16.694 0 28.325-5.9 28.325-11.19S49.474 93.91 32.78 93.91s-28.33 3.942-28.33 9.236 11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 -31.635)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <g style="filter: url(#03yai85mxe)">
                    <path
                      data-name="4084"
                      d="M0 71.6h61.013v15.176c0 7.385-13.658 13.369-30.5 13.369S0 94.161 0 86.776z"
                      transform="translate(25.714 -20.624)"
                      style="fill: url(#t485hynlbf)"
                    />
                  </g>
                  <path
                    data-name="4085"
                    d="M0 58.14c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 50.755 0 58.14z"
                    transform="translate(25.714 -7.56)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4086"
                    d="M0 28.87h61.013v15.176c0 7.39-13.658 13.374-30.5 13.374S0 51.436 0 44.046z"
                    transform="translate(25.714 1.187)"
                    style="fill: url(#oleswmya7g)"
                  />
                  <path
                    data-name="4087"
                    d="M0 13.369c0 7.385 13.658 13.374 30.509 13.374s30.5-5.984 30.5-13.374S47.355 0 30.509 0 0 5.984 0 13.369z"
                    style="fill: url(#taxrdd3nuh)"
                    transform="translate(25.714 16.286)"
                  />
                  <path
                    data-name="4088"
                    d="M32.78 26.835c16.694 0 28.325-5.9 28.325-11.19S49.474 4.45 32.78 4.45 4.45 10.351 4.45 15.645s11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 14.015)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4089"
                    d="M33.84 16.411c0 3.918 6.239 7.091 13.937 7.091s13.937-3.178 13.937-7.091S55.475 9.32 47.777 9.32 33.84 12.5 33.84 16.411z"
                    transform="translate(8.441 11.53)"
                    style="opacity: 0.5; fill: url(#p3a6ppwt6i)"
                  />
                </g>
                <g style="filter: url(#28axgubtzj)">
                  <path
                    data-name="4090"
                    d="M122.96 72.25H89.845a5.7 5.7 0 0 0-5.7 5.7v26.528a5.7 5.7 0 0 0 5.7 5.7h33.115a5.7 5.7 0 0 0 5.7-5.7V77.945a5.694 5.694 0 0 0-5.7-5.7z"
                    transform="translate(-17.226 -20.584)"
                    style="fill: #ece9fa"
                  />
                </g>
                <path
                  data-name="4091"
                  d="M128.655 77.945a5.694 5.694 0 0 0-5.7-5.7h-33.11a5.7 5.7 0 0 0-5.7 5.7v2.674h44.5z"
                  transform="translate(-17.227 -20.582)"
                  style="fill: url(#ylxhgxw7kk)"
                />
                <path
                  data-name="4092"
                  d="M164.125 79.807a1.317 1.317 0 1 1-1.317-1.317 1.318 1.318 0 0 1 1.317 1.317z"
                  transform="translate(-56.693 -23.767)"
                  style="fill: #fff"
                />
                <path
                  data-name="4093"
                  d="M152.455 79.807a1.317 1.317 0 1 1-1.317-1.317 1.315 1.315 0 0 1 1.317 1.317z"
                  transform="translate(-50.737 -23.767)"
                  style="fill: #fff"
                />
              </g>
              <text
                transform="translate(89.143 80.001)"
                style="
                  fill: #656980;
                  font-size: 16px;
                  font-family: D2CodingBold, D2Coding;
                  letter-spacing: 0.02em;
                "
              >
                <tspan x="-12.32" y="0">SQL</tspan>
              </text>
            </svg>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="123.429"
              height="120"
              viewBox="0 0 123.429 120"
              class="home_btn"
            >
              <defs>
                <linearGradient
                  id="h7083wko5a"
                  y1=".5"
                  x2="1"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset=".87" stop-color="#8cdafb" />
                </linearGradient>
                <linearGradient
                  id="oftkpch1od"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="lz9gaq4l7b"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset=".58" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cb3fb" />
                </linearGradient>
                <linearGradient
                  id="t485hynlbf"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="oleswmya7g"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="taxrdd3nuh"
                  y1=".5"
                  y2=".5"
                  xlink:href="#lz9gaq4l7b"
                />
                <linearGradient
                  id="p3a6ppwt6i"
                  x1=".5"
                  y1="1"
                  x2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#0010cc" stop-opacity=".161" />
                </linearGradient>
                <linearGradient
                  id="ylxhgxw7kk"
                  x1=".5"
                  y1="1.481"
                  x2=".5"
                  y2="-.047"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cdafb" />
                </linearGradient>
                <filter
                  id="1dgxhzbgec"
                  x="13.714"
                  y="6.286"
                  width="85.013"
                  height="108.166"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="03yai85mxe"
                  x="16.714"
                  y="44.982"
                  width="79.013"
                  height="46.545"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur-2" />
                  <feFlood flood-opacity=".082" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="28axgubtzj"
                  x="54.924"
                  y="41.667"
                  width="68.505"
                  height="61.923"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur-3" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur-3" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <path data-name="981" style="fill: none" d="M0 0h120v120H0z" />
              <g style="filter: url(#1dgxhzbgec)">
                <path
                  data-name="7"
                  d="M0 70.792V56.473h.132A6.029 6.029 0 0 1 0 55.22a5.8 5.8 0 0 1 .63-2.631A6.333 6.333 0 0 1 0 49.872V35.553h.133A6.035 6.035 0 0 1 0 34.295a5.8 5.8 0 0 1 .63-2.63A6.34 6.34 0 0 1 0 28.947V14.628h.133A6.043 6.043 0 0 1 0 13.369C0 5.979 13.658 0 30.5 0s30.513 5.984 30.513 13.369a6.029 6.029 0 0 1-.133 1.259h.133v14.319a6.339 6.339 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.63 6.033 6.033 0 0 1-.133 1.258h.133v14.32a6.331 6.331 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.631 6.027 6.027 0 0 1-.132 1.254h.132v14.318c0 7.385-13.663 13.374-30.509 13.374S0 78.177 0 70.792z"
                  transform="translate(25.71 16.288)"
                  style="fill: url(#h7083wko5a)"
                />
              </g>
              <g data-name="354">
                <g data-name="357">
                  <path
                    data-name="4081"
                    d="M0 114.32h61.013v15.18c0 7.385-13.658 13.374-30.5 13.374S0 136.881 0 129.5z"
                    transform="translate(25.714 -42.418)"
                    style="fill: url(#oftkpch1od)"
                  />
                  <path
                    data-name="4082"
                    d="M0 100.87c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 93.485 0 100.87z"
                    transform="translate(25.714 -29.364)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4083"
                    d="M32.78 114.336c16.694 0 28.325-5.9 28.325-11.19S49.474 93.91 32.78 93.91s-28.33 3.942-28.33 9.236 11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 -31.635)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <g style="filter: url(#03yai85mxe)">
                    <path
                      data-name="4084"
                      d="M0 71.6h61.013v15.176c0 7.385-13.658 13.369-30.5 13.369S0 94.161 0 86.776z"
                      transform="translate(25.714 -20.624)"
                      style="fill: url(#t485hynlbf)"
                    />
                  </g>
                  <path
                    data-name="4085"
                    d="M0 58.14c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 50.755 0 58.14z"
                    transform="translate(25.714 -7.56)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4086"
                    d="M0 28.87h61.013v15.176c0 7.39-13.658 13.374-30.5 13.374S0 51.436 0 44.046z"
                    transform="translate(25.714 1.187)"
                    style="fill: url(#oleswmya7g)"
                  />
                  <path
                    data-name="4087"
                    d="M0 13.369c0 7.385 13.658 13.374 30.509 13.374s30.5-5.984 30.5-13.374S47.355 0 30.509 0 0 5.984 0 13.369z"
                    style="fill: url(#taxrdd3nuh)"
                    transform="translate(25.714 16.286)"
                  />
                  <path
                    data-name="4088"
                    d="M32.78 26.835c16.694 0 28.325-5.9 28.325-11.19S49.474 4.45 32.78 4.45 4.45 10.351 4.45 15.645s11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 14.015)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4089"
                    d="M33.84 16.411c0 3.918 6.239 7.091 13.937 7.091s13.937-3.178 13.937-7.091S55.475 9.32 47.777 9.32 33.84 12.5 33.84 16.411z"
                    transform="translate(8.441 11.53)"
                    style="opacity: 0.5; fill: url(#p3a6ppwt6i)"
                  />
                </g>
                <g style="filter: url(#28axgubtzj)">
                  <path
                    data-name="4090"
                    d="M122.96 72.25H89.845a5.7 5.7 0 0 0-5.7 5.7v26.528a5.7 5.7 0 0 0 5.7 5.7h33.115a5.7 5.7 0 0 0 5.7-5.7V77.945a5.694 5.694 0 0 0-5.7-5.7z"
                    transform="translate(-17.226 -20.584)"
                    style="fill: #ece9fa"
                  />
                </g>
                <path
                  data-name="4091"
                  d="M128.655 77.945a5.694 5.694 0 0 0-5.7-5.7h-33.11a5.7 5.7 0 0 0-5.7 5.7v2.674h44.5z"
                  transform="translate(-17.227 -20.582)"
                  style="fill: url(#ylxhgxw7kk)"
                />
                <path
                  data-name="4092"
                  d="M164.125 79.807a1.317 1.317 0 1 1-1.317-1.317 1.318 1.318 0 0 1 1.317 1.317z"
                  transform="translate(-56.693 -23.767)"
                  style="fill: #fff"
                />
                <path
                  data-name="4093"
                  d="M152.455 79.807a1.317 1.317 0 1 1-1.317-1.317 1.315 1.315 0 0 1 1.317 1.317z"
                  transform="translate(-50.737 -23.767)"
                  style="fill: #fff"
                />
              </g>
              <text
                transform="translate(89.143 80.001)"
                style="
                  fill: #656980;
                  font-size: 16px;
                  font-family: D2CodingBold, D2Coding;
                  letter-spacing: 0.02em;
                "
              >
                <tspan x="-12.32" y="0">SQL</tspan>
              </text>
            </svg>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
        <button class="btn_box">
          <div class="btn_img_wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="123.429"
              height="120"
              viewBox="0 0 123.429 120"
              class="home_btn"
            >
              <defs>
                <linearGradient
                  id="h7083wko5a"
                  y1=".5"
                  x2="1"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset=".87" stop-color="#8cdafb" />
                </linearGradient>
                <linearGradient
                  id="oftkpch1od"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="lz9gaq4l7b"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset=".58" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cb3fb" />
                </linearGradient>
                <linearGradient
                  id="t485hynlbf"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="oleswmya7g"
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2=".5"
                  xlink:href="#h7083wko5a"
                />
                <linearGradient
                  id="taxrdd3nuh"
                  y1=".5"
                  y2=".5"
                  xlink:href="#lz9gaq4l7b"
                />
                <linearGradient
                  id="p3a6ppwt6i"
                  x1=".5"
                  y1="1"
                  x2=".5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#0010cc" stop-opacity=".161" />
                </linearGradient>
                <linearGradient
                  id="ylxhgxw7kk"
                  x1=".5"
                  y1="1.481"
                  x2=".5"
                  y2="-.047"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#3e6ef8" />
                  <stop offset="1" stop-color="#8cdafb" />
                </linearGradient>
                <filter
                  id="1dgxhzbgec"
                  x="13.714"
                  y="6.286"
                  width="85.013"
                  height="108.166"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="03yai85mxe"
                  x="16.714"
                  y="44.982"
                  width="79.013"
                  height="46.545"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur-2" />
                  <feFlood flood-opacity=".082" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="28axgubtzj"
                  x="54.924"
                  y="41.667"
                  width="68.505"
                  height="61.923"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="4" result="blur-3" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur-3" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <path data-name="981" style="fill: none" d="M0 0h120v120H0z" />
              <g style="filter: url(#1dgxhzbgec)">
                <path
                  data-name="7"
                  d="M0 70.792V56.473h.132A6.029 6.029 0 0 1 0 55.22a5.8 5.8 0 0 1 .63-2.631A6.333 6.333 0 0 1 0 49.872V35.553h.133A6.035 6.035 0 0 1 0 34.295a5.8 5.8 0 0 1 .63-2.63A6.34 6.34 0 0 1 0 28.947V14.628h.133A6.043 6.043 0 0 1 0 13.369C0 5.979 13.658 0 30.5 0s30.513 5.984 30.513 13.369a6.029 6.029 0 0 1-.133 1.259h.133v14.319a6.339 6.339 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.63 6.033 6.033 0 0 1-.133 1.258h.133v14.32a6.331 6.331 0 0 1-.63 2.717 5.8 5.8 0 0 1 .63 2.631 6.027 6.027 0 0 1-.132 1.254h.132v14.318c0 7.385-13.663 13.374-30.509 13.374S0 78.177 0 70.792z"
                  transform="translate(25.71 16.288)"
                  style="fill: url(#h7083wko5a)"
                />
              </g>
              <g data-name="354">
                <g data-name="357">
                  <path
                    data-name="4081"
                    d="M0 114.32h61.013v15.18c0 7.385-13.658 13.374-30.5 13.374S0 136.881 0 129.5z"
                    transform="translate(25.714 -42.418)"
                    style="fill: url(#oftkpch1od)"
                  />
                  <path
                    data-name="4082"
                    d="M0 100.87c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 93.485 0 100.87z"
                    transform="translate(25.714 -29.364)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4083"
                    d="M32.78 114.336c16.694 0 28.325-5.9 28.325-11.19S49.474 93.91 32.78 93.91s-28.33 3.942-28.33 9.236 11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 -31.635)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <g style="filter: url(#03yai85mxe)">
                    <path
                      data-name="4084"
                      d="M0 71.6h61.013v15.176c0 7.385-13.658 13.369-30.5 13.369S0 94.161 0 86.776z"
                      transform="translate(25.714 -20.624)"
                      style="fill: url(#t485hynlbf)"
                    />
                  </g>
                  <path
                    data-name="4085"
                    d="M0 58.14c0 7.385 13.658 13.374 30.509 13.374s30.5-5.989 30.5-13.374-13.658-11.41-30.5-11.41S0 50.755 0 58.14z"
                    transform="translate(25.714 -7.56)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4086"
                    d="M0 28.87h61.013v15.176c0 7.39-13.658 13.374-30.5 13.374S0 51.436 0 44.046z"
                    transform="translate(25.714 1.187)"
                    style="fill: url(#oleswmya7g)"
                  />
                  <path
                    data-name="4087"
                    d="M0 13.369c0 7.385 13.658 13.374 30.509 13.374s30.5-5.984 30.5-13.374S47.355 0 30.509 0 0 5.984 0 13.369z"
                    style="fill: url(#taxrdd3nuh)"
                    transform="translate(25.714 16.286)"
                  />
                  <path
                    data-name="4088"
                    d="M32.78 26.835c16.694 0 28.325-5.9 28.325-11.19S49.474 4.45 32.78 4.45 4.45 10.351 4.45 15.645s11.636 11.19 28.33 11.19z"
                    transform="translate(23.443 14.015)"
                    style="fill: url(#lz9gaq4l7b)"
                  />
                  <path
                    data-name="4089"
                    d="M33.84 16.411c0 3.918 6.239 7.091 13.937 7.091s13.937-3.178 13.937-7.091S55.475 9.32 47.777 9.32 33.84 12.5 33.84 16.411z"
                    transform="translate(8.441 11.53)"
                    style="opacity: 0.5; fill: url(#p3a6ppwt6i)"
                  />
                </g>
                <g style="filter: url(#28axgubtzj)">
                  <path
                    data-name="4090"
                    d="M122.96 72.25H89.845a5.7 5.7 0 0 0-5.7 5.7v26.528a5.7 5.7 0 0 0 5.7 5.7h33.115a5.7 5.7 0 0 0 5.7-5.7V77.945a5.694 5.694 0 0 0-5.7-5.7z"
                    transform="translate(-17.226 -20.584)"
                    style="fill: #ece9fa"
                  />
                </g>
                <path
                  data-name="4091"
                  d="M128.655 77.945a5.694 5.694 0 0 0-5.7-5.7h-33.11a5.7 5.7 0 0 0-5.7 5.7v2.674h44.5z"
                  transform="translate(-17.227 -20.582)"
                  style="fill: url(#ylxhgxw7kk)"
                />
                <path
                  data-name="4092"
                  d="M164.125 79.807a1.317 1.317 0 1 1-1.317-1.317 1.318 1.318 0 0 1 1.317 1.317z"
                  transform="translate(-56.693 -23.767)"
                  style="fill: #fff"
                />
                <path
                  data-name="4093"
                  d="M152.455 79.807a1.317 1.317 0 1 1-1.317-1.317 1.315 1.315 0 0 1 1.317 1.317z"
                  transform="translate(-50.737 -23.767)"
                  style="fill: #fff"
                />
              </g>
              <text
                transform="translate(89.143 80.001)"
                style="
                  fill: #656980;
                  font-size: 16px;
                  font-family: D2CodingBold, D2Coding;
                  letter-spacing: 0.02em;
                "
              >
                <tspan x="-12.32" y="0">SQL</tspan>
              </text>
            </svg>
          </div>
          <p class="home_btn_text">SQL</p>
        </button>
      </div>
      <!-- 아래 바로가기 부분 -->
      <div class="sub_tab_wrap">
        <ul>
          <li class="sub_tab">
            <button>
              <img src="@/assets/image/ic_folder.png" /><span>Open…</span>
            </button>
          </li>
          <li class="sub_tab">
            <button>
              <img src="@/assets/image/ic_document.png" /><span
                >Machbase-Neo Documentation</span
              ><img src="@/assets/image/btn_opennew.png" />
            </button>
          </li>
          <li class="sub_tab">
            <button>
              <img src="@/assets/image/ic_document.png" /><span
                >Machbase SQL Reference</span
              ><img src="@/assets/image/btn_opennew.png" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright_wrap">
      <p class="copyright">
        Copyrightⓒ Machbase Corporation. All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
.outer {
  background-color: #262831;
  height: 100%;

  .tab {
    background-color: #404557;
    height: 54px;
    display: flex;
    position: relative;

    .tab_button {
      margin-top: 4px;
      width: 260px;
      height: 50px;
      display: flex;
      align-items: center;
      position: relative;
      background-color: #404457;
      cursor: pointer;

      svg {
        padding-left: 16px;
      }
      span {
        padding-left: 8px;
        color: #fff;
      }
      .tab_close {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-48%);
      }
    }
    .setting_btn {
      position: absolute;
      width: 32px;
      height: 32px;
      right: 8px;
      top: 11px;
    }
    .tab_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      img {
        padding: 0;
      }
    }
    .tab_select {
      color: #4199ff;
      background-color: #262831;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      position: relative;
      z-index: 10;
      .tab_close {
        .path {
          fill: #4199ff;
          stroke: #4199ff;
          stroke-width: 2px;
        }
      }
      .tab_icon {
        fill: #4199ff;
        &:hover {
          fill: #4199ff;
        }
      }

      span {
        color: #4199ff;
      }
      .round_right_wrap {
        width: 15px;
        height: 15px;
        background-color: #262831;
        position: absolute;
        bottom: 0;
        left: -15px;
        transform: scaleX(-1), scaleY(-1);

        .round_right {
          width: 15px;
          height: 15px;
          border-radius: 0 0 80% 0;
          background-color: #404557;
          position: absolute;
          bottom: 0;
          left: 0px;
        }
      }

      .round_left_wrap {
        width: 15px;
        height: 15px;
        background-color: #262831;
        position: absolute;
        bottom: 0;
        right: -15px;
        transform: scaleX(-1), scaleY(-1);
        z-index: 1;

        .round_left {
          width: 15px;
          height: 15px;
          border-radius: 0 0 0 80%;
          background-color: #404457;
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
        }
      }
    }
    .tab_none_select {
      .tab_close {
        .path {
          fill: #fff;
          stroke: #fff;
          stroke-width: 2px;
        }
      }
      &:hover {
        .path {
          stroke: #4199ff;
        }
        span {
          color: #4199ff;
        }
        .tab_icon {
          fill: #4199ff;
        }
      }
      .tab_icon {
        fill: #fff;
      }
      &::after {
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        width: 1px;
        height: 24px;
        position: absolute;
        right: -1px;
      }
    }
    .plus_wrap {
      width: 50px;
      margin-top: 4px;
      &:hover {
        .plus_btn {
          fill: #4199ff;
        }
      }
      .plus_btn {
        fill: #fff;
      }
    }
  }
  .inner {
    padding: 0 18.75%;
    .title {
      margin-top: 18vh;
      .main_title {
        font-size: 40px;
        color: #fff;
        font-family: Pretendard;
        font-weight: bold;
      }
      .main_text {
        margin-top: 8px;
        opacity: 0.8;
        font-family: Pretendard;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .btn_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 48px;
      border-bottom: 1px solid #404457;
      padding-bottom: 48px;
      .btn_box {
        width: 224px;
        height: 224px;
        margin-right: 20px;
        background-color: rgba(0, 0, 0, 0.18);
        border-radius: 10px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.18);
        border: solid 0.5px rgba(255, 255, 255, 0.5);
        .btn_img_wrap {
          position: relative;
          &::after {
            position: absolute;
            content: "";
            bottom: -7px;
            left: 50%;
            transform: translateX(-50%);
            width: 16px;
            height: 1px;
            background-color: #fff;
          }
        }
        p {
          font-family: Pretendard;
          font-size: 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          padding-top: 25px;
        }
        &:hover {
          box-shadow: inset 0 -2px 62px 0 rgba(65, 153, 255, 0.5);
          border: solid 1px #4199ff;
          cursor: pointer;
          svg {
            mix-blend-mode: normal;
            opacity: 1;
          }
          p {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .home_btn {
        mix-blend-mode: luminosity;
        opacity: 0.5;
      }
    }
    .sub_tab_wrap {
      ul {
        margin-top: 48px;
        .sub_tab {
          button {
            display: flex;
            align-items: center;
            background-color: transparent;
            color: #4199ff;
            cursor: pointer;
            span {
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
  .copyright_wrap {
    position: fixed;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    .copyright {
      font-family: Pretendard;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
<script>
import Setting from "../components/SettingView.vue";
export default {
  components: {
    Setting,
  },
};
</script>
