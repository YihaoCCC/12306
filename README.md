# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


### 记录一些问题

#### 1:`transition` 和 `animate` 的选择

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
```