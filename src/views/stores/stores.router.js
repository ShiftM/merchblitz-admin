const prefix = '/stores';
export default [
  {
    path: prefix,
    name: 'stores-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Stores'
    }

  },
  {
    path: prefix+"/create",
    name: 'records-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Stores'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'stores-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Stores'
    }

  },
];
