const prefix = '/admin-users';
export default [
  {
    path: prefix,
    name: 'admin-users-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Administrators'
    }

  },
  {
    path: prefix+"/create",
    name: 'administrator-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Administrator'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'administrator-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Administrator'
    }

  },
];
