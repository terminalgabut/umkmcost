export default {
    name: 'HeaderView',
    template: `
    <header class="app-header">
        <div class="header-brand">
            <div class="logo-icon">
                <i class="fas fa-wallet text-sm"></i>
            </div>
            <div>
                <h1 class="header-title">UMKM Pro</h1>
                <p class="text-[10px] text-muted uppercase tracking-widest font-bold">Cost Calculator</p>
            </div>
        </div>
        <div class="header-action">
            <button class="btn-profile shadow-sm">
                <i class="fa-solid fa-bell text-xs"></i>
            </button>
        </div>
    </header>
    `
};
