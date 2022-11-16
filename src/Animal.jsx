import React from 'react';
import animals from './animals';
import AnimalCard from './Cards';

class Animal extends React.Component{
    state ={
        AllAnimals : animals,
        searchValue : ''
    }
  
  addLike = (index,name,likesm,em) =>{
        console.log(name,likesm,em.target)
        this.setState((state) =>{
           
          const newAnimalList = state.AllAnimals.map(animal => {
                if (animal.name === name) {
                   return (
                    {...animal, likes : animal.likes +1}
                    );
                   
                }
              else
              {
                return animal;
              }
        });return {AllAnimals : newAnimalList};

        });
    };
    removeCard =(name) =>{
        const newarray = this.state.AllAnimals.filter(animal => animal.name !== name)
        this.setState({
            AllAnimals : newarray
        })
    }

    removeLike = (e,name)=>{
        this.setState((state) =>{
           
            const newAnimalList = state.AllAnimals.map(animal => {
                  if (animal.name === name) {
                     return (
                      {...animal, likes : animal.likes +1}
                      );
                     
                  }
                else
                {
                  return animal;
                }
          });return {AllAnimals : newAnimalList};
  
          });
       

    }

    addDislike(name){
        const newAnimals = this.state.AllAnimals.map((animal) => {
          if(animal.name === name){
            if(animal.dislike){
              animal.dislike ++;
            }
            else {
              animal.dislike = 1;
            }
          return animal;
          }
          else {
            return animal;
          }
        });
        this.setState({ animals: newAnimals });
        
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
sechrchTwo = (e) =>{
    this.setState({
       searchValue : e

    });

}

    render()
    {
        console.log(this.state.AllAnimals);
        const searchAnimal =
        this.state.AllAnimals.filter(animal => {
        return animal.name.trim().toUpperCase().includes(this.state.searchValue.trim().toUpperCase());
        });
        let animalsList=[];
if (searchAnimal.length > 0){
    animalsList = searchAnimal.map((animal ,index) => {
            return (

                <AnimalCard key={animal.name} 
                name={animal.name}
                likes = {animal.likes}
                CloseMe ={()=>this.removeCard(animal.name)} >
                            
                <button className='mainBtn' onClick={(e) => this.addLike(index,animal.name,animal.likes, e)}>&#10083; {animal.likes} &#x1F44D;</button>
                <button className='mainBtn' value='10' onClick={() => this.addDislike(animal.name)}>dis</button> 
                <span>{animal.dislike? animal.dislike : 0}</span>
                </AnimalCard>
            );

        });
    }
    else{
return <div className='unfoundSearch'><h3>No animals matches you search</h3> </div>
    }

    return(
        <div>
        <div className='search'>
        {this.state.AllAnimals.length} animals
        <br></br>
        {/* <input onKeyUp= {(e) => this.animalsearch(e.target.value)} type="text" name="" id=""/> */}
        <input onKeyUp= {(e) => this.sechrchTwo(e.target.value)} type="text" name="" id=""/>
        </div>
       <div className='main'>
       
        {animalsList}
       </div>
       </div>

    );
    
    }
}

export default Animal;
