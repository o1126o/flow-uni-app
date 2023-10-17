import {
  ref
} from 'vue'
import {
  getMessage,
  getReadAll
} from '@/api/message.js';


export const MessageList = () => {
  // 页码
  const nextPage = ref(0);
  const pageSize = ref(5);
  // 保存数据
  const msgList = ref([]);
  // 判断是否显示暂无数据 false表示有数据 true没有数据
  const isEmpty = ref(false);
  // false表示还有数据数据没有加载, true则表示所有数据已经加载完成
  const hasMore = ref(false);
  // 是否加载完成
  const isTriggered = ref(false);
  const getMsgList = async () => {
    // 更新下一页页码
    nextPage.value += 1;
    // 请求数据
    const res = await getMessage(contentType, , nextPage.value, pageSize.value)
    // 如果是页码是1,则表示执行了下拉刷新,这个时候需要清空数组
    if (nextPage.value === 1) msgList.value = [];
    // 保存列表的数据
    msgList.value = [...msgList.value, ...(res.data.items || [])];
    // 判断是否加载到最后一页数据
    hasMore.value = nextPage.value == res.data.pages;
    // 判断如果没有请求到数据的话,则设置isEmpty未true,它为true的表示暂无数据
    isEmpty.value = msgList.value.length === 0;
  })
  // 滚动到底部/右边，会触发 scrolltolower 事件
  const onScrollToLower = () => {
    if (hasMore.value) return;
    getMsgList();
  };
  // 下拉刷新 自定义下拉刷新被触发
  const onRefresh = async () => {
    // 是否加载完成
    isTriggered.value = true;
    nextPage.value = 0;
    await getMsgList();
    isTriggered.value = false;
  };
  // 全部已读
  const handleAllOk = async () => {
    try {
      const result = await getReadAll(contentType);
      nextPage.value = 0;
      getAnnounceList();
    } catch (e) {
      console.log(e);
    }
  };
  return {
    msgList,
    isEmpty,
    hasMore,
    isTriggered,
    getMsgList,
    onScrollToLower,
    onRefresh,
    handleAllOk
  }
}