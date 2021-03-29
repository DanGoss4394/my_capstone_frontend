import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { API_URL } from "../../api/api";
import { useState } from "react";

const PublicProfile = () => {
  const [user, setUser] = useState({});

  let { username } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}v1/get_user/${username}`,
    })
      .then((res) => {
        console.log(res);

        if (res.data !== "Username NOT found") {
          setUser(res.data);
        } else {
          setUser({});
        }
      })

      .catch((err) => console.log(err));
  }, [username]);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default PublicProfile;
