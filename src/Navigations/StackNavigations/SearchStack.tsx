import GeneralStack from '../General/GeneralStack';
import { RootSearchStackParaList } from '../../type/NavigationsType/NavType';
import SearchScreen from '../../screens/SearchScreen';
import WatchNawScreen from '../../screens/WatchNawScreen';

const SearchStack = () => {
  return (
    <GeneralStack<RootSearchStackParaList>
      screens={[
        { screenName: 'SearchScreen', component: SearchScreen },
        { screenName: 'WatchNawScreen', component: WatchNawScreen },
      ]}
    />
  );
};

export default SearchStack;
