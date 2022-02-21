import React from 'react'
import './MeetOutTeam.scss'
import Testinomial from './Testinomial'

const MeetOutTeam = () => {
  return (
    <div className="MeetOutTeam">
        <div className="container">
            <div className="row MainHeading">
                <h1>Meet Our Team</h1>
            </div>
            <div className="row justify-content-center align-items-center Testinomials g-4">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <Testinomial imgName={'Testinomial1'} TestName={'Alex Smith'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <Testinomial imgName={'Testinomial2'} TestName={'May Brown'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <Testinomial imgName={'Testinomial3'} TestName={'Ann Richmond'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <Testinomial imgName={'Testinomial4'} TestName={'Roxie Swanson'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetOutTeam