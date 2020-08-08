const routes = [
  { path: '/', name: 'contacts', component: Contacts },
  { path: '/contact/:id', name: 'contact', component: Contact, props: true },
  { path: '/new', name: 'new', component: New },
  { path: '/edit/:id', name: 'edit', component: Edit, props: true }

];
const router = new VueRouter({
  routes: routes
})