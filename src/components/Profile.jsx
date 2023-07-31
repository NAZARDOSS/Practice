import React, { useState } from "react";
import styles from "./Style.css";

function Profile() {
  const [profile, setProfile] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    status: "",
  });

  const [currentStatus, setCurrentStatus] = useState(profile.status);

  const [updatedProfile, setUpdatedProfile] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const handleUpdate = () => {
    setProfile(updatedProfile);
    setCurrentStatus(updatedProfile.status || profile.status);
  };

  function UserCard({user}) {
    return (
      <article class="profile">
        <div class="profile-image">
          <img src={user.avatar} alt="" className="avatar" />
        </div>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <div class="profile-actions">
          <button class="btn btn--primary">Follow</button>
          <button class="btn btn--icon">
            <i class="ph-export"></i>
          </button>
          <button class="btn btn--icon">
            <i class="ph-dots-three-outline-fill"></i>
          </button>
        </div>
        <div
          className={currentStatus === "online" ? "status green" : "status"}
        ></div>
      </article>
    );
  }

  return (
    <div>
      <UserCard user={profile} />
      <input
        type="text"
        name="firstName"
        value={updatedProfile.firstName || profile.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={updatedProfile.lastName || profile.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <div>
        <input
          type="text"
          name="avatar"
          value={updatedProfile.avatar || profile.avatar}
          onChange={handleChange}
          placeholder="Avatar URL"
        />
      </div>
      <div>
        Status:
        <input
          type="radio"
          name="status"
          value="online"
          onChange={handleChange}
          checked={
            updatedProfile.status === "online" || profile.status === "online"
          }
        />{" "}
        Online
        <input
          type="radio"
          name="status"
          value="offline"
          onChange={handleChange}
          checked={
            updatedProfile.status === "offline" || profile.status === "offline"
          }
        />{" "}
        Offline
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Profile;
