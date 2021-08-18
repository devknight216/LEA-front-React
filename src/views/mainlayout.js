import PropertyDetailViewPage from "views/detailview";
import FooterComponent from "components/footer";
import HeaderComponent from "components/header";
import { Route, Switch } from "react-router-dom";
import ContactUsPage from "./contactus";
import HomePage from "./home";
import ProfitPage from "./profit";
import PropertiesPage from "./properties/properties";
import NotFoundPage from "./404";
import Stagingpage from "./staging";

export default function MainLayout() {
  return (
    <>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/properties" component={PropertiesPage} />
        <Route path="/staging">
          <Stagingpage/>
        </Route>
        <Route path="/profit" component={ProfitPage} />
        <Route path="/contact">
          <ContactUsPage />
        </Route>
        <Route path="/details/:id" component={PropertyDetailViewPage} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <FooterComponent />
    </>
  );
}
