const Person = (props) => {
  return (
        <article className="person">
            <img src={props.image} alt={props.name} className="img"/>
            <div>
                <h4>{props.name}</h4>
                <p>{props.age} Years</p>
            </div>
        </article>
  )
}
export default Person