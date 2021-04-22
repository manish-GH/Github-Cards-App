function Cards(props){
    return(
      <div className="github-profile" style={{margin: '1rem', alignText: 'center'}}>
        <img src={props.avatar_url} style={{width: 200, height: 200}} alt="profile pic" />
        <div className="info" style={{display: 'inline-block',  marginLeft: 10}}>
            <div className="name" style={{fontsize: '125%'}}>{props.name}</div>
            <div className="company">{props.company}</div>
        </div>
      </div>
    );
}

export default Cards;