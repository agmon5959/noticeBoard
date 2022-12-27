import "../../styles/Board.css"
import Hero from "./Hero";
import { useSelector } from 'react-redux';

const Board = () => {

    const heroMap = {
        0: [["가렌"], ["갱플랭크"], ["탑베인"], ["럼블"]],
        1: [["람머스"], ["이블린"], ["문도박사"], ["마스터 이"]],
        2: [["빅토르"], ["아지르"], ["럭스"], ["오리아나"]],
        3: [["카이사"], ["트리스타나"], ["루시안"], ["이즈리얼"]],
        4: [["소나"], ["나미"]]
    }

    const selectePosition = useSelector((state) => state.change.value);

    console.log(" 메인 컨텐츠 컴포넌트가 렌더링 되었습니다. ")

    return (
        <div className="main-board">
            {
                heroMap[selectePosition].map((iter) =>
                    <Hero heroName={iter} key={iter} />
                )
            }
        </div>
    )
}

export default Board;