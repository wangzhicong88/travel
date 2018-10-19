<template>
    <div class="list" ref="wrapper">
        <div>
            <!--当前城市-->
        <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <!--热门城市-->
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper" 
                        v-for="(item,index) in hot"
                        :key="item.id"
                        @click="handleCitys(item.name)"
                    >
                        <div class="button" >{{item.name}}</div>
                    </div>
                </div>
            </div>
    
            <!--城市列表-->
            <div class="area"
                v-for="(item,key) in cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                        v-for="cate in item"
                        :key="cate.id"
                        @click="handleCitys(cate.name)"
                    >
                       {{cate.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScrolls from 'better-scroll'
    import { mapState, mapMutations } from 'vuex'
    export default {
        name:'ctiyList',
        props: {
            hot: Array,
            cities: Object,
            letters: String
        },
        methods: {
            
            handleCitys (city) {
                alert(city);
                this.changeCity(city);
                this.$router.push('/') 
            },
            ...mapMutations(['changeCity'])
        },
        computed: {
            ...mapState({
                currentCity: 'city'
            })
        },
        watch: {
            letters(){
                if(this.letters){
                    const element = this.$refs[this.letters][0]
                    this.scroll.scrollToElement(element)
                }
                console.log(this.letters)
            }
        },
        mounted () {
            this.scroll = new BScrolls(this.$refs.wrapper);
            console.log(this.letter)
        }
    }
</script>

<style lang='less' scoped>
    @import '~style/varibles.less';
    .border-topbottom {
        &:before {
            border-color: #ccc;
        }
        &:after {border-color: #ccc}
    }
    .border-bottom {
        &:before {border-color: #ccc}
    }
    .list {
        position: absolute;
        top: 1.84rem;
        left: 0;
        right: 0;
        bottom: 0; 
        overflow: hidden;
        z-index: 999;
        .title {
            line-height: .54rem;
            background: #eee;
            padding-left: .2rem;
            color: #666;
            font-size: .26rem;
        }
        .button-list {
            overflow: hidden;
            padding: .1rem .6rem .1rem .1rem;
            .button-wrapper {
                float:left;
                width: 33.33%;
            }
            .button {
                margin: .1rem;
                padding: .1rem 0;
                text-align: center;
                border: .02rem solid #ccc;
                border-radius: .06rem;
            }
        }
        .item-list {
            .item {
                line-height: .76rem;
                padding-left: .2rem;
            }
        }
    }
</style>