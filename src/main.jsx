import React from 'react'
import animals from './animals'
import AnimalCard from './Cards';

class Main extends React.Component{
    state ={
        AllAnimals : animals
    }
  addLike = (e) =>{
console.log('this is clicked');
this.setState({likes : this.likes + 1})
    }
    render()
    {
        const animalsList= this.state.AllAnimals.map((animal) => {
            return (
            <AnimalCard key={animal.name} 
            name={animal.name}
            likes = {animal.likes}
            
            >
                <button like = {'Add A Like'} cliked = {this.addLike}></button>
            </AnimalCard>
            );
        });
        console.log(animals);
    return(
        <div className='search'>
             {this.state.AllAnimals.length} animals
        <br></br>
        <input type="text" name="" id="" />
       <div className='main'>
       
        {animalsList}
       </div>
       </div>
//         animals.map((animal) =>(
            
// <AnimalCard 
// key = {animal.name}
// name ={animal.name}
// likes = {animal.likes}
// liked ={this.state.addLike}/>

//     )

//     )
    );
    
    }
}

export default Main;
