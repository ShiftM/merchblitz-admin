const prefix = '/gems';
export default [

  {
    path: prefix+"/gem-packages",
    name: 'gems-index',
    component: () => import('./gem-package/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Gems'
    }
  },
  {
    path: prefix+"/gem-packages/create",
    name: 'gems-create',
    component: () => import('./gem-package/form.component.vue'),
    meta: {
      title: 'Add Gem Package'
    }
  },
  {
    path: prefix+"/gem-packages/:id/edit",
    name: 'gems-edit',
    component: () => import('./gem-package/form.component.vue'),
    meta: {
      title: 'Update Gem Package'
    }
  },
  {
    path: prefix+"/gem-conversion",
    name: 'gems-conversion',
    component: () => import('./gem-conversion/index.component.vue'),
    meta: {
      title: 'Gem Conversion'
    }
  },
  {
    path: prefix+"/gem-conversion/edit",
    name: 'gem-conversion-edit',
    component: () => import('./gem-conversion/form.component.vue'),
    meta: {
      title: 'Update Gem Conversion'
    }
  },
];