import Taro from '@tarojs/taro'
import { useDispatch } from '@tarojs/redux';
import { Button } from '@tarojs/components';

const Delete = () => {
    const dispatch = useDispatch();
    return (
        <Button onClick={() => dispatch({ type: 'deleteDone' })}>
            删除已完成
         </Button>
    )
}
export default Delete;