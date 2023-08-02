import React from 'react'
import Restaurant from './component/Basics/Restaurant'
//below is the fat arrow function
const App = () => {
  return (

  //here we can use div, section, article  tags , react fragment  
  <React.Fragment>
        <Restaurant/>
    
  </React.Fragment>
      
    //this is actually jsx ...looks like html but js can also be used here
    //in react we use className in place of class which is in camelCase font
  )
}



export default App
