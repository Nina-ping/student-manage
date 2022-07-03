<template>
	<div class="home-container">
		<Title :title="titleText"></Title>
	</div>
</template>

<script>
import Title from "@/components/title/title.vue";
export default {
  components: {
    Title
  },
  data() {
    return {
      titleText: "学员管理"
    };
  }
};
</script>

<style>
</style>
