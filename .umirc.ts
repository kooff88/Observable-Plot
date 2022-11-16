import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'D13',
  },

  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'D3',
      path: '/d3',
      routes: [
        {
          name: "线",
          path: '/d3/line',
          component: "./D3/Line"
        },
        {
          name: "渠道",
          path: '/d3/channels',
          component: "./D3/Channels"
        },
        {
          name: "刻度",
          path: '/d3/scales',
          component: "./D3/Scales"
        },
        {
          name: "变换",
          path: '/d3/transforms',
          component: "./D3/Transforms"
        },
        {
          name: "小平面",
          path: '/d3/facets',
          component: "./D3/Facets"
        },
        {
          name: "图例",
          path: '/d3/legends',
          component: "./D3/Legends"
        },
        {
          name: "面积图",
          path: '/d3/area',
          component: "./D3/Area"
        }, {
          name: "箭头",
          path: '/d3/arrow',
          component: "./D3/Arrow"
        },
      ],
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
  ],
  npmClient: 'pnpm',
});

