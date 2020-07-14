import React from 'react'
import { logOut } from '../../utils'
import s from './Dashboard.module.scss'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="container p-0">
                <div className="row p-5">
                    <div className="col text-center m-auto">
                        <h1 className="text-success pb-4"><strong>HEY YOU ARE IN A PRIVATE ROUTE!!!</strong></h1>
                        <button onClick={() => logOut()} className={`${s.outButton} text-center`}>Log OUT</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Dashboard
