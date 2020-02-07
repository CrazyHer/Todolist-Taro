import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.css'

import Test from '../../components/test'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Test />
      </View>
    )
  }
}

export default Index
