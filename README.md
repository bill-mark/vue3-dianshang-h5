1.BEM明明规范

block_element-modifier

例
docker
  docker_item docker_item-active
  docker_title


2.CSS 图片占位写法(8-6 14:14)
div
  image

div {
  height:0;
  overflow:hiddenl;
  padding-bottom:25.4%;//图片高宽比
}

3.控制class
:class="{'category__item': true, 'category__item--active': currentTab === item.tab}"