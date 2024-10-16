import {Button} from "../../ui/button";
import {GlassSearch, ClearForm} from '../../svg/export-svg'
import style from './research-form.module.css'
import React, {FC, FormEvent, useState} from "react";
import {getRequest} from "../../services/reducers/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ResultList} from "../result-list/result-list";


export const ResearchForm: FC = () => {

  const [formValue, setFormValue] = useState('')
  const {results, isSuccess} = useSelector(state => state.requestStore)
  const dispatch = useDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await dispatch<any>(getRequest(String(formData.get('searchValue'))));
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(`${e.target.value}`)
  }
  const clearForm = () => {
    setFormValue('')
  }

  return (
    <div className={`p-4`}>
      <form className={`${style.formContainer} gap-2`} onSubmit={(e) => handleSubmit(e)}>
        <div className={`${style.inputContainer} rounded-xl`}>
          <img
            loading={'lazy'}
            src={GlassSearch}
            width={20}
            height={19}
            alt={'icon glass'}
            className={`${style}`}/>
          <input
            type={'text'}
            name={'searchValue'}
            className={`${style.input}`}
            placeholder={'Телефоны, яблоки, груши...'}
            value={formValue as string || ''}
            onChange={(e) => handleChange(e)}
          />
          <img
            loading={'lazy'}
            src={ClearForm}
            width={19}
            height={19}
            alt={'button clear query'}
            className={`${style.clearIcon}`}
            onClick={() => clearForm()}/>
        </div>
        <Button />
      </form>
      {isSuccess && <ResultList data={results} />}
    </div>
  )
}
