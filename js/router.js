// Import view/halaman yang akan ditampilkan
// Kita asumsikan file ini ada di folder js/views/
const Dashboard = () => import('../views/Dashboard.js');
const InputBiaya = () => import('../views/InputBiaya.js');
const Laporan = () => import('../views/Laporan.js');

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: Dashboard,
        meta: { title: 'Dashboard' }
    },
    { 
        path: '/input', 
        name: 'input',
        component: InputBiaya,
        meta: { title: 'Input Biaya' }
    },
    { 
        path: '/report', 
        name: 'report',
        component: Laporan,
        meta: { title: 'Laporan Detail' }
    },
    // Redirect jika route tidak ditemukan
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

export const router = VueRouter.createRouter({
    // Menggunakan Hash History agar aman di GitHub Pages (URL dengan #/)
    history: VueRouter.createWebHashHistory(),
    routes,
    // Mengatur agar setiap pindah halaman, scroll kembali ke atas
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

// Navigation Guard untuk mengubah Title Browser secara dinamis
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `${to.meta.title} | UMKM Pro` : 'UMKM Pro';
    next();
});
