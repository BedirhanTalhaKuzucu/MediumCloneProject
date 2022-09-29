import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Cards from "../components/Cards/Cards";
import Categorys from "../components/HomeTags/Categorys";
import { useAppState } from "../contexts/AppContext";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import Images from "../assets/Images";
import { HomeStyles } from "./styles/Home.styles";

function Home() {
  const { data, trendList } = useAppState();
  // console.log(data);

  return (
    <>
      <SignIn />
      <LogIn />
      <Header />
      <HomeStyles>
        <Sidebar trendList={trendList} />
        <div className="d-flex rowStyle">
          <div className="categories">
            <Categorys />
          </div>
          <div className="cards">
            {data ? (
              data.map((blogCard) => (
                <Cards blog={blogCard} key={blogCard.id} />
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
      </HomeStyles>
    </>
  );
}

export default Home;

