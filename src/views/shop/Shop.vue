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
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";

import ShopInfo from "@/components/ShopInfo";
import { getshopdetail } from "@/api/login";
export default {
  name: "Shop",
  components: {
    ShopInfo,
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
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.2rem 0 0.16rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: #b7b7b7;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>