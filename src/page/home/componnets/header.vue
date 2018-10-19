<template>
	<div id="header">
		<div class="hdLeft"><span class="back iconfont">&#xe624;</span></div>
		<div class="hdCon ">
			<div class="search iconfont">
				<input type="text" placeholder="输入关键字" />
			</div>
		</div>
		
		<router-link tag="div" to="city" class="hdRight cityIcon">
			<span>{{this.city}}</span>
			<em class="iconfont">&#xe64a;</em>
		</router-link>
		
	</div>
</template>

<script >
	import { mapState } from 'vuex'
	export default{
		name:'homeHeader',
		computed: {
			...mapState (['city'])
		}
	}
</script>

<style lang="less" scoped>
	@import '~style/varibles.less';
	#header {
		background: @themeColor;
		height: @headerHeight;
		display: flex;
		line-height: @headerHeight;
		color: @whiteTextColor;
		.back {
			display: block;
			padding: 0 .1rem;
		}
		.search {
			width: 100%;
			background:@whiteTextColor;
			border-radius: .05rem;
			height: .65rem;
			display: flex;
			align-items: center;
			&:before{
				content: '\e632';
				font-size: 16px;
				color:#ccc;
				margin: 0 .1rem;
			}
			input {
				flex: 1;
				display: block;
				height: .8rem;
				background: none;
			}
		}
		.cityIcon {
			padding: 0 .1rem;
		}
		.heLeft {
			float: left;
		}
		.hdCon {
			display: flex;
			align-items: center;
			flex: 1;
		}
		.hdRight {
			float: right;
		}
	}
</style>