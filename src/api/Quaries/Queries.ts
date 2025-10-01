import { useQuery } from "@tanstack/react-query";
import { GetVideoCategories } from "../Requests/Video/Video";
import { VideoCategoryType } from "../../type/ApiType/VideoType";
export const useVideoCategories = () => {
    return useQuery<VideoCategoryType[]>({
        queryKey: ['videoCategories'],
        queryFn: GetVideoCategories,
    })
}