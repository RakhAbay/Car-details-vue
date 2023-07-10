import { createApp } from 'vue'
import App from './App.vue'
import BootsrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// @ts-ignore
import JsonExcel from 'vue-json-excel3'


createApp(App)
.use(BootsrapVueNext)
.component('downloadExcel', JsonExcel)
.mount('#app')
