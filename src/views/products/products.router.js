const prefix = '/products';
export default [
  {
    path: prefix,
    name: 'products-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Products'
    }

  },
  {
    path: prefix+"/create",
    name: 'products-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Products'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'product-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Product'
    }

  },
];
