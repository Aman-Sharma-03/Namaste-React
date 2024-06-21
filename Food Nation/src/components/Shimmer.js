import React from "react";
import { ShimmerButton, ShimmerPostList } from "react-shimmer-effects"; 

const Shimmer = () => {
    return (
      <>
        <ShimmerButton size="lg" width={400}/>
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />;
      </>
    );
};

export default Shimmer;