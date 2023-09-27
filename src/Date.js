
// export default function Date(){
//     return(
//         <div className="dates">
//            September  <b>Sold Out</b><br/><hr/>
//             October <b>Sold Out</b><br/><hr/>
//             November<br/>
//         </div>

//     );
// }

export default function Date(){
    return(
        <div className='dates'>
            <Month
                isSold={true}
                name="September"
            />
            <hr/>

            <Month
                isSold={true}
                name="October"
            />
            <hr/>
            <Month
                name="November"           
            />
        </div>
    )
}

 function Month({name, isSold}){
    return(
        <>
        {name} {isSold && <b> Sold Out </b>}
    </>
    );
}


