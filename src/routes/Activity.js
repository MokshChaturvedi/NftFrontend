import React from 'react'
import ActivityFilter from '../components/activityPage/activityFilter/ActivityFilter'
import AcitivityTable from '../components/activityPage/activityTable/AcitivityTable'

const Activity = () => {
    return (
        <>
            <div className="activitySec mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="headingWh mb-2 mb-md-4">Activity</h2>
                        </div>
                    </div>
                    <ActivityFilter />
                    <AcitivityTable />
                </div>
            </div>

        </>
    )
}

export default Activity