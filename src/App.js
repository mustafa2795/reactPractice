import './App.css';

import Experience from './components/experience';
import Education from './components/education';
import Skill from './components/skill';

function App() {

  var obj = {
    data: ["1 year"]
  }

  return (
    <>
    <Education></Education>
    <Experience {...obj} ></Experience>
    <Skill></Skill>
    </>
  );
}

export default App;
