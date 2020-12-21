<template>
<div class="App">
  <email-address v-model="list" @onInput="handleInput" @onBlur="handleBlur"></email-address>
</div>
</template>

<script>
import EmailAddress from './src/email_address.vue'
export default {
name:'App',
components:{
  EmailAddress
},
data () {
    return {
      show: false,
      value: '',
      list:['sgfsdfsd','dfsdfs']
    }
  },
  methods: {
    onInput() {},
    onDelete() {},
    handleClick() {
      this.show = !this.show
    },
    handleInput(data,list){
      console.log(data);
      console.log(list);
    },
    handleBlur(currentEmail,emailList){
      if(/[\u4e00-\u9fa5]+/.test(currentEmail)){
        alert('不支持汉字')
        return false
      }
      console.log(emailList);
    }
  }
}
</script>
