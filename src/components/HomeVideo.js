import Video from "../assets/ProjektZagonczyk.mp4";

function HomeVideo() {
  return (
      <video autoPlay loop muted src={Video} type='video/mp4' className="start__video"/>
  );
}

export default HomeVideo;
