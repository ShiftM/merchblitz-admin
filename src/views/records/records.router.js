const prefix = '/records';
export default [
  {
    path: prefix,
    name: 'records-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Records'
    }

  },
  {
    path: prefix+"/create",
    name: 'records-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Record'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'records-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Record'
    }

  },
  {
    path: prefix+"/:id/view",
    name: 'records-view',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'View Record'
    }
  },
];
