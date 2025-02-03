import axios from "axios";

export default axios.create({
  baseURL: "/api",
  params: {
    key: "894f747d6f334185a9fcb4d4365e2921",
  },
});

// import axios from "axios";

// export default axios.create({
//     baseURL: "https://api.rawg.io/api",
//     params: {
//         key: "894f747d6f334185a9fcb4d4365e2921"
//     }
// })
