import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "@routes/RoutesIndex";
import Header from "@components/Header";
import { AuthProvider } from "@context/Authcontext";

function App() {
  
  return (
    <>
    <AuthProvider>
     <BrowserRouter>
       <Header />
       <RoutesIndex/>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
