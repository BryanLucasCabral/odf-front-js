import { GlobalProvider} from "./context/GlobalContext"
import Rotas from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <GlobalProvider>
      <Rotas/>
    </GlobalProvider>
  );
}

export default App;
