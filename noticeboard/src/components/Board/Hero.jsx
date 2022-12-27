import "../../styles/Board.css"

const Hero = (props) => {
    console.log("챔피언 카드가 렌더링 되었습니다.")
    return (
        <div className="HeroWrapper">
            {props.heroName}
        </div>
    )
}

export default Hero;