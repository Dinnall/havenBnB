import React from 'react';
import $ from 'jquery';
import {withRouter} from 'react-router';
import Popup from 'react-popup';
import './Index.css';

const RoomDetails = React.createClass({
  getInitialState(){
    return({
      roomInfo:null,
      nearbyFood:null,
      zipCode:null
    })
  },

  //gwtting listing info
  componentDidMount(){
    Popup.addCloseListener(() => this.props.router.push('/'))


    var id = this.props.params.id;
    $.ajax({
      url:'/api/listing/' + id
    })
    .done((data) => {
      this.setState({roomInfo: data});
      //console.log(data);
      this.findSoupKitchens();
    })
  },
  submitNewPost() {
    var id = this.props.params.id;
    $.ajax({
      url:'/api/listing/'+ id,
      type: 'PUT',
      data: {
        id: id,
        description: this.state.description,
        images: this.state.images,    
        guestLimit: this.state.guestLimit,    
        availability: this.state.availability,
        UserId: 1

      }

    })

    Popup.alert("Your Reservation Has Been Confirmed!!! If you require any further help contact us at help@havenbnb.com");
  },

  // saveZipCode(event){
  //   this.setState({zipCode:event.target.value});
  // },

  //api ajax call
  findSoupKitchens(){
    var zipcode = this.state.roomInfo[0].zipCode;
    $.ajax({
      url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/'+zipcode+'/programs?api_key=b30f1b9f41161c0fb3b39cb49aff8104&serviceTag=food+pantry,free+meals&cursor=0&limit=40'
    }) //filtering open kitchens only
    .done((data) => {
      var activeKitchens = [];
      var kitchenDescription = [];

      data.programs.forEach((val) => {
        if(val.offices[0].open_now_info.open_now === true){
          activeKitchens.push(val);
        }
      })
        //generating list of open kitchens
      if(activeKitchens.length !== 0){
        activeKitchens.forEach((val) => {
          //console.log(val);
          kitchenDescription.push(<li><h5>{val.name}</h5></li>, <li>Address: {val.offices[0].address1}</li>, <li>City: {val.offices[0].city}</li>, <li>Zip Code: {val.offices[0].postal}</li>, <li>Phone Number: {val.offices[0].phone_number}</li>, <li>Website: <a href={val.website_url}>{val.website_url}</a></li>)

      this.setState({nearbyFood: kitchenDescription});
        })
    }

    })
    .catch((error) => {
      console.log(error);
    })
  },


  render(){
    if(this.state.roomInfo){
    return(
      <div className="pageText">
        <div className="hostContainer">
          <img src={this.state.roomInfo[0].images[0]} />
          <p>What To Expect: {this.state.roomInfo[0].description}</p>

          <p>Guests Per Night: {this.state.roomInfo[0].guestLimit}</p>
          <button onClick={this.submitNewPost} type="button">Book Me!</button>

           <div>
           <Popup />

           </div>
        </div>

        <div>
            Find places nearby serving meals: 
            <ul>{this.state.nearbyFood}</ul>
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


          //<form onChange={this.saveZipCode} onSubmit={this.findSoupKitchens}>
            // <input type='text' placeholder='Zip Code'></input>
            // <input type="submit" value="Search" />
          //</form>