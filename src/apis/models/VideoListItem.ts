import type { Video } from './Video'

interface SharedBy {
  display_name: string;
  email: string;
  id: string;
}

export interface VideoListItem {
  id: string;
  shared_at: number;
  shared_by: SharedBy;
  video: Video;
}