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
]

export function useElementPlus(app:App):void {
    for(const item of component) {
        app.component(item.name, item)
    }
}