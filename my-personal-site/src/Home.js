import React, { useState } from "react"

function Home(props){
    const dataLove = Array.from(props.loveAdvice)
    const dataLife = Array.from(props.lifeAdvice)
    const [imgToggle, setImgToggle] = useState(true)
    const [imgToggleTwo, setImgToggleTwo] = useState(true)
    const [imgToggleThree, setImgToggleThree]= useState(true)
    const love = dataLove.map(advice => advice.advice)
    const lover = love[Math.floor(Math.random() * love.length)]
    const life = dataLife.map(advice => advice.advice)
    const lifer = life[Math.floor(Math.random() * life.length)]
    return(
        <div id="home">
            <div id="welcome">
            <h2>Welcome</h2>
            <div>
                <p>
                    welcome to the advice page please click on the picture with the coresponding keyword for the advice you need to hear!
                </p>
            </div>
                <div id="imgOne" onClick={()=> setImgToggle(prev => !prev)}>
                    {imgToggle?
                    <>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwothrknZ_T4kNmJ7zcC5o6hoTemc62g7cw&usqp=CAU" style={{"pointerEvents": "all"}}/>
                    <p>Love</p>
                    </>
                       : 
                       <p>{lover}</p>
                    
                    }
                </div>
                <div id="imgTwo" onClick = {() => setImgToggleTwo(prev => !prev)}>
                    {imgToggleTwo?
                    <>
                    <img src="https://knowledge.insead.edu/sites/www.insead.edu/files/images/2020/04/gettyimages-628537464-1.jpg"/>
                    <p>Life</p>
                    </>
                    : 
                    <p>{lifer}</p>
                        }
                </div>
                <div id= "imgThree" onClick = {() => setImgToggleThree(prev => !prev)}>
                        {imgToggleThree?
                        <>
                        <img src="https://i.pinimg.com/originals/57/ff/cc/57ffcc4f2b055a8f815c51a7bebd79c5.jpg"/>
                        <p>Random Advice!!</p>
                        </>
                        :
                        <p>{props.Advice}</p>}


                </div>
            </div>
       </div>
    )
}


export default Home