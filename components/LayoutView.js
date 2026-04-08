export default {
  name: 'LayoutView',
  template: `
    <div class="app-container min-h-screen bg-slate-50">
        <header-component></header-component>
        
        <main class="app-main">
            <router-view v-slot="{ Component }">
                <transition name="fade-page" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <nav-component></nav-component>
    </div>
  `
};
