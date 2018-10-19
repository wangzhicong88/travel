<template>
   <div class="list">
        <div 
            class="item" 
            v-for="(item, index) in list"
            :key="index"
        >
           <div class="item-title">
               <span class="item-title-icon"></span>
               {{item.title}}
           </div>
           <div class="subItem" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
       </div>
   </div>
</template>

<script>
   export default {
       name: 'detailList',
       props:{
           list: Array
       },
       data () {
           return {

           }
       },
       components: {

       },
       methods: {

       }
   }
</script>

<style lang='less' scoped>
    .item-title {
        padding: .2rem;
        border-bottom: 1px solid #dcdcdd;
    }
    .item-title-icon {
        display: inline-block;
        position: relative;
        width: .36rem;
        height: .36rem;
        top: .06rem;
        left: .06rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }

    .subItem {
        margin-left: .3rem;
    }
   
</style>
