import { MutatingDots } from "react-loader-spinner";
import React from "react";

function Loading(props) {
  const { size, color, classname, visible, type } = props;
  return (
    <>
      <MutatingDots
        height={size}
        width={size}
        color={color}
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass={classname}
        visible={visible}
      />
    </>
  );
}

export default React.memo(Loading);
