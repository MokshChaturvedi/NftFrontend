import React from 'react'
import ActivityTableItem from './activityTableItem/ActivityTableItem'

const AcitivityTable = () => {
    return (
        <div className="row mt-3 mt-md-5">
            <div className="col-md-12">
                <div className="activityTable">
                    <table>
                        <tbody>
                            <tr>
                                <th>EVENT TYPE</th>
                                <th>ITEM</th>
                                <th className=" text-end">PRICE</th>
                                <th className="text-center">QUANTITY</th>
                                <th className=" text-end">FROM</th>
                                <th className=" text-end">TO</th>
                                <th className=" text-end">TIME</th>
                            </tr>
                           <ActivityTableItem />
                           <ActivityTableItem />
                           <ActivityTableItem />
                           <ActivityTableItem />
                           <ActivityTableItem />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default AcitivityTable