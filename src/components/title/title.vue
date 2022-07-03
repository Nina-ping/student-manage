<template>
<!--title-->
	<div class="title-container">
		<van-icon name="cross"  class="icon-close pull-left"/>
		<span class="title-text">{{title}}</span>
	</div>
</template>

<script>
export default {
  props: {
    title: ""
  }
};
</script>

<style lang="less" scoped>
.title-container {
  height: 11.7333vw;
  line-height: 11.7333vw;
  text-align: center;
  background: #ececec;
  .icon-close {
    padding-left: 4vw;
    padding-top: 2.6667vw;
  }
  .title-text {
    font-size: 4.5333vw;
    color: #333;
  }
}
</style>
