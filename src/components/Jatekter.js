import Lampa from "./Lampa";

export default function Jatekter(props){

    function katt(valt){
        props.katt(valt)
    }

    return(
        <>
            {
                props.lista.map((l, i)=>{
                    return(<Lampa lampa={l} key={i} index={i} katt={katt} />)
                })
            }
        </>
    )
}