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
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './locales/en/translation.json';
import frTranslation from "./locales/fr/translation.json";
import enAuTranslation from "./locales/en-AU/translation.json";

// Setting up i18n with translations
i18n
  // passing the react-i18next instance to i18n
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      // Let's support two languages: en, fr
      // loading the translation files
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      "en-AU": { translation: enAuTranslation },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

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
