import Video from "../assets/Zagonczyk.mp4";

function HomeVideo() {
  return (
      <div className="container__video">
        <video autoPlay loop muted src={Video} type='video/mp4' />
      </div>
  );
}

export default HomeVideo;
