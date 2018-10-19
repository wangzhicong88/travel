<template>
    <div>
        <router-link 
            tag="div" 
            to="/" 
            class="header-abs iconfont"
            v-show="headerShow"
        >
            &#xe624;
        </router-link>
        <div 
            class="header-flex" 
            v-show="!headerShow"
            :style="opacityStyle"
        >
            <router-link tag="div" to="/" class="hdLeft"><span class="back iconfont">&#xe624;</span></router-link>
            <div class="hdCon">
                <h4>详情</h4>
            </div>
        </div>
    </div>
</template>
<script>
    name:'detailHader'
    export default {
        data () {
            return {
                headerShow: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScrolls() {
                const top = document.documentElement.scrollTop;
                console.log(top)
                if (top > 60) {
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = {opacity}
                    this.headerShow = false;
                } else {
                     this.headerShow = true;
                }
            }
        },
        mounted () {
            window.addEventListener('scroll' , this.handleScrolls)
        },
        deactivated () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang='less' scoped>
    @import '~style/varibles';
    .header-abs {
        width: .7rem;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        border-radius: 50%;
        background: rgba(0,0,0,.8);
        color: #fff;
        position: fixed;
        left: .2rem;
        top: .2rem;
        z-index: 99;
    }
    .header-flex {
        background: @themeColor;
		height: @headerHeight;
		display: flex;
		line-height: @headerHeight;
        color: @whiteTextColor;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 99;
		.back {
			display: block;
			padding: 0 .1rem;
        }
        .hdCon {
            text-align: center;
            width: 100%;
            margin-left: -.3rem;
        }
    }
</style>
