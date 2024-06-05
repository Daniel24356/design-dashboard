import './App.css'
import Review from "./ADashboard/Review.tsx"
import Boxes from "./ADashboard/Boxes.tsx"
import Due from "./ADashboard/due.tsx"
import AdminChart from "./components/mainNavigation.tsx"
import SalesChart from './components/SalesChart.tsx'

import Creative from "./ADashboard/creative.tsx"
import Sidebar from "./ADashboard/Sidebar.tsx"

const App: React.FC = () => {

  return (
    <>
      <div className="dashboard-cont">
        <div>
          <Sidebar />
        </div>
        <div>
          <Review />
          <Boxes />
          <div className='all-chart'>
            <div className='first-chart'>
              <AdminChart />
            </div>
            <div className='second-chart'>
              <SalesChart />
            </div>
          </div>
          <Due />
          <Creative />
        </div>
      </div>
    </>

  )
}

export default App
