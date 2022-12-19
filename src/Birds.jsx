import React, { Component } from 'react';
import {birds} from './animals';
import AnimalCard from './AnimalCards';

class Birds extends Component {

    state ={
        AllBirds : birds,
        searchValue : ''
    }
  
  addLike = (index,name,likesm,em) =>{
        console.log(name,likesm,em.target)
        this.setState((state) =>{
           
          const newbirdsList = state.AllBirds.map(bird => {
                if (bird.name === name) {
                   return (
                    {...bird, likes : bird.likes +1}
                    );
                   
                }
              else
              {
                return bird;
              }
        });return {AllBirds : newbirdsList};

        });
    };
    removeCard =(name) =>{
        const newarray = this.state.AllBirds.filter(bird => bird.name !== name)
        this.setState({
            AllBirds : newarray
        })
    }

    addDislike(name){
        const newbirds = this.state.AllBirds.map((bird) => {
          if(bird.name === name){
            if(bird.dislike){
              bird.dislike ++;
            }
            else {
              bird.dislike = 1;
            }
          return bird;
          }
          else {
            return bird;
          }
        });
        this.setState({ animals: newbirds});
        
      }

    birdsearch = async myStr =>{
    if (myStr.length > 0){
        const newarray =
        this.state.AllBirds.filter(bird => {
        return bird.name.trim().toUpperCase().includes(myStr.trim().toUpperCase());
        });
        this.setState({
            AllBirds : newarray
        })
    }
    else{
        this.setState({
            AllBirds : birds
        })
    }
    }
sechrchTwo = (e) =>{
    this.setState({
       searchValue : e

    });

}

    render() {
        const searchBirds=
        this.state.AllBirds.filter(bird => {
        return bird.name.trim().toUpperCase().includes(this.state.searchValue.trim().toUpperCase());
        });
        let birdysList=[];
if (searchBirds.length > 0){
    birdysList = searchBirds.map((bird ,index) => {
            return (

                <AnimalCard key={bird.name} 
                name={bird.name}
                likes = {bird.likes}
                CloseMe ={()=>this.removeCard(bird.name)} >
                            
                <button className='mainBtn' onClick={(e) => this.addLike(index,bird.name,bird.likes, e)}>&#10083; {bird.likes} &#x1F44D;</button>
                <button className='mainBtn' value='10' onClick={() => this.addDislike(bird.name)}>dis</button> 
                <span>{bird.dislike? bird.dislike : 0}</span>
                </AnimalCard>
            );

        });
    }
    else{
return <div className='unfoundSearch'><h3>No Birds matches you search</h3> </div>
    }

    return(
        <div className='AppMainBody'>
        <div className='search'>
          <p> {this.state.AllBirds.length} Birds</p>
        
        <br></br>
        {/* <input onKeyUp= {(e) => this.animalsearch(e.target.value)} type="text" name="" id=""/> */}
        <input onKeyUp= {(e) => this.sechrchTwo(e.target.value)} type="text" name="" id=""/><label htmlFor="">&#9997;</label>
        </div>
       <div className='main'>
       {birdysList}
       
       </div>
       </div>

    );
    
    }
}

export default Birds;