### 介绍 
A can insert, edit, save based on vue2.0, similar to QQ mailbox, 163 mailbox email address component
### 安装
```
npm i email-address -S
```
or
```
yarn add email-address 
```
### 使用
- 在main.js中
```
import Vue from 'vue'

import EmailAddress from 'email-address'
import 'email-address/dist/EmailAddress.css'

Vue.use(EmailAddress)

```
- 在组件中
```
<template>
  <div class="home">
    <email-address
      v-model="list"
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
}
</script>
<style lang="scss">

</style>

```
- 效果
![avatar](http://itlixiaolong.xyz/my_npm_packages_imgs/email_address.jpg)