import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Bare Bones Layout</title>
          <meta name="description" content="A short description" />
          <meta name="author" content="Vlad Savchenko" />

          {/* <!-- Open Graph protocol (for social media) */}
          {/* <meta property="og:title" content="Title">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.mysite">
    <meta property="og:description" content="A brief description">
    <meta property="og:image" content="image.png">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="site's name"> --> */}

          {/* <!-- <link rel="icon" href="/favicon.ico"> */}
          {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png"> --> */}
          {/* <!-- Your CSS files --> */}
          <link rel="stylesheet" href="css/styles.css" />
        </head>
        <body>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
          </Routes>
          <Footer />

          {/* <!-- Your JS files --> */}
          <script src="js/script.js"></script>
        </body>
      </html>
    </div>
  );
}

export default App;
