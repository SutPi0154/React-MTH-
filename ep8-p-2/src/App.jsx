import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Test from "./Test";
// import { Home } from "./components/Home";

function App() {
  const [count, setCount] = useState(0);
  const register = () => {
    const registerPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        {
          resolve("Register ...");
          // reject("reject in register");
        }
      }, 2000);
    });
    return registerPromise;
  };
  const login = () => {
    const LoginPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        {
          // resolve("Login ...");
          reject("reject in login");
        }
      }, 3000);
    });
    return LoginPromise;
  };
  const fetching = () => {
    const fetchingPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        {
          resolve("fetching /...");
          // reject("reject ..");
        }
      }, 4000);
    });
    return fetchingPromise;
  };
  const goDB = () => {
    console.log("dashboard");
  };

  const showInBrowser = async () => {
    try {
      const rdata = await register();
      console.log(rdata);
      const ldata = await login();
      console.log(ldata);
      const fdata = await fetching();
      console.log(fdata);
      goDB();
    } catch (error) {
      console.log(error);
    }
  };
  showInBrowser().catch((error) => console.log(error));

  // promise chaining
  // register()
  //   .then((rdata) => {
  //     console.log(rdata);
  //     return login();
  //   })
  //   .then((ldata) => {
  //     console.log(ldata);
  //   })
  //   .catch((error) => console.log(error));

  // register()
  //   .then((rdata) => {
  //     console.log(rdata);
  //     login()
  //       .then((loginData) => {
  //         console.log(loginData);
  //         fetching()
  //           .then((fdata) => {
  //             console.log(fdata);
  //             goDB();
  //           })
  //           .catch((error) => console.log(error));
  //       })
  //       .catch((error) => console.log(error));
  //   })
  //   .catch((error) => console.log(error));
  return (
    <div className="App">
      Hello
      {/* <Test /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
