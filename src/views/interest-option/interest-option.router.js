const prefix = '/interest-options';
export default [

  {
    path: prefix,
    name: 'interest-option-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Interest Option'
    }

  },
  {
    path: prefix+"/create",
    name: 'interest-option-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Create Interest Option'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'interest-option-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Interest Option'
    }

  },
];
