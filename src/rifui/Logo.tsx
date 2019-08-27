import React from "react";
import logo from "./assets/logo.svg";

interface ILogo extends React.Props<HTMLImageElement> {
  alt?: string;
  width?: string | number;
  style?: React.CSSProperties;
}

export default React.forwardRef(function LogoFooter(
  props: ILogo,
  ref?: React.Ref<HTMLImageElement> | null
) {
  const { alt = "RIF OS", width = "100%", ...other } = props;

  return <img src={logo} alt={alt} width={width} ref={ref} {...other} />;
});
