<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市关键字">
        </div>
        <div class="search-contents" ref="searchBd" v-show="keyword">
            <ul>
                <li v-for="item in list" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
                <li class="noDateText" v-show="hasNoData">没有搜索到</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import { mapMutations } from 'vuex'
    export default {
        name:'ctiySearch',
        props: {
            cities: Object
        },
        data(){
            return {
                keyword:'',
                list:[],
                itemr: null
            }
        },
        methods:{
            handleCity (city) {
                this.changeCity(city);
                this.$router.push('/') 
            },
            ...mapMutations(['changeCity'])
        },
        mounted () {
            //滚动
            this.scroll = new BScroll(this.$refs.searchBd)  
        },
        watch:{
            keyword (){
                if(this.itemr){
                    clearInterval(this.itemr)
                }
                // 输入框无内容时数组空
                if(!this.keyword){
                    this.list = []
                    return
                }
                this.itemr = setTimeout(()=>{
                    const result = [];
                    for(let i in this.cities){
                        this.cities[i].forEach((value)=>{
                            if(value.spell.indexOf(this.keyword) > -1|| value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result;
                    console.log(this.list)
                },100)
            }
        },
        computed: {
            // 没有搜索到时
            hasNoData () {
                return !this.list.length
            }
        }
    }
</script>

<style lang='less' scoped>
   @import '~style/varibles.less';
    .search {
        background: @themeColor;
        padding:0 .1rem .1rem;
        .search-input{
            border:0;
            height: .75rem;
            line-height: .75rem;
            width: 100%;
            border-radius: .1rem;
            text-indent: .15rem;
        }
    }
    .search-contents {
        position: absolute;
        overflow: hidden;
        z-index: 9;
        top: 1.85rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,255,255,.9);
        width: 100%;
        li {
            text-align: center;
            padding: .25rem .15rem;
            border-bottom: 1px solid #dcdcdc;
        }
    }
 
</style>
