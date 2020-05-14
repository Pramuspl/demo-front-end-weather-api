# Technical assignment front-end engineer

Make an application that allows the user to view the observed (in the past 30 days) or forecasted (in the future) daily weather conditions for a given location using your preferred weather API.

**Minimal requirements**

The three pillars of front-end development are HTML, CSS and JavaScript. We would like to see you know how to use them for the right job.

- Use ReactJS
- Show us you know how to create a modern user interface using CSS or your favourite CSS preprocessor
- Communicate to the API through a PHP or JavaScript back-end

---

**IMPLEMENTATION**

Displaying 16 days forecast

- Language: **_TypeScript_**
- Front-end: used **_create-react-app_** so use `npm i` and `npm start` to run
- CSS Library: **_styled-components_** with a `theme` defined to easily changed colors and global CSS properties
- Requests: Not using **_Axios_** or other request enhancing libraries because of low complexity - `fetch()` is sufficient
- Back-end: **_Firebase Functions_** for serverless back-end, the API key for **_Weatherbit_** is securely stored there
- mock data: commented out for ease of use
