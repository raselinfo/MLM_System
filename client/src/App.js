import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home'
import PersonalInfo from './Component/PersonalInfo/PersonalInfo'
import ProfileUpdate from './Component/ProfileUpdate/ProfileUpdate'
import IncomeReport from './Component/IncomeReport/IncomeReport'
import PurchaseBalance from './Component/PurchaseBalance/PurchaseBalance'
import PaymentSystem from './Component/PaymentSystem/PaymentSystem'
import Withdraw from './Component/Withdraw/Withdraw'
import Contact from './Component/Contact/Contact'
import WithdrawReport from './Component/WithdrawReport/WithdrawReport'
import GenerationReport from './Component/GenerationReport/GenerationReport'
import ReferList from './Component/ReferList/ReferList'
import ComplainBox from './Component/ComplainBox/ComplainBox'
import Joining from './Component/Joining/Joining'
import UniLevelTree from './Component/UniLavelTree/UniLevelTree'
import Login from './Component/Login/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivetRoute from './Component/PrivetRout/PrivetRoute';



function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>

          <PrivetRoute path="/personal-info">
            <PersonalInfo />
          </PrivetRoute>
          <PrivetRoute path="/profile-update">
              <ProfileUpdate />
            </PrivetRoute>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            
            <Route path="/income-report">
              <IncomeReport />
            </Route>
            <Route path="/purchase-balance">
              <PurchaseBalance />
            </Route>
            <Route path="/payment-system">
              <PaymentSystem />
            </Route>
            <Route path="/withdraw">
              <Withdraw />
            </Route>
            <Route path="/contact-us">
              <Contact />
            </Route>
            <Route path="/withdraw-report">
              <WithdrawReport />
            </Route>
            <Route path="/generation-report">
              <GenerationReport />
            </Route>
            <Route path="/refer-list">
              <ReferList />
            </Route>
            <Route path="/complain-box">
              <ComplainBox />
            </Route>
            <Route path="/joining">
              <Joining />
            </Route>
            <Route path="/uni-level-tree">
              <UniLevelTree />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
