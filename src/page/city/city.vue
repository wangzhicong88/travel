<template>
 <div class="city">
     <city-header></city-header>
     <ctiy-search :cities="cities"></ctiy-search>
     <ctiy-list
        :cities="cities"
        :hot="hotCities"
        :letters="letter"
     ></ctiy-list>
     <city-alphabet
        :cities="cities"
        @change="handLeteerClick"
     ></city-alphabet>
 </div>
</template>

<script>
    import cityHeader from './components/header';
    import ctiySearch from './components/search';
    import ctiyList from './components/list';
    import cityAlphabet from './components/alphabet'
    import axios from 'axios'
    export default {
        name:'city',
        data () {
            return {
                cities:{},
                hotCities:[],
                letter:''
            }
        },
        components: {
            cityHeader,
            ctiySearch,
            ctiyList,
            cityAlphabet
        },
        methods:{
            getCityData(){
                axios.get('/api/city.json')
                .then((res)=>{
                    res = res.data;
                    if(res.ret){
                        let data = res.data;
                        console.log(data)
                        this.cities = data.cities;
                        this.hotCities = data.hotCities
                    }
                })
            },
            handLeteerClick (letter) {
                this.letter = letter;
                //console.log(letter)
            }
        },
        mounted() {
            this.getCityData();
        },
    }
</script>

