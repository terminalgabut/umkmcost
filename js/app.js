// js/app.js
import { router } from './router.js';
import Layout from '../components/layout.js';

const { createApp } = Vue;

// Cara aman mengambil Pinia dari CDN IIFE
const createPinia = window.Pinia ? window.Pinia.createPinia : null;

if (!createPinia) {
    console.error('CRITICAL: Pinia gagal dimuat dari CDN!');
}

const app = createApp({
    components: { 'layout-wrapper': Layout },
    template: `<layout-wrapper />`
});

// Setup Pinia
if (createPinia) {
    const pinia = createPinia();
    app.use(pinia);
}

// Setup Router
app.use(router);

app.config.errorHandler = (err, vm, info) => {
    console.error('Vue Error:', err);
};

try {
    app.mount('#app');
    console.log('App: Mounted successfully');
} catch (err) {
    console.error('Mount Error:', err);
}
