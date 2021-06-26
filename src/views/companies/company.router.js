const prefix = '/companies';
export default [
  {
    path: prefix,
    name: 'company-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Companies'
    }

  },
  {
    path: prefix+"/create",
    name: 'company-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Company'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'company-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Company'
    }

  },
];
