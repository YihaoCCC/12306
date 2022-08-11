# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


### 📑记录一些问题

#### 1 : `transition` 和 `animate` 的选择

做展开订票信息的时候，需要慢慢展开盒子，两种动画到底用哪个？

`transition` 动画：有来有回

```css
.listDetail {
    height: 0px;
    width: 100%;
    transition: all .5s ease-in-out;
}
// 这个class实在点击之后会通过一个变量添加到盒子上 
// 通过transition可以让动画有来有回
// 即展开和关闭都有动画，
.showAnimate {
    height: 150px;
}
```
`animation` 动画：有来无回

```css
// keyframes虽然也能实现效果，但是更多的是用在复杂动效，且只有一次
// 从0% ~ 100% 的每帧都能定义
// "有来无回"
// 通过`forwwards`才能让动画保持到100%（最后一帧） 
.listDetail {
    height: 0px;
    width: 100%;
    }
.showAnimate {
    animation: show 0.5s ease-in-out forwards;
}
@keyframes show {
    from {
        height: 0;
    }
    to {
        height: 150px;
    }
}
> 补充一下：animate适合元素初始化动画，但是transition适合元素已经存在dom树当中，animate是在元素插入dom树时候执行的动画。
```
### 2 : 判断 `dom` 元素距离顶部的距离并实时添加样式
```JavaScript 
onMounted(() => {
    let dom:any = document.getElementById('header')
    document.addEventListener('scroll', () => {
        let domHeight:any= document.getElementById('header')?.offsetTop

        if(domHeight > 330 && dom) {
            dom!.style.background = '#fff';
            dom.style.boxShadow = '0px 5px 10px #89c1f073'
        } else {
            dom.style.background = ''
            dom.style.boxShadow = ''
        }
    })
})
```

### 3 : `defineProps` 的使用
```JavaScript
// 这种只能在<script setup> 中使用，如果你使用setup就不能用defineProps函数
// 且 defineprops不在需要导入，直接使用即可
<script setup lang='ts'>
const props = defineProps({
    width: String,
    showImgBox: String,
    transitonY: String,
    radius: String,
    shadow: String
})
onMounted(() => {
    console.log(props);
})
<script>

// 引用变量参数默认值还是需要用函数返回
defineProps({
    ticket: {
        type :Object,
        default : () => {
            return {
                startTime: '06:20',
                endTIme: '11:29'
            }
        }
    }
})
```
### 3 : `watch` 立即监听
- 监控数据为 `ref` 包裹的时候
```JavaScript
    setup() {
            const number = ref(0)
            // 监听 number 变量，如果有发生变化，
            // 自动运行后面的回调函数
            watch(number, (newVal, oldVal) => {
                console.log({ newVal, oldVal })
            })
        return { number }
    }
```
- 监听响应式对象`reactive`包裹
```JavaScript
// 💥注意点： 如果监听的属性值是基本类型数据，
// 需要写成函数返回该属性的方式才能监听到
 watch(() => route.fullPath, (value, oldValue) => {
        if(value !== '/home/dashbord') {
            searchboxwidth.value = '100%'
            showImgBox.value = 'none'
            transitonY.value = '0px'
            radius.value = '0px'
            showPlaceHoder.value = false
            boxShadow.value = 'none'
        } else {
            searchboxwidth.value = '66%'
            showImgBox.value = "block"
            transitonY.value = '110px'
            radius.value = '20px'
            showPlaceHoder.value = true
            boxShadow.value = '0 4px 16px rgb(69 88 115 / 20%)'
        }        
    },
    // 深度监听、立即执行
    { deep: true , immediate: true }
)
```
>注意：`reative`不能让基本数据类型变成响应式数据 `ref`可以

>监听 reactive 定义的响应式数据 
 - 特点1：newVal === oldVal，根本就是同一个内容地址，就是对象本身
 - 特点2：reactive() 对象默认是深度监听，能监听到所有的子属性的变化

- 监听多个函数

```JavaScript
import { ref, watch } from 'vue'
setup() {
    const number = ref(0)
    const msg = ref('你好')
    
    // 监听 number 变量，如果有发生变化，自动运行后面的回调函数
    // 监听 [number, msg] 多个响应式数据数据，其中一个数据发生变化，就会触发 watch 回调函数
    watch([number, msg], (newVal, oldVal) => {
      console.log({ newVal, oldVal })
    })
    return { number, msg }
  }
```
### js控制浏览器后退

> window.history.back()
> 同理
> window.history.forward()

### `reactive` 包裹数组的时候

```JavaScript
let passengerList = reactive([])
// 添加一个值
passengerList.list.push(row)

发现添加值可以做到响应式，但是删除的时候，虽然控制台值已经改变了，但是界面始终没刷新

const deletePassenger = (item:any) => {
    console.log(passengerList);
    passengerList = passengerList.filter((i:any) => i.name !== item.name) 
    console.log(passengerList);
}

// 改变定义结构

let passengerList = reactive({
    list: []
})
// 添加
passengerList.list.push(row)
// 删除
const deletePassenger = (item:any) => {
    console.log(passengerList.list);
    passengerList.list = passengerList.list.filter((i:any) => i.name !== item.name)
    console.log(passengerList.list);   
}
```

### element-ui如何局部更改样式
使用 `:deep()` 包裹，使用样式穿透修改局部的el组件样式
> 不同的css预处理器支持样式穿透的符号不同，css可以用>>>，而scss等不支持>>>，支持/deep/，而在vue中用::v-deep
```css
<style scoped>
:deep(.el-input__wrapper) {
    background-color: transparent !important;
    box-shadow: none !important;
}
:deep(.el-input__wrapper :hover) {
  border: none !important;
}
:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  box-shadow: unset !important;
}
:deep(.el-input__wrapper) {
  font-size: 24px !important;
  padding: 0 !important;
}           
</style>
```