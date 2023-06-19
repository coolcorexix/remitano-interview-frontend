import { apiClient } from '../helpers/httpClient';

export interface getVideoListParams {
  page: number;
  page_size: number;
}

export interface shareVideoParams {
  video_id: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const videoService = {
  getVideoList(params: getVideoListParams) {
    return apiClient
      .get(API_URL + '/videos/share/list', {params})
      .then(({data}) => data)
      .catch((error) => {
        throw error.response;
      });
  },
  shareVideo(params: shareVideoParams) {
    return apiClient
      .post(API_URL + '/videos/share/create', params )
      .then(({data}) => data)
      .catch((error) => {
        throw error.response;
      });
  },
};
