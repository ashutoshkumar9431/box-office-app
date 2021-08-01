import React ,{useState}from 'react'
import  MainPageLayout  from '../components/MainPageLayout'
import ShowGrid from '../components/shows/ShowGrid'
import ActorGrid from '../components/actor/ActorGrid'
import  {apiGet}  from '../misc/config'

export const Home = () => {
  const[input,setInput] = useState('')
  const[results,setResult] = useState(null)
  const[searchOptions,setSearchOptions] = useState('shows')

  const isShowSearch = searchOptions === 'shows'

  const onClickChange = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
      setResult(result);
      console.log(results)
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
      return  results[0].show ? <ShowGrid data = {results}/> : <ActorGrid  data = {results}/>}
   return null
  }
  const  onRadioChanges = (ev) =>
  { 
      setSearchOptions(ev.target.value)
  }
  return (
   <MainPageLayout>
       <input type = "text" 
       placeholder = "Search for something"
       onChange = {newInput} 
        onKeyDown ={onEnter} 
        value = {input} 
        />
        <div>
        <label htmlFor = "search show" >
          show
         <input input id = "search show" 
          type = "radio" 
          value = "shows"
          onChange = {onRadioChanges}
          checked = {isShowSearch}/>
        </label>
        <label htmlFor = "search actor" >
         actor
         <input input id = "search actor"
           type = "radio" 
           value ="people"
           onChange = {onRadioChanges }
           checked = {!isShowSearch}/>
        </label>
        </div>
       <button type = "button" onClick = {onClickChange}>Search</button>
       {renderResult()}
       </MainPageLayout>
  )
}
