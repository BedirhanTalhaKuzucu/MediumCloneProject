import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../components/Cards/Cards";
import Categorys from "../components/Categorys";
import { useAppState } from "../contexts/AppContext";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import { useEffect } from "react";
import Images from "../assets/Images";

function Home() {
  const { data, trendList } = useAppState();

  return (
    <>
      <SignIn />
      <LogIn />
      <Header />
      <Sidebar trendList={trendList} />
      <Container className="mt-5">
        <Row>
          <Col md={12} lg={{ span: 5, order: "last" }}>
            <Categorys />
          </Col>
          <Col md={12} lg={{ span: 7, order: "first" }}>
            {data ? (
              data.map((blogCard) => <Cards blog={blogCard} />)
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;



// import React from "react";
// import { useState, useEffect } from "react";
// import useFilter from "../../hooks/useFilter"
// import data from "../../data/users.json"

// const Filter = () => {

//   const [inputValue, setinputValue] = useState();
//   const [renderedData, setrenderedData] = useState(data.name);
//   const  [selectedValue] = useFilter(inputValue)

//   useEffect(() => {
//     console.log(selectedValue)
//     setrenderedData(selectedValue)
//   }, [inputValue]);

//   const debounce = (func, delay) => {
//     let debounceTimer;
//     return function () {
//       const context = this;
//       const args = arguments;
//       clearTimeout(debounceTimer);
//       debounceTimer = setTimeout(() => func.apply(context, args), delay);
//     };
//   };

//   const handleInputChange = debounce(function (e) {
//     console.log(e.target.value)
//     setinputValue(e.target.value)
//   }, 1000);

//   return (
//     <div className="filter-container">
//       <input role="textbox" onChange={(e) => {e.persist(), handleInputChange(e)} } type="text" />
      
//       {
//         renderedData &&
//         renderedData.map((item, index) => { 
//         return(
//         <li role="listitem" key= {index} > {item} </li>
//         )}
//         )
//       }

//     </div>
//   );
// };

// export default Filter;



// import data from "../data/users.json"
// import { useState, useEffect } from "react";


// const useFilter = (inputValue) => {

//   const [selectedValue, setselectedValue] = useState([]);

//   useEffect(() => {
//     setselectedValue([])
//     // console.log(inputValue)
//     data.map((item, index) => {
//       if (item.name.toLowerCase().includes(inputValue)) {
//         return selectedValue.push(item.name)
//       }
//     })
//   }, [inputValue]);

//   return [selectedValue]
// };



// export default useFilter;

