import PropertyDetailViewPage from "views/detailview";
import FooterComponent from "components/footer";
import HeaderComponent from "components/header";
import { Route, Switch } from "react-router-dom";
import ContactUsPage from "./contactus";
import HomePage from "./home";
import ProfitPage from "./course";
import PropertiesPage from "./properties/properties";
import Stagingpage from "./staging";
import PolicyPage from "./policy";
import NotFoundPage from "./404";

export default function MainLayout() {
  return (
    <>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/properties" component={PropertiesPage} />
        <Route path="/staging" component={Stagingpage}/>
        <Route path="/profit" component={ProfitPage} />
        <Route path="/contact" component={ContactUsPage}/>
        <Route path="/details/:id" component={PropertyDetailViewPage} />
        <Route path="/policy" component={PolicyPage}/>
        {/* <HostPrivateRoute path="/host" component={HostMainLayoutPage}/> */}
        <Route component={NotFoundPage}/>
      </Switch>
      <FooterComponent />
    </>
  );
}
