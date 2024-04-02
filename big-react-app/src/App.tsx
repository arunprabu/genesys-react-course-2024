// This is a component -- reusable block of code
/** skeleton of the component
 * component can have imports,
 * must have a function which returns JSX
 * must have export
 */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import { CartProvider } from "./contexts/CartContext";
import MainRoutes from "./routes/MainRoutes";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  // App component is the ideal place for us to build the layout
  // returns JSX
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header></Header>

          <main className="container mt-5 pt-2">
            {/* configure the routes */}
            <MainRoutes />
          </main>
        </CartProvider>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
