import GeneralStack from "../General/GeneralStack"
import { RootHomeStackParaList } from "../../type/NavigationsType/NavType"
import HomeScreen from "../../screens/HomeScreen"
import WatchNawScreen from "../../screens/WatchNawScreen"
const HomeStack = () => {
    return (
        <GeneralStack<RootHomeStackParaList>
            screens={[
                { screenName: "HomeScreen", component: HomeScreen },
                { screenName: "WatchNawScreen", component: WatchNawScreen }
            ]}
        />

    )
}

export default HomeStack

