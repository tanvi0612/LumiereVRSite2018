import React, { Component } from 'react';

class Distribute extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 align="center" >
          Cinematic VR Case Studies
        </h1>
        <p align = "center"> 
        Here are some case studies LumiereVR has undertaken involving the use of stand alone headsets and custom software systems. 
        </p>
        <hr color= "black"/>
        <h1>
        Case 1
        </h1>
        <h2 align="center"> 
          Virtual Reality Microtheaters
        </h2>
        <div className="case1TheaterWrapperDiv">
          <div className = "case1TheaterLeftDiv">
            <img src={require('../../images/theaters/Case1TheaterRender.png')}/> 
            <img src={require('../../images/theaters/Case1TheaterDemo.png')}/>
          </div>
          <div className = "case1TheaterRightDiv">
            <p>
              Partnering with the creators of The Click Effect as well as Zoos, Aquariums, and Museums we use a syncronized system of stand alone head-sets controlled by a master Tablet  
            </p>
            <p>
              Theaters are usually fairly portable, they come with collapsible walls and ambient light, along with N number of swivel chairs. 
            </p>
            <p>
              Headset system running continuously at 15 minutes per interval lasts 7 hours a day +- 30 minutes. 
            </p>
            <p>
              Standard micro-usb charging towers ensure headsets are fully charged at night and ready to run in the morning.
            </p>
            <p>
              On the left is an installment we’ve built for Prairie Fire in Kansas City. 
            </p>
            <p>
              On the bottom is complementary analysis of both performance and behaviour from headtracking heatmaps powered by Retinad.
            </p>
            <p>
              Email <a href = "mailto:theaters@lumierevr.com"> theaters@lumierevr.com </a> to learn how you and your brand can benifit from offline location-based VR distribution systems. 
            </p>
          </div>
        </div>
       
        <div className="case1TheaterBottomWrapperDiv">
          <div className="case1TheaterBottomLeftDiv">
            <img src={require('../../images/theaters/Case1Heatmap.png')}/> 
          </div>
          <div className="case1TheaterBottomRightDiv">
            <img src={require('../../images/theaters/Case1Graph.png')}/>
          </div> 
        </div>
        <hr color="black" />
        <h1>
          Case 2
        </h1>
        <h2 align="center"> 
          Festival/Conference Pop-Up VR
        </h2>
        <div className="case2TheaterWrapperDiv">
          <div className = "case2TheaterLeftDiv">
            <img src={require('../../images/theaters/Case1TheaterRender.png')}/> 
            <img src={require('../../images/theaters/Case1TheaterDemo.png')}/>
          </div>
          <div className = "case1TheaterRightDiv">
            <p>
              Partnering with the creators of The Click Effect as well as Zoos, Aquariums, and Museums we use a syncronized system of stand alone head-sets controlled by a master Tablet  
            </p>
            <p>
              Theaters are usually fairly portable, they come with collapsible walls and ambient light, along with N number of swivel chairs. 
            </p>
            <p>
              Headset system running continuously at 15 minutes per interval lasts 7 hours a day +- 30 minutes. 
            </p>
            <p>
              Standard micro-usb charging towers ensure headsets are fully charged at night and ready to run in the morning.
            </p>
            <p>
              On the left is an installment we’ve built for Prairie Fire in Kansas City. 
            </p>
            <p>
              On the bottom is complementary analysis of both performance and behaviour from headtracking heatmaps powered by Retinad.
            </p>
            <p>
              Email <a href = "mailto:theaters@lumierevr.com"> theaters@lumierevr.com </a> to learn how you and your brand can benifit from offline location-based VR distribution systems. 
            </p>
          </div>
        </div>


           
      </div>
    );
  }
}

export default Distribute;
