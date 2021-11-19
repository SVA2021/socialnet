import React from "react";
import main from "./AboutMe.module.css";
import baseAvatar from "../../../../img/photo_large.jpg";

class AboutMe extends React.Component {

    state = {
        editMode: false,
        typedText: this.props.status
    }

    componentDidMount() {
        // debugger
        this.props.getProfileStatusThunk(this.props.auth.id);
    }
    
    componentDidUpdate(prevProps, prevState) {
        // debugger
        if (prevProps.status !== this.props.status) {
            console.log('typing');
            this.setState({ typedText: this.props.status });

        }
    }

    startEdit = () => {
        this.setState({ editMode: true });
    }

    requestChangeStatus() {
        // debugger
        if (this.state.typedText === this.props.status) {return console.log('nothing to change in status');}
        this.props.updateProfileStatusThunk(this.state.typedText);
        this.setState({ editMode: false });

    }

    onType(event) {
        // debugger
        this.setState(
            { typedText: event.currentTarget.value });
    }

    render() {
        // debugger
        return (
            <div className={main.parent}>
                <img src={baseAvatar} alt="my face" />
                <p>login = {this.props.myID}</p>
                <p>loginAuth = {this.props.auth.id}</p>
                <div>
                    {this.state.editMode &&
                        <div>
                            <textarea autoFocus={true} onChange={this.onType.bind(this)} onBlur={this.requestChangeStatus.bind(this)} 
                            value={this.state.typedText} name="status" cols="30" rows="10"></textarea>
                        </div>
                    }
                    {!this.state.editMode &&
                        <div className={main.text} onDoubleClick={this.startEdit}>
                            <span>{this.props.status || 'put status here'}</span>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default AboutMe;