export default function Lampa(props){

    function katt(){
        props.katt(props.index)
    }

    return(
        <div className={`lampa ${props.lampa === false ? "fel" : "le"}`} onClick={()=>katt()}>
            {props.lampa}
        </div>
    )
}