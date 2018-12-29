<template>
	<div class="g-contain home">
		<div class="h-col h-col__3">
			<g-card>
				<h2 slot="header">个人简介</h2>
				<self />
			</g-card>
		</div>
		
		<div class="h-col h-col__6">
			<g-card>
				<h2 slot="header">技能分布树结构</h2>

				<skill-box />
				<!-- http://echarts.baidu.com/examples/editor.html?c=tree-basic -->
			</g-card>
		</div>
		<div class="h-col h-col__3">
			<g-card>
				<h2 slot="header">其他技能</h2>
			</g-card>
		</div>
		<div class="h-col h-col__5">
			<g-card>
				<h2 slot="header">工作经历</h2>
				
				<word-exp />
				<!-- <content-placeholders :rounded="true">
					<content-placeholders-img />
					<content-placeholders-heading />
				</content-placeholders> -->
			</g-card>
		</div>
		<div class="h-col h-col__7">
			<g-card>
				<h2 slot="header">项目经历</h2>
				<project-exp />
			</g-card>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	import self from './components/self.vue';
	import wordExp from './components/word-exp.vue';
	import projectExp from './components/project-exp.vue';
	import skillBox from './components/skill.vue';
	// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
	export default Vue.extend({
		name: 'home',
		components: {
			self,
			wordExp,
			projectExp,
			skillBox
		}
	});
</script>