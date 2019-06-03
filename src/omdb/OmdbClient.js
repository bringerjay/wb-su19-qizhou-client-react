import React from 'react'
import SearchMovie from "./SearchMovie";

export default class OmdbClient extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h1>Omdb Client</h1>
                <SearchMovie/>
            </div>
        )
    }
}