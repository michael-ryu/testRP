<template>
  <div class="outer">
    <!-- tab 부분 -->
    <Tagtab />
    <div class="tag_tab">
      <button class="modal_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path data-name="사각형 1005" style="fill: none" d="M0 0h16v16H0z" />
          <path
            d="M123.617-870.55a.752.752 0 0 1-.554-.224.753.753 0 0 1-.224-.554.753.753 0 0 1 .224-.554.753.753 0 0 1 .554-.224.753.753 0 0 1 .554.224.753.753 0 0 1 .224.554.753.753 0 0 1-.224.554.752.752 0 0 1-.554.224zm3.442 0a.752.752 0 0 1-.554-.224.753.753 0 0 1-.224-.554.753.753 0 0 1 .224-.554.753.753 0 0 1 .554-.224.753.753 0 0 1 .554.224.753.753 0 0 1 .224.554.753.753 0 0 1-.224.554.752.752 0 0 1-.555.224zm3.306 0a.752.752 0 0 1-.554-.224.753.753 0 0 1-.224-.554.753.753 0 0 1 .224-.554.753.753 0 0 1 .554-.224.753.753 0 0 1 .554.224.753.753 0 0 1 .224.554.753.753 0 0 1-.224.554.752.752 0 0 1-.555.224zm-9.2 6.106a1.119 1.119 0 0 1-.817-.35 1.119 1.119 0 0 1-.35-.817v-12.056a1.119 1.119 0 0 1 .35-.817 1.119 1.119 0 0 1 .817-.35h1.264V-880h1.264v1.167h6.611V-880h1.264v1.167h1.264a1.119 1.119 0 0 1 .817.35 1.119 1.119 0 0 1 .35.817v12.056a1.119 1.119 0 0 1-.35.817 1.119 1.119 0 0 1-.817.35zm0-1.167h11.667v-8.361h-11.665z"
            transform="translate(-119 880)"
          />
        </svg>
        <span> now-2d ~ now refresh every 10s </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          class="modal_arrow"
        >
          <path data-name="사각형 991" style="fill: none" d="M0 0h16v16H0z" />
          <path
            data-name="패스 4101"
            d="m3533.373 1796.351 4 4 4-4"
            transform="translate(-3529.373 -1789.851)"
            class="modal_arrow_icon"
            style="stroke-linejoin: round; stroke-width: 1.5px; fill: none"
          />
        </svg>
      </button>
      <button class="refresh_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path data-name="사각형 961" style="fill: none" d="M0 0h40v40H0z" />
          <path
            d="M169-782a8.676 8.676 0 0 1-6.37-2.63A8.676 8.676 0 0 1 160-791a8.676 8.676 0 0 1 2.63-6.37A8.676 8.676 0 0 1 169-800a8.7 8.7 0 0 1 4.191.97 9.924 9.924 0 0 1 3.122 2.658v-2.784a.82.82 0 0 1 .239-.6.82.82 0 0 1 .6-.239.82.82 0 0 1 .6.239.82.82 0 0 1 .239.6v5.456a.82.82 0 0 1-.239.6.82.82 0 0 1-.6.239H171.7a.82.82 0 0 1-.6-.239.82.82 0 0 1-.239-.6.82.82 0 0 1 .239-.6.819.819 0 0 1 .6-.239h3.881a8.616 8.616 0 0 0-2.728-2.728 7.1 7.1 0 0 0-3.853-1.046 7.059 7.059 0 0 0-5.189 2.124 7.059 7.059 0 0 0-2.123 5.189 7.059 7.059 0 0 0 2.123 5.189 7.058 7.058 0 0 0 5.189 2.123 7.449 7.449 0 0 0 3.938-1.111 6.951 6.951 0 0 0 2.728-3 .932.932 0 0 1 .464-.464.716.716 0 0 1 .633-.014.759.759 0 0 1 .45.464.9.9 0 0 1-.028.661 8.666 8.666 0 0 1-3.3 3.755A8.965 8.965 0 0 1 169-782z"
            transform="translate(-149 811)"
          />
        </svg>
      </button>
      <button class="tag_save_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path data-name="사각형 961" style="fill: none" d="M0 0h40v40H0z" />
          <path
            d="M121.5-822a1.439 1.439 0 0 1-1.05-.45 1.439 1.439 0 0 1-.45-1.05v-15a1.439 1.439 0 0 1 .45-1.05 1.439 1.439 0 0 1 1.05-.45h11.95a1.448 1.448 0 0 1 .593.125 1.576 1.576 0 0 1 .482.325l3.025 3.025a1.577 1.577 0 0 1 .325.482 1.447 1.447 0 0 1 .125.593v11.95a1.439 1.439 0 0 1-.45 1.05 1.439 1.439 0 0 1-1.05.45zm7.494-3.125a2.521 2.521 0 0 0 1.843-.757 2.492 2.492 0 0 0 .762-1.838 2.521 2.521 0 0 0-.757-1.843 2.492 2.492 0 0 0-1.837-.762 2.521 2.521 0 0 0-1.843.757 2.492 2.492 0 0 0-.762 1.837 2.521 2.521 0 0 0 .757 1.843 2.492 2.492 0 0 0 1.837.763zm-5.419-8.475h7.45a.726.726 0 0 0 .534-.216.726.726 0 0 0 .216-.534v-2.075a.725.725 0 0 0-.216-.534.726.726 0 0 0-.534-.216h-7.45a.726.726 0 0 0-.534.216.726.726 0 0 0-.216.534v2.075a.726.726 0 0 0 .216.534.726.726 0 0 0 .534.216z"
            transform="translate(-109 851)"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path data-name="사각형 962" style="fill: none" d="M0 0h40v40H0z" />
          <path
            d="M81.5-784a1.435 1.435 0 0 1-1.038-.462A1.435 1.435 0 0 1 80-785.5v-13a1.435 1.435 0 0 1 .462-1.037A1.435 1.435 0 0 1 81.5-800h6.4a1.459 1.459 0 0 1 .588.125 1.559 1.559 0 0 1 .487.325l1.05 1.05H98.5a1.435 1.435 0 0 1 1.037.463A1.435 1.435 0 0 1 100-797H83a1.447 1.447 0 0 0-1.062.438 1.447 1.447 0 0 0-.438 1.062v10l2.25-8.875a1.406 1.406 0 0 1 .55-.812 1.529 1.529 0 0 1 .925-.312H99.55a1.491 1.491 0 0 1 1.2.575 1.363 1.363 0 0 1 .275 1.3l-2.2 8.475a1.431 1.431 0 0 1-.55.875 1.772 1.772 0 0 1-1.025.274z"
            transform="translate(-70.72 812.5)"
          />
        </svg>
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
                d="M169-782a8.676 8.676 0 0 1-6.37-2.63A8.676 8.676 0 0 1 160-791a8.676 8.676 0 0 1 2.63-6.37A8.676 8.676 0 0 1 169-800a8.7 8.7 0 0 1 4.191.97 9.924 9.924 0 0 1 3.122 2.658v-2.784a.82.82 0 0 1 .239-.6.82.82 0 0 1 .6-.239.82.82 0 0 1 .6.239.82.82 0 0 1 .239.6v5.456a.82.82 0 0 1-.239.6.82.82 0 0 1-.6.239H171.7a.82.82 0 0 1-.6-.239.82.82 0 0 1-.239-.6.82.82 0 0 1 .239-.6.819.819 0 0 1 .6-.239h3.881a8.616 8.616 0 0 0-2.728-2.728 7.1 7.1 0 0 0-3.853-1.046 7.059 7.059 0 0 0-5.189 2.124 7.059 7.059 0 0 0-2.123 5.189 7.059 7.059 0 0 0 2.123 5.189 7.058 7.058 0 0 0 5.189 2.123 7.449 7.449 0 0 0 3.938-1.111 6.951 6.951 0 0 0 2.728-3 .932.932 0 0 1 .464-.464.716.716 0 0 1 .633-.014.759.759 0 0 1 .45.464.9.9 0 0 1-.028.661 8.666 8.666 0 0 1-3.3 3.755A8.965 8.965 0 0 1 169-782z"
                transform="translate(-149 811)"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <defs>
                <filter
                  id="7ro2q3b3ma"
                  x="5.722"
                  y="6.5"
                  width="28.556"
                  height="29"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feFlood flood-opacity=".161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <path
                data-name="사각형 1086"
                style="fill: none"
                d="M0 0h40v40H0z"
              />
              <g style="filter: url(#7ro2q3b3ma)">
                <path
                  data-name="settings_FILL1_wght400_GRAD0_opsz48"
                  d="M100.425-860h-3.3a.745.745 0 0 1-.487-.175.735.735 0 0 1-.263-.45l-.4-2.525a6.7 6.7 0 0 1-1-.475 6.871 6.871 0 0 1-.925-.625l-2.325 1.075a.743.743 0 0 1-.55.037.725.725 0 0 1-.425-.362l-1.65-2.925a.65.65 0 0 1-.075-.525.834.834 0 0 1 .3-.45l2.15-1.575a2.973 2.973 0 0 1-.062-.513q-.012-.287-.012-.513t.012-.513a2.973 2.973 0 0 1 .063-.513l-2.15-1.575a.834.834 0 0 1-.3-.45.65.65 0 0 1 .075-.525l1.65-2.925a.725.725 0 0 1 .425-.362.743.743 0 0 1 .55.037l2.325 1.075a6.871 6.871 0 0 1 .925-.625 5.175 5.175 0 0 1 1-.45l.4-2.55a.735.735 0 0 1 .263-.45.745.745 0 0 1 .487-.175h3.3a.745.745 0 0 1 .487.175.735.735 0 0 1 .263.45l.4 2.525a8.1 8.1 0 0 1 1.012.462 4.3 4.3 0 0 1 .912.638l2.325-1.075a.743.743 0 0 1 .55-.037.725.725 0 0 1 .425.362l1.65 2.9a.714.714 0 0 1 .088.537.741.741 0 0 1-.312.463l-2.15 1.525a3.524 3.524 0 0 1 .063.538q.012.287.012.537t-.012.525a3.482 3.482 0 0 1-.062.525l2.15 1.55a.834.834 0 0 1 .3.45.65.65 0 0 1-.075.525L106.8-863.5a.725.725 0 0 1-.425.362.743.743 0 0 1-.55-.037l-2.325-1.075a8.3 8.3 0 0 1-.912.638 4.356 4.356 0 0 1-1.012.462l-.4 2.525a.735.735 0 0 1-.263.45.745.745 0 0 1-.488.175zm-1.65-6.75a3.133 3.133 0 0 0 2.3-.95 3.133 3.133 0 0 0 .95-2.3 3.133 3.133 0 0 0-.95-2.3 3.133 3.133 0 0 0-2.3-.95 3.133 3.133 0 0 0-2.3.95 3.133 3.133 0 0 0-.95 2.3 3.133 3.133 0 0 0 .95 2.3 3.133 3.133 0 0 0 2.3.95z"
                  transform="translate(-78.78 890)"
                />
              </g>
            </svg>
          </button>
          <button>
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
                data-name="제외 3"
                d="M-4211.428-4253.427h-11.143a2.289 2.289 0 0 1-2.286-2.287v-13.713h15.714v13.713a2.289 2.289 0 0 1-2.285 2.287zM-4214-4265.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-6 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm12-5.071h-18v-2.285h4l1.144-1.145h7.713l1.144 1.145h4v2.284z"
                transform="translate(4237 4284)"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="tag_table">
        <button class="tag_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
          >
            <defs>
              <filter
                id="gh4zzagkra"
                x="19.5"
                y="15.934"
                width="15"
                height="24.132"
                filterUnits="userSpaceOnUse"
              >
                <feOffset />
                <feGaussianBlur stdDeviation=".5" result="blur" />
                <feFlood flood-opacity=".161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g data-name="사각형 1017">
              <rect width="56" height="56" rx="8" style="stroke: none" />
              <rect
                x=".25"
                y=".25"
                width="55.5"
                height="55.5"
                rx="7.75"
                style="fill: none"
              />
            </g>
            <g style="filter: url(#gh4zzagkra)">
              <path
                data-name="합치기 10"
                d="M.42 20.712a1.435 1.435 0 0 1 0-2.029l8.117-8.117L.42 2.449A1.434 1.434 0 0 1 2.449.42l9.131 9.131a1.437 1.437 0 0 1 0 2.03l-9.13 9.131a1.435 1.435 0 0 1-2.03 0z"
                transform="rotate(180 16.5 19.285)"
              />
            </g>
          </svg>
        </button>
        <div class="tag_chart_img_wrap">
          <img class="tag_chart_img" src="@/assets/image/img_chart_dark.png" />
        </div>
        <button class="tag_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
          >
            <defs>
              <filter
                id="ze7k6260xa"
                x="21.499"
                y="15.934"
                width="15"
                height="24.132"
                filterUnits="userSpaceOnUse"
              >
                <feOffset />
                <feGaussianBlur stdDeviation=".5" result="blur" />
                <feFlood flood-opacity=".161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g data-name="사각형 1017">
              <rect width="56" height="56" rx="8" style="stroke: none" />
              <rect
                x=".25"
                y=".25"
                width="55.5"
                height="55.5"
                rx="7.75"
                style="fill: none"
              />
            </g>
            <g style="filter: url(#ze7k6260xa)">
              <path
                data-name="합치기 10"
                d="M.42 20.713a1.435 1.435 0 0 1 0-2.03l8.117-8.117L.42 2.45A1.435 1.435 0 0 1 2.449.42l9.131 9.131a1.435 1.435 0 0 1 .393 1.29l-.006.029a1.426 1.426 0 0 1-.38.7l-.007.007-9.131 9.136a1.435 1.435 0 0 1-2.029 0z"
                transform="translate(23 17.43)"
              />
            </g>
          </svg>
        </button>
      </div>
      <div class="tag_zoom_wrap">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g data-name="btn_zoom in x4">
              <path data-name="사각형 1" style="fill: none" d="M0 0h24v24H0z" />
              <path
                d="m138.933 235.4-5.167-5.167a7.349 7.349 0 0 1-2.332 1.35 8.612 8.612 0 1 1 5.166-5.283 8.461 8.461 0 0 1-1.4 2.5l5.2 5.133zm-10.367-5.333a6.234 6.234 0 0 0 4.6-1.917 6.569 6.569 0 0 0 0-9.233 6.234 6.234 0 0 0-4.6-1.917 6.533 6.533 0 1 0 0 13.067zm-1.033-2.833V224.5H124.8v-2h2.733v-2.7h2v2.7h2.7v2h-2.7v2.733z"
                transform="translate(-118.2 -213.2)"
              />
              <path
                data-name="패스 1"
                d="M-2.552-4.16h-.614v1.01h-.818v-1.01h-2.1v-.62l2.119-3.1h.8v3.04h.614zm-1.432-.68V-5.9q0-.185.007-.386t.017-.376l.016-.267h-.026q-.059.132-.129.261a2.806 2.806 0 0 1-.155.254l-1.07 1.574z"
                transform="translate(26.433 8.25)"
              />
              <path
                data-name="zoom_in_FILL0_wght400_GRAD0_opsz48"
                d="M1.4 3.6V2.2H0v-.817h1.4V0h.819v1.383H3.6V2.2H2.218v1.4z"
                transform="rotate(-45 10.95 -17.744)"
              />
            </g>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g data-name="btn_zoom in x2">
              <path data-name="사각형 3" style="fill: none" d="M0 0h24v24H0z" />
              <path
                d="m138.933 235.4-5.167-5.167a7.349 7.349 0 0 1-2.332 1.35 8.612 8.612 0 1 1 5.166-5.283 8.461 8.461 0 0 1-1.4 2.5l5.2 5.133zm-10.367-5.333a6.234 6.234 0 0 0 4.6-1.917 6.569 6.569 0 0 0 0-9.233 6.234 6.234 0 0 0-4.6-1.917 6.533 6.533 0 1 0 0 13.067zm-1.033-2.833V224.5H124.8v-2h2.733v-2.7h2v2.7h2.7v2h-2.7v2.733z"
                transform="translate(-118.2 -213.2)"
              />
              <path
                data-name="패스 2"
                d="M-2.592-3.186h-3.227V-3.8l1.2-1.214q.356-.363.584-.62a2.158 2.158 0 0 0 .335-.485 1.125 1.125 0 0 0 .109-.492.616.616 0 0 0-.179-.489.712.712 0 0 0-.492-.162 1.277 1.277 0 0 0-.554.122 2.7 2.7 0 0 0-.535.347l-.455-.548a3.319 3.319 0 0 1 .657-.439 2.039 2.039 0 0 1 .934-.188 1.747 1.747 0 0 1 .782.162 1.21 1.21 0 0 1 .5.449 1.219 1.219 0 0 1 .183.657 1.619 1.619 0 0 1-.152.7 2.707 2.707 0 0 1-.439.64q-.287.32-.683.69l-.746.719v.04h2.178z"
                transform="translate(26.328 8.286)"
              />
              <path
                data-name="zoom_in_FILL0_wght400_GRAD0_opsz48"
                d="M1.4 3.6V2.2H0v-.817h1.4V0h.819v1.383H3.6V2.2H2.218v1.4z"
                transform="rotate(-45 10.95 -17.744)"
              />
            </g>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g data-name="gtn_focus center">
              <path data-name="사각형 7" style="fill: none" d="M0 0h24v24H0z" />
              <path
                d="M130.2 230.252a3.883 3.883 0 1 1 2.918-1.133 3.95 3.95 0 0 1-2.918 1.133zm-9.355-7.678a.813.813 0 0 1-.6-.244.829.829 0 0 1-.241-.606V217.7a1.743 1.743 0 0 1 1.7-1.7h4.023a.82.82 0 0 1 .606.246.83.83 0 0 1 .244.609.813.813 0 0 1-.244.6.829.829 0 0 1-.606.241H121.7v4.023a.82.82 0 0 1-.246.606.83.83 0 0 1-.609.248zm.855 13.826a1.743 1.743 0 0 1-1.7-1.7v-4.023a.82.82 0 0 1 .246-.606.83.83 0 0 1 .609-.244.813.813 0 0 1 .6.244.829.829 0 0 1 .241.606v4.023h4.023a.82.82 0 0 1 .606.246.83.83 0 0 1 .244.609.813.813 0 0 1-.244.6.829.829 0 0 1-.606.241zm12.977 0a.82.82 0 0 1-.606-.246.83.83 0 0 1-.244-.609.813.813 0 0 1 .244-.6.829.829 0 0 1 .606-.241h4.023v-4.023a.82.82 0 0 1 .246-.606.83.83 0 0 1 .609-.244.813.813 0 0 1 .6.244.829.829 0 0 1 .241.606v4.019a1.743 1.743 0 0 1-1.7 1.7zm4.868-13.827a.813.813 0 0 1-.6-.244.829.829 0 0 1-.241-.606V217.7h-4.023a.82.82 0 0 1-.606-.246.83.83 0 0 1-.244-.609.813.813 0 0 1 .244-.6.829.829 0 0 1 .606-.241h4.019a1.743 1.743 0 0 1 1.7 1.7v4.023a.82.82 0 0 1-.246.606.83.83 0 0 1-.609.24z"
                transform="translate(-118.2 -214.2)"
              />
            </g>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g data-name="btn_zoom out x2">
              <path data-name="사각형 6" style="fill: none" d="M0 0h24v24H0z" />
              <path
                data-name="패스 4"
                d="M-2.592-3.186h-3.227V-3.8l1.2-1.214q.356-.363.584-.62a2.158 2.158 0 0 0 .335-.485 1.125 1.125 0 0 0 .109-.492.616.616 0 0 0-.179-.489.712.712 0 0 0-.492-.162 1.277 1.277 0 0 0-.554.122 2.7 2.7 0 0 0-.535.347l-.455-.548a3.319 3.319 0 0 1 .657-.439 2.039 2.039 0 0 1 .934-.188 1.747 1.747 0 0 1 .782.162 1.21 1.21 0 0 1 .5.449 1.219 1.219 0 0 1 .183.657 1.619 1.619 0 0 1-.152.7 2.707 2.707 0 0 1-.439.64q-.287.32-.683.69l-.746.719v.04h2.178z"
                transform="translate(26.328 8.286)"
              />
              <path
                d="M1.4 3.6V2.2H0v-.817h1.4V0h.819v1.383H3.6V2.2H2.218v1.4z"
                transform="rotate(-45 10.95 -17.744)"
              />
              <path
                d="m138.933 235.4-5.167-5.167a7.349 7.349 0 0 1-2.332 1.35 8.612 8.612 0 1 1 5.166-5.283 8.461 8.461 0 0 1-1.4 2.5l5.2 5.133zm-10.367-5.333a6.234 6.234 0 0 0 4.6-1.917 6.569 6.569 0 0 0 0-9.233 6.234 6.234 0 0 0-4.6-1.917 6.533 6.533 0 1 0 0 13.067zm-3.4-5.567v-2h6.7v2z"
                transform="translate(-118.2 -213.2)"
              />
            </g>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g data-name="btn_zoom out x4">
              <path data-name="사각형 5" style="fill: none" d="M0 0h24v24H0z" />
              <path
                data-name="패스 3"
                d="M-2.552-4.16h-.614v1.01h-.818v-1.01h-2.1v-.62l2.119-3.1h.8v3.04h.614zm-1.432-.68V-5.9q0-.185.007-.386t.017-.376l.016-.267h-.026q-.059.132-.129.261a2.806 2.806 0 0 1-.155.254l-1.07 1.574z"
                transform="translate(26.433 8.25)"
              />
              <path
                d="M1.4 3.6V2.2H0v-.817h1.4V0h.819v1.383H3.6V2.2H2.218v1.4z"
                transform="rotate(-45 10.95 -17.744)"
              />
              <path
                d="m138.933 235.4-5.167-5.167a7.349 7.349 0 0 1-2.332 1.35 8.612 8.612 0 1 1 5.166-5.283 8.461 8.461 0 0 1-1.4 2.5l5.2 5.133zm-10.367-5.333a6.234 6.234 0 0 0 4.6-1.917 6.569 6.569 0 0 0 0-9.233 6.234 6.234 0 0 0-4.6-1.917 6.533 6.533 0 1 0 0 13.067zm-3.4-5.567v-2h6.7v2z"
                transform="translate(-118.2 -213.2)"
              />
            </g>
          </svg>
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
    <button class="tag_plus_wrap">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
      >
        <defs>
          <filter
            id="hwngtubh4a"
            x="0"
            y="0"
            width="44"
            height="44"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood flood-opacity=".161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g style="filter: url(#hwngtubh4a)">
          <circle
            data-name="타원 192"
            cx="13"
            cy="13"
            r="13"
            transform="translate(9 6)"
            style="fill: #fdb532"
          />
        </g>
        <g data-name="그룹 286" style="opacity: 0.995">
          <path
            data-name="선 22"
            transform="translate(22 13)"
            style="fill: none; stroke: #262831; stroke-width: 2px"
            d="M0 0v12"
          />
          <path
            data-name="선 23"
            transform="rotate(90 4.5 23.5)"
            style="fill: none; stroke: #262831; stroke-width: 2px"
            d="M0 0v12"
          />
        </g>
      </svg>
    </button>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
.outer {
  background-color: #101010;
  height: 100%;
  .tag_tab {
    height: 54px;
    display: flex;
    align-items: center;
    background-color: #262831;
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
    .modal_btn {
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
      border: solid 0.5px rgba(255, 255, 255, 0.5);
      background-color: #262831;
      width: 360px;
      height: 32px;
      margin-left: 20px;
      svg {
        margin: 0 10px;
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
    // height: 520px;
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
}
</style>
<script>
import Setting from "../components/SettingView.vue";
import Tagtab from "../components/TagtabView.vue";

export default {
  components: {
    Tagtab,
    Setting,
  },
};
</script>
