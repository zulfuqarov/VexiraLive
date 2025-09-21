import GeneralStack from "../General/GeneralStack"
import { RootProfileStackParaList } from "../../type/NavigationsType/NavType"
import ProfileScreen from "../../screens/ProfileScreen"

const ProfileStack = () => {
  return (
    <GeneralStack<RootProfileStackParaList>
      screens={[
        { screenName: "ProfileScreen", component: ProfileScreen }
      ]}
    />
  )
}

export default ProfileStack
