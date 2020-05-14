import * as functions from "firebase-functions";
import axios from "axios";
const cors = require("cors")({
  origin: true,
});

const options = {
  url: "https://api.weatherbit.io/v2.0/forecast/daily",
  port: 443,
  method: "GET",
};

export const weatherForecast = functions.https.onRequest(
  (request, response) => {
    return cors(request, response, () => {
      axios
        .get(
          `${options.url}/?city=${request.query.locationName}&key=${
            functions.config().weatherbit.key
          }`
        )
        .then(function (res) {
          // handle success
          response.send(res.data);
        })
        .catch(function (error) {
          // handle error
          response.send(error);
        });
    });
  }
);
