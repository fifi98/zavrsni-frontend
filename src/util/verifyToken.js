import API from "./api";

const verifyToken = () => {
  return API.post("verify", {
    email: "email",
    password: "password"
  })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        return true;
      } else {
        console.log("a");
        return false;
      }
    })
    .catch(err => alert("error"));
};

export default verifyToken;
