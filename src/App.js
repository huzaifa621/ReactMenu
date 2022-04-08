import ContactUs from "./component/ContactUs";
import Download from "./component/Download";
import Help from "./component/Help";
import Home from "./component/Home";
import JoinUs from "./component/JoinUs";
import Login from "./component/Login";
import Search from "./component/Search";
import Settings from "./component/Settings";
import Mobile from "./component/Mobile";
import ButtonMaker from "./component/ButtonMaker";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* uncomment Mobile for Problem 1 and comment others and remove all styles from styles.css*/}
      {/* <Mobile /> */}

      {/* uncomment JoinUs to Download for Problem 2 Part 1 and comment others*/}
      {/* <JoinUs />
      <Settings />
      <Login />
      <ContactUs />
      <Search />
      <Help />
      <Home />
      <Download /> */}

      {/* Problem 2 Part 2 begins here */}
      <ButtonMaker
        props={[
          "Join Us",
          "Settings",
          "Login",
          "Contact Us",
          "Search",
          "Help",
          "Home",
          "Downlaod"
        ]}
      />
    </div>
  );
}
