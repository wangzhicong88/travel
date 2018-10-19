<template>
    <ul class="list">
        <li class="item"
            v-for="item in letters"
            @click="handLeteerClick"
            @touchstart.prevent="handTouchStart"
            @touchmove="handTouchMove"
            @touchend="handTouchEnd"
            :ref="item"
        >{{item}}
        </li>
    </ul>
</template>

<script>
    export default{
        name:'CityAlphabet',
        props: {
            cities: Object
        },
        data () {
            return {
                TouchStart: false,
                timer: null
            }
        },
        computed:{
            letters () {
                const letters = [];
                for(let i in this.cities) {
                    letters.push(i);
                }
                return letters;
            }
        },
        methods: {
            handLeteerClick (e) {
                this.$emit('change', e.target.innerText)
            },

            // 滑动开始
            handTouchStart () {
                this.TouchStart = true
            },
            handTouchMove (e) {
                if(this.TouchStart){
                     if(this.timer){
                        clearInterval(this.timer);
                    }
                    this.timer = setTimeout(()=>{
                         // 获取第1个字线离顶部的距离
                        const startY = this.$refs['A'][0].offsetTop;
                        const touchY = e.touches[0].clientY - 85;
                        const index = Math.floor((touchY - startY) / 25)
                        if(index >= 0 &&  index < this.letters.length){
                            this.$emit('change', this.letters[index])
                            console.log(index)
                        }
                    },16)
                }
            },
            handTouchEnd () {
                this.TouchStart = false
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~style/varibles.less';
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        z-index: 9999;
    }
    .item {
        line-height: .5rem;
        text-align: center;
        color: @themeColor;
    }
</style>