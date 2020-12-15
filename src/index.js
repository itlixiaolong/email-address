import EmailAddress from './email_address.vue'
const install = function (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  Vue.component(EmailAddress.name, EmailAddress)
}
export default install
