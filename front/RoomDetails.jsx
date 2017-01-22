import React from 'react';
import $ from 'jquery';

const RoomDetails = React.createClass({
  getInitialState(){
    return({
      roomInfo:null,
      nearbyFood:null
    })
  },

  componentDidMount(){
    var id = this.props.params.id;
    $.ajax({
      url:'/api/listing/' + id
    })
    .done((data) => {
      this.setState({roomInfo: data})
      console.log("Room info saved.")
    })

    // var zipcode = 10001;
    // $.ajax({
    //   url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/'+zipcode+'/programs?api_key=b30f1b9f41161c0fb3b39cb49aff8104&serviceTag=food+pantry,free+meals&cursor=0&limit=25'
    // })
    // .done((data) => {
    //   var activeKitchens = data.programs.map((val) => {
    //     if(val.open_now_info.open_now === true){
    //       return val
    //     }
    //   })
    //   this.setState({nearbyFood: activeKitchens});
    // })
  },

  render(){
    console.log("hello error")
    return(
      <div>
        <p>Room Details</p>
        <p>Food Info</p>
      </div>
    )
  }
})

export default RoomDetails;