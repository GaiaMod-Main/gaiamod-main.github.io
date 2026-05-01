import React, { useEffect } from 'react';

const LikeButton = () => {
  useEffect(() => {
    if (document.getElementById("likebtn_wjs")) return;
    const script = document.createElement("script");
    script.async = true;
    script.id = "likebtn_wjs";
    script.src = "//w.likebtn.com/js/w/widget.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);

  return (
    <span className="likebtn-wrapper" data-theme="custom" data-vert="true" data-show_like_label="false"></span>
  );
};

export default LikeButton;
