// root/views/Dashboard.js

// Kita tidak pakai 'import' dulu agar bisa jalan langsung di browser/HP
export default {
    name: 'DashboardView',
    setup() {
        // Mengakses Pinia secara global karena kita pakai CDN
        const { useAppStore } = window.stores; 
        // Catatan: Pastikan di store.js kamu menaruhnya di window.stores
        
        // Data Dummy sementara agar tampilan langsung muncul meskipun store kosong
        const stats = {
            totalHpp: 25000,
            margin: 20,
            suggested: 30000
        };

        const formatIDR = (val) => {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(val);
        };

        return { stats, formatIDR };
    },
    template: `
    <div class="p-1">
        <div class="mb-6">
            <h2 class="text-2xl font-extrabold text-slate-800 tracking-tight">Ringkasan</h2>
            <p class="text-slate-500 text-sm">Estimasi modal & harga jual produk.</p>
        </div>

        <div class="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 mb-6 transition-all active:scale-95">
            <p class="text-slate-400 text-[10px] uppercase font-black tracking-[0.2em] mb-2 text-center">Harga Jual Disarankan</p>
            <h1 class="text-4xl font-black text-indigo-600 text-center mb-6 tracking-tight">
                {{ formatIDR(stats.suggested) }}
            </h1>
            
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                <div class="text-center">
                    <p class="text-slate-400 text-[9px] uppercase font-bold mb-1">Total Modal</p>
                    <p class="text-slate-700 font-bold text-sm">{{ formatIDR(stats.totalHpp) }}</p>
                </div>
                <div class="text-center border-l border-slate-50">
                    <p class="text-slate-400 text-[9px] uppercase font-bold mb-1">Margin</p>
                    <p class="text-indigo-500 font-bold text-sm">{{ stats.margin }}%</p>
                </div>
            </div>
        </div>

        <div class="bg-indigo-600 rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-indigo-200">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="text-white">
                    <p class="text-xs font-bold">Butuh Detail?</p>
                    <p class="text-[10px] opacity-80">Input bahan baku baru</p>
                </div>
            </div>
            <router-link to="/input" class="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-lg">
                Mulai
            </router-link>
        </div>

        <div class="mt-8 px-2">
            <h4 class="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-4 text-center">Statistik Operasional</h4>
            <div class="flex flex-col gap-3">
                <div class="flex justify-between items-center text-sm p-2">
                    <span class="text-slate-500 font-medium">Bahan Baku</span>
                    <span class="text-slate-800 font-bold">Rp 0</span>
                </div>
                <div class="flex justify-between items-center text-sm p-2">
                    <span class="text-slate-500 font-medium">Tenaga Kerja</span>
                    <span class="text-slate-800 font-bold">Rp 0</span>
                </div>
            </div>
        </div>
    </div>
    `
                      };
