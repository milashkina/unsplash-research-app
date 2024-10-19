import {FC} from "react";
import {ResearchForm} from "../components/research-form/research-form";


export const HomePage: FC = () => {

    return(
        <div className={`pt-64`}>
            <ResearchForm/>
        </div>
    )
}
