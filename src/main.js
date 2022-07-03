import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/less/common.less';
import "@/assets/iconfont/iconfont.css";

console.log("当前是dev分支");

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');