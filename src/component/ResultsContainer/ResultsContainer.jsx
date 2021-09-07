import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNameList = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })

    return (
        <div className="results-container">
            {suggestedNameList}
        </div>
    )
}

export default ResultsContainer;