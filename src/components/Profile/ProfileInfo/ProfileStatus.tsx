import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    editMode:boolean
}

class ProfileStatus extends React.Component<ProfileStatusType, ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        debugger
        console.log("this",this)
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}
export default ProfileStatus