import React ,{useState}from 'react'
import { MainPageLayout } from '../components/MainPageLayout'
import  {apiGet}  from '../misc/config'

export const Home = () => {
  const[input,setInput] = useState('')
  const[results,setResult] = useState(null)

  const onClickChange = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResult(result);
    });
  };
  const newInput = (ev) =>
  { setInput (ev.target.value)}

  const onEnter = (ev) =>
  { 
      if(ev.keyCode===13)
      onClickChange()
  }
  const renderResult = () =>
  { 
     if(results && results.length===0)
     {
        return <div>No results</div>
     }
     if(results && results.length>0)
     {
      return <div>{results.map( (items) => <div key = {items.show.id}>{items.show.name}</div>)}</div>
     }
   return null

  }
  return (
   <MainPageLayout>
       <input type = "text" onChange = {newInput}  onKeyDown ={onEnter} value = {input} />
       <button type = "button" onClick = {onClickChange}>Search</button>
       {renderResult()}
      </MainPageLayout>
  )
}
