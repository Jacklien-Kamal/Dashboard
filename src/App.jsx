import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Activites from "./components/activities/Activites";
import StudentsIds from "./components/cards/StudentsIds";
import Complaint from "./components/complaint/Complaint";
import StudentDetails from "./components/cards/StudentDetails";

function App() {
  return (
    <>
      <div className="flex bg-white ">
        <Router>
          
            <Header />
            <Sidebar />
    
          <Routes>
          <Route path="/" element={<Main />} />

            <Route path="/acivities" element={<Activites />} />
            <Route path="/ids" element={<StudentsIds />} />
            <Route path="/student/:id" element={<StudentDetails/> } />
            <Route path="/complaint" element={<Complaint />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
