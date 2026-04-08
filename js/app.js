import { router } from './router.js';
import Layout from '../components/layout.js';

const { createApp } = Vue;
const { createPinia } = Pinia;

const app = createApp({
    components: { 'layout-wrapper': Layout },
    template: `<layout-wrapper />`
});

// Setup Pinia (State Management)
const pinia = createPinia();
app.use(pinia);

// Setup Router
app.use(router);

// Global Error Handling
app.config.errorHandler = (err, vm, info) => {
    console.error('Vue Error:', err, info);
};

try {
    app.mount('#app');
    console.log('%c UMKM PRO: System Ready ', 'background: #4F46E5; color: white; border-radius: 4px; padding: 2px 5px;');
} catch (err) {
    console.error('Critical Mount Error:', err);
}
