import {StackNavigator} from 'react-navigation'
import HomeScreen from "./HomeScreen";
import ListViewDemo from "./ListViewDemo";
import DetailScreen from "./DetailScreen";
import PropsScreen from "./PropsScreen";
import FlatListDemo from "./FlatListDemo";
import TabScreen from "./tab/TabScreen";

const Navigation = StackNavigator({
    Home: {screen: HomeScreen},
    List: {screen: ListViewDemo},
    Detail: {screen: DetailScreen},
    Props: {screen: PropsScreen},
    Flat: {screen: FlatListDemo},
    Tab: {screen: TabScreen}
});

export default Navigation;