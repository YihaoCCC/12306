<template>
    <el-dialog v-model="dialogVisible" width="30%" title="新增乘客" @close ='close' draggable>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex" class="ml-4">
                    <el-radio label="男" size="large">男</el-radio>
                    <el-radio label="女" size="large">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="身份证号" prop="idCard">
                <el-input maxlength="18" v-model.number="ruleForm.idCard" />
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input maxlength="11" v-model.number="ruleForm.phone"  />
            </el-form-item>
            <el-form-item>
                
                <el-button @click="resetForm(ruleFormRef)" type="warning">一键清空</el-button>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="close">关闭</el-button>
                <el-button type="primary" @click="submitForm(ruleFormRef)">增加该乘客</el-button>
            </span>
        </template>
    </el-dialog>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
defineProps({
    dialogVisible: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['closeModel', 'addSuccessNeedRefresh'])
const close =() => {
    emits('closeModel')
}
const addPassenger =(user:any) => {
    console.log("需要通信了");
    emits('addSuccessNeedRefresh', user)
}
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
    name: '',
    sex: '男',
    idCard: '',
    phone: '',
})
// 自定义校验规则
const checkId = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入身份证号'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字'))
    } else {
      if ( value.toString().length < 18) {
        callback(new Error('请输入正确的身份证号'))
      } else {
        callback()
      }
    }
  }, 1000)
}
const checkPhone = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入手机号'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字'))
    } else {
      if ( value.toString().length < 11) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const rules = reactive<FormRules>({
    name: [
        { required: true, message: '姓名未填写', trigger: 'blur' },
        { min: 1, max: 10, message: '请输入正确的姓名', trigger: 'blur' },
    ],
    sex: [
        { required: true, message: '选择性别', trigger: 'blur' },
    ],
    idCard: [
        { validator: checkId, required:true, trigger: 'blur', },
    ],
    phone: [
        { validator: checkPhone , required: true, trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
            addPassenger(ruleForm)
        } else {
            console.log('error submit!', fields)
        }
    })
}
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>
