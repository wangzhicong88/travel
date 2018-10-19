<template>
 <div>
    <div class="cityHeader">
        <router-link tag="span" to="/" class="cityBack iconfont">&#xe624;</router-link>
        <h4>{{cityName}}</h4>
    </div>
 </div>
</template>
<script>
 export default {
    data () {
        return {
            cityName:'选择城市'
        }
    }
 }
</script>
<style lang='less' scoped>
    @import '~style/varibles.less';
    .cityHeader {
        background: @themeColor;
        height: @headerHeight;
        line-height: @headerHeight;
        position: relative;
        color: @whiteTextColor;
        h4 {
            text-align: center;
        }
        .cityBack {
            position: absolute;
            left: 0;
            top: 0;
            display: block;
			padding: 0 .1rem;
            text-align: center;
        }
    }
</style>