import React, { useState, useEffect } from "react";
import { CardContainer } from "./styles/Following.styles";
import Images from "../../assets/Images";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHeartDislike } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { addSavedFunction } from "../../helpers/saveAndDeleteButtons";
import { addClapFunction } from "../../helpers/clapsAndCommnets";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { UserPageState } from "../../contexts/UserPageContext";

const ArticleCard = ({ data }) => {
  const navigate = useNavigate();
  //!okuma süresini hesaplamak için:
  const text = data.content;
  const wpm = 190; // ortalama dakikada okunan kelime sayısı
  const words = text.trim().split(" ").length;
  const time = Math.ceil(words / wpm);
  //!

  const { setSavedArticle, savedArticle } = UserPageState();
  const [addSave, setaddSave] = useState(false);
  const [addClap, setAddClap] = useState(false);
  const [authUser, setauthUser] = useState("");

  const addClapHandle = () => {
    const tokenKey = authUser.key;

    if (addClap) {
      addClapFunction(data.id, tokenKey, addClap);
      setAddClap(false);
    } else {
      addClapFunction(data.id, tokenKey, addClap);
      setAddClap(true);
    }
  };

  const addSaveHandle = () => {
    const tokenKey = authUser.key;

    if (addSave) {
      addSavedFunction(data.id, tokenKey, addSave);
      setaddSave(false);
      setSavedArticle(savedArticle.filter(item => item.story !== data.id))
    } else {
      addSavedFunction(data.id, tokenKey, addSave);
      setaddSave(true);
      console.log(data.creatorInfo.first_name);
      let newSaved = {
        story : data.id,
        content: data.content,
        storyImage : data.image,
        title : data.title,
        creatorInfo : {
          email: data.creatorInfo.email,
          first_name: data.creatorInfo.first_name,
          followedCount:  data.creatorInfo.followedCount,
          last_name: data.creatorInfo.last_name,
          short_bio: data.creatorInfo.short_bio,
          userProfilId: data.creatorInfo.userId,
          user_img: data.creatorInfo.user_img
        }
      }
      setSavedArticle([...savedArticle, newSaved ])
    }
    // setSavedArticle([])
  };

  useEffect(() => {
    let userInfo = sessionStorage.getItem("user_info");
    userInfo = JSON.parse(userInfo);
    setauthUser(userInfo);
    controlClapFunction(userInfo);
    controlSavedArticleFunction(userInfo);
  }, []);

  const controlClapFunction = (userInfo) => {
    let clapList = [];
    data.clap_story.map((item) => {
      clapList.push(item.user);
    });

    const userId = userInfo.userInfo.userId;

    // clapList.includes(userId)
    if (clapList.includes(userId)) {
      setAddClap(true);
    } else {
      setAddClap(false);
    }
  };

  const controlSavedArticleFunction = (userInfo) => {
    
    let savedList = [];
    savedArticle.map((item) => {
      savedList.push( item.story );
    });
    
    if (savedList.includes(data.id)) {
      setaddSave(true);
    } else {
      setaddSave(false);
    }

  };

  const tagDetailFunc = () => {
    // console.log(data?.tags[0]);
    const tagDetail = data?.tags[0];
    navigate(`/tag/${tagDetail?.id}`);
  };

  return (
    <CardContainer>
      <Helmet>
        <title>{data.title.replace(".", "")}</title>
      </Helmet>
      <section className="authorInf">
        <img src={data.creatorInfo.user_img} alt="" className="pic" />
        <div onClick={() => navigate(`/writer/stories/${data.creatorInfo.userId}`)} className="fullName" >
          {data.creatorInfo.first_name} {data.creatorInfo.last_name}{" "}
        </div>
        <div className="createdDate">{data.publish_date.split("T")[0]} </div>
      </section>

      <section className="articleInf">
        <nav className="part1">
          <Link to={`/story/${data.id}`} className="title">
            {data.title.replace(".", "")}
          </Link>{" "}
          <Link to={`/story/${data.id}`} className="articlePart">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content.slice(0, 170) + "...",
              }}
            />
          </Link>
          <div className="specialDetail">
            <div>
              <div className="tag" onClick={() => tagDetailFunc()}>
                {data?.tags[0]?.tag_name}
              </div>
              <div className="readTime">{time} min</div>
              {/* <div className="desc">Based on your following</div> */}
            </div>
            <div className="icons">
              {addSave ? (
                <BsBookmarkFill onClick={addSaveHandle} />
              ) : (
                <img
                  src={Images.bookmarks}
                  alt="icon"
                  onClick={addSaveHandle}
                />
              )}
              {addClap ? (
                <IoIosHeartDislike onClick={addClapHandle} />
              ) : (
                <img src={Images.clap} alt="icon" onClick={addClapHandle} />
              )}
              <img src={Images.more} alt="icon" />
            </div>
          </div>
        </nav>
        <nav className="part2">
          <img src={data.image} alt="" />
        </nav>
      </section>
    </CardContainer>
  );
};

ArticleCard.defaultProps = {
  data: {
    title: "",
    content: "",
    image: "",
    tags: [],
    publish_date: "",
    creatorInfo: {},
    clap_story: [],
    saved_users: [],
  },
};
ArticleCard.propTypes = {
  data: PropTypes.object,
};

export default ArticleCard;
