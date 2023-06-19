import React from 'react';
import styled from 'styled-components';

import type { VideoListItem } from '../../apis/models/VideoListItem';

interface VideoProps {
  data: VideoListItem;
}

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const VideoPlayer = styled.iframe`
  width: 100%;
  max-width: 100%;
  height: 200px;
  
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 300px;
  }
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 100%;
  text-align: left;

  @media screen and (min-width: 768px) {
    display: block;
    width: 50%;
    padding: 0 24px 24px;
  }
`;

const VideoTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 0;
`;

const VideoDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical; 
  overflow: hidden;
`;


const Video: React.FC<VideoProps> = ({ data }) => {
  const videoUrl = `https://www.youtube.com/embed/${data.video.id}`;

  return (
    <VideoWrapper>
      <VideoPlayer src={videoUrl} allowFullScreen />
      <VideoInfo>
        <VideoTitle>{data.video.snippet.title}</VideoTitle>
        <VideoDescription>Shared by: {data.shared_by.email}</VideoDescription>
        <VideoDescription>Description: {data.video.snippet.description}</VideoDescription>
      </VideoInfo>
    </VideoWrapper>
  );
};

export default Video;