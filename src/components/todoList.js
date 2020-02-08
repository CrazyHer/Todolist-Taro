import Taro from '@tarojs/taro'
import { useSelector, useDispatch } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const GetVisibleTodos = () => {
    const { todos,filter } = useSelector(state => ({ todos: state.todos ,filter:state.filter}))
    const dispatch = useDispatch();
    let alltodos = todos.map((t, i) => { return { text: t.text, completed: t.completed, index: i } }
    )
    const todofilter = (raw, f) => {
        switch (f) {
            case 'all':
                return raw;
            case 'done':
                return raw.filter((t) => t.completed);
            case 'undone':
                return raw.filter((t) => !t.completed);
            default:
                return [];
        }
    }
    let filteredtodos = todofilter(alltodos, filter).map(
        (t) => {
            return (
                <View key={t.index}>
                <AtIcon value={t.completed?'check-circle':'close-circle'} size='22'></AtIcon>
                    <Text onClick={() => dispatch({ type: 'click', index: t.index })} style={{ textDecoration: t.completed ? 'line-through' : 'none' }} >
                    {t.text}
                    </Text>
                </View>
            )
        });
    return (<View>{filteredtodos}</View>);
}
export default GetVisibleTodos;