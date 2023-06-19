
interface Thumbnails {
  height: number;
  url: string;
  width: number;
}

export interface Video {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: Thumbnails;
      high: Thumbnails;
      maxres: Thumbnails;
      medium: Thumbnails;
      standard: Thumbnails;
    };
    title: string;
  };
}