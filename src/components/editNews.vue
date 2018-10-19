<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <fieldset>
      <legend>学员录入系统</legend>
      <ul class="form">
        <li><input type="text" placeholder="姓名" v-model="formSundent.name"></li>
        <li>
            <input type="radio" id="man" value="男" v-model="formSundent.sex"><label for="man">男</label>
            <input type="radio" id="woman" value="女" v-model="formSundent.sex"><label for="woman">女</label>
        </li>
        <li><input type="number" placeholder="年龄" v-model="formSundent.age"></li>
        <li><input type="tel" placeholder="手机号" v-model="formSundent.phone"></li>
        <li><input type="submit" value="提交" class="btn" @click="addStudent"></li>
      </ul>
    </fieldset>
    
    <table>
      <thead>
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>手机号</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in sundetlist">
          <td>{{index}} - {{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.age}}</td>
          <td>{{item.phone}}</td>
          <td>
            <span class="btn green" @click="editStudent(index)">修改</span>
            <span class="btn" @click="delStudent(index)">删除</span>
          </td>
        </tr>
      </tbody>
    </table>

    <!--修改框-->
    <div class="model" v-if="isModel">
      <div class="box">
        <ul class="form">
          <li><input type="text" placeholder="姓名" v-model="formSundent.name"></li>
          <li>
              <input type="radio" id="man" value="男" v-model="formSundent.sex"><label for="man">男</label>
              <input type="radio" id="woman" value="女" v-model="formSundent.sex"><label for="woman">女</label>
          </li>
          <li><input type="number" placeholder="年龄" v-model="formSundent.age"></li>
          <li><input type="tel" placeholder="手机号" v-model="formSundent.phone"></li>
          <li>
            <input type="submit" value="确定修改" class="btn" @click="endEditStudent">
            <input type="submit" value="关闭" class="btn grey" @click="clearModel" />
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
  
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome studen system',
      sundetlist:[
        {name: '王泽在', sex: '男', age: '15',phone: '13520256121'}
      ],
      formSundent:{name: '', sex: '男', age: '',phone: ''},
      isModel:false,
      stund:[]
    }
  },
  methods:{
    //1、添加一条
    addStudent(){
      
      //1输入姓名
      if(this.formSundent.name == ''){
        alert("请输入姓名");
        return
      }

      // 1-2 手机长度
      if(this.formSundent.phone.length < 11 || this.formSundent.phone.length >11){
        alert('手机号不能大于、小于11位');
        return false;
      }
      this.sundetlist.unshift(this.formSundent);
      this.formSundent={name: '', sex: '男', age: '',phone: ''}
    },

    //2、删除一条
    delStudent(index){
      this.sundetlist.splice(index,1)
    },

    //3、修改一条
    editStudent(index){
      this.isModel = !this.isModel;
      this.formSundent = this.sundetlist[index];
      this.stund = index;
    },

    // 4、确定个性
    endEditStudent(){
      this.sundetlist[this.stund] = this.formSundent;
      this.isModel = !this.isModel;
    },

    //5、关闭弹窗户
    clearModel(){
      this.isModel = false
    }
  }
  
  
}
</script>

<style lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin:  10px 0;
  text-align: left;
  input[type=text],
  input[type=number],
  input[type=tel],
  {
    height: 40px;
    padding-left: 15px;
    width: 70%;
    font-size: 16px;
  }
  
}
a {
  color: #42b983;
}
.btn.green{
    background: #05c936da;
  }
.btn.grey{
  background: #ccc;
}
.btn {
    background: #f5c800;
    border:0;
    padding: 10px 30px;
    color: #fff;
    cursor: pointer;
  }

table{
  width: 100%;
  margin: 20px 0;
  td {
    border:1px solid #ddd;
    height: 50px;
  }
}

.model{
  background: rgba(0, 0, 0, .8);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .box {
    width: 60%;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 30%;
    margin-left: -30%;
  }
}
</style>