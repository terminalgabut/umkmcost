// root/components/header.js

export default {
    name: 'HeaderView',
    mounted() {
        // Menginisialisasi icon Lucide setelah template dirender
        if (window.lucide) {
            window.lucide.createIcons();
        }
    },
    template: `
    <header class="app-header">
        <div class="flex items-center justify-between w-full h-full">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                    <i data-lucide="wallet" class="w-5 h-5 text-white"></i>
                </div>
                <div>
                    <h1 class="text-sm font-black text-slate-800 leading-none uppercase tracking-tight">UMKM Cost</h1>
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Pro Calculator</p>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <button class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 active:bg-slate-100 transition-colors">
                    <i data-lucide="bell" class="w-5 h-5"></i>
                </button>
                <div class="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center overflow-hidden shadow-inner">
                    <i data-lucide="user" class="w-5 h-5 text-indigo-400"></i>
                </div>
            </div>
        </div>
    </header>
    `
};
