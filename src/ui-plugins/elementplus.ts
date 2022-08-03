import { App }from "vue";
import {
    ElTable,
    ElTableColumn,
    ElButton,
    ElAvatar,
    ElDialog,
    ElDatePicker,
}
from 'element-plus'

const component = [
    ElTable,
    ElTableColumn,
    ElButton,
    ElAvatar,
    ElDialog,
    ElDatePicker
]

export function useElementPlus(app:App):void {
    for(const item of component) {
        app.component(item.name, item)
    }
}