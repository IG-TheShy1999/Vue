// 组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// 二级路由
// import MyOrder from '@/pages/Center/myOrder'
// import GroupOrder from '@/pages/Center/groupOrder'


export default [
  {
    path: "/home",
    component: ()=>import("@/pages/Home"),
    meta: { show: true }
  },
  {
    path: "/search/:keyword?",
    name: 'search',
    component: ()=>import("@/pages/Search"),
    meta: { show: true },
  },
  {
    path: "/login",
    component: ()=>import("@/pages/Login"),
    meta: { show: false }
  },
  {
    path: "/register",
    component: ()=>import("@/pages/Register"),
    meta: { show: false }
  },
  {
    path: "/detail/:skuid",
    component: ()=>import("@/pages/Detail"),
    meta: { show: true }
  },
  {
    path: "/addcartsuccess/",
    name: 'addcartsuccess',
    component: ()=>import("@/pages/AddCartSuccess"),
    meta: { show: true }
  },
  {
    path: "/shopcart/",
    component: ()=>import("@/pages/ShopCart"),
    meta: { show: true }
  },
  {
    path: "/trade",
    component: ()=>import("@/pages/Trade"),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      // 想去交易页面？要从购物车来！
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false);
      }
    }
  },
  {
    path: "/pay",
    component: ()=>import("@/pages/Pay"),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      // 想去交易页面？要从购物车来！
      if (from.path == '/trade') {
        next()
      } else {
        next(false);
      }
    }
  },
  {
    path: "/paysuccess",
    component: ()=>import("@/pages/PaySuccess"),
    meta: { show: true }
  },
  {
    path: "/center",
    component: ()=>import("@/pages/Center"),
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: ()=>import("@/pages/Center/myOrder"),
      },
      {
        path: "grouporder",
        component: ()=>import("@/pages/Center/groupOrder"),
      },
      {
        path: '/center',
        redirect: '/center/myorder'

      }
    ]

  },
  //重定向
  {
    path: '*',
    redirect: '/home',
  }
]