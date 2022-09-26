import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminRegister from './components/Admin/AdminRegister/AdminRegister';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminNavbar from './components/Admin/AdminNavbar.js/AdminNavbar';
import AdminScreen from './components/Admin/AdminScreen/AdminScreen';
import AdminPost from './components/Admin/AdminPost/AdminPost';
import AdminUpdateAndDelete from './components/Admin/AdminUpdateAndDelete/AdminUpdateAndDelete';
import AdminUpdateView from './components/Admin/AdminUpdateAndDelete/AdminUpdateView';
import AdminUpdate from './components/Admin/AdminUpdateAndDelete/AdminUpdate';
import AdminForgotPassword from './components/Admin/AdminForgotPassword/AdminForgotPassword';
import AdminEmailVerify from './components/Admin/AdminEmailVerify/AdminEmailVerify';
import AdminPasswordReset from './components/Admin/AdminPasswordReset/AdminPasswordReset';
import ClientLogin from './components/Client/ClientLogin/ClientLogin';
import ClientRegister from "./components/Client/ClientRegister/ClientRegister";
import ClientEmailverify from './components/Client/ClientEmailVerify/ClientEmailverify';
import ClientForgotPassword from './components/Client/ClientForgotPassword/ClientForgotPassword';
import ClientPasswordReset from './components/Client/ClientPasswordReset/ClientPasswordReset';
import ClientScreen from './components/Client/ClientScreen/ClientScreen';
import ClientHome from './components/Client/ClientHome/ClientHome';
import ClientNavbar from './components/Client/ClientNavbar/ClientNavbar';
import ClientProducts from './components/Client/ClientProducts.js/ClientProducts';
import ClientProductId from './components/Client/ClientProductId/ClientProductId';
import ClientCart from './components/Client/ClientCart/ClientCart';
import ClientAddressForm from './components/Client/ClientCart/ClientAddressForm';
import ClientOrder from './components/Client/ClientOrder/ClientOrder';
import ClientOrderDetial from './components/Client/ClientOrder/ClientOrderDetial';
import ClientProfile from './components/Client/ClientProfile/ClientProfile';
import AdminOrder from './components/Admin/AdminOrder/AdminOrder';
import AdminOrderDetial from './components/Admin/AdminOrder/AdminOrderDetial';



function App() {

  const adminId = localStorage.getItem("admin_id");
  const clientId = localStorage.getItem("client_id");








  return (
    <div className="App">
   <Router>
    {adminId && <AdminNavbar />}
    {clientId && <ClientNavbar />}
    <Switch>
    <ClientScreen exact path="/client/home"  component={ClientHome} />
    <ClientScreen exact path="/client/product" component={ClientProducts} />
    <ClientScreen exact path="/client/product/:id" component={ClientProductId} />
    <ClientScreen exact path="/client/cart" component={ClientCart} />
    <ClientScreen exact path="/client/order/form" component={ClientAddressForm}  />
    <ClientScreen exact path="/client/order" component={ClientOrder}  />
    <ClientScreen exact path="/client/order/detial/:id"  component={ClientOrderDetial} />
    <ClientScreen exact path="/client/profile"  component={ClientProfile}/>
           <Route exact path="/admin/register" component={AdminRegister} />
      <Route exact path="/admin/login" component={AdminLogin} />
      <Route exact path="/" component={ClientLogin} />
      <Route exact path="/register" component={ClientRegister} />
      <Route exact path="/admin/forgot-password" component={AdminForgotPassword} />
      <Route exact path="/admin/:id/verify/:token" component={AdminEmailVerify}  />
      <Route exact path="/admin/password-reset/:id/:token"  component={AdminPasswordReset} />
      <Route exact path="/client/forgot-password" component={ClientForgotPassword} />
      <Route exact path="/client/:id/verify/:token" component={ClientEmailverify}  />
      <Route exact path="/client/password-reset/:id/:token"  component={ClientPasswordReset} />
      <AdminScreen exact path="/admin/home" component={AdminHome} />
      <AdminScreen  exact path="/admin/post" component={AdminPost}  />
      <AdminScreen exact path="/admin/update" component={AdminUpdateAndDelete} />
      <AdminScreen exact path="/admin/update/:id" component={AdminUpdateView} />
      <AdminScreen exact path="/admin/admin/update/:id" component={AdminUpdate} />
      <AdminScreen exact path="/admin/order" component={AdminOrder} />
      <AdminScreen exact path="/admin/order/:id" component={AdminOrderDetial} />
    </Switch>
   </Router>
    </div>
  );
}

export default App;
