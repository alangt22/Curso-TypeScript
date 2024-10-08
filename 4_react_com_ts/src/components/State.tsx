import React,{useState, ChangeEvent} from 'react'

const State = () => {

    const [text, setText] = useState<string | null>("")


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

  return (
    <div>
        <p>o texto e: {text}</p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State