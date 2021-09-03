import ManageListReserveComponent from 'components/host/managelist/reserves'
import ManageListTapComponent from 'components/host/managelist/tap'
import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { SwitchHorizontalIcon, DocumentIcon, LibraryIcon, ViewListIcon, MailOpenIcon, CalendarIcon } from '@heroicons/react/solid'
import ManageListInboxComponent from 'components/host/managelist/inbox'
import ManageListCalendarComponent from 'components/host/managelist/calendar'
import ManageListGuideComponent from 'components/host/managelist/guide'
import ManageListTransactionsComponent from 'components/host/managelist/transcations'

function ManageListPage() {
    const[tabs, setTabs] = useState([
        { name: 'Reserves', href: '/manage-list/reserves', icon: ViewListIcon, current: true },
        { name: 'Inbox', href: '/manage-list/inbox', icon: MailOpenIcon, current: false },
        { name: 'Calendar', href: '/manage-list/calendar', icon: CalendarIcon, current: false },
        { name: 'Guide', href: '/manage-list/guide', icon: DocumentIcon, current: false },
        { name: 'Transaction', href: '/manage-list/reserves', icon: SwitchHorizontalIcon, current: false },
    ])

    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case "/manage-list/reserves":
                setTabs([
                    { name: 'Reserves', href: '/manage-list/reserves', icon: ViewListIcon, current: true },
                    { name: 'Inbox', href: '/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/manage-list/guide', icon: DocumentIcon, current: false },
                    { name: 'Transaction', href: '/manage-list/reserves', icon: SwitchHorizontalIcon, current: false },
                ])
                break;
            case "/manage-list/inbox":
                setTabs([
                    { name: 'Reserves', href: '/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/manage-list/inbox', icon: MailOpenIcon, current: true },
                    { name: 'Calendar', href: '/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/manage-list/guide', icon: DocumentIcon, current: false },
                    { name: 'Transaction', href: '/manage-list/reserves', icon: SwitchHorizontalIcon, current: false },
                ])
                break;
            case "/manage-list/calendar":
                setTabs([
                    { name: 'Reserves', href: '/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/manage-list/calendar', icon: CalendarIcon, current: true },
                    { name: 'Guide', href: '/manage-list/guide', icon: DocumentIcon, current: false },
                    { name: 'Transaction', href: '/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: false },
                ])
                break;
            case "/manage-list/transaction-history":
                setTabs([
                    { name: 'Reserves', href: '/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/manage-list/guide', icon: DocumentIcon, current: false    },
                    { name: 'Transaction', href: '/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: true },
                ])
                break;
            case "/manage-list/guide":
                setTabs([
                    { name: 'Reserves', href: '/manage-list/reserves', icon: ViewListIcon, current: false },
                    { name: 'Inbox', href: '/manage-list/inbox', icon: MailOpenIcon, current: false },
                    { name: 'Calendar', href: '/manage-list/calendar', icon: CalendarIcon, current: false },
                    { name: 'Guide', href: '/manage-list/guide', icon: DocumentIcon, current: true },
                    { name: 'Transaction', href: '/manage-list/transaction-history', icon: SwitchHorizontalIcon, current: false },
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
                        <Route path={'/manage-list/reserves'} component={ManageListReserveComponent}/>
                        <Route path={'/manage-list/inbox'} component={ManageListInboxComponent}/>
                        <Route path={'/manage-list/calendar'} component={ManageListCalendarComponent}/>
                        <Route path={'/manage-list/transaction-history'} component={ManageListTransactionsComponent}/>
                        <Route path={'/manage-list/guide'} component={ManageListGuideComponent}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ManageListPage
