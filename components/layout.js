// root/components/layout.js

import layoutView from './layoutView.js';
import Header from './headeLogic.js';
import Navigation from './navigationLogic.js'; // Mengganti Sidebar dengan Navigation

export default {
    ...layoutView,
    components: {
        'header-component': Header,
        'nav-component': Navigation
    },
    setup() {
        // Logika state sidebar dihapus karena sudah menggunakan Bottom Nav
        return {};
    },
    watch: {
        // Setiap kali pindah halaman
        '$route'() {
            // Pastikan scroll kembali ke atas saat ganti halaman
            window.scrollTo(0, 0);

            // Refresh icon Lucide agar muncul di halaman baru
            Vue.nextTick(() => {
                if (window.lucide) window.lucide.createIcons();
            });
        }
    },
    mounted() {
        // Inisialisasi awal ikon Lucide
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
};
