import React, { useState } from "react"

function Home(props){
    console.log(props.advice)
    const [imgToggle, setImgToggle] = useState(true)
    return(
        <div id="home">
            <h2>Welcome</h2>
            <div>
                <p>
                    welcome to the advice page please click on the picture with the coresponding keyword for the advice you need to hear!
                </p>
                <div id="imgOne" onClick={()=> setImgToggle(prev => !prev)}>
                    {imgToggle?
                    <>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwothrknZ_T4kNmJ7zcC5o6hoTemc62g7cw&usqp=CAU"  style={{"pointerEvents": "all"}}/>
                    <p>Love</p>
                    </>
                       : 
                       <p>{props.advice}</p>
                    
                    }
                </div>
                <div id="imgTwo">
                    <img src="https://knowledge.insead.edu/sites/www.insead.edu/files/images/2020/04/gettyimages-628537464-1.jpg"/>
                    <p>Life</p>
                </div>
            </div>
       </div>
    )
}


export default Home