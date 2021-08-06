import { React, Component } from "react";
import './mini.css';


class Mini extends Component {

    render() {
        const questions = this.props.questions
        const name = this.props.name
        console.log("here we mini")
        console.log(questions)
        let questionsList
        if (name) {
            questionsList = questions
                .filter(question => {
                    return question.name === name
                })
                .map(ques => {

                    return <div className="division">

                        <li id={ques.id} className="question"><span>(Q)</span>{ques.question}</li>
                        <li className="answer"><span className="lar">(A)</span>{ques.answer}</li>
                    </div>



                })
        }

        return (
            <div className="mini">


                {questionsList}


            </div>)

    }


}

export default Mini;