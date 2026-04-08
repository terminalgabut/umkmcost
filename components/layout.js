// root/components/layout.js

import HeaderComponent from './header.js';
import NavComponent from './navigation.js';

export default {
    name: 'LayoutView',
    components: {
        'header-component': HeaderComponent,
        'nav-component': NavComponent
    },
    template: `
    <div class="app-container">
        <header-component></header-component>
        
        <main class="app-main">
            <router-view v-slot="{ Component }">
                <transition name="page-fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <nav-component></nav-component>
    </div>
    `
};
