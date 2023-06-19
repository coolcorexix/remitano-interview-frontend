import { flow, makeAutoObservable } from 'mobx';

import { VideoListItem } from '../apis/models/VideoListItem';
import { videoService } from '../apis/videoService';
import type { getVideoListParams } from '../apis/videoService';

export class VideoStore {
  videoList: VideoListItem[] = [];
  isLoading = false;
  errorMsg = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchVideoList = flow(function* (this: VideoStore, payload: getVideoListParams) {
    this.isLoading = true;

    try {
      const result: VideoListItem[] = yield videoService.getVideoList(payload);
      this.videoList = result;
    } catch (error: any) {
      this.errorMsg = error?.data?.error || 'Somethings went wrong, please try again';
    } finally {
      this.isLoading = false;
    }
  });
}