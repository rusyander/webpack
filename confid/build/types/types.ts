export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
}

export type BuildMode = "development" | "production";
export type BuildPlatform = "desktop" | "mobile";

export interface BuildOptions {
  port?: number;
  paths: BuildPaths;
  mode?: BuildMode;
  analyzer?: boolean;
  platform?: BuildPlatform;
}
