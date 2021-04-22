import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Cards from './Cards';
import Form from './Form';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';

const testData = [];
/*  {avatar_url: 'https://i1.sndcdn.com/artworks-000531302304-dvrblx-t500x500.jpg',
   name: 'Ken Kaneki',
   company: 'Ghoul' 
},
{avatar_url: 'https://imgix.ranker.com/user_node_img/50081/1001614910/original/your-goal-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&w=375',
name: 'Monkey D Luffy',
company: 'Pirate'
}
]*/


class Index extends React.Component {
 state = {
      profile: testData,
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profile: [...prevState.profile,profileData]
    })
      
    )
    };

  render(){
    return(
      <div>
        <App title="The Github Cards App "/>
        <Form onSubmit={this.addNewProfile} />
        <CardList profile = {this.state.profile} />
      </div>
    )
  }
}
  

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
