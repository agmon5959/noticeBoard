import { useState } from "react";
import { Header, Board, Footer } from "../components";
import OtherComponent from "../components/OtherComponent/OtherComponent"
import "../styles/Main.css"

const Main = () => {

    const [sum, setSum] = useState(0);

    const handleOnClick = () => {
        setSum(sum + 1);
    }

    const dummyFunc1 = () => {
        console.log('뻥카')
    }
    const dummyFunc2 = () => {
        console.log('뻥카2')
    }
    const dummyFunc3 = () => {
        console.log('뻥카3')
    }

    return (
        <div className="mainContainer">
            <Header />
            <Board />
            <Footer />
            <OtherComponent
                sum={sum}
                callbacks={handleOnClick}
                props로_전달하면_이게_하위컴포넌트의_state로_전달됨={{
                    dummyFunc1,
                    dummyFunc2,
                    dummyFunc3,
                }}
                
            />
        </div>
    )
}

export default Main;