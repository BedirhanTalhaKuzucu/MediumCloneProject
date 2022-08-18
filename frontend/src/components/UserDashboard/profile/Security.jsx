import React, { useEffect } from "react";
import { SecurityContainer } from "../styles/profile/Security.styles";
import { Buttons } from "../styles/profile/AboutYou.styles";
import PasswordChangeModal from "./PasswordChangeModal";
import { userDetails } from "../../../helpers/apiRequests";
import axios from "axios";
import UserDeleteModal from "./UserDeleteModal";
import { useAppState } from "../../../contexts/AppContext";

const Security = () => {
  const { userInfo } = useAppState();

  return (
    <SecurityContainer>
      <h3>Security</h3>
      <nav>
        <div>
          <h5>Email</h5>
          <input type="email" value={userInfo?.userInfo?.email} />
          <p>
            Control whether to receive email from Medium. You’ll still receive
            administrative emails even if this setting is off.
          </p>
        </div>
        <Buttons>
          <button>Edit</button>
        </Buttons>
      </nav>
      <nav>
        <div>
          <h5>Password</h5>
          <input type="password" value="111222" />
          <p>
            choose a strong password and please do not share your password with
            anyone
          </p>
        </div>
        <Buttons>
          <button>
            <PasswordChangeModal />
          </button>
          {/* <button>Save</button>
        <button>Cancel</button> */}
        </Buttons>
      </nav>
      <nav className="deleteAcoount">
        <h5>Delete account</h5>
        <p>Permanently delete your account and all of your content.</p>
        <a
          href="#"
          //  onClick={() => deleteUser() && console.log("welldone")}
        >
          <UserDeleteModal />
        </a>
      </nav>
    </SecurityContainer>
  );
};

export default Security;
