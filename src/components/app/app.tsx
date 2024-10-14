
import './app.css';
import {ResearchForm} from "../research-form/research-form";
import {ResultList} from "../result-list/result-list";
import AppProvider, {AppContext,} from "../../services/appContext";
import {useContext, useEffect} from "react";

function App() {

    const {query} = useContext(AppContext)

    useEffect(() => {
        query?.results && console.log('app: ', query)
    }, [query]);

  return (
    <div className="App">
      <header className="App-header"/>
      <main>
          <AppProvider>
              <ResearchForm/>
              {query?.results && <ResultList data={query}/>}
          </AppProvider>
      </main>
    </div>
  );
}

export default App;
