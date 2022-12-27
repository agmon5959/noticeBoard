import "../../styles/Header.css"
import HeaderTab from "./HeaderTab"
import { useSelector } from 'react-redux'

const Header = () => {
    
    const POSITION = useSelector((state) => state.change.position);
    const choose = useSelector((state) => state.change.value);
    console.log("상단 헤더 부분이 렌더링되었습니다.");
    return (
        <header className="main-header">

            <div className="header-top">
                League Of Legends &nbsp;&nbsp;&nbsp; 현재 선택한 포지션 [ { POSITION[choose]} ]
            </div>

            <div className="headerTabWrapper">
                {
                    POSITION.map((iter) =>
                        <HeaderTab
                            key={iter}
                            position={iter}
                        />)
                }
            </div>
            
        </header>
    )
    
}

export default Header;