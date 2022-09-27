import React from "react";

const ContributorsCard = ({
  image,
  name,
  username,
  bio,
  follower,
  following,
  public_repos,
}) => {
  console.log(follower);
  return (
    <a
      href={`https://github.com/${username}`}
      style={{ textDecoration: "none" }}
      target="_blank"
    >
      <div className="container  h-100">
        <div className="row">
          <div className="">
            <div className="profile-card-4 text-center">
              <img src={image} className="img " />
              <div className="profile-content">
                <div className="profile-description">
                  <div className="profile-name">
                    {name}
                    <p>@{username}</p>
                  </div>
                  {bio}
                </div>
                <div className=" d-flex justify-content-around">
                  <div className="profile-overview">
                    <p>REPOS</p>
                    <h4>{public_repos}</h4>
                  </div>

                  <div className="profile-overview">
                    <p>FOLLOWERS</p>
                    <h4>{follower}</h4>
                  </div>

                  <div className="profile-overview">
                    <p>FOLLOWING</p>
                    <h4>{following}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ContributorsCard;
