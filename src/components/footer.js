import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';
import GetData from './getData';
import Delete from './delete';

const Footer = () => {
    return (
        <View>
        <GetData />
        <Delete />
        </View>
    )
}
export default Footer;