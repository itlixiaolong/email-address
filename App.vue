<template>
<div class="App">
  <email-address v-model="list"></email-address>
</div>
</template>

<script>
import EmailAddress from './src/email_address.vue'
import '@fortawesome/fontawesome-free/js/all'
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
    }
  }
}
</script>
