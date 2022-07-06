//import loader from "./components/images/load.gif"
//import "./components/css/preloader.css"
import "./components/css/Preloader2.css"
//import { useEffect,useState } from "react";

//function shuffleArray(array) {
//    for (var i = array.length - 1; i > 0; i--) {
//    
//        // Generate random number
//        var j = Math.floor(Math.random() * (i + 1));
//                    
//        var temp = array[i];
//        array[i] = array[j];
//        array[j] = temp;
//    }
//        
//    return array[0];
//}


function Preloader(){
    //let quoteNum=[0,1,2,3,4,5];
    //const [gotQuote, setgotQuote]=useState(0);
    //useEffect(()=>{
    //    setgotQuote(shuffleArray(quoteNum));
    //},[])
    //
    //const quotes=[
    //    ["Leo Tolstoy","The two most powerful warriors are patience and time."],
    //    ["Mahatma Gandhi","To lose patience is to lose the battle"],
    //    ["Swahili Proverb","Patience attracts happiness; it brings near that which is far."],
    //    ["Greek proverb","One minute of patience, ten years of peace"],
    //    ["Plautus","Patience is the best remedy for every trouble."],
    //    ["Phillips Brooks","Be patient and understanding. Life is too short to be vengeful or malicious"]
    //]

    //return(
    //    <div>
    //        <div className="loader-body">
    //            <div className="loader-content">
    //                <img src={loader} alt={"Preloader"} ></img>
    //                <p className="quote" >{`“${quotes[gotQuote][1]}”`}</p>
    //                <p className="writer">{`- ${quotes[gotQuote][0]}`}</p>
    //            </div>
    //        </div>
    //    </div>
    //)
    return(
        <div className="loader-body">
            <div className="loader"></div>
        </div>
    )
}

export default Preloader;