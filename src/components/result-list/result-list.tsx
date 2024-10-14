import {FC} from "react";
import style from "./result-list.module.css"

export const ResultList: FC = ({data}) => {
    console.log('ResultList: ',data)
    return (
        <section className={`grid sm:grid-cols-6 grid-cols-3 pt-8`}>
            <div className={`${style.containerImg} rounded`}>i am a IMG</div>
            <span>{data}</span>
        </section>
    )
}
