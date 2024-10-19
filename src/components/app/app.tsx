
import './app.css';
import AppProvider from "../../services/appContext";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "../modal/modal";
import {CLOSE_DETAILS_MODAL} from "../../services/actions/app-action";
import {ModalDetails} from "../modal-details/modal-details";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../../pages/home";
import {ResultPage} from "../../pages/result-page";
import {PATH} from "../../utils/constant";

export const App: FC = () => {

    const dispatch = useDispatch()
    const modal = useSelector(state => state.modalStore)
    const handleClose = () => {
        dispatch({
            type: CLOSE_DETAILS_MODAL
        });
    }

      return (
        <div className="App">
          <header className="App-header"/>
          <main>
              <AppProvider>
                  <BrowserRouter>
                      <Routes>
                          <Route path={PATH.HOME} element={<HomePage/>}/>
                          <Route path={PATH.RESULT_PAGE} element={<ResultPage/>}/>
                      </Routes>
                  </BrowserRouter>

                  {modal.isOpen && <Modal onClose={handleClose}><ModalDetails/></Modal>}
              </AppProvider>
          </main>
        </div>
      );
}

export default App;
