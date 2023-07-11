import Person from "./Person"

const List = (props) => {
  return (
    <section>
        {props.people.map((person)=>{
            return <Person key={person.id} {...person}/>
        })}
    </section>
  )
}
export default List