import React, { useState, useEffect } from "react";
import { CardContainer } from "../UserDashboard/styles/Following.styles";
import Images from "../../assets/Images";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";
import { addSavedFunction } from "../../helpers/saveAndDeleteButtons";
import { Helmet } from "react-helmet";
import { UserPageState } from "../../contexts/UserPageContext";

const SavedArticleCards = ({ data }) => {
  // console.log(data)
  const navigate = useNavigate();
  const { savedArticle, setSavedArticle } = UserPageState();

  //!okuma süresini hesaplamak için:
  const text = data.content;
  const wpm = 190; // ortalama dakikada okunan kelime sayısı
  const words = text.trim().split(" ").length;
  const time = Math.ceil(words / wpm);
  //!

  const [addSave, setaddSave] = useState(true);
  const [authUser, setauthUser] = useState("");

  const deleteSavedArticle = (cardId) => {
    setSavedArticle(savedArticle.filter(item => item.story !== cardId))
  }

  const addSaveHandle = () => {
    const tokenKey = authUser.key;
    addSavedFunction(data.story, tokenKey, addSave);
    deleteSavedArticle(data.story)

  };

  useEffect(() => {
    let userInfo = sessionStorage.getItem("user_info");
    userInfo = JSON.parse(userInfo);
    setauthUser(userInfo);
  }, []);




  return (
    <CardContainer>
      <Helmet>
        <title>{data.title.replace(".", "")}</title>
      </Helmet>
      <section className="authorInf">
        <img src={data.creatorInfo.user_img} alt="" className="pic" />
        <div onClick={() => navigate(`/writer/stories/${data.creatorInfo.userProfilId}`)} className="fullName" >
          {data.creatorInfo.first_name} {data.creatorInfo.last_name}{" "}
        </div>
        {/* <div className="createdDate">{data.publish_date.split("T")[0]} </div> */}
      </section>

      <section className="articleInf">
        <nav className="part1">
          <Link to={`/story/${data.story}`} className="title">
            {data.title.replace(".", "")}
          </Link>{" "}
          <Link to={`/story/${data.story}`} className="articlePart">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content.slice(0, 170) + "...",
              }}
            />
          </Link>
          <div className="specialDetail">
            <div>
              <div className="readTime">{time} min</div>
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
              <img src={Images.more} alt="icon" />
            </div>
          </div>
        </nav>
        <nav className="part2">
          <img src={data.storyImage} alt="" />
        </nav>
      </section>
    </CardContainer>
  );
};

export default SavedArticleCards;
