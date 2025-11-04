import { VideoType } from '../ApiType/VideoType';

export type RootHomeStackParaList = {
  HomeScreen: undefined;
  WatchNawScreen: {
    stream_id: number;
    data: VideoType[] | undefined;
  };
};

export type RootProfileStackParaList = {
  ProfileScreen: undefined;
};

export type RootSearchStackParaList = {
  SearchScreen: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
};
