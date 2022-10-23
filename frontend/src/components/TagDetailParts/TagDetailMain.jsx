import { useLocation, useNavigate } from "react-router-dom";
import Images from "../../assets/Images";
import ArticleCard from "../UserDashboard/ArticleCard";
import { MainStyle } from "./styles/TagDetailMain.styles";
import { followTag } from "../../helpers/tags";
import { useAuthStates } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";


const TagDetailMain = ({tagDetails, tagId}) => {
  console.log(tagDetails)
  let data = tagDetails;
  const navigate = useNavigate();
  const [token, settoken] = useState()
  const { getToken } = useAuthStates();

  useEffect(() => {
    const gToken = getToken()
    settoken(gToken)
  }, [])
  
  return (
    <MainStyle>
      <div className="tagmain">
        <div className="title">
          <img src={Images.tag} alt="" />
          <h1>{data.tag_name}</h1>
        </div>
        <div>
          <button className="btn btn-outline-success" onClick={ () => followTag(token, tagId ) } > following</button>
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
