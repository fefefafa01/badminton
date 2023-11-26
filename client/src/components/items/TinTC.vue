<template>
    <div :class="['TIN-t-c', className]">
      <div v-if="hasDiv" :class="['text-wrapper', divClassName]">{{ text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TinTC",
    props: {
      className: {
        type: String,
        default: "",
      },
      divClassName: {
        type: String,
        default: "",
      },
      text: {
        type: String,
        default: "TIN TỨC",
      },
      hasDiv: {
        type: Boolean,
        default: true,
      },
    },
  };
  </script>
  
  <style>
  .TIN-t-c {
    height: 13px;
    position: relative;
    width: 75px;
  }
  
  .TIN-t-c .text-wrapper {
    color: #000000cc;
    font-family: "Comfortaa", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: -1px;
    white-space: nowrap;
    width: 75px;
  }
  </style>
  