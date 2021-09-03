import ManageListReserveComponent from 'components/host/managelist/reserves'
import ManageListTapComponent from 'components/host/managelist/tap'
import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { SwitchHorizontalIcon, DocumentIcon, LibraryIcon, ViewListIcon, MailOpenIcon, CalendarIcon } from '@heroicons/react/solid'
import ManageListInboxComponent from 'components/host/managelist/inbox'
import ManageListCalendarComponent from 'components/host/managelist/calendar'
import ManageListGuideComponent from 'components/host/managelist/guide'
import ManageListTransactionsComponent from 'components/host/managelist/transcations'
import { PrivateRoute } from 'shared/function'

function ManageListPage() {
    const[tabs, setTabs] = useState([
        { name: 'Reserves', href: '/user/manage-list/reserves', icon: ViewListIcon, current: true },
        { name: 'Inbox', href: '/user/manage-list/inbox', icon: MailOpenIcon, current: false },
        { name: 'Calendar', href: '/user/manage-list/calendar', icon: CalendarIcon, current: false },
        { name: 'Guide', href: '/user/manage-list/guide', icon: DocumentIcon, current: false },
        { name: 'Transaction', href: '/uesr/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: false },
    ])

    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case "/user/manage-list/reserves":
                setTabs([
                    { name: 'Reserves', href: '/user/manage-list/reserves', icon: ViewListIcon, current: true },
                    { name: 'Inbox', href: '/user/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/user/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/user/manage-list/guide', icon: DocumentIcon, current: false },
                    { name: 'Transaction', href: '/user/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: false },
                ])
                break;
            case "/user/manage-list/inbox":
                setTabs([
                    { name: 'Reserves', href: '/user/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/user/manage-list/inbox', icon: MailOpenIcon, current: true },
                    { name: 'Calendar', href: '/user/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/user/manage-list/guide', icon: DocumentIcon, current: false },
                    { name: 'Transaction', href: '/user/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: false },
                ])
                break;
            case "/user/manage-list/calendar":
                setTabs([
                    { name: 'Reserves', href: '/user/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/user/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/user/manage-list/calendar', icon: CalendarIcon, current: true },
                    { name: 'Guide', href: '/user/manage-list/guide', icon: DocumentIcon, current: false },
                    { name: 'Transaction', href: '/user/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: false },
                ])
                break;
            case "/user/manage-list/transaction-history":
                setTabs([
                    { name: 'Reserves', href: '/user/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/user/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/user/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/user/manage-list/guide', icon: DocumentIcon, current: false    },
                    { name: 'Transaction', href: '/user/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: true },
                ])
                break;
            case "/user/manage-list/guide":
                setTabs([
                    { name: 'Reserves', href: '/user/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/user/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/user/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/user/manage-list/guide', icon: DocumentIcon, current: true },
                    { name: 'Transaction', href: '/user/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: false },
                ])
                break;
            default:
                break;
        }
    }, [location])
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <ManageListTapComponent tabs={tabs}/>
                <div>
                    <Switch>
                        <PrivateRoute path={'/user/manage-list/reserves'} component={ManageListReserveComponent}/>
                        <Route path={'/user/manage-list/reserves'} component={ManageListReserveComponent}/>
                        <Route path={'/user/manage-list/inbox'} component={ManageListInboxComponent}/>
                        <Route path={'/user/manage-list/calendar'} component={ManageListCalendarComponent}/>
                        <Route path={'/user/manage-list/transaction-history'} component={ManageListTransactionsComponent}/>
                        <Route path={'/user/manage-list/guide'} component={ManageListGuideComponent}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ManageListPage
