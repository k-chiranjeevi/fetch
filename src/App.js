import { React, Component } from 'react';
import Mini from './Components/Mini';
import './app.css'
class App extends Component {



    constructor(props) {
        super(props)
        this.state = {
            name: "",
            questions: []
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }


    componentDidMount() {
        console.log("component did mount called")
        fetch('http://localhost:5000/questions')
            .then(response => response.json()

            )
            .then(ques =>
                this.setState({ questions: ques }))
            .catch(error => console.log(error))

    }





    render() {
        const { questions } = this.state
        console.log(questions)


        return (
            <div>

                <div className="row m-5 ">
                    <div className="col-4 head">
                        <div className=" justify-content-around">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group ">
                                    <label for="name" >Name:</label>
                                    <input type="text" onChange={this.handleChange} id="name" className="form-control  d-inline-block"></input>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="col-8 ">
                        <h2 className="d-flex justify-content-center bg-primary">Details</h2>
                        <div className="d-flex justify-content-center">


                            <Mini questions={questions} name={this.state.name} />

                        </div>
                    </div>


                </div>

            </div>

        )


    }

}

export default App;