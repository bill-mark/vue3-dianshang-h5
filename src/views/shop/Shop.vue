<template>
  <div class="shop_wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6f2;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" />

    <Content/>
    <Cart/>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";

import ShopInfo from "@/components/ShopInfo";
import { getshopdetail } from "@/api/login";
import Content from './Content.vue'
import Cart from './Cart.vue'
export default {
  name: "Shop",
  components: {
    ShopInfo,
    Content,
    Cart,
  },
  setup() {
    const { item, getItemData } = useShopInfoEffect();
    const { handleBackClick } = useBackEffect();

    getItemData();

    return { item, handleBackClick };
  },
};

const useBackEffect = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return { handleBackClick };
};

const useShopInfoEffect = () => {
  const route = useRoute();
  const itemdata = reactive({
    item: {},
  });

  const getItemData = async () => {
    let { data } = await getshopdetail({
      id: route.params.id,
    });

    if (data.error == 0) {
      itemdata.item = data.data;
    }
  };

  const { item } = toRefs(itemdata);
  return { item, getItemData };
};
</script>


<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>