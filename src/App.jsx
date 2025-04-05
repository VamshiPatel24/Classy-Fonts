import './App.css'
import {useState} from 'react'
import Screenshot from 'html2canvas'
function App(){
  const[color,setColor]=useState()
  const[bgcol,setBgcol]=useState()
  const[font,setFont]=useState()
  const changeColor=c=>{
    document.querySelector("span").style.color=c;

  }
  const changeBackground=cb=>{
    document.querySelector('span').style.background=cb;
    document.querySelector('span').style.backgroundImage=`url(${cb})`;
    document.querySelector('span').style.backgroundSize='cover';
  }
  const changeFont=(font)=>{
    document.querySelector('span').style.fontFamily=font;
  }
  const downloadImg=()=>{
    Screenshot(document.getElementById('heading')).then(canvas=>{
      const imgs=canvas.toDataURL('image/png');
      const link=document.createElement('a');
      link.href=imgs;
      link.download='Classy-Fonts.png';
      link.click();
    })
  }
 return(
   <>
   <div className="bg">
   <h1>Classy-Fonts</h1>
     <div className="main">
        <div className="parent1">
               <span id="heading" contentEditable="true">Enter your quote</span>
                <button id="btn" onClick={downloadImg}>Download</button>
        </div>
        <div className="parent2">
              <div className="fnt-color">
                <h3>Choose text color</h3>
                <div className='colors'>
                     <button id="red" onClick={()=>changeColor('red')}></button>
                     <button id="green" onClick={()=>changeColor('green')}></button>
                     <button id="blue" onClick={()=>changeColor('blue')}></button>
                     <button id="yellow" onClick={()=>changeColor('yellow')}></button>
                     <button id="violet" onClick={()=>changeColor('violet')}></button>
                     <button id="maroon" onClick={()=>changeColor('maroon')}></button>
                     <button id="pink" onClick={()=>changeColor('pink')}></button>
                     <button id="orange" onClick={()=>changeColor('orange')}></button>
                     <button id="aqua" onClick={()=>changeColor('aqua')}></button>

                      <input type="color" onChange={(e)=>{setColor(e.target.value);changeColor(e.target.value)}}></input>
                     
                </div>
              </div>
              <div className="bg-color">
                <h3>Choose background color</h3>
                <div className='bgcolors'>
                     <button id="red" onClick={()=>changeBackground('red')}></button>
                     <button id="green" onClick={()=>changeBackground('green')}></button>
                     <button id="blue" onClick={()=>changeBackground('blue')}></button>
                     <button id="yellow" onClick={()=>changeBackground('yellow')}></button>
                     <button id="violet" onClick={()=>changeBackground('violet')}></button>
                     <button id="maroon" onClick={()=>changeBackground('maroon')}></button>
                     <button id="pink" onClick={()=>changeBackground('pink')}></button>
                     <button id="orange" onClick={()=>changeBackground('orange')}></button>
                     <button id="aqua" onClick={()=>changeBackground('aqua')}></button>
                      <input type="color" onChange={e=>{setBgcol(e.target.value);changeBackground(e.target.value)}}></input>
                    
                </div>
              </div>
              <div className="fonts">
                   <button id="algerian" onClick={()=>{changeFont('Algerian')}}>Hello</button>
                   <button id="Bahnschrift" onClick={()=>{changeFont('Bahnschrift')}}>Hello</button>
                   <button id="Candara" onClick={()=>{changeFont('Candara')}}>Hello</button>
                   <button id="CenturySchoolbook" onClick={()=>{changeFont('Century Schoolbook')}}>Hello</button>
                   <button id="EngraversMT" onClick={()=>{changeFont('Engravers MT')}}>Hello</button>
                   <button id="LucidaBright" onClick={()=>{changeFont('Lucida Bright')}}>Hello</button>
                   <input type="text" id="f" placeholder="Enter your font-style" onChange={(e)=>{changeFont(e.target.value)}}></input>
              </div>
              <div className="imgs">
                 <button onClick={()=>{changeBackground('/lake.jpeg')}}><img src='/lake.jpeg'/></button>
                 <button onClick={()=>{changeBackground('/landscape.jpg')}}><img src="/landscape.jpg"/></button>
                 <button onClick={()=>{changeBackground('/leaf.jpg')}}><img src="/leaf.jpg"/></button>
                 <button onClick={()=>{changeBackground('/space.jpg')}}><img src="/space.jpg"/></button>
                 <button onClick={()=>{changeBackground('/sunset.jpg')}}><img src="/sunset.jpg"/></button>
                 <input type="text" placeholder="background image address(url)" onChange={(e)=>{changeBackground(e.target.value)}}/>
              </div>
        </div>
     </div>
     </div>
  </>
 )
}
export default App