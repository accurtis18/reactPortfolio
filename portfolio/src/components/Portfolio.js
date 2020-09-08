import React from 'react';
import brew from "../assets/images/taproom.jpg";
import weather from "../assets/images/weather.jpg";
import planner from "../assets/images/dayPlanner.jpg";

class Portfolio extends React.Component{
    render(){
        return(
            <div className="container portfolio" id="portfolio">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="portTitle">Portfolio</h1>
                </div>
            </div>
            <div className="row topPortfolio" >
                <div className="col-md-6 port">
                    <a className="portLinks" href="https://accurtis18.github.io/breweryFinder/"><h1>Brewery Finder</h1></a>
                    <p className="portDesc">Project developed using geolocation, brewerydb api, and mapbox api to show breweries near your current location. 
                        Ability to search other US cities for breweries. Add breweries to your wish list to come back to later. Helps 
                        in planning a trip and finding breweries you'd like to visit.</p>
                        <a className="portLinks" href="https://github.com/accurtis18/breweryFinder"><strong>Github</strong></a>
                </div>
                <div className="col-md-6">
                    <a href="https://accurtis18.github.io/breweryFinder/"><img className="img-fluid portfolioImg"  src={brew} alt="Brewery Finder Project"/></a>
                </div>
            </div>
            <div className="row portfolioItem">
                <div className="col-md-6 order-md-12 port">
                    <a className="portLinks"href="https://accurtis18.github.io/assignment-6/"><h1>Weather App</h1></a>
                    <p className="portDesc">A local weather app, when opend shows you weather near your current location, offering current weather and a five day forecast.
                         A switch on the top right allows you to be able to see the current weather in fahrenheit or celsius.
                    </p>
                    <a className="portLinks" href="https://github.com/accurtis18/assignment-6"><strong>Github</strong></a>
                </div>
                <div className="col-md-6 order-md-1">
                    <a href="https://accurtis18.github.io/assignment-6/"><img className="img-fluid portfolioImg" src={weather} alt="Weather Application"/></a>
                </div>
    
            </div>
            <div className="row portfolioItem">
                <div className="col-md-6 port">
                    <a className="portLinks" href="https://accurtis18.github.io/assignment5/"><h1>Day Planner</h1></a>
                    <p className="portDesc">This daily planner allows you to see the current workday hours. You can move back and forth to any day with the forward and back arrows.</p>
                    <a className="portLinks" href="https://github.com/accurtis18/assignment5"><strong>Github</strong></a>
                </div>
                <div className="col-md-6">
                    <a href="https://accurtis18.github.io/assignment5/"><img className="img-fluid portfolioImg" src={planner} alt="Day Planner Application"/></a> 
                </div>
            </div>
        </div>
        )
    }
}
export default Portfolio;