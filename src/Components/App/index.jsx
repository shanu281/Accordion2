import React from "react";
import "./style.css";
import faqs from "../Data/data"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active : ""
        }
    }
    handleClick = (i) => {
this.setState({
    active : i
})
console.log(i)
    }
    render() {
        console.log(faqs[1].Q)
        return (
            <>
                <center><h1>Faq's</h1>
                    <div className="faq-container">
                        {
                            faqs.map((faq, i) =>
                                <div className={this.state.active === i? "active" : "faq"} onClick={() => this.handleClick(i)}>

                                    <h2>{faqs[i].Q}</h2>
                                    <span><i class="fa-solid fa-hand-point-down"></i></span>

                                </div>
                            )
                        }
                    </div>
                </center>
            </>
        )
    }
}
export default App;