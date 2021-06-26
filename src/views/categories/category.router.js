const prefix = '/categories';
export default [

  {
    path: prefix,
    name: 'category-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Category'
    }

  },
  {
    path: prefix+"/create",
    name: 'category-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Category'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'category-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Category'
    }

  },
];
