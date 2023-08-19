import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { ReviewProvider } from "./context/ReviewContext";
import ReviewCount from "./components/ReviewCount";

const App = () => {
  return (
    <ReviewProvider>
      <Navbar />
      <div className="container p-5">
        <Form />
        <ReviewCount />
        <ListGroup />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </ReviewProvider>
  );
};

export default App;
