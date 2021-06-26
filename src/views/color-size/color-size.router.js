const prefix = '/colors-and-sizes';
export default [

  {
    path: prefix+"/colors",
    name: 'colors-index',
    component: () => import('./colors/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Colors'
    }
  },
  {
    path: prefix+"/colors/create",
    name: 'colors-create',
    component: () => import('./colors/form.component.vue'),
    meta: {
      title: 'Add Color'
    }
  },
  {
    path: prefix+"/:id/edit",
    name: 'colors-edit',
    component: () => import('./colors/form.component.vue'),
    meta: {
      title: 'Update Color'
    }
  },
  {
    path: prefix+"/sizes",
    name: 'sizes-index',
    component: () => import('./sizes/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Sizes'
    }
  },
  {
    path: prefix+"/sizes/create",
    name: 'sizes-create',
    component: () => import('./sizes/form.component.vue'),
    meta: {
      title: 'Add Size'
    }
  },
  {
    path: prefix+"/:id/edit",
    name: 'sizes-edit',
    component: () => import('./sizes/form.component.vue'),
    meta: {
      title: 'Update Size'
    }
  },
];