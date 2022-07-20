import React from "react";
import { useState } from "react";
import { AboutContainer, Buttons } from "../styles/profile/AboutYou.styles";

const AboutYou = () => {
  const [edit, setEdit] = useState({
    firstname: false,
    shortBio: false,
  });

  function changeState(e) {
    console.log(e.target.className);
    if (e.target.className === "fullname") {
      setEdit({ ...edit, firstname: true });
    }
  }

  return (
    <AboutContainer>
      <h3>About You</h3>
      <nav>
        <div>
          <h5>Full Name</h5>
          <input type="text" value="full name Input" />
          <p>
            Your name appears on your Profile page, as your byline, and in your
            responses. It is a required field.
          </p>
        </div>
        <Buttons>
          {edit.firstname ? (
            <button onClick={changeState} id="edit" className="fullname">
              Edit
            </button>
          ) : (
            <>
              <button onClick={changeState} className="fullname">
                Save
              </button>
              <button onClick={changeState} className="fullname">
                Cancel
              </button>
            </>
          )}
        </Buttons>
      </nav>
      <nav>
        <div>
          <h5>Short Bio</h5>
          <input type="text" value="" placeholder="Add your short bio" />
          <p>
            Your short bio appears on your Profile and next to your stories. Max
            160 characters.
          </p>
        </div>
        <Buttons>
          {edit ? (
            <button onClick={changeState} className="bio">
              Edit
            </button>
          ) : (
            <>
              <button onClick={changeState} className="bio">
                Save
              </button>
              <button onClick={changeState} className="bio">
                Cancel
              </button>
            </>
          )}
        </Buttons>
      </nav>
      <nav>
        <div className="photoCon">
          <div className="photoDesc">
            <h5>Photo</h5>
            <p>
              Your photo appears on your Profile page and with your stories
              across Medium.
            </p>
            <p>
              {" "}
              Recommended size: Square, at least 1000 pixels per side. File
              type: JPG, PNG or GIF.
            </p>
          </div>
          <div>
            <input type="image" src="" alt="" className="profilePhoto" />
          </div>
        </div>
        <Buttons>
          {edit ? (
            <button onClick={changeState}>Edit</button>
          ) : (
            <>
              <button onClick={changeState}>Save</button>
              <button onClick={changeState}>Cancel</button>
            </>
          )}
        </Buttons>
      </nav>
      <nav>
        <div>
          <h5>Username & URL</h5>
          <div className="userName-URL">
            <div>
              <label htmlFor="">Username</label>
              <input type="text" name="" id="" value="userName Input" />
            </div>
            <div>
              <label htmlFor="">URL</label>
              <input type="text" value="	https://medium.com/@username" />
            </div>
          </div>
        </div>
        <Buttons>
          {edit ? (
            <button onClick={changeState}>Edit</button>
          ) : (
            <>
              <button onClick={changeState}>Save</button>
              <button onClick={changeState}>Cancel</button>
            </>
          )}
        </Buttons>
      </nav>
    </AboutContainer>
  );
};

export default AboutYou;
