import React,{Component} from 'react';
import Person from './Person/Person';
import Aux from '../Hoc/Aux';
import WithClass from '../Hoc/WithClass';
import withClassMod from '../Hoc/withClassMod';


class Persons extends Component {


    constructor(props){

        super(props);
    
      }
    
      componentWillMount = () => {
    
        console.log('Compoenent Will Mount Called ..');
    
      }
    
      componentDidMount = () => {
    
        console.log('Compoenent Did Mount Called ..');
    
      }
    
      componentWillUnmount = () => {
    
        console.log('Compoenent Un Mount Called ..');
    
      }
    
      componentWillReceiveProps = (updatedProps) =>{
    
        console.log('[componentWillReceiveProps] called ..',updatedProps);
      }
    
      shouldComponentUpdate = (updatedProps,updatedState) => {
    
        console.log('[componentShouldUpdate] called');
        return this.props!==updatedProps;
    
      }

       componentWillUpdate = (updatedProps,updatedState)=>{

        console.log('Component Will update ..');

       }


       componentDidUpdate = ()=>{

        console.log('Component Did update ..');

       }

    render(){

        return(
            
            this.props.persons.map((person,index)=>{
              return <Person
                key={person.id}
                position={index}
                name={person.name}
                age={person.age}
                deleteClick={this.props.deletePersonHandler.bind(this,index)}
                onChange={(event)=>this.props.inputChangeHandler(event,person.id)} />
            } )
        
        )

    }

}

export default withClassMod(Persons,'persons-wrapper');