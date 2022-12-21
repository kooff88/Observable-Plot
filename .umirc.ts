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
        }, {
          name: "柱状图",
          path: '/d3/bar',
          component: "./D3/Bar"
        }, {
          name: "盒子图",
          path: '/d3/box',
          component: "./D3/Box"
        }, {
          name: "细胞图",
          path: '/d3/cell',
          component: "./D3/Cell"
        }, {
          name: "细胞图2",
          path: '/d3/delaunay',
          component: "./D3/Delaunay"
        }, {
          name: "密度",
          path: '/d3/density',
          component: "./D3/Density"
        }, {
          name: "点",
          path: '/d3/dot',
          component: "./D3/Dot"
        }, {
          name: "图片",
          path: '/d3/images',
          component: "./D3/Images"
        }, {
          name: "文字",
          path: '/d3/text',
          component: "./D3/Text"
        }, {
          name: "矢量标记",
          path: '/d3/vector',
          component: "./D3/Vector"
        },{
          name: "集群处理",
          path: '/d3/group',
          component: "./D3/Group"
        },{
          name: "堆叠",
          path: '/d3/stack',
          component: "./D3/Stack"
        },
      ],
    },
    {
      name: 'ThreeJS',
      path: '/three',
      routes: [
        {
          name: "示例训练",
          path: '/three/train',
          component: "./Three/Train"
        },
        {
          name: "场景1",
          path: '/three/firstScene',
          component: "./Three/FirstScene"
        },
        {
          name: "材质亮光",
          path: '/three/materialsLight',
          component: "./Three/MaterialsLight"
        },{
          name: "材质亮光动画",
          path: '/three/materialsLightAnimation',
          component: "./Three/MaterialsLightAnimation"
        },{
          name: "控制器",
          path: '/three/controlGui',
          component: "./Three/ControlGui"
        },{
          name: "场景2",
          path: '/three/basicScene',
          component: "./Three/BasicScene"
        },{
          name: "多几何图",
          path: '/three/geometries',
          component: "./Three/Geometries"
        },{
          name: "皮肤人",
          path: '/three/skinningModel',
          component: "./Three/SkinningModel"
        },
        {
          name: "木箱",
          path: '/three/woodenBox',
          component: "./Three/WoodenBox"
        },
        {
          name: "水波",
          path: '/three/water',
          component: "./Three/Water"
        },
        {
          name: "光源",
          path: '/three/light',
          component: "./Three/Light"
        },
        // {
        //   name: "照相机",
        //   path: '/three/camera',
        //   component: "./Three/Camera"
        // }
      ]
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

