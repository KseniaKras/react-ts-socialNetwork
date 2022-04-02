import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css';


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        console.log('this: ', this)
        this.setState({ // асинхронный
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    // if(!props. === null) {
    //     return <Preloader/>
    // }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>
                            {this.props.status || 'No status'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            value={this.state.status}
                            onBlur={this.deactivateEditMode}
                            onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>
        );
    }

}

export default ProfileStatus;