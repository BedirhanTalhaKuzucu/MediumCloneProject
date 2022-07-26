import React from "react";
import { ClapsRespond, Header, Main } from "./styles/StoryDetailMain.styles";
import Images from "../../../assets/Images";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainFollowingTooltip from "../MainFollowingTooltip";
// import { useSpeechSynthesis } from "react-speech-kit";

const StoryDetailMain = () => {
  // const { speak } = useSpeechSynthesis();
  const navigate = useNavigate();

  return (
    <Main>
      <Header>
        <nav className="authorInf">
          <div>
            <Tooltip
              title={<MainFollowingTooltip />}
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "white",
                  },
                },
              }}
            >
              <img
                src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                alt="yazar profil foto"
                className="AuthorPhoto"
              />
            </Tooltip>
          </div>
          <div>
            <div>
              <h5>Aman Khan</h5>
            </div>
            <div className="d-flex fs-6 text-secondary">
              <div className="me-3">Jun 25</div>
              <div>3 min read</div>
              {/* <button>
                dinleme çubuğu
              </button> */}
            </div>
          </div>
        </nav>

        <nav className="icons">
          <Tooltip title="Copy link" arrow placement="bottom">
            <img src={Images.copylink} alt="copy link" />
          </Tooltip>
          <Tooltip title="Send an e-mail" arrow placement="bottom">
            <img src={Images.email} alt="mail gönder" />
          </Tooltip>
          <Tooltip title="Save" arrow placement="bottom">
            <img src={Images.bookmarks} alt="makaleyi kaydet" />
          </Tooltip>
        </nav>
      </Header>
      <article className="my-5">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea
          enim dignissimos magnam, sapiente, rem numquam optio modi sint
          cupiditate culpa. Vitae, sed veritatis itaque nobis saepe quos amet
          unde eum voluptates tempore, voluptatibus repellat veniam consectetur
          sequi eius provident, laborum aspernatur repellendus porro at
          doloribus totam harum neque. Et iure dolore, perferendis ipsa saepe
          autem qui totam necessitatibus libero voluptatem minima eveniet
          nesciunt sed provident corporis quo eligendi veniam tenetur molestias?
          Praesentium velit quas, recusandae, voluptatibus, accusantium
          doloribus adipisci itaque eius consectetur asperiores perspiciatis
          mollitia. Ipsa dolor eius dignissimos, voluptatibus accusantium cumque
          quo molestiae. Alias, vero. Esse, quae minima.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea
          enim dignissimos magnam, sapiente, rem numquam optio modi sint
          cupiditate culpa. Vitae, sed veritatis itaque nobis saepe quos amet
          unde eum voluptates tempore, voluptatibus repellat veniam consectetur
          sequi eius provident, laborum aspernatur repellendus porro at
          doloribus totam harum neque. Et iure dolore, perferendis ipsa saepe
          autem qui totam necessitatibus libero voluptatem minima eveniet
          nesciunt sed provident corporis quo eligendi veniam tenetur molestias?
          Praesentium velit quas, recusandae, voluptatibus, accusantium
          doloribus adipisci itaque eius consectetur asperiores perspiciatis
          mollitia. Ipsa dolor eius dignissimos, voluptatibus accusantium cumque
          quo molestiae. Alias, vero. Esse, quae minima.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea
          enim dignissimos magnam, sapiente, rem numquam optio modi sint
          cupiditate culpa. Vitae, sed veritatis itaque nobis saepe quos amet
          unde eum voluptates tempore, voluptatibus repellat veniam consectetur
          sequi eius provident, laborum aspernatur repellendus porro at
          doloribus totam harum neque. Et iure dolore, perferendis ipsa saepe
          autem qui totam necessitatibus libero voluptatem minima eveniet
          nesciunt sed provident corporis quo eligendi veniam tenetur molestias?
          Praesentium velit quas, recusandae, voluptatibus, accusantium
          doloribus adipisci itaque eius consectetur asperiores perspiciatis
          mollitia. Ipsa dolor eius dignissimos, voluptatibus accusantium cumque
          quo molestiae. Alias, vero. Esse, quae minima.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea
          enim dignissimos magnam, sapiente, rem numquam optio modi sint
          cupiditate culpa. Vitae, sed veritatis itaque nobis saepe quos amet
          unde eum voluptates tempore, voluptatibus repellat veniam consectetur
          sequi eius provident, laborum aspernatur repellendus porro at
          doloribus totam harum neque. Et iure dolore, perferendis ipsa saepe
          autem qui totam necessitatibus libero voluptatem minima eveniet
          nesciunt sed provident corporis quo eligendi veniam tenetur molestias?
          Praesentium velit quas, recusandae, voluptatibus, accusantium
          doloribus adipisci itaque eius consectetur asperiores perspiciatis
          mollitia. Ipsa dolor eius dignissimos, voluptatibus accusantium cumque
          quo molestiae. Alias, vero. Esse, quae minima.
        </p>
        <ClapsRespond>
          <div className="icon">
            <Tooltip title="Clap" arrow placement="top">
              <img src={Images.clap} alt="claps" />
            </Tooltip>
            <span>2</span>
          </div>
          <div>|</div>
          <div className="icon" onClick={() => navigate("/home/commnets")}>
            <Tooltip title="Respond" arrow placement="top">
              <img src={Images.chat} alt="chat" />
            </Tooltip>

            <span>10</span>
          </div>
        </ClapsRespond>
      </article>
    </Main>
  );
};

export default StoryDetailMain;
