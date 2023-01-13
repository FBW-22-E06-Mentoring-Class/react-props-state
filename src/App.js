
import React from 'react';
import Article from './Article';
import Counter from './Counter';
import GreetUser from './GreetUser';

function App() {
  let students = ["Naqvi","Joseph","Max","Rana","Misbah","Cansin"]
  return (
    <div className="App">
     {/*  <GreetUser/>
      <GreetUser/>
      <GreetUser/>
      <GreetUser/>
      <GreetUser/> */}
    
   {/*  { GreetUser("Naqvi") } */}  {/* <h1>Hi, John</h1> */}
  {/*   { GreetUser("Robert") }  */}
   {/*  <GreetUser name="Nikolas" />  */}
    {/* { GreetUser({name:"Nikolas"}) }  */}

      {/* {students.map(student=>{
        return (<GreetUser name={student}/>)
      })} */}

{/* <div style={{display:"flex"}}>
    <Article heading="Declarative" para1="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." para2="Declarative views make your code more predictable and easier to debug."/>
    <Article heading ="Component-Based" para1="Build encapsulated components that manage their own state, then compose them to make complex UIs" para2="Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."/>
    <Article/>
</div> */}


<Counter/>
    </div>
  );
}

export default App;


