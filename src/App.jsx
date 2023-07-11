import List from "./List";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [people, setPeople] = useState(data);
  const clearHandler =()=>{
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
      <List people={people}/>
      <button type="button" className="btn btn-block" onClick={clearHandler}>Clear all</button>
      </section>
    </main>
  );
};
export default App;
