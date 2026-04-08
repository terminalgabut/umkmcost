// Mengambil router dan layout wrapper
import { router } from './router.js';
import Layout from '../components/layout.js';

const { createApp } = Vue;
const { createPinia } = Pinia;

// 1. Inisialisasi Aplikasi
const app = createApp({
    components: { 
        'layout-wrapper': Layout 
    },
    template: `<layout-wrapper />`
});

// 2. Pasang Pinia Terlebih Dahulu
// Penting: Pinia harus di-use sebelum router jika router menggunakan store
const pinia = createPinia();
app.use(pinia);

// 3. Pasang Router
app.use(router);

// 4. Global Error Handling (Sangat berguna untuk debug di HP via Remote Console)
app.config.errorHandler = (err, vm, info) => {
    console.error('%c Vue Error ', 'background: #EF4444; color: white; border-radius: 3px;', err);
    console.log('Error Info:', info);
};

// 5. Mount ke DOM
try {
    app.mount('#app');
    
    // Log cantik untuk memastikan sistem OK
    console.log(
        '%c UMKM PRO %c System Ready ',
        'background: #4F46E5; color: #fff; padding: 2px 5px; border-radius: 4px 0 0 4px; font-weight: bold;',
        'background: #10B981; color: #fff; padding: 2px 5px; border-radius: 0 4px 4px 0; font-weight: bold;'
    );
} catch (err) {
    console.error('Critical Mount Error:', err);
}
