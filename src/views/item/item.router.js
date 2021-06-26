const prefix = '/items';
export default [

  {
    path: prefix,
    name: 'item-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Items'
    }

  },
  {
    path: prefix+"/:id",
    name: 'item-details',
    component: () => import('./details.component.vue'),
    meta: {
      title: 'Item Details'
    }

  },
  {
    path: prefix+"/create",
    name: 'item-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Item'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'item-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Item'
    }

  },
];
