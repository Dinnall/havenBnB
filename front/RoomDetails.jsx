import React from 'react';
import $ from 'jquery';

const RoomDetails = React.createClass({
  getInitialState(){
    return({
      roomInfo:null,
      nearbyFood:null,
      zipCode:null
    })
  },

  componentDidMount(){
    var id = this.props.params.id;
    $.ajax({
      url:'/api/listing/' + id
    })
    .done((data) => {
      this.setState({roomInfo: data})
      //console.log(data);
    })
  },

  saveZipCode(event){
    this.setState({zipCode:event.target.value});
  },

  findSoupKitchens(event){
    event.preventDefault();
    var zipcode = this.state.zipCode;
    $.ajax({
      url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/'+zipcode+'/programs?api_key=b30f1b9f41161c0fb3b39cb49aff8104&serviceTag=food+pantry,free+meals&cursor=0&limit=40'
    })
    .done((data) => {
      console.log(data);
      var activeKitchens = [];
      data.programs.forEach((val) => {
        //console.log("val", val.offices[0].open_now_info.open_now);
        if(val.offices[0].open_now_info.open_now === true){
          activeKitchens.push(val);
        }
      })
      console.log(activeKitchens);
      this.setState({nearbyFood: activeKitchens});
    })
    .catch((error) => {
      console.log(error);
    })
  },


  render(){
    if(this.state.roomInfo){
    return(
      <div>
        <div>
          <img src={this.state.roomInfo[0].images[0]} />
          <p>What to expect: {this.state.roomInfo[0].description}</p>
          <p>Guests per night: {this.state.roomInfo[0].guestLimit}</p>
        </div>

        <div>
          <form onChange={this.saveZipCode} onSubmit={this.findSoupKitchens}>
            Find places nearby serving meals: 
            <input type='text' placeholder='Zip Code'></input>
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    )}
    else{
      return(
        <div>Loading...</div>)
    }
  }
})

export default RoomDetails;