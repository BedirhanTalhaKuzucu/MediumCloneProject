import React from "react";

const UDSlideBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0  sticky-right border py-2 vh-100"
      style={{ width: "20rem" }}
    >
      <button
        type="button"
        class="btn btn-dark m-3 p-1"
        style={{ borderRadius: "2rem" }}
      >
        Get unlimited access
      </button>
      <form class="form">
        <input
          class="form-control "
          type="search"
          placeholder="Search"
          // aria-label="Search"
        />
      </form>

      <nav>
        <img src="" alt="kullanıcı profili" />
      </nav>
    </div>
  );
};

export default UDSlideBar;
