import React from 'react'
import { logIn, /*getAllUsers*/ } from '../../utils'
import s from './HomePage.module.scss'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: ''
        }
        this.logtheFakeUser = this.logtheFakeUser.bind(this)
        //this.getFakeUser = this.getFakeUser.bind(this)
    }

    logtheFakeUser() {
        this.setState({
            name: 'Alex',
            email: 'yupa@gmail.com'
        }, () => {
            const { name, email } = this.state
            if (name && email) {
                logIn({ name, email })
            }
        })
    }

    // using async function

    // getFakeUser = async () => {
    //     const allUsers = await getAllUsers()
    //     if (allUsers) {
    //         this.setState({
    //             sukces: true
    //         })
    //     }
    // }

    render() {
        return (
            <div className="container p-0">
                <div className="row p-5">
                    <div className="col text-center m-auto">
                        <h1 className="text-success pb-4"><strong>HEY !</strong></h1>
                        <button onClick={() => this.logtheFakeUser()} className={`text-center ${s.outButton}`}>Log in</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomePage
