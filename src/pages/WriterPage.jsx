import React, { useEffect, useState } from "react";
import WriterPageSideBar from "../components/SideBars/WriterPageSideBar";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import WriterStoriesMain from "../components/WriterStoriesParts/WriterStories";
import { useAuthStates } from "../contexts/AuthContext";
import { writerDetails } from "../helpers/userProfileInfo";
import Images from "../assets/Images";
import { useParams } from "react-router-dom";


const WriterPage = () => {

    const [authorDetail, setAuthorDetail] = useState()
    const [storiesDetail, setStoriesDetail] = useState()
    const { id } = useParams();


    useEffect(() => {
        // const userId = userInfo?.userInfo?.profileInfoId;
        if (id) {
            console.log(id)
            writerDetails(setAuthorDetail, setStoriesDetail, id)
        }

    }, [id])

    const updateDetails = () => {
        writerDetails(setAuthorDetail, setStoriesDetail, id);
      };

    return (
        <div className="d-flex">
            <UDNavbar />
            {authorDetail ?
                <WriterStoriesMain authorInfo={authorDetail} storiesDetail={storiesDetail} />
                :
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
                    <img src={Images.loading} alt="loading gif" />
                </div>
            }
            {authorDetail ? <WriterPageSideBar updateDetails= {updateDetails} authorInfo={authorDetail } /> :  ""}
        </div>
    );
};

export default WriterPage;
