import React from "react";
import logo from "./assets/logo.svg";

interface ILogo extends React.Props<HTMLImageElement> {
  alt?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef(function LogoFooter(
  props: ILogo,
  ref?: React.Ref<HTMLImageElement> | null
) {
  const { alt = "RIF OS", ...other } = props;

  return <img src={logo} alt={alt} ref={ref} {...other} />;
});
