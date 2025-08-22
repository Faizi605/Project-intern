
const Button = (props) => {
  return (
    <div>
      <button className={` font-navbold cursor-pointer ${props.classes}`}>{props.value}</button>
    </div>
  )
}

export default Button