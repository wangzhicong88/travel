<template>
    <div class="swiperWarp">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide 
                v-for="(item,index) in popSwiperList"
                :key="item.id">
                <img :src="item.imgUrl" ></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'homeSwiper',
        props:{
            popSwiperList: Array
        },
        data(){
            return {
                swiperOption: {
                    pagination:'.swiper-pagination',
                    loop: true,
                    autoplay: 3000,
                }
            }
        },
        computed: {
            showSwiper(){
                return this.popSwiperList.length;
            }
        }
    }
</script>

<style lang="less" >
    .swiperWarp .swiper-pagination-bullet-active {
        background: #fff;
    }
    .swiperWarp {
        background: #dcdcdc;
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 37%;
        img {
            width: 100%
        }
    }
</style>