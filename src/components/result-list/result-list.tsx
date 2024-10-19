import {FC} from "react";
import style from "./result-list.module.css"
import {useDispatch} from "react-redux";
import {OPEN_DETAILS_MODAL} from "../../services/actions/app-action";
import {selectResult} from "../../services/reducers/modal-reducer";

export const ResultList: FC = ({data}) => {
    const dispatch = useDispatch()
   // console.log('ResultList: ',data)

    function handleResultClick(el) {
        dispatch(selectResult(el));
        dispatch({type: OPEN_DETAILS_MODAL})
    }

    return (
        <section className={`grid sm:grid-cols-6 grid-cols-3 gap-2 items-center`} >
            {data.map((el) => (
                <img
                    className={`${style.img} rounded cursor-pointer`}
                    loading={'lazy'}
                    alt={`${el.alt_description}`}
                    src={`${el.urls.small}`}
                    onClick={() => handleResultClick(el)}
                    id={el.id}
                />
            ))}
        </section>
    )
}
