import { DayObjProps } from "../helpers/types";

const weatherApiURL =
  "https://us-central1-oper-test-frontend.cloudfunctions.net/weatherForecast";

export const getWeather = (locationName: string) =>
  new Promise<DayObjProps[]>((resolve, reject) => {
    fetch(`${weatherApiURL}?locationName=${locationName}`)
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            `Looks like there was a problem. Status Code: : ${response.status}`
          );
          reject("WRONG_STATUS_CODE");
        }
        response
          .json()
          .then(function (data) {
            resolve(data.data);
          })
          .catch(() => console.log(reject("NOT_FOUND")));
      })
      .catch(function (err) {
        console.log(`Fetch Error: ${err}`);
        reject("ERROR");
      });
  });
