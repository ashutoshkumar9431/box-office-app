import React ,{useState}from 'react'
import { MainPageLayout } from '../components/MainPageLayout'

export const Home = () => {
  const[input,setInput] = useState('')

  const onClickChange = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };
  const newInput = (ev) =>
  { setInput (ev.target.value)}

  const onEnter = (ev) =>
  { 
      if(ev.keyCode===13)
      onClickChange()
  }
  
  return (
   <MainPageLayout>
       <input type = "text" onChange = {newInput}  onKeyDown ={onEnter} value = {input} />
       <button type = "button" onClick = {onClickChange}>Search</button>
      </MainPageLayout>
  )
}
