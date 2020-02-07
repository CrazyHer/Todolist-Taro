import Taro from '@tarojs/taro'
import { useDispatch } from '@tarojs/redux'
import { Button } from '@tarojs/components'

const GetOnlineData = () => {
    const dispatch = useDispatch();
    return (
        <Button onClick={() => { dispatch(fetchData()) }}>从JSONPlaceholder上获取事项</Button>
    )
}

const fetchData = () => (dispatch, getState) => {
    dispatch({ type: 'doing' });
    return Taro.request({
        url: 'http://jsonplaceholder.typicode.com/todos',
        method: 'get'
    })
        .then(r => JSON.stringify(r))
        .then(r => JSON.parse(r))
        .then(({data}) => {
            let newTodos = data.map((t) => {
                return { text: t.title, completed: t.completed }
            })
            if (getState().fetching) {
                dispatch({ type: 'addtodos', payload: newTodos });
                dispatch({ type: 'done' });
            }
        })
}

export default GetOnlineData;