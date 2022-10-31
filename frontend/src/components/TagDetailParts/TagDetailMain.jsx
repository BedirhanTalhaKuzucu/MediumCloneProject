import { useNavigate } from "react-router-dom";
import Images from "../../assets/Images";
import ArticleCard from "../UserDashboard/ArticleCard";
import { MainStyle } from "./styles/TagDetailMain.styles";
import { followTag, unfollowTag } from "../../helpers/tags";
import { useAuthStates } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { UserPageState } from "../../contexts/UserPageContext";
import { userDetails } from "../../helpers/userProfileInfo";

const TagDetailMain = ({ tagDetails, tagId }) => {

  const { userDetail, setUserArticle, setUserDetail } = UserPageState();

  let data = tagDetails;
  const navigate = useNavigate();
  const [token, settoken] = useState()
  const { getToken } = useAuthStates();
  const [followOrFollowing, setfollowOrFollowing] = useState(false)


  const getUserId = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const userId = get_session_user_info?.userInfo?.profileInfoId;
    return userId;
  };

  useEffect(() => {
    if (userDetail && tagDetails ) {
      let check = userDetail?.user?.followed_topics.filter(item => item === tagDetails?.tag_name);
      if (check.length > 0) {
        setfollowOrFollowing(true)
      }
    }

    if (userDetail === undefined) {
      const userId = getUserId();
      userDetails(setUserDetail, userId, setUserArticle)
    }

    const gToken = getToken()
    settoken(gToken)
  }, [userDetail, tagDetails])


  const followFunction = () => {
    setfollowOrFollowing(true)
    followTag(token, tagId)
  }

  const unFollowFunction = () => {
    setfollowOrFollowing(false)
    unfollowTag(token, tagId)
  }

  return (
    <MainStyle>
      <div className="tagmain">
        <div className="title">
          <img src={Images.tag} alt="" />
          <h1>{data.tag_name}</h1>
        </div>
        <div>
          {
            followOrFollowing ?
              <button className="btn btn-success" onClick={() => unFollowFunction()} > following</button>
              :
              <button className="btn btn-outline-success"  onClick={() => followFunction()} > follow</button>
              
          }
          <button
            className="btn btn-outline-success"
            onClick={() => navigate("/write")}
          >
            start writing
          </button>
        </div>
        <hr />
        <div>
          {data ? (
            data?.stories.map((item) => (
              <ArticleCard key={item.id} data={item} />
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Images.loading} alt="loading gif" />
            </div>
          )}
        </div>
      </div>
    </MainStyle>
  );
};

export default TagDetailMain;
