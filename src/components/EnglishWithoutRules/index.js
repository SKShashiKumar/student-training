import React from 'react'
import Cards from './Cards'
import './EnglishWithoutRules.scss'

const EnglishWithoutRules = () => {
  return (
    <div className="EnglishWithoutRules">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>English without rules. <br/> Start speaking properly!</h1>
                </div>  
            </div>
            <div className="row g-4 justify-content-center align-items-center pt-4">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <Cards imgUrl={'Statements.jpeg'} Heading={'Statements'} Desc={'Sample text. Click to select the text box. Click again. Odio euismod lacinia at quis risus sed vulputate odio. Ac turpis egestas maecenas pharetra.'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <Cards imgUrl={'Infinitive.jpeg'} Heading={'Infinitive'} Desc={'Sample text. Click to select the text box. Click again. Odio euismod lacinia at quis risus sed vulputate odio. Ac turpis egestas maecenas pharetra.'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <Cards imgUrl={'BestTeam.jpeg'} Heading={'Best Team'} Desc={'Sample text. Click to select the text box. Click again. Odio euismod lacinia at quis risus sed vulputate odio. Ac turpis egestas maecenas pharetra.'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <Cards imgUrl={'FREElessons.jpeg'} Heading={'FREE Lessons'} Desc={'Sample text. Click to select the text box. Click again. Odio euismod lacinia at quis risus sed vulputate odio. Ac turpis egestas maecenas pharetra.'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <Cards imgUrl={'Vocabulary.jpeg'} Heading={'Vocabulary'} Desc={'Sample text. Click to select the text box. Click again. Odio euismod lacinia at quis risus sed vulputate odio. Ac turpis egestas maecenas pharetra.'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <Cards imgUrl={'247Support.jpeg'} Heading={'24*7 Support'} Desc={'Sample text. Click to select the text box. Click again. Odio euismod lacinia at quis risus sed vulputate odio. Ac turpis egestas maecenas pharetra.'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnglishWithoutRules;