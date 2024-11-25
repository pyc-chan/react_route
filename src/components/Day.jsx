import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word from "./Word";

function Day(props) {
    // const day = 1;
    // url에 포함된 day값을 가져오기 위해서 useParams()
    const day = useParams().day;
    const wordList = dummy.words.filter(k=>(k.day) === Number(day) /* 한줄일땐 괄호 써도됨 */)
    return (
        <table>
            <tbody>
                {/* {dummy.words.map(k=>{ */}
                {wordList.map(k=>{
                    return (
                        <Word key={k.id} word={k}/>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Day;