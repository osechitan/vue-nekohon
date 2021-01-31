import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import Product from '../views/Product.vue'
import ProductHome from '../views/Product/Home.vue'
import ProductReview from '../views/Product/Review.vue'
import ProductReviewDetail from '../views/Product/ReviewDetail.vue'

Vue.use(VueRouter)

const routes = [
  //商品一覧ページ
  {
    path: '/product',
    component: ProductList
  },
  //商品情報ページ
  {
    path: '/product/:id',
    component: Product,
    props: route => ({ id: Number(route.params.id) }),
    children: [
      //商品詳細(デフォルトルート)
      {
        name: 'product-home',
        path: '',
        component: ProductHome
      },
      //商品のレビュー一覧
      {
        name: 'product-review',
        path: 'review',
        component: ProductReview
      },
      //商品のレビュー詳細
      {
        name: 'review-detail',
        path: 'review/:rid',
        component: ProductReviewDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
