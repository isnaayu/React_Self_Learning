import { useState } from 'react'
import './App.css'
import FC from './components/FunctionalComp'
import { ClassComp, ClassComp1 } from './components/ClassComp'
import Click from './components/Click'
import Counter from './components/Counter'
import ParentComp from './components/ParentComp'
import ClassProps from './props/ClassProps'
import FunctionProps from './props/FunctionProps'

function App() {

  return (
    <>
     <h1>Hello Welcome to my Self Learning</h1>
     <h1>This is About Component</h1>
     <FC/>
     <ClassComp/>
     <ClassComp1/>
     <Click/>
     <Counter/>
     <ParentComp/>
     <ClassProps name="Isna Ayu" place="PlaceX">
      <p>Child Component</p>
      </ClassProps>
     <ClassProps name="Ayu" place="PlaceX">
      <button>Click</button>
     </ClassProps>
     <ClassProps name="Muarofah " place="PlaceX"/>
     <FunctionProps name="Isna Ayu Muarofah" place="PlaceA"/>
    </>
  )
}

export default App
