<template>
    <div class="SafeContent">
        <div class="profile">
            <h2>
                个人中心
                <img src="https://joeschmoe.io/api/v1/jon" alt="" />
            </h2>
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                class="demo-ruleForm form">
                <el-form-item label="用户名：" prop="username">             
                    <el-input v-if="change" v-model="ruleForm.username" type="password" autocomplete="off" />
                    <span v-else>{{ruleForm.username}}</span>
                </el-form-item>
                <el-form-item label="性别：" prop="sex">
                    <el-radio-group v-if="change" v-model="ruleForm.sex" class="ml-4">
                        <el-radio label="男" size="large">男</el-radio>
                        <el-radio label="女" size="large">女</el-radio>
                    </el-radio-group>
                    <span v-else>{{ruleForm.sex}}</span>
            
                </el-form-item>
                <el-form-item label="身份证号：" prop="idCard">
                    <el-input v-if="change" maxlength="18" v-model.number="ruleForm.idCard" />
                    <span v-else>{{ruleForm.idCard}}</span>
                </el-form-item>
                <el-form-item label="手机号：" prop="phone">
                    <el-input v-if="change" maxlength="11" v-model.number="ruleForm.phone" />
                    <span v-else>{{ruleForm.phone}}</span>
                </el-form-item>
                <el-form-item>
                    <el-button v-if="change" type="primary" @click="submitForm(ruleFormRef)">确认修改</el-button>
                    <el-button v-if="change" @click="change = false">取消</el-button>
                    <el-button v-if="!change" type="primary" @click="change = !change">修改个人信息</el-button>
                </el-form-item>
            </el-form>
            <el-button type="warning" @click="drawer = !drawer">修改密码</el-button>
        </div>
        <el-drawer v-model="drawer">
            <template #title>
                <h4>修改密码</h4>
            </template>
            <template #default>
                <div>
                    <el-input v-model="oldPassword" placeholder="请输入旧密码"></el-input>
                    <el-input v-model="newPassword" placeholder="请输入新密码"></el-input>
                    <el-input v-model="repetPassword" placehoder="请重新输入密码"></el-input>
                </div>
            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button @click="drawer = !drawer">取消修改</el-button>
                    <el-button type="primary" @click="confirmClick">confirm</el-button>
                </div>
            </template>
        </el-drawer>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const oldPassword = ref('')
const newPassword = ref('')
const repetPassword = ref('')
const drawer = ref(false)
const change = ref(false)

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('Please input the age'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'))
            } else {
                callback()
            }
        }
    }, 1000)
}
// 自定义校验规则
const checkId = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入身份证号'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字'))
        } else {
            if (value.toString().length < 18) {
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
            if (value.toString().length < 11) {
                callback(new Error('请输入正确的手机号'))
            } else {
                callback()
            }
        }
    }, 1000)
}

const ruleForm = reactive({
    username: 'CEHSI',
    sex: 'NAN',
    phone: 15156165161,
    idCard: 2132132132132132132,
})

const rules = reactive({
    username: [
        { required: true, message: '姓名未填写', trigger: 'blur' },
        { min: 1, max: 10, message: '请输入正确的姓名', trigger: 'blur' },
    ],
    sex: [
        { required: true, message: '选择性别', trigger: 'blur' },
    ],
    idCard: [
        { validator: checkId, required: true, trigger: 'blur', },
    ],
    phone: [
        { validator: checkPhone, required: true, trigger: 'blur' },
    ],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            change.value = false
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const confirmClick =() => {
    
}
</script>
    
<style lang="scss" scoped>
@import './profile.scss';
</style>