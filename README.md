### 介绍 
A  can be inserted, edited, saved based on vue2.0, similar to QQ mailbox, 163 mailbox email address component(一个可以编辑，插入，删除的邮件地址组件，类似于qq邮箱，163邮箱，双击可以编辑，失焦自动保存)
### 安装
```
npm i vue-email-address -S
```
or
```
yarn add vue-email-address 
```
### 使用
- 在main.js中
```
import Vue from 'vue'

import EmailAddress from 'vue-email-address'
import 'vue-email-address/dist/EmailAddress.css'

Vue.use(EmailAddress)

```
- 在组件中
```
<template>
  <div class="home">
    <email-address
      v-model="list"
      @onInput="handleInput"
      @onBlur="handleBlur"
    />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      list:['17364@163.com','4653453@qq.com']
    }
  },
   methods: {
    handleInput(currentEmail,emailList){
      console.log(currentEmail);
      console.log(emailList);
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
<style lang="scss">

</style>

```
|props|说明|type|默认值|
|--|--|--|--|
|v-model的值|传入邮件组件的初始值|Array|[]|
|onInput|邮件组件更新输入或者插入新值时触发的事件|Function(当前的邮件数据，索引，邮件列表)|null|
|onBlur|邮件组件内部失焦时触发的事件|Function(当前的邮件数据，邮件列表)|null|

- 注：对于onBlur事件，可以自定义校验规则和相关逻辑，但必须显示的指定返回值返回false，则终止更新列表数据，返回true，则正常更新列表值
- 效果
![result](http://itlixiaolong.xyz/my_npm_packages_imgs/email_address.jpg)