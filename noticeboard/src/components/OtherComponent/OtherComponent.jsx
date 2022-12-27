const OtherComponent = (props) => {
    const { sum , callbacks , props로_전달하면_이게_하위컴포넌트의_state로_전달됨 } = props;

    props로_전달하면_이게_하위컴포넌트의_state로_전달됨.dummyFunc1();
    props로_전달하면_이게_하위컴포넌트의_state로_전달됨.dummyFunc2();
    props로_전달하면_이게_하위컴포넌트의_state로_전달됨.dummyFunc3();

    return (
        <div style={{
            "background": "white",
            "width": "500px",
            "height": "100px",
            "marginTop": "20px",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "cursor":"pointer",
        }}
            onClick={()=>callbacks()}
        >
            합계 : {sum}
        </div>
    )
}

export default OtherComponent;