
import './app.css';
import {ResearchForm} from "../research-form/research-form";
import AppProvider from "../../services/appContext";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "../modal/modal";
import {CLOSE_DETAILS_MODAL} from "../../services/actions/app-action";
import {ModalDetails} from "../../pages/modal-details";

export const App: FC = () => {

    const dispatch = useDispatch()
    const modal = useSelector(state => state.modalStore)
  //  console.log('isOpen:',modal.isOpen)
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
                  <ResearchForm/>
                  {modal.isOpen && <Modal onClose={handleClose}><ModalDetails/></Modal>}
              </AppProvider>
          </main>
        </div>
      );
}

export default App;
