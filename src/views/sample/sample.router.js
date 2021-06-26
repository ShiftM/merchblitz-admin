const prefix = '/samples';
export default [

  {
    path: prefix,
    name: 'sample-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Sample'
    }

  },
  {
    path: prefix+"/create",
    name: 'sample-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Create Sample'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'sample-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Sample'
    }

  },
];
