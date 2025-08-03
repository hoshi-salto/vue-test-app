import { createApp } from 'vue';
import AppMain from './AppMain.vue';
import router from './router'; // 上で作成したルーターをインポート

const app = createApp(AppMain);
app.use(router); // Vueアプリケーションにルーターを適用
app.mount('#app');