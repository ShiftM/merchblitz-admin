const prefix = '/top-list-report';
export default [
  {
    //items added/removed from cart
    path: prefix+"/items-to-cart",
    name: 'added-to-cart-index',
    component: () => import('./items-to-cart/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Top List Report',
    }
  },
  {
    //purchased gem package
    path: prefix+"/purchased-gem-package",
    name: 'purchased-gem-package-index',
    component: () => import('./purchased-gem-package/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Top List Report',
    }
  },
  {
    //online store searches
    path: prefix+"/online-store-searches",
    name: 'online-store-searches-index',
    component: () => import('./online-store-searches/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Top List Report',
    }
  },
  {
    //wishlisted items
    path: prefix+"/wishlisted-items",
    name: 'wishlisted-items-index',
    component: () => import('./wishlisted-items/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Top List Report',
    }
  },
  {
    //wishlisted items
    path: prefix+"/viewed-category",
    name: 'viewed-category-index',
    component: () => import('./viewed-category/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Top List Report',
    }
  }
];