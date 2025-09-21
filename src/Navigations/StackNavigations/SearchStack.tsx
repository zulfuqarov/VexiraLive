import GeneralStack from "../General/GeneralStack"
import { RootSearchStackParaList } from "../../type/NavigationsType/NavType"
import SearchScreen from "../../screens/SearchScreen"

const SearchStack = () => {
    return (
        <GeneralStack<RootSearchStackParaList>
            screens={[
                { screenName: "SearchScreen", component: SearchScreen }
            ]}
        />
    )
}

export default SearchStack
