<template>
 <div>
    <detail-header></detail-header>
    <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <datail-list :list=list></datail-list>
    <main></main>
 </div>
</template>

<script>
    import detailBanner from './componnets/detailBanner'
    import detailHeader from './componnets/header'
    import datailList from './componnets/list'
    import axios from 'axios'
    export default {
        name:'Detail',
        data () {
            return {
                sightName:'',
                bannerImg:'',
                gallaryImgs:[],
                list: []
            }
        },
        components:{
            detailBanner,
            detailHeader,
            datailList
        },
        mounted(){
            this.getDatailInfo()
        },
        methods:{
            getDatailInfo() {
                axios.get('/api/detail.json', {
                    params:{
                        id: this.$route.params.id
                    }
                }).then(this.handleGetDataSucc)
            },
            handleGetDataSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                   let data = res.data;
                   
                   this.sightName = data.sightName;
                   this.bannerImg = data.bannerImg;
                   this.gallaryImgs = data.gallaryImgs;
                   this.list = data.categoryList
                }
            }
        }
    }
</script>

<style lang='less' scoped>
    main{
        min-height: 330rem;
    }
</style>