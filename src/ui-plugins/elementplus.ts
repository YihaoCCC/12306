import { App }from "vue";
import {
    ElTable,
    ElTableColumn,
    ElButton,
    ElAvatar,
    ElDialog,
    ElDatePicker,
    ElInput,
    ElPopover,
    ElPopconfirm,
    ElForm,
    ElFormItem,
    ElCol,
    ElRadioGroup,
    ElRadio,
    ElSelect,
    ElOption,
    ElSkeleton,
    ElSkeletonItem,
    ElDrawer,
}
from 'element-plus'

const component = [
    ElTable,
    ElTableColumn,
    ElButton,
    ElAvatar,
    ElDialog,
    ElDatePicker,
    ElInput,
    ElPopover,
    ElPopconfirm,
    ElForm,
    ElFormItem,
    ElCol,
    ElRadioGroup,
    ElRadio,
    ElSelect,
    ElOption,
    ElSkeleton,
    ElSkeletonItem,
    ElDrawer
]

export function useElementPlus(app:App):void {
    for(const item of component) {
        app.component(item.name, item)
    }
}