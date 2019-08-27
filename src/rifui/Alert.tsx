import React from "react";

interface IAlert extends React.Props<HTMLDivElement> {
  variant?:
    | "primary"
    | "secondary"
    | "info"
    | "light"
    | "success"
    | "danger"
    | "warning";
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef(function Alert(
  props: IAlert,
  ref?: React.Ref<HTMLDivElement> | null
) {
  const { className, variant = "primary", ...other } = props;

  return (
    <div
      className={`alert alert-${props.variant} ${className}`}
      ref={ref}
      {...other}
    />
  );
});
