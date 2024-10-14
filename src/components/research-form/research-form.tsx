import {Button} from "../../ui/button";
import {GlassSearch, ClearForm} from '../../svg/export-img'
import style from './research-form.module.css'
import {FC, FormEvent, useContext, useState} from "react";
import {getSearch} from "../../utils/queries/search";
import {AppContext, TqueryContext} from "../../services/appContext";


export const ResearchForm: FC = () => {

  const [isLoad, setLoad] = useState( false)
  const {query,setQuery} = useContext(AppContext)
  let data = {
    total: null,
    total_pages: null,
    results: []
  } as TqueryContext

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
   // console.log('formData.get(\'searchValue\'):', formData.get('searchValue'))
    // setFormValue(formData.get('searchValue'));
    // console.log('value: ', formValue)
    // localStorage.setItem('query', formValue)
    try {
      const res = await getSearch(String(formData.get('searchValue')))
      console.log(res)
     // data.results = res.results
      setLoad(true)
      console.log('isLoad: ', isLoad)
      if (setQuery) {
        setQuery({
          total: res.total,
          total_pages: res.total_pages,
          results: res.results
        })
      }
      console.log('query: ', query)
    }
    catch (error) {
      console.log(error)
      setLoad(false)
    }
  }

/*  useEffect(() => {
    if (setQuery && isLoad) {
      setQuery({
        total: data.total,
        total_pages: data.total_pages,
        results: data.results
      })
    }
  }, [isLoad]);*/

  const clearForm = () => {
    localStorage.removeItem('query');
  //  setFormValue('')
  }

  return (
    <form className={`${style.formContainer}`} onSubmit={(e) => handleSubmit(e)}>
      <div className={`${style.inputContainer} rounded-xl`}>
        <span>
          <img
            loading={'lazy'}
            src={GlassSearch}
            width={20}
            height={19}
            alt={'icon glass'}
            className={`${style}`}/>
        </span>
        <input
          type={'text'}
          name={'searchValue'}
          className={`${style.input}`}
          placeholder={'Телефоны, яблоки, груши...'}
         // value={formValue}
        />
        <span>
          <img
            loading={'lazy'}
            src={ClearForm}
            width={19}
            height={19}
            alt={'button clear query'}
            className={`${style.clearIcon}`}
            onClick={() => clearForm()}/>
        </span>
      </div>
      <Button />
    </form>
  )
}
