import Cards from './Cards';

function CardList(props){
    return(
        props.profile.map((event) => <Cards key={event.id} {...event} />)
    )
}

export default CardList;