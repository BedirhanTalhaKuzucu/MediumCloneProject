import React, { useEffect, useState } from "react";
import UserListsAndStoriesSideBar from "../components/SideBars/UserListsAndStoriesSideBar";
import WriterPageSideBar from "../components/SideBars/WriterPageSideBar";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import YourStoriesMain from "../components/UserStoriesParts/YourStoriesMain";
import WriterStoriesMain from "../components/WriterStoriesParts/WriterStories";
import { useAuthStates } from "../contexts/AuthContext";
import { writerDetails } from "../helpers/userProfileInfo";

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
    const [writerDetail, setWriterDetail] = useState()

    useEffect(() => {
        const userId = userInfo?.userInfo?.profileInfoId;
        console.log(userId)
        if (userId) {
            writerDetails(setWriterDetail, userId,)
        }


    }, [userInfo])

    console.log(writerDetail)

    return (
        <div className="d-flex">
            <UDNavbar />
            <WriterStoriesMain authorInfo={authorInfo} />
            <WriterPageSideBar authorInfo={authorInfo} />
        </div>
    );
};

export default WriterPage;
