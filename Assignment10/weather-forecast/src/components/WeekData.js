import React from 'react';
import DayData from './DayData';

class WeekData extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL =
      `http://api.openweathermap.org/data/2.5/forecast?zip=02115&units=metric&APPID=4b64e60a97b9e6e196bcf12d8f2993a3`

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayData reading={reading} key={index} />)
  }

  
  render() {
    return (
      <div className="container">
        <h1 className="display-1 jumbotron" style={{backgroundColor: 'bisque', fontFamily: 'sans-serif'}}>5-Day Forecast</h1>
        <h5 className="display-4 " style={{color: 'black', marginBottom: '30px', fontFamily: 'sans-serif'}}>Boston, US</h5>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    )
  }
}

export default WeekData;