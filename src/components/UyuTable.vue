<template>
  <div class="uyu-table">
      uyu-table
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
@import "src/styles/mixin.scss";
@include b(table) {
  // position属性用于指定一个元素在文档中的定位方式 left bottom top right 决定改元素的最终位置
  position: relative;
  // 为使 overflow 有效果，块级容器必须有一个指定的高度（height或者max-height）或者将white-space设置为nowrap
  // 指定除visible(默认值)以外的值将创建一个新的 BFC 这在技术层面上是必须的——如果一个浮动元素和滚动条相交，它会在每个滚动步骤后强行重新包装内容，从而导致慢滚动体验
  overflow: hidden;
  // 如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值
  box-sizing: border-box;
  // flex-grow: 1; flex-shrink: 1; flex-basis: 0%;
  flex: 1;
  // 可以被继承
  color: #606266;
  // 为使 overflow 有效果
  width: 100%;
  max-width: 100%;
}

// absolute 脱离文档流
.hidden-columns {
  visibility: hidden;
  position: absolute;
  z-index: -1;
}
</style>
