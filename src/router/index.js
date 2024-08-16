import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArtworksView from '@/views/ArtworksView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: [
		{
			path: '/',
			component: RouterView,
			children: [
				{
					path: '',
					name: 'home',
					component: HomeView,
					meta: {
						breadcrumb: [{ name: 'home' }]
					}
				},
				{
					path: 'artworks',
					name: 'artworks',
					component: ArtworksView,
					meta: {
						breadcrumb: [{ name: 'artworks' }]
					}
				}
			]
		}
	]
})

export default router