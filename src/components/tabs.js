import Taro, { useState } from '@tarojs/taro'
import { useDispatch } from '@tarojs/redux';
import { AtTabs, AtTabsPane } from 'taro-ui'
import GetTodos from './todoList'

const Tabs = () => {
    const [current, setCurrent] = useState(0);
    const dispatch = useDispatch();
    const tabList = [{ title: '全部事项' }, { title: '未完成' }, { title: '已完成' }];
    const change = (i) => {
        switch (i) {
            case 0:
                dispatch({ type: 'setFilter', payload: 'all' });
                break;
            case 1:
                dispatch({ type: 'setFilter', payload: 'undone' });
                break;
            case 2:
                dispatch({ type: 'setFilter', payload: 'done' });
                break;
        }
    }
    return (
        <AtTabs animated={false} current={current} tabList={tabList} onClick={(i) => { setCurrent(i);change(i) }}>
            <AtTabsPane current={current} index={0} >
                <GetTodos />
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
                <GetTodos />
            </AtTabsPane>
            <AtTabsPane current={current} index={2}>
                <GetTodos />
            </AtTabsPane>
        </AtTabs>
    )
}
export default Tabs;