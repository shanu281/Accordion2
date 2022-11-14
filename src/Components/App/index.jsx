import React from "react";
import "./style.css";
import faqs from "../Data/data"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: ""
        }
    }
    handleClick = (i) => {
        this.setState({ active: this.state.active === i ? "" : i })
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
                                <div onClick={() => this.handleClick(i)}>
                                    <div>
                                        <div className="faq ">
                                            <h2>{faqs[i].Q}</h2>
                                            <span>
                                                {
                                                    this.state.active === i ?  <i class="fa-sharp fa-solid fa-hand-point-up"></i> : <i class="fa-solid fa-hand-point-down"></i> 
                                                }
                                            </span>
                                        </div>
                                        <div className={this.state.active === i ? "active" : "hidden"}>
                                            <h2>{faqs[i].A}</h2>
                                        </div>
                                    </div>
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