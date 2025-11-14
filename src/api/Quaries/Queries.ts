import { useQuery } from '@tanstack/react-query';
import {
  GetVideoCategories,
  GetVideosByCategoryId,
  GetAllVideos,
} from '../Requests/Video/Video';

import { VideoCategoryType, VideoType } from '../../type/ApiType/VideoType';

const useVideoCategories = () => {
  return useQuery<VideoCategoryType[]>({
    queryKey: ['videoCategories'],
    queryFn: async () => {
      const Category = await GetVideoCategories();
      return Category.filter(one => one.category_name !== 'IPTV_GEO');
    },
  });
};

const useGetVideosByCategoryId = (categoryId: string) => {
  return useQuery<VideoType[]>({
    queryKey: ['VideosByCategoryId', categoryId],
    queryFn: () => GetVideosByCategoryId(categoryId),
  });
};

const useGetVideoAll = () => {
  return useQuery<{
    allVideos: VideoType[];
    randomVideo: VideoType[];
  }>({
    queryKey: ['VideoAll'],
    queryFn: async () => {
      const allVideos = await GetAllVideos();

      const shuffled = allVideos.sort(() => 0.5 - Math.random());
      const randomTen = shuffled
        .filter(one => one.category_id !== '16')
        .slice(0, 10);

      return {
        allVideos,
        randomVideo: randomTen,
      };
    },
  });
};

export { useVideoCategories, useGetVideosByCategoryId, useGetVideoAll };
