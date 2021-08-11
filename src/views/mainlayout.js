import PropertyDetailViewPage from "views/detailview";
import FooterComponent from "components/footer";
import HeaderComponent from "components/header";
import { Route, Switch } from "react-router-dom";
import ContactUsPage from "./contactus";
import HomePage from "./home";
import ProfitPage from "./profit";
import PropertiesPage from "./properties/properties";
import NotFoundPage from "./404";

export default function MainLayout(){
    return(
        <>
            <HeaderComponent/> 
            <Switch>
                <Route exact path="/" children={HomePage}/>
                <Route path="/properties" children={PropertiesPage}/>
                <Route path="/profit" children={ProfitPage}/>
                <Route path="/contact"> 
                    <ContactUsPage/>
                </Route>
                <Route path="/details/:id" children={PropertyDetailViewPage}/>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>           
            <FooterComponent/>
        </>
    )
}