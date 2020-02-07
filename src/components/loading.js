import Taro from '@tarojs/taro'
import { useSelector, useDispatch } from '@tarojs/redux';
import {View,Text,Button} from '@tarojs/components';

const Loading = () => {
    const loading = useSelector(state => state.fetching);
    const dispatch = useDispatch();
    return (
            <View style={{display: loading?'flex':'none'}}>
                <Text>请等待，正在获取中...</Text>
                <Button onClick={() => dispatch({type:'cancle'})}>取消</Button>
            </View>
    )
}
export default Loading;