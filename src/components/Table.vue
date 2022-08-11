<template>
  <el-table stripe  :data="filterTableData" max-height="250" min-height="220" style="width: 100%">
    <el-table-column width="120px" label="姓名" prop="name" />
    <el-table-column width="180px" label="身份证" prop="idCard" />
    <el-table-column width="110px" label="电话" prop="phone" />

    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索乘客" />
        <el-button style="margin: 0 10px" type="primary" @click="showDialog = true">新增乘车人</el-button>
      </template>
      <template #default="scope">
        <el-popconfirm title="确认要删除此乘车人吗?" @confirm="confirm(scope.$index, scope.row)" >
            <template #reference>
                <el-button type="danger" size="small"
                    >删除</el-button>
            </template>
        </el-popconfirm>       
        <el-button
          size="small"
          type="warning"
          plain
          @click="handleConfirm(scope.$index, scope.row)"
          >选择此乘车人</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <Dialog 
  :dialogVisible="showDialog"
  @closeModel="closeModel"
  @addSuccessNeedRefresh = 'addPassenger1'
  
  ></Dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { computed, reactive, ref, onMounted } from 'vue'
import { getPassenger, addPassenger,deletePassenger } from '../api/searchhttp';
import Dialog from '../components/Dialog.vue'
interface User {
    id: number,
    name: string,
    myself: number,
    idCard: number,
    phone: number
}
const emit = defineEmits(['choosePassenger'])
const search = ref('')
// 计算属性
const filterTableData = computed(() =>
  tableData.userList.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
// 将选择的数据发给父组件
const handleConfirm = (index: number, row: User) => {
  console.log("子组件发射值")
  emit('choosePassenger', row)
}
// 删除乘车人
const handleDelete = (index: number, row: User) => {
    console.log(tableData.userList);
    tableData.userList = tableData.userList.filter((item) => item.id !== row.id )
    console.log(tableData.userList);
    deletePassenger(row.id).then(res =>{
      console.log(res);
      
    })
}
const confirm = (index: number, row: User) => {
    console.log("确认删除");
    handleDelete(index, row)
}
// 乘车人
let tableData = reactive({
    userList : [
  {
    id: 1,
    name: '陈奕豪',
    myself: 0,
    idCard: 411624199912102266,
    phone: 16622903269
  },
  {
    id: 2,
    name: '李文彩',
    myself: 0,
    idCard: 411624199912102266,
    phone: 16622903269
  },
  {
    id: 3,
    name: '狗蛋儿',
    myself: 0,
    idCard: 411624199912102266,
    phone: 16622903269
  }
]
})
// 增加乘车人
const showDialog = ref(false)
const addPassenger1 = (getClidrenMessage:any) => {

    console.log(getClidrenMessage);
    addPassenger(getClidrenMessage).then(() => {
      getPassenger().then((res:any) => {
        tableData.userList = res
        ElMessage.success 
      })
      console.log("父组件收到值，刷新");
    })
    closeModel()
    

}   
const closeModel = () => {
    showDialog.value = false
}
onMounted(() => {
  getPassenger().then((res:any) => {
    tableData.userList = res 
  })
})
</script>
