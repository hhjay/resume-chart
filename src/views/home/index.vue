<template>
	<div class="g-contain home">
		<div class="h-col h-col__3">
			<g-card>
				<h3 slot="header">个人简介</h3>
				<self />
			</g-card>
		</div>
		
		<div class="h-col h-col__6">
			<g-card>
				<h3 slot="header">技能分布环图</h3>
				
			</g-card>
		</div>
		<div class="h-col h-col__3">
			<g-card>
				<h3 slot="header">不知道写什么好</h3>
			</g-card>
		</div>
		<div class="h-col h-col__4">
			<g-card>
				<h3 slot="header">点赞数</h3>
			</g-card>
		</div>
		<div class="h-col h-col__4">
			<g-card>
				<h3 slot="header">工作经验</h3>
			</g-card>
		</div>
		<div class="h-col h-col__4">
			<g-card>
				<h3 slot="header">求职意向</h3>
			</g-card>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	import self from './components/self.vue';
	// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
	export default Vue.extend({
		name: 'home',
		components: {
			self
		}
	});
</script>