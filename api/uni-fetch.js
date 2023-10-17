/**
 * http请求文件
 **/

// 引入fetch
import {
  createUniFetch
} from 'uni-app-fetch'

// 引入user的store
import {
  useUserStore
} from '@/stores/user.js'

// 定义tabbar路径
const tabBarPagePaths = ['pages/task/index', 'pages/message/index', 'pages/my/index']
// 使用自定义选项创建实例
const uniFetch = createUniFetch({
  // loading加载
  loading: {
    title: '加载中...'
  },
  // baseURL: 'https://slwl-api.itheima.net',
  baseURL: '/dev-api',
  intercept: {
    // 请求拦截器
    request(options) {
      // TODO 通过请求头发送token
      const store = useUserStore()
      const defaultHeader = {
        Authorization: store.token
      }
      options.header = Object.assign({}, defaultHeader, options.header)

      return options;
    },
    // 响应拦截器
    response(result) {
      // TODO 进行响应拦截处理(token过期/异常提示)
      if (result.statusCode === 200 && result.data.code === 200) {
        return result.data
      }
      if (result.statusCode === 401) {
        // TODO token过期处理
        // 页面栈 getCurrentPages
        const pageStack = getCurrentPages()
        console.log('pageStack=>', pageStack);

        const redirectUrl = pageStack[pageStack.length - 1].route
        const routeType = tabBarPagePaths.includes(redirectUrl) ? 'switchTab' : 'redirectTo'

        // 当前回调的地址是否是tabbar页面
        return uni.redirectTo({
          url: `/pages/login/index?routeType=${routeType}&redirectUrl=/${redirectUrl}`
        })
      }

      uni.utils.toast(result.data.msg || '请求失败')
    }
  }
})

// 模块导出
export default uniFetch;