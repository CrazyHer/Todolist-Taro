import Taro, { useState } from '@tarojs/taro'
import { useDispatch } from '@tarojs/redux'
import { View } from '@tarojs/components'
import {AtForm,AtInput,AtButton} from 'taro-ui'

const AddTodo = () => {
    const dispatch = useDispatch();
    const [value,setValue] = useState('');
    return (
        <View>
            <AtForm onSubmit={()=>{if(value.trim()){dispatch({type:'addtodo',payload:value.trim()});setValue('')}}}>
                输入代办事项：<AtInput value={value} onChange={(e)=>{setValue(e)}} />
                <AtButton formType='submit'>提交</AtButton>
            </AtForm>
        </View>
    )
}
export default AddTodo;