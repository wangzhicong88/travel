<template>
   <div class="gallaryDiog" @click="hanleGallaryClose">
       <div class="wrapper">
           <swiper :options="swiperOptions">
                <swiper-slide 
                    v-for="(item, index) in imgS"
                    :key="index"
                    
                ><img class="gallaryImg" :src="item"></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper> 
       </div>
   </div>
</template>
<script>
    name:'commonGallary';
    export default {
        props:{
            imgS:{
                type: Array,
                default () {
                    return []
                }
            }
        },
        data () {
            return {
                swiperOptions:{
                    pagination:'.swiper-pagination',
                    paginationType: 'fraction',
                    observer:true,
                    observeParents:true
                }
            }
        },
        methods:{
            hanleGallaryClose () {
                this.$emit('close')
            }
        }
    }
</script>

<style lang='less' scoped>
    .gallaryDiog /deep/ .swiper-container {
        overflow: inherit;
        position: initial
        
    }
    .gallaryDiog /deep/ .swiper-pagination {
        color: #fff;
        bottom: 20px;
    }
    .gallaryDiog {
        background:rgba(0,0,0,.8);
        width: 100%;
        height: 100%;
        z-index: 99;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .wrapper {
            width: 100%;
            height: 0;
            padding-bottom: 100%;position: relative;
        }
        .gallaryImg {
            width: 100%;
        }
    }
</style>
