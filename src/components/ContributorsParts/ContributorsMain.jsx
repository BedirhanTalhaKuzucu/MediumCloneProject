import { useEffect, useState } from "react";
import ContributorsCard from "./ContributorsCard";
import { ContributorsStyles } from "./Contributors.styles";
import { LogoStyle } from "../UserDashboard/styles/UDNavbar.styles";
import Images from "../../assets/Images";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [githubInfo1, setGithubInfo1] = useState({
    avatar: "",
    username: "",
    name: "",
    bio: "",
    following: "",
    follower: "",
    public_repos: "",
  });
  const [githubInfo2, setGithubInfo2] = useState({
    avatar: "",
    username: "",
    name: "",
    bio: "",
    following: "",
    follower: "",
    public_repos: "",
  });
  const [githubInfo3, setGithubInfo3] = useState({
    avatar: "",
    username: "",
    name: "",
    bio: "",
    following: "",
    follower: "",
    public_repos: "",
  });

  const fetchFunc1 = () => {
    fetch("https://api.github.com/users/BedirhanTalhaKuzucu")
      .then((res) => res.json())
      .then((result) => {
        setGithubInfo1({
          avatar: result.avatar_url,
          username: result.login,
          name: result.name,
          bio: result.bio,
          following: result.following,
          follower: result.followers,
          public_repos: result.public_repos,
        });
      })
      .catch((err) => console.log(err));
  };
  const fetchFunc2 = () => {
    fetch("https://api.github.com/users/betulsmanav")
      .then((res) => res.json())
      .then((result) => {
        setGithubInfo2({
          avatar: result.avatar_url,
          username: result.login,
          name: result.name,
          bio: result.bio,
          following: result.following,
          follower: result.followers,
          public_repos: result.public_repos,
        });
      })
      .catch((err) => console.log(err));
  };
  const fetchFunc3 = () => {
    fetch("https://api.github.com/users/sule-ss")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.public_repos);
        setGithubInfo3({
          avatar: result.avatar_url,
          username: result.login,
          name: result.name,
          bio: result.bio,
          following: result.following,
          follower: result.followers,
          public_repos: result.public_repos,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFunc1();
    fetchFunc2();
    fetchFunc3();
  }, []);
  return (
    <ContributorsStyles>
      <header className="d-flex">
        <LogoStyle onClick={() => navigate("/home")}>
          <img
            src={Images.medium}
            alt="logo"
            style={{
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "10px",
            }}
          />
        </LogoStyle>
        <div className="container text-center">
          <h1 className="contTitle">CONTRUBUTORS</h1>
        </div>
        <a
          href="https://github.com/BedirhanTalhaKuzucu/MediumCloneProject"
          target="_blank"
          className="siteRepo"
        >
          The Repository Of The Project
        </a>
      </header>

      <div className="d-flex justify-content-around flex-wrap">
        {githubInfo1 && (
          <ContributorsCard
            image={githubInfo1.avatar}
            username={githubInfo1.username}
            name={githubInfo1.name}
            bio={githubInfo1.bio}
            follower={githubInfo1.follower}
            following={githubInfo1.following}
            public_repos={githubInfo1.public_repos}
          />
        )}
        {githubInfo2 && (
          <ContributorsCard
            image={githubInfo2.avatar}
            username={githubInfo2.username}
            name={githubInfo2.name}
            bio={githubInfo2.bio}
            follower={githubInfo2.follower}
            following={githubInfo2.following}
            public_repos={githubInfo2.public_repos}
          />
        )}
        {githubInfo3 && (
          <ContributorsCard
            image={githubInfo3.avatar}
            username={githubInfo3.username}
            name={githubInfo3.name}
            bio={githubInfo3.bio}
            follower={githubInfo3.follower}
            following={githubInfo3.following}
            public_repos={githubInfo3.public_repos}
          />
        )}
      </div>
    </ContributorsStyles>
  );
}

export default App;
