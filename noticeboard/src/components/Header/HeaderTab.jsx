import "../../styles/Header.css"
import { useDispatch } from 'react-redux'
import { change } from '../../store/chooseSlice'

const HeaderTab = (props) => {
    const { position } = props;
    const dispatch = useDispatch();
    console.log(" 상단 탑,정글,미드 ... 버튼 컴포넌트가 렌더링 되었습니다.")
    return (
        <div className="header-tab" onClick={(e) => dispatch(change(e.target.innerText))}>
            {position}
        </div>
    )
    
}

export default HeaderTab;