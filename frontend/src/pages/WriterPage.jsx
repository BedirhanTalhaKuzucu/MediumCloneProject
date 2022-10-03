import React, { useEffect, useState } from "react";
import WriterPageSideBar from "../components/SideBars/WriterPageSideBar";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import WriterStoriesMain from "../components/WriterStoriesParts/WriterStories";
import { useAuthStates } from "../contexts/AuthContext";
import { writerDetails } from "../helpers/userProfileInfo";
import Images from "../assets/Images";
import { useParams } from "react-router-dom";



const authorInfo = {
    first_name: "ferdi",
    last_name: "tayfur",
    user_img: "https://www.biyografi.info/personpicture-fb/ferditayfur.jpg",
    short_bio: "ses zanaatkarı",
    followedCount: 50,
    userId: 22
}

const WriterPage = () => {

    const { userInfo } = useAuthStates()
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
            {authorDetail ? <WriterPageSideBar authorInfo={authorDetail ? authorDetail : "" } /> :  ""}
        </div>
    );
};

export default WriterPage;
