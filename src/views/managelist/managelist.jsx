import React, { useEffect, useState } from "react";
import ManageListReserveComponent from "components/host/managelist/reserves";
import ManageListTapComponent from "components/host/managelist/tap";
import { Route, Switch, useLocation } from "react-router-dom";
import { SwitchHorizontalIcon, ViewListIcon, CalendarIcon } from "@heroicons/react/solid";
import ManageListCalendarComponent from "components/host/managelist/calendar";
import ManageListTransactionsComponent from "components/host/managelist/transcations";

function ManageListPage() {
  const [tabs, setTabs] = useState([
    {
      name: "Reserves",
      href: "/user/manage-list/reserves",
      icon: ViewListIcon,
      current: true,
    },
    {
      name: "Calendar",
      href: "/user/manage-list/calendar",
      icon: CalendarIcon,
      current: false,
    },
    {
      name: "Transaction",
      href: "/uesr/manage-list/transaction-history",
      icon: SwitchHorizontalIcon,
      current: false,
    },
  ]);

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/user/manage-list/reserves":
        setTabs([
          {
            name: "Reserves",
            href: "/user/manage-list/reserves",
            icon: ViewListIcon,
            current: true,
          },
          {
            name: "Calendar",
            href: "/user/manage-list/calendar",
            icon: CalendarIcon,
            current: false,
          },
          {
            name: "Transaction",
            href: "/user/manage-list/transaction-history",
            icon: SwitchHorizontalIcon,
            current: false,
          },
        ]);
        break;
      case "/user/manage-list/inbox":
        setTabs([
          {
            name: "Reserves",
            href: "/user/manage-list/reserves",
            icon: ViewListIcon,
            current: false,
          },
          {
            name: "Calendar",
            href: "/user/manage-list/calendar",
            icon: CalendarIcon,
            current: false,
          },
          {
            name: "Transaction",
            href: "/user/manage-list/transaction-history",
            icon: SwitchHorizontalIcon,
            current: false,
          },
        ]);
        break;
      case "/user/manage-list/calendar":
        setTabs([
          {
            name: "Reserves",
            href: "/user/manage-list/reserves",
            icon: ViewListIcon,
            current: false,
          },
          {
            name: "Calendar",
            href: "/user/manage-list/calendar",
            icon: CalendarIcon,
            current: true,
          },
          {
            name: "Transaction",
            href: "/user/manage-list/transaction-history",
            icon: SwitchHorizontalIcon,
            current: false,
          },
        ]);
        break;
      case "/user/manage-list/transaction-history":
        setTabs([
          {
            name: "Reserves",
            href: "/user/manage-list/reserves",
            icon: ViewListIcon,
            current: false,
          },
          {
            name: "Calendar",
            href: "/user/manage-list/calendar",
            icon: CalendarIcon,
            current: false,
          },
          {
            name: "Transaction",
            href: "/user/manage-list/transaction-history",
            icon: SwitchHorizontalIcon,
            current: true,
          },
        ]);
        break;
      case "/user/manage-list/guide":
        setTabs([
          {
            name: "Reserves",
            href: "/user/manage-list/reserves",
            icon: ViewListIcon,
            current: false,
          },
          {
            name: "Calendar",
            href: "/user/manage-list/calendar",
            icon: CalendarIcon,
            current: false,
          },
          {
            name: "Transaction",
            href: "/user/manage-list/transaction-history",
            icon: SwitchHorizontalIcon,
            current: false,
          },
        ]);
        break;
      default:
        break;
    }
  }, [location]);
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <ManageListTapComponent tabs={tabs} />
        <div>
          <Switch>
            <Route path={"/user/manage-list/reserves"} component={ManageListReserveComponent} />
            <Route path={"/user/manage-list/calendar"} component={ManageListCalendarComponent} />
            <Route path={"/user/manage-list/transaction-history"} component={ManageListTransactionsComponent} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default ManageListPage;
