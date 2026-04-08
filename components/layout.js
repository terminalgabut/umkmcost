// root/components/layout.js

import HeaderView from './header.js';
import NavView from './navigation.js';

export default {
    components: {
        HeaderView,
        NavView
    },
    template: `
    <div class="app-container">
        <header-view />

        <main class="app-main pt-20"> <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <nav-view />
    </div>
    `
};
