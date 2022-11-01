import React from 'react'
import animals from './animals'
import AnimalCard from './Cards';

class Main extends React.Component{
    state ={
        AllAnimals : animals
        
    }
  
  addLike = (name,likes,e) =>{
  console.log(name,likes,e.target)
this.setState({
    // likes : this.state.AllAnimals.filter(x => x.name === name).map(x => x.likes )
 
})
    }

      animalsearch = async myStr =>{
        if (myStr.length > 0){
            const newarray =
         this.state.AllAnimals.filter(animal => {
          return animal.name.trim().toUpperCase().includes(myStr.trim().toUpperCase());
        });
        this.setState({
            AllAnimals : newarray
        })
    
       
    }
    else{
        this.setState({
            AllAnimals : animals
        })
    }
    }
    render()
    {
        const animalsList= this.state.AllAnimals.map((animal) => {
            return (
            <AnimalCard key={animal.name} 
            name={animal.name}
            likes = {animal.likes}>              
                <button onClick={(e) => this.addLike(animal.name,animal.likes, e)}>Add Like </button>
            </AnimalCard>
            );

        });

    return(
        <div className='search'>
             {this.state.AllAnimals.length} animals
        <br></br>
        <input onKeyUp= {(e) => this.animalsearch(e.target.value)} type="text" name="" id=""/>
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
