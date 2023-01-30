import {useState, useEffect} from 'react'
import MobileDivider from '../images/pattern-divider-mobile.svg'
import DesktopDivider from '../images/pattern-divider-desktop.svg'
import Dice from '../images/icon-dice.svg'

const AdviceCall = () => {
  // to get the text and id
  const [text, setText] = useState('')
  const [id, setID] = useState('')

  const fetchAdvice = async() => {
    const resp = await fetch("https://api.adviceslip.com/advice")
    const data = await resp.json()
    setText(data.slip.advice)
    setID(data.slip.id)
  }

  // setup with an empty dependency array so it only runs once
  useEffect(() => {
    fetchAdvice()
  }, [])

  return(
    <div>
      <h1>Advice #{id}</h1>
      <p>{text}</p>
      <picture>
        <source media='(min-widthL 768px)' srcSet={DesktopDivider} />
        <img src={MobileDivider} alt='mobile divider img' />
      </picture>

      <div>
        <button onClick={fetchAdvice}><img src={Dice} alt='dice'/></button>
      </div>
    </div>

  )

}

export default AdviceCall