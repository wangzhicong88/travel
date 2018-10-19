<template>
 <div class="guessYouPro">
     <div class="title">
        <span class="iconfont">&#xe86f;</span>
        <span class="name">猜你喜欢</span>
     </div>
     <div class="contents">
        
            <router-link 
                tag="div"
                class="items" 
                v-for="(item,index) in popGuessYou"
                :key="item.id"
                :to="/detail/ + item.id"
            >
                <img class="item-img" :src="item.imgUrl" >
                <div class="item-desc">
                    <div class="item-tit">[{{item.teacherName}}] {{item.couresName}}  </div>
                    <div class="item-text flex">
                        <span class="item-starlevel iconfont">
                            &#xe86d;
                            &#xe86d;
                            &#xe86d;
                            &#xe86d;
                        </span>
                        <span class="item-comment-num">
                            {{item.commentNum}}条评论
                        </span>
                    </div>
                    <div class="item-price">
                        ¥
                        <em>{{item.price}}</em>
                        起
                    </div>
                </div>
            </router-link>
       
     </div>
 </div>
</template>

<script>
 export default {
    props:{
        popGuessYou: Array
    },
    data () {
        return {
            
        }
    },
   components: {

   }
 }
</script>

<style lang='less' scoped>
    @import '~style/varibles.less';
    @import '~style/mixins.less';
    .guessYouPro {
        background: @whiteTextColor;
        overflow: hidden;
        .title {
            padding: .2rem .1rem .1rem .1rem ;
            .iconfont {
                color: @yellowColor
            }
        }
        .items {
            display: flex;
            padding: .15rem;
            .item-img {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: .1rem;
                margin: .1rem;
            }
            .item-desc {
                min-width: 0;
                padding: .1rem;
                .item-flex;
            }
            .item-tit {
                font-size: 0.32rem;
                padding: .15rem 0;
                .ellipsis;
            }
            .item-starlevel {
                font-size: 0.2rem;
                margin-right: .2rem;
                color: @yellowColor;
            }
            .item-price,
            .item-comment-num {
                color: @grayTextColor;
                font-size: .24rem;
            }
            .item-price {
                padding-top: 0.15rem;
                em {
                    color: @orangeColor;
                    font-size: 0.32rem;
                }
            }
           
        }
    }
 
</style>
