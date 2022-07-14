import React from "react";
const topicList = ["FullStack", "Python", "Machine Learning", "Programming"];

const UDMain = () => {
  return (
    <main className="w-100">
      <header>
        <nav className="topics d-flex">
          <p className="mx-3">YOUR TOPICS</p>
          <p className="d-flex overflow-auto w-50 scrollbar-near-moon">
            {topicList?.map((item) => {
              return (
                <div key={item.id} className="text-nowrap mx-2 w-100">
                  {item}
                </div>
              );
            })}
          </p>
        </nav>
      </header>
    </main>
  );
};

export default UDMain;
