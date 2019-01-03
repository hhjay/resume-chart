<template>
	<div class="about">
		<header class="header">
			<div class="cell-name">
				<h1>黄会杰</h1>
				<span>前端开发</span>
			</div>
			<div class="cell-info header__2">
				<p>(+86) 151-8716-9993</p>
				<p>
					<a href="mailto:sunhhjay@qq.com" target="_blank">sunhhjay@qq.com</a>
				</p>
			</div>
		</header>
		<div class="box skill">
			<h2 class="header__2">专业技能</h2>
			<div class="box-info info__2">
				<p>点亮技能：html、css、JavaScript、nodeJs、php...</p>
				<p>常用框架：Vue、Amaze ui、elementUi、echarts、highcharts...</p>
				<p>常用工具：git、svn、photoshop、markman</p>
			</div>
		</div>
		<div class="box edu">
			<h2 class="header__2">教育经历</h2>
			<div class="box-info info__2">
				<p class="p-header p-header">2012年09月 - 2016年07月</p>
				<p>
					<span class="active">
						计算机科学与技术 
					</span>
					<span class="border"></span>
					<b><a href="http://www.scuec.edu.cn/" target="_blank">中南民族大学</a> </b>
				</p>
			</div>
		</div>
		<div class="box work">
			<h2 class="header__2">工作经历</h2>

			<div class="box-contend">

				<div class="box-info info__2">
					<p class="header__3 p-header">
						<a href="http://datastory.com.cn/" target="_blank">广州数说故事科技有限公司</a>
						<span>前端开发</span>
						<span>2016年08月 - 至今</span>
					</p>
					<div class="info-item">
						<p class="info-item__header">
							<span class="active">
								<a href="http://radar.datastory.com.cn/#/login" target="_blank">数说雷达</a>
							</span>
						</p>
						<p>
							对品牌形象和产品体验进行分析活动数据、并构建用户画像的大数据商业应用
						</p>
						<div class="info__3">
							<p class="header__3 active p-header">美的观星台</p>
							<ul>
								<li>使用原生js写了一些常用组件，例如多选组件、日期组件</li>
								<li>对之前一些不兼容的代码进行优化重构，例如汉字匹配、echarts2和3的兼容</li>
							</ul>
						</div>
						<div class="info__3">
							<p class="header__3 active p-header">数说雷达2.0改版优化及通用ui的开发</p>
							<ul>
								<li>对原先的技术栈进行升级，vue1.x升级至2.x</li>
								<li>对原先的架构进行改进、功能优化，把一些可缓存的数据写入vuex、把组件之间相应解耦</li>
								<li>对原先一些常用功能进行封装处理，做成一个内部通用的组件工具</li>
							</ul>
						</div>
						<div class="info__3">
							<p class="header__3 active p-header">天河城百货大数据系统</p>
							<ul>
								<li>内部部门报表的采集系统及其他功能的优化，如对表格进行中文拼音排序</li>
							</ul>
						</div>
						<div class="info__3">
							<p class="header__3 active p-header">Intel大数据</p>
							<ul>
								<li>对原先系统进行兼容移动端至iPhone4</li>
							</ul>
						</div>
					</div>
					<div class="info-item">
						<p class="info-item__header">
							<span class="active">
								<a href="http://dc.datastory.com.cn/#/login" target="_blank">数据中心</a>
							</span>
						</p>
						<ul>
							<li>一个大数据API集成系统，可对需进行采集数据进行数据采集、数据清洗、打标签处理，对已采集数据进行数据（约八千万）提取和可视化处理</li>
							<li>自主搭建了前端架构，独立开发前端功能，完成了用户权限、数据筛选展示、etl、导出等模块</li>
							<li>系统使用模块化开发思想，实现组件的可复用和可维护性；拆分了业务的复杂度，高效的完成系统的开发</li>
						</ul>
					</div>
					<div class="info-item">
						<p class="info-item__header">
							<span class="active">
								<a href="http://brand.radar.datastory.com.cn/#/login" target="_blank">数说雷达品牌版</a>
							</span>
						</p>
						<ul>
							<li>对原系统进行抽离组件，对组件之间进行解耦，并保留更多的自定义接口，增加代码的可复用及可维护性</li>
							<li>对原先一些数据很多的图表进行优化，例如webgl处理、对数化处理等</li>
						</ul>
					</div>
					<div class="info-item">
						<p class="info-item__header">
							<span class="active">
								<a href="https://media-radar.datastory.com.cn/#/login" target="_blank">数说雷达媒介版</a>
							</span>
						</p>
						<ul>
							<li>封闭开发一个月，独立搭建架构，并开发了微博、微信、抖音、小红书榜单及对应的详情数据页，获得公司的内部优秀奖</li>
							<li>开发出一套专属的后台系统，对发布的消息实时推送到客户系统</li>
						</ul>
					</div>
				</div>

				<div class="box-info info__2">
					<p class="header__3 p-header">
						<a href="https://peisong.meituan.com/" target="_blank">美团网配送事业部</a>
						<span>前端实习</span>
						<span>2015年07月 - 2016年07月</span>
					</p>
					<div class="info-item">
						<ul>
							<li>requireJs、jQuery、highcharts、Amap API、FreeMaker</li>
							<li>骑手调度系统的优化和辅助功能开发，还有一些系统适配的兼容；</li>
							<li>骑手及商家配送信息的数据可视化；</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="box com">
			<h2 class="header__3">社区</h2>
			<div class="box-info info__2">
				<span><a href="">github</a></span>、
				<span>stackoverflow</span>、
				<span>知乎</span>、
				<span>v2ex</span>
			</div>
		</div>
	</div>
</template>