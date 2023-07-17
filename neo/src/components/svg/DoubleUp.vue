<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    style="stroke: transparent"
  >
    <defs>
      <filter
        id="fatzovygda"
        x="11.5"
        y="10.55"
        width="17"
        height="10.95"
        filterUnits="userSpaceOnUse"
      >
        <feOffset />
        <feGaussianBlur stdDeviation=".5" result="blur" />
        <feFlood flood-opacity=".161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="tr2jdpts8b"
        x="11.5"
        y="16.55"
        width="17"
        height="10.95"
        filterUnits="userSpaceOnUse"
      >
        <feOffset />
        <feGaussianBlur stdDeviation=".5" result="blur-2" />
        <feFlood flood-opacity=".161" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <path data-name="사각형 1020" style="fill: none" d="M0 0h40v40H0z" />
    <g style="filter: url(#fatzovygda)">
      <path
        data-name="합치기 10"
        d="M.278 13.721a.952.952 0 0 1 0-1.345L5.655 7 .278 1.623A.951.951 0 0 1 1.623.278l6.049 6.049a.953.953 0 0 1 0 1.345l-6.049 6.049a.952.952 0 0 1-1.345 0z"
        transform="rotate(-90 16.5 3.5)"
      />
    </g>
    <g style="filter: url(#tr2jdpts8b)">
      <path
        data-name="합치기 11"
        d="M.278 13.721a.952.952 0 0 1 0-1.345L5.655 7 .278 1.623A.951.951 0 0 1 1.623.278l6.049 6.049a.953.953 0 0 1 0 1.345l-6.049 6.049a.952.952 0 0 1-1.345 0z"
        transform="rotate(-90 19.5 6.5)"
      />
    </g>
  </svg>
</template>
