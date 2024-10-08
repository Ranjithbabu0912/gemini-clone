import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

    window.setInterval(function() {
    var elem = document.getElementById('data');
    elem.scrollTop = elem.scrollHeight;
    }, 5000);

    
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

    
    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
        onSent();
        }
    };


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

        {!showResult 
        ?<>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Briefly summurize tis concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Barinstrom team bonding activities for our work rettreat</p>
                    <img src={assets.messege_icon} alt="" />
                </div>
                </div>
            </>:
            <div className="result" id='data'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    {loading ? <img className="gemini-icon" src={assets.gemini_icon} alt="" /> : <img src={assets.gemini_icon} alt="" /> }
                    {loading ? 
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div> : 
                    <p dangerouslySetInnerHTML = {{__html:resultData}}>
                    </p>
                    }
                </div>
                {!loading ? <img className="copy-icon" src={assets.copy_icon} alt="copy" /> : null}
            </div>
            }


            
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' onKeyDown={handleKeyDown} />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?
                        <img className='icon' onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        :null}
                    </div>
                </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Main