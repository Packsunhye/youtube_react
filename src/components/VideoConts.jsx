import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: viewCount,
  //   likeCount,
  // } = videoDetail;

  return (
    <div className="vedioCont">
      <div className="video__play">
        <div className="video-box">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            className="player"
          />
        </div>
        <h2 className="video-title">이건 고양이인가 강아지인가</h2>
      </div>
      <section className="video__list">
        <div className="box">
          <div className="list-box"></div>
          <div className="list-name"></div>
        </div>
      </section>
    </div>
  );
};

export default VideoConts;
