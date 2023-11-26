<template>
    <svg
      :class="['t-i-kho-n', className]"
      fill="none"
      height="31"
      viewBox="0 0 30 31"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="path"
        d="M14.8083 14.2127C17.6363 14.2127 19.9288 11.7027 19.9288 8.60637C19.9288 5.51006 17.6363 3 14.8083 3C11.9803 3 9.68774 5.51006 9.68774 8.60637C9.68774 11.7027 11.9803 14.2127 14.8083 14.2127Z"
        stroke="#45A29E"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
      />
      <path
        class="path"
        d="M8.36865 14.9584C8.36865 14.9584 4.60154 19.687 3.09297 25.1612C2.65333 26.7657 3.8257 28.3514 5.49806 28.3608L24.4802 28.4458C26.1525 28.4552 27.3422 26.8696 26.9111 25.265C25.4284 19.7247 21.7561 14.8074 21.7561 14.8074"
        stroke="#45A29E"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
      />
    </svg>
  </template>
  
  <script>
  export default {
    name: "TIKhoN",
    props: {
      className: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style>
  </style>
  