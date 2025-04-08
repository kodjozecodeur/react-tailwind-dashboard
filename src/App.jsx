import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <div className="flex">
          <Sidebar />
          <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
            <Header />
            <div>
              <Dashboard />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
