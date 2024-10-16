import {FC} from "react";
import {useSelector} from "react-redux";
import style from "../components/modal/modal.module.css";


export const ModalDetails: FC = () => {
    const element = useSelector(state => state?.modalStore)
    return (
        <div className={`${style.modalWrap} sm:pt-10 sm:pb-10 sm:grid sm:justify-center sm:align-center`}>
            {element && <img src={element?.element?.urls.full} alt={element?.alt_description} width={`760px`}/>}
        </div>
    )
}
