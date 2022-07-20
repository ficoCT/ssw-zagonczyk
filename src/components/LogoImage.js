import Image from "../assets/Logo.png";

function LogoImage() {
  return (
      <img src={Image} alt="Logo" className="navbar__logo" />
  );
}

export default LogoImage;
