import {Button} from "../../ui/button";
import {GlassSearch, ClearForm} from '../../svg/export-svg'
import style from './research-form.module.css'
import React, {FC, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_REQUEST_VALUE, INITIAL_VALUE} from "../../services/actions/app-action";
import {getRequest} from "../../services/reducers/app-reducer";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../utils/constant"

export const ResearchForm: FC = () => {

  const requestStore = useSelector(state => state.requestStore)
  const navigate = useNavigate()
  useEffect(() => {
    if (requestStore.query !== '') {
      setFormValue(requestStore.query)
    } // eslint-disable-next-line
  }, []);

  const [formValue, setFormValue] = useState('')

  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
   // console.log('formData: ', String(formData.get('searchValue')))
    dispatch<any>({type: GET_REQUEST_VALUE, value: String(formData.get('searchValue'))})
    dispatch<any>(getRequest(String(formData.get('searchValue')), requestStore.current_page))
    navigate(PATH.RESULT_PAGE)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(`${e.target.value}`)
  }
  const clearForm = () => {
    setFormValue('')
    dispatch<any>({type: INITIAL_VALUE})
  }

  return (
    <form className={`${style.formContainer} flex flex-row justify-center gap-2`} onSubmit={(e) => handleSubmit(e)}>
      <div className={`${style.inputContainer} flex flex-row items-center gap-1 justify-between rounded-xl sm:min-w-96 min-w-64`}>
        <img
          loading={'lazy'}
          src={GlassSearch}
          width={20}
          height={19}
          alt={'icon glass'} />
        <input
          type={'text'}
          name={'searchValue'}
          className={`${style.input} min-w-52`}
          placeholder={'Телефоны, яблоки, груши...'}
          value={formValue as string || ''}
          onChange={(e) => handleChange(e)}
          autoFocus
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
  )
}
