declare module "*.module.scss" {
  const classNames: { [className: string]: string };
  export = classNames;
}

// declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.svg" {
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const PLATFORM: "desktop" | "mobile";
