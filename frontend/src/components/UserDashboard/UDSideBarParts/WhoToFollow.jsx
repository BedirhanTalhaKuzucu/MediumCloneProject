import React, { useEffect, useState } from "react";
import Images from "../../../assets/Images";
import { UserFollowFunc } from "../../../helpers/apiRequests";
import { UserFollowStyle } from "./styles/WhoToFollow.styles";
import { useAppState } from "../../../contexts/AppContext";

const WhoToFollow = () => {
  const { users} = useAppState()


  // useEffect(() => {
  //   UserFollowFunc(setUsers);
  //   console.log(users);
  // }, []);

  return (
    <UserFollowStyle>
      <p>Who to follow</p>

      {users ? (
        users?.map((data) => {
          return (
            <div className="user">
              <img src={data.profile_photo} alt="" />
              <div className="name-shortBio">
                <div className="name">
                  {data.user.first_name + " " + data.user.last_name}
                </div>
                <div className="shortBio">
                  {data.short_bio ||
                    "A coffee obsessed, Netflix binge watching cat mama..."}
                </div>
              </div>
              <button className="btn btn-outline-success follow">follow</button>
            </div>
          );
        })
      ) : (
        <img src={Images.loading} alt="loading gif" />
      )}
    </UserFollowStyle>
  );
};

export default WhoToFollow;
