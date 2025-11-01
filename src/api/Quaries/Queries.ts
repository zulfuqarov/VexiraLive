import { useQuery } from '@tanstack/react-query';
import {
  GetVideoCategories,
  GetVideosByCategoryId,
} from '../Requests/Video/Video';

import { VideoCategoryType, VideoType } from '../../type/ApiType/VideoType';
const useVideoCategories = () => {
  return useQuery<VideoCategoryType[]>({
    queryKey: ['videoCategories'],
    queryFn: GetVideoCategories,
  });
};

const useGetVideosByCategoryId = (categoryId: string) => {
  return useQuery<VideoType[]>({
    queryKey: ['VideosByCategoryId', categoryId],
    queryFn: () => GetVideosByCategoryId(categoryId),
  });
};

export { useVideoCategories, useGetVideosByCategoryId };
