// import axios from "axios";
// export const API = "https://invoice-vudn.onrender.com/api/v1/";
// export const APIforImg = "https://invoice-vudn.onrender.com/upload-image";
// export const apicaller = (uri, data = null, method, Token, contentType= "application/json") => {
//   console.log(`Api Caller Data Of ${uri} : `, data);
//   return new Promise((resolve, reject) => {
//     var config = {
//       method: method,
//       url: `https://invoice-vudn.onrender.com/api/v1/${uri}`,
//       headers: {
//         Authorization: "Bearer " + Token,
//         "Content-Type": contentType,
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(`Api Caller Response Of ${uri} : `, response.data);
//         resolve(response);
//       })
//       .catch(function (error) {
//         console.log(`Api Caller Error Of ${uri} : `, error);
//         reject(error);
//       });
//   });
// };
