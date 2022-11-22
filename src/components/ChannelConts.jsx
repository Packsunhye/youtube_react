import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';

import { Video } from './index';

const ChannelConts = () => {
  const [channelDetail, setchannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`);
      // console.log(data?.items[0]);
      setchannelDetail(data?.items[0]);

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

  return (
    <section id="channelConts">
      <div
        className="channel__header"
        style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        }}
      ></div>
      <div className="channel__info">
        <img
          src={channelDetail?.snippet?.thumbnails?.medium?.url}
          alt={channelDetail?.snippet?.title}
        />
        <h3>{channelDetail?.snippet?.title}</h3>
        <div className="staic-sub">
          <span>
            구독자 수 : {channelDetail?.statistics?.subscriberCount} 명
          </span>
          <span>
            총 비디오 갯수 : {channelDetail?.statistics?.videoCount} 개
          </span>
          <span>비디오 카운트 : {channelDetail?.statistics?.viewCount} 번</span>
        </div>
      </div>
      <div className="channel__videos">
        <Video videos={videos} />
      </div>
    </section>
  );
};

export default ChannelConts;
