import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams, Link } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import { Video, Loader } from './index';
import { BsHeartFill } from 'react-icons/bs';

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

  if (!videos?.length) return <Loader />;

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
        <div className="desc-cont">
          <div className="video-channel">
            <Link to={`/channel/${videoDetail.snippet.channelId}`}>
              {videoDetail.snippet.channelTitle}
            </Link>
          </div>
          <h2 className="video-title">{videoDetail.snippet.title}</h2>
          <div className="count">
            <div className="view">
              조회수 : {videoDetail.statistics?.viewCount}회
            </div>
            <div className="like">
              <BsHeartFill />
              {videoDetail.statistics?.likeCount}
            </div>
          </div>
        </div>
      </div>
      <section className="video__list">
        <Video videos={videos} layout="colums" />
      </section>
    </div>
  );
};

export default VideoConts;
