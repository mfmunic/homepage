import React from "react";

export const ResumeDisplay = () => {
  return (
    <div id="resumeDisplay">
      <iframe src={require("./texts/resume.pdf")} height="100%" width="100%" title="myFrame" id="resumeIframe" />
    </div>
  );
};
