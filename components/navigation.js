// root/components/navigation.js

export default {
    name: 'NavView',
    template: `
    <nav class="bottom-nav">
        <router-link to="/" class="nav-item">
            <i class="fa-solid fa-house"></i>
            <span class="nav-label">Home</span>
        </router-link>
        
        <router-link to="/input" class="nav-item nav-item-center shadow-lg">
            <i class="fa-solid fa-plus"></i>
        </router-link>
        
        <router-link to="/report" class="nav-item">
            <i class="fa-solid fa-chart-pie"></i>
            <span class="nav-label">Laporan</span>
        </router-link>
    </nav>
    `
};
