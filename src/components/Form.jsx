import react from 'react';

class Form extends react.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : props.firstName ,
            lastName : props.lastName,
            edit : false
        }
        this.showFields = this.showFields.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.changeFirst = this.changeFirst.bind(this);
        this.changeLast = this.changeLast.bind(this);
        this.cancelEditing = this.cancelEditing.bind(this);
    }
    showFields(){
        this.setState({
            edit : true
        })
        console.log(this.state.edit);
    }
    changeFirst(event){
        this.setState({
            firstName : event.target.value
        })
    }
    changeLast(event){
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit(){
        this.setState({
            edit: false
        })
    }
    cancelEditing(){
        this.setState({
            edit: false
        })
    }
    render(){
        if(this.state.edit === false){
        return <div>
                    <div>First name: {this.state.firstName}</div>
                    <div>Last name: {this.state.lastName}</div>
                    <button onClick={this.showFields}>edit</button>
                </div>
        }else{
            return <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.firstName} onChange={this.changeFirst}></input>
                <input type="text" value={this.state.lastName} onChange={this.changeLast}></input>
                <input type="submit" value="save"></input>
                <button onClick={this.cancelEditing}>cancel</button>
            </form>
        }
    }
}

export default Form;