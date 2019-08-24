import React, { Component } from 'react'
import { mockdata } from './tablemock'
import './tableexe.css'
class tableexe extends Component {
    constructor() {
        super();
        this.state = {
            newmockdata: mockdata,
        }
    }

    render() {
        console.log(mockdata)
        return (
            <div className="table-container">
                <table className="table-details">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>AGE</th>
                            <th>LOCATION</th>
                            <th>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.newmockdata.map((item, index) => {
                                return <tr key={index}>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.age}
                                    </td>
                                    <td>
                                        {item.location}
                                    </td>
                                    <td>
                                        {item.city}
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }


}
export default tableexe;