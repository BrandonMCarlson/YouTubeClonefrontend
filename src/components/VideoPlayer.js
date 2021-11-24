import axios from "axios";
import { useEffect, useState } from "react";

function Vid() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    await axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCsOq3l0LGxQjYLF_H8hGQdoqAVmluaBeY&maxResults=10&part=snippet&id=SQ_bQVa1QhE"
      )
      .then((res) => {
        setVideos(res.data.items);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      {videos.map((vid, i) => (
        <li key={i}>{vid.snippet.title}</li>
      ))}
    </div>
  );
}

export default Vid;
