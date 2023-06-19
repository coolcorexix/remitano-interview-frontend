
import { useState } from "react";
import { videoService } from "../../apis/videoService";
import { history } from "../app/BrowserRouter";
import { Loading } from "../../components/Loading";

import * as Sc from './Share.styled';

function Share() {
  const [videoId, setVideoId] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleVideoIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoId(event.target.value);
  };

  const onSharing = async () => {
    setIsLoading(true);
    try {
      const result = await videoService.shareVideo({
        video_id: videoId,
      });
      if(result.id) {
        history.push('/');
      }
    } catch(error: any) {
      console.log(error)
      setErrMsg(error?.data?.error || 'Somethings went wrong, please try again')
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading ? <Loading /> : (
        <Sc.SharingBox>
          <h1>Share a Youtube video</h1>
          <input
            type="text"
            value={videoId}
            onChange={handleVideoIdChange}
            placeholder="video id"
          />
          <button onClick={onSharing}>share</button>
          {errMsg && <div className="err-msg">{errMsg}</div>}
        </Sc.SharingBox>
      )}
    </>
  )
}

export default Share