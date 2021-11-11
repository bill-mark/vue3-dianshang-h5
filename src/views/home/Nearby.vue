<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
   
   <ShopInfo
     v-for="item in nearbyList"
     :key="item.id"
     :item="item"
   />
  </div>
</template>

<script>
import {ref} from 'vue'
import { gethotshop } from "@/api/login";
import ShopInfo from "@/components/ShopInfo"
export default {
  name: 'Nearby',
  components:{
    ShopInfo
  },
  setup() {
    const nearbyList = ref([]);

    const getNearbyList = async ()=>{
        let {data} = await gethotshop()

        if(data.error === 0 && data.data?.length){
          nearbyList.value = data.data
        }
    }
    getNearbyList()
    
    return { nearbyList };
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  
}
</style>