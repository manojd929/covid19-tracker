import React from 'react'
import { Typography } from '@material-ui/core'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'


class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount () {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ country: country, data: fetchedData })
    }

    render () {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <Typography variant="h3" color="textPrimary">COVID-19 Tracker</Typography>
                <Cards
                    data={data}
                />
                <CountryPicker
                    handleCountryChange={this.handleCountryChange}
                />
                <Chart
                    data={data}
                    country={country}
                />
            </div>
        )
    }
}

export default App
