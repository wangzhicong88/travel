<template>
   <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="this.bannerImg" />
            <div class="banner-info">
            <div class="banner-tittle">
                {{this.sightName}}
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe600;</span>
                {{this.gallaryImgs.length}}
            </div>
            </div>
        </div>
        <fade-animation>
            <gallary-list 
                :imgS="gallaryImgs" 
                v-show="shorGallary"
                @close='hanleGallaryCloses'
            ></gallary-list>
        </fade-animation>
   </div>
</template>
<script>
    import gallaryList from 'common/gallary/gallary'
    import fadeAnimation from 'common/fade/fadeAnimate'
    export default {
        props:{
            sightName: String,
            bannerImg: String,
            gallaryImgs: Array
        },
        data () {
            return {
                shorGallary: false,
            }
        },
        components: {
            gallaryList,
            fadeAnimation
        },
        methods:{
            handleBannerClick () {
                this.shorGallary = true;
            },
            hanleGallaryCloses () {
                this.shorGallary = false;
            }
        }
    }
</script>

<style lang='less' scoped>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img {
        width: 100%
    }
      
    .banner-info {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    }
      
    .banner-tittle {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
    }
        
    .banner-number {
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);
        font-size: .24rem;
    }
    .banner-icon {
        font-size: .24rem
    }
}
</style>
