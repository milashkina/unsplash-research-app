import React, {FC, useEffect} from "react";
import {ResultList} from "../components/result-list/result-list";
import {ResearchForm} from "../components/research-form/research-form";
import {useDispatch, useSelector} from "react-redux";
import {getRequest} from "../services/reducers/app-reducer";
import style from './result-page.module.css'
import styleBtn from '../ui/button.module.css'
import {INCREASE_PAGE} from "../services/actions/app-action";

export const ResultPage: FC = () => {
    const dispatch = useDispatch()
        const {results, isSuccess, query, current_page, isError} = useSelector(state => state.requestStore)

    useEffect(() => {
       // dispatch<any>(getRequest(query));
    }, []); // eslint-disable-next-line

    const onHandleClick = () => {
        dispatch<any>({type: INCREASE_PAGE})
        dispatch<any>(getRequest(query, current_page))
    }
    return(
        <div className={`${style.container} sm:pt-10 sm:px-20 sm:pb-24 p-4 flex flex-col gap-8`}>
            <ResearchForm />
            {isError && <span className={`${style.error}`}>К сожалению, поиск не дал результатов</span>}
            {isSuccess && <ResultList data={results} />}
            {isSuccess && <button className={` ${styleBtn.button} w-max self-center rounded-xl`} onClick={() => onHandleClick()}>
                загрузить еще
            </button>}
        </div>
    )
}
