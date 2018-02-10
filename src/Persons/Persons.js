import React,{Component} from 'react';
import Person from './Person/Person';


export default class Persons extends Component {


    // constructor(props){

    //     super(props);
    
    //   }
      
      
    
    //   componentWillMount = () => {
    
    //     console.log('Compoenent Will Mount Called ..');
    
    //   }
    
    //   componentDidMount = () => {
    
    //     console.log('Compoenent Did Mount Called ..');
    
    //   }
    
    //   componentWillUnmount = () => {
    
    //     console.log('Compoenent Un Mount Called ..');
    
    //   }
    
    //   componentWillReceiveProps = (updatedProps) =>{
    
    //     console.log('[componentWillReceiveProps] called ..',updatedProps);
    //   }
    
    //   shouldComponentUpdate = (updatedProps,updatedState) => {
    
    //     console.log('[componentShouldUpdate] called');
    //     return false;
    
    //   }

    render(){

        return(
            <div className="perons-wrapper">
          {
            this.props.persons.map((person,index)=>{
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                deleteClick={this.props.deletePersonHandler.bind(this,index)}
                onChange={(event)=>this.props.inputChangeHandler(event,person.id)} />
            } )
          }
        </div>
        )

    }

}