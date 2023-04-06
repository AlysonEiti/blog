import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './functions/ScrollToTop';
import InitialPage from './pages/InitialPage';
import AboutMe from './pages/AboutMe';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import DefaultPage from "./pages/DefaultPage";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<InitialPage />} />
          <Route path="aboutme" element={<AboutMe />} />                            
        </Route> 

        <Route path="posts/:id" element={<Post />} />  
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;