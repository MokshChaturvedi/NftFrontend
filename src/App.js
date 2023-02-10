import React , {useEffect , useState} from "react";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Discover from "./routes/Discover";
import Activity from "./routes/Activity";
import AboutUs from "./routes/AboutUs";
import NotFound from "./routes/NotFound";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Blogs from "./routes/Blogs";
import Article from "./routes/Article";
import Wallet from "./components/homePage/wallet/Wallet";
import NewsLetter from "./routes/NewsLetter";
import CreateCollection from "./routes/CreateCollection";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import VerifyOtp from "./routes/VerifyOtp";
import ChangePassword from "./routes/ChangePassword";

import CreateItem from "./routes/CreateItem";
import Collections from "./routes/Collections";
import CollectionDetails from "./routes/CollectionDetails";
import Item from "./routes/Item";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import circlebg19 from "./assets/img/circlebg19.svg";
import circlebg20 from "./assets/img/circlebg20.svg";
import circlebg21 from "./assets/img/circlebg21.svg";
import UpdateCollection from "./routes/UpdateCollection";
import AdminRoute from "./AdminRoute";
import BookingSuccess from "./routes/BookingSuccess";
import BookingCancel from "./routes/BookingCancel";
import SucessPayment from "./routes/SucessPayment";
import FailedPayment from "./routes/FailedPayment";


const App = () => {

  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const checkWalletConnected = () => {
    window?.cardano?.isEnabled().then((result) => {
        localStorage.setItem("isWalletConnected" , result)
        setIsWalletConnected(result)
    }).catch((err) => {
        console.log("err", err);
    });
  }

  useEffect(() => {
    checkWalletConnected()
  },[])

  return (
    <Router>
      <ToastContainer />
      <div className="circlebg1">
        <img className="img-fluid" src={circlebg19} alt="img" />
      </div>
      <div className="circlebg2">
        <img className="img-fluid" src={circlebg20} alt="img" />
      </div>
      <div className="circlebg3">
        <img className="img-fluid" src={circlebg21} alt="img" />
      </div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/discover" component={Discover} />
        <Route path="/activity" component={Activity} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/articles" component={Article} />
        <Route exact path="/collection/:id" component={CollectionDetails} />
        <Route exact path="/item/:id" component={Item} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/verify" component={VerifyOtp} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/newsletter" component={NewsLetter} />

        <Route path="/success_payment" component={SucessPayment} />
        <Route path="/failed_payment" component={FailedPayment} />


        <Route path="/booking-success" component={BookingSuccess} />
        <Route path="/booking-cancel" component={BookingCancel} />
        
        <AdminRoute exact path="/collections" component={Collections} />
        <AdminRoute path="/create-collection" component={CreateCollection} />
        <AdminRoute path="/create-item" component={CreateItem} />
        <AdminRoute exact path="/update-collection/:id" component={UpdateCollection} />

        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      <div id="elevator_item"><a id="elevator" onClick={ () => false} title="Back To Top"></a></div>
    </Router>
  );
};

export default App;
