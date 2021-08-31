import React from 'react';
import DashboardPageHeaderComponent from 'components/admin/dashboard/pageheader';
import DashboardOverviewComponent from 'components/admin/dashboard/overview';

function Dashboardpage() {
  return (
    <div>
      <DashboardPageHeaderComponent/>
      <DashboardOverviewComponent/>
    </div>
  )
}

export default Dashboardpage
