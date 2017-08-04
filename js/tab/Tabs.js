import {StackNavigator, TabNavigator} from 'react-navigation'
import FourScreen from "./FourScreen";

const Tabs = TabNavigator({
    Four1: {
        screen: FourScreen,
    },
    Four2: {
        screen: FourScreen,
    },
    Four3: {
        screen: FourScreen,
    }
},{
    swipeEnabled: true,//不能滑动切换
    animationEnabled: true,//不要切换动画
});

export default Tabs;