import React from "react";

type PropsIcon = {
  width: string;
  height: string;
  color: string;
  transform: string;
} & typeof defaultProps;

const defaultProps = {
  width: '100%',
	height: '100%',
	color: '#ffffff',
	transform: ''
};

type StyleIcon = {
  width: string;
  height: string;
  transform: string;
	color: string;
  display: string;
  flexFlow: string;
  justifyContent: string;
  alignItems: string;
};

// 진행중
//https://infoscis.github.io/2017/05/20/TypeScript-handbook-interfaces/

// Google Plus
const Icon = ({ width, height, color, transform }: PropsIcon) => {
  return (
    <div
      style={
        {
          width: `${width}`,
          height: `${height}`,
          transform: `${transform}`,
					color: `${color}`,
          display: "flexbox",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center"
        } as StyleIcon
      }
    >
      <svg
        width="100%"
        height="100%"
        fill="currentColor"
        className=""
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
      </svg>
    </div>
  );
};
Icon.defaultProps = defaultProps;
//

export default Icon;
