import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import AddTodo from './addTodo'
import Tabs from './tabs'
import Loading from './loading'
import Footer from './footer'

const Test = () => {
    return (
        <View>
        <AddTodo />
        <AtDivider />
        <Tabs />
        <Loading />
        <AtDivider />
        <Footer />
        </View>
    )
}
export default Test;