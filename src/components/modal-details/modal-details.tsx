import {FC} from "react";
import {useSelector} from "react-redux";
import style from "../modal/modal.module.css";


export const ModalDetails: FC = () => {
    const element = useSelector(state => state?.modalStore)
    return (
        <div className={`${style.modalWrap} sm:inset-1/4 sm:grid sm:justify-start sm:top-5`}>
            {element && <img className={`${style.img}`} src={element?.element?.urls.regular} alt={element?.alt_description}/>}
        </div>
    )
}
