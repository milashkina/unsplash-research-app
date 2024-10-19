import style from './button.module.css'

export const Button = () => {

  return (
    <button className={` ${style.button} rounded-xl`} type={"submit"}>
        Искать
    </button>
  )
}
