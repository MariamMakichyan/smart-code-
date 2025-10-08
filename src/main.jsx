import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import {
  navigation,
  paragraphs,
  dropboxesData,
  coursesData,
  socialLinks,
  contacts,
  companyLinks,
  paymentIcons,
  coursesList,
  timesList,
  types,
} from "./Db/data.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <App
    navigation={navigation}
    socialLinks={socialLinks}
    coursesData={coursesData}
    dropboxesData={dropboxesData}
    paragraphs={paragraphs}
    contacts={contacts}
    companyLinks={companyLinks}
    paymentIcons={paymentIcons}
    types={types}
    coursesList={coursesList}
    timesList={timesList}
  />
);
