const prefix = '/inventories';
export default [
  {
    path: prefix,
    name: 'inventories-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Inventories'
    }

  },
  {
    path: prefix+"/create",
    name: 'inventories-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Inventories'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'inventories-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Inventories'
    }

  },
];
