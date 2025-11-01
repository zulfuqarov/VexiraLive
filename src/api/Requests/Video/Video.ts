import api from '../../GlobalApi';
import { APIEndPoints } from '../../ApiEndPoints/EndPoints';
import { VideoCategoryType, VideoType } from '../../../type/ApiType/VideoType';

export const GetVideoCategories = async (): Promise<VideoCategoryType[]> => {
  const response = await api.get<VideoCategoryType[]>(
    `player_api.php?username=${process.env.API_USERNAME}&password=${process.env.API_PASSWORD}&action=${APIEndPoints.Api_Categories}`,
  );
  return response.data;
};

export const GetAllVideos = async (): Promise<VideoType[]> => {
  const response = await api.get<VideoType[]>(
    `player_api.php?username=${process.env.API_USERNAME}&password=${process.env.API_PASSWORD}&action=${APIEndPoints.Api_All}`,
  );
  return response.data;
};

export const GetVideosByCategoryId = async (
  categoryId: string,
): Promise<VideoType[]> => {
  const response = await api.get<VideoType[]>(
    `player_api.php?username=${process.env.API_USERNAME}&password=${process.env.API_PASSWORD}&action=${APIEndPoints.Api_Category_ById}${categoryId}`,
  );
  return response.data;
};
