// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  dva: {
    hmr: true,
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          name: 'welcome',
          component: './Welcome',
        },
        {
          path: '/about',
          name: 'about',
          component: './About',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  title: false,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
});
