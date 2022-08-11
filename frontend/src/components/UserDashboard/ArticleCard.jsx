import React, { useState, useEffect } from "react";
import { CardContainer } from "./styles/Following.styles";
import Images from "../../assets/Images";
import { Link } from "react-router-dom";
import { IoIosHeartDislike } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import {addClapFunction, addSavedFunction } from "../../helpers/apiRequests"

const ArticleCard = ({data}) => {

  const [addSave, setaddSave] = useState(false)
  const [addClap, setAddClap] = useState(false)
  const [authUser, setauthUser] = useState("")

  const addClapHandle = () => {
    const  tokenKey = authUser.key

    if (addClap) {
      addClapFunction(data.id, tokenKey, addClap)
      setAddClap(false)
    }else{
      addClapFunction(data.id, tokenKey, addClap)
      setAddClap(true)
    }
  }

  const addSaveHandle = () => {
    const  tokenKey = authUser.key

    if (addSave) {
      addSavedFunction(data.id, tokenKey, addSave)
      setaddSave(false)
    }else{
      addSavedFunction(data.id, tokenKey, addSave)
      setaddSave(true)
    }
  }

  useEffect(() => {
    let userInfo = sessionStorage.getItem("user_info")
    userInfo = JSON.parse(userInfo);
    setauthUser(userInfo)
    controlClapFunction(userInfo)
    controlSavedArticleFunction(userInfo)
  }, [])
  

  const controlClapFunction = (userInfo) => {
    let clapList = []
    data.clap_story.map(item => {
      clapList.push(item.user)
    })

    const userId = userInfo.userInfo.userId;

    // clapList.includes(userId)
    if (clapList.includes(userId)){
      setAddClap(true)
    }else{
      setAddClap(false)
    }
  }

  const controlSavedArticleFunction = (userInfo) => {
    let savedList = []
    data.saved_users.map(item => {
      savedList.push(item.userId)
    })
    // console.log(savedList)

    const userId = userInfo.userInfo.userId;

    // clapList.includes(userId)
    if (savedList.includes(userId)){
      setaddSave(true)
    }else{
      setaddSave(false)
    }
  }

  return (
    <CardContainer>
      <section className="authorInf">
        <img
          src={data.creatorInfo.user_img}
          alt=""
          className="pic"
        />
        <div className="fullName"> {data.creatorInfo.first_name} {data.creatorInfo.last_name} </div>
        <div className="createdDate">{data.publish_date.split('T')[0]} </div>
      </section>

      <section className="articleInf">
        <nav className="part1">
          <Link to="/story"  state={{ details: data }} className="title">
            {data.title}
          </Link>
          <div className="articlePart">
            {data.content}
          </div>
          <div className="specialDetail">
            <div>
              <div className="tag">Portfolio</div>
              <div className="readTime">4 min read</div>
              <div className="desc">Based on your following</div>
            </div>
            <div className="icons">
              { addSave ? 
                <BsBookmarkFill onClick={addSaveHandle}  />
                :
                <img src={Images.bookmarks} alt="icon" onClick={addSaveHandle} />
              }
              { addClap ? 
                < IoIosHeartDislike onClick={ addClapHandle } />
                :
                <img src={Images.clap} alt="icon" onClick={ addClapHandle } />
              }
              <img src={Images.more} alt="icon" />
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
        <nav className="part2">
          <img
            src={data.image}
            alt=""
          />
        </nav>
      </section>
    </CardContainer>
  );
};

export default ArticleCard;
