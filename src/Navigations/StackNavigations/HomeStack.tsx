import GeneralStack from "../General/GeneralStack"
import { RootHomeStackParaList } from "../../type/NavigationsType/NavType"
import HomeScreen from "../../screens/HomeScreen"
const HomeStack = () => {
    return (
        <GeneralStack<RootHomeStackParaList>
            screens={[
                { screenName: "HomeScreen", component: HomeScreen }
            ]}
        />

    )
}

export default HomeStack

