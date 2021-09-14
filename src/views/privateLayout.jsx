import React from "react";
import FooterComponent from "components/footer";
import HeaderComponent from "components/header";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "shared/scrolltotop";
import NotFoundPage from "./404";
import BookPage from "./book";
import BookingHistoryPage from "./bookhistory";
import EditProfilePage from "./editprofile";
import ManageListPage from "./host/managelist";
import HostCreateNewPropertypage from "./host/newproperty";
import Messagespage from "./message";
import HostNewPropertyPage from "./host(test)/host";

function PrivateLayout() {
  return (
    <div>
      <ScrollToTop>
        <HeaderComponent />
        <Switch>
          <Route exact path="/user/host" component={HostCreateNewPropertypage} />
          <Route path="/user/host-new" component={HostNewPropertyPage} />
          <Route path="/user/book/:id" component={BookPage} />
          <Route path="/user/manage-list" component={ManageListPage} />
          <Route path="/user/edit-profile" component={EditProfilePage} />
          <Route path="/user/messages" component={Messagespage} />
          <Route path="/user/book-history" component={BookingHistoryPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <FooterComponent />
      </ScrollToTop>
    </div>
  );
}

export default PrivateLayout;
