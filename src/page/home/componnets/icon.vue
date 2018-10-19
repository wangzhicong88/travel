<template>
	<div class="icons">
		<swiper  :options="swiperOptionIcon">
			<swiper-slide  v-for="(page,index) in pages" :key="index">
				<div class="icon" 
					v-for="(item,index) in page"
					@click="clickIcon(item)"
					>
					<div class="icon-img">
						<img class="icon-img-content" :src="item.iconUrl" >
					</div>
					<div class="icon-desc">{{item.name}}</div>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
export default {
	name:'homeIcon',
	props: {
		popHomeIcon: Array
	},
	data(){
		return{
			swiperOptionIcon:{
				pagination:'.swiper-pagination',
				autoplay: false
			}
		}
	},
	methods:{
		clickIcon(id){
			console.log(id.name)
		}
	},
	computed:{
		pages () {
			const pages = []
			this.popHomeIcon.forEach((item,index) => {
				const page = Math.floor(index / 8);
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			});
			return pages
		}
		
	}
}
</script>
<style lang="less" scoped>
	@import '~style/varibles.less';
	@import '~style/mixins.less';
	.icons /deep/ .swiper-container-horizontal > .swiper-pagination-bullets {
		bottom: 0px;
		
	}
	.icons /deep/ .swiper-container-horizontal .swiper-pagination-bullet-active {
		background: @themeColor
	}
	.icons /deep/ .swiper-wrapper {
		padding-bottom: 55%;
		height: 0;
	}
	.icons {
		padding: 0.2rem 0;
		margin: .2rem 0;
		background: @whiteTextColor;
		.icon {
			width: 25%;
			float: left;
			overflow: hidden;
			height: 0;
			padding-bottom: 25%;
			position: relative;
			text-align: center;
		}
		.icon-img {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: .6rem;
		}
		.icon-img-content {
			height: 100%;
		}
		.icon-desc {
			color: @grayTextColor;
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			line-height: .44rem;
			height: .44rem;
			.ellipsis;
		}
	}
</style>