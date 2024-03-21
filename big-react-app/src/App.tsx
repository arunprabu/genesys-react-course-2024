// This is a component -- reusable block of code
/** skeleton of the component
  * component can have imports, 
  * must have a function which returns JSX
  * must have export
*/
import './App.css'
import Footer from './layouts/Footer';
import Header from './layouts/Header';

const App: React.FC = () => {
  // App component is the ideal place for us to build the layout
  // returns JSX
  return (
    <div>
      <Header></Header>
      
      <main className='container mt-5 pt-2'>
        <h1>Success!</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;
