import React from "react";

function Start({ data }: any) {
  return (
    <div className="content__container">
      <div className="startPage__box">
        <div className="box__image">
          <img src={data.photos.author} alt="Author selfie" />
        </div>
        <div>jakies teksty</div>
      </div>
    </div>
  );
}

export default Start;
