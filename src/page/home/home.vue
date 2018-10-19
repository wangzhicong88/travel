<template>
	<div class="home-page">
		<home-header></home-header>
		<home-swiper :popSwiperList='swiperList'></home-swiper>
		<home-icon :popHomeIcon="iconList"></home-icon>
		<home-guessyou :popGuessYou="guessyouList"></home-guessyou>
	</div>
</template>

<script>
	import homeHeader from './componnets/header'
	import homeSwiper from './componnets/swiper'
	import homeIcon from './componnets/icon'
	import homeGuessyou from './componnets/guessYouPro'
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default{
		name:'home',
		data(){
			return {
				lastCity:'',
				swiperList :[],
				iconList:[],
				guessyouList:[]
			}
		},
		components: {
			homeHeader,
			homeSwiper,
			homeIcon,
			homeGuessyou
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			getAjaxData(){
				axios.get('/api/index.json?city=' + this.city).then((res)=>{
					res = res.data;
					if(res.ret){
						const data = res.data;
						this.swiperList = data.swiperList;
						this.iconList = data.iconList;
						this.guessyouList = data.guessYouList;
						console.log(data)
					}
				})
			}
		},
		mounted() {
			this.lastCity = this.city;
			this.getAjaxData();
		},
		activated(){
			if(this.lastCity !== this.city){
				this.lastCity = this.city;
				this.getAjaxData()
				console.log('activated')
			}
		}
	}
</script>

<style lang="less" >
	.home-page {
		background: #f5f5f5;
	}
</style>