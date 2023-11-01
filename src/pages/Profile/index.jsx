import { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import axios from "axios";

const Profile = () => {
  const { auth, updateToken } = useAuth();
  const [info, setInfo] = useState({
    ...auth.tokenParsed,
    newPassword: "",
    repeatPassword: "",
  });

  async function handleSubmit() {
    if (info.newPassword !== info.repeatPassword) return;

    try {
      const res = await axios({
        method: "put",
        url: "https://amazon-digital-prod.azurewebsites.net/api/User/updateuserdata",
        data: {
          id: info.id,
          email: info.email,
          newPassword: info.newPassword,
          userName: info.userName,
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      updateToken(res.data.jwt);

      alert("მონაცემები განახლდა");

      setInfo({ ...info, newPassword: "", repeatPassword: "" });

      navigate("/login");
    } catch (e) {
      console.error("error", e);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={info.userName}
        onChange={(e) => setInfo({ ...info, userName: e.target.value })}
      />
      <input
        type="text"
        placeholder="email"
        value={info.email}
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="new password"
        value={info.newPassword}
        onChange={(e) => setInfo({ ...info, newPassword: e.target.value })}
      />
      <input
        type="password"
        placeholder="repeat password"
        value={info.repeatPassword}
        onChange={(e) => setInfo({ ...info, repeatPassword: e.target.value })}
      />
      <button onClick={handleSubmit}>ok</button>
    </div>
  );
};

export default Profile;
