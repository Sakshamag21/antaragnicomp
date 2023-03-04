import React from "react";
import { useState } from "react";
import "./media.css"


export default function Tile() {
    const [modalopen,setmodalopen]=useState(0);
    // const[modalimg,setmodalimg]=useState("");
    // const[modaltext,setmodaltext]=useState("")
    const modalclose=()=>{
        const modal=document.getElementById("moda")
        console.log(modal);
        modal.removeChild(modal.firstElementChild);
        modal.style.zIndex=-1;
        modal.style.animation="animodalclose 3s";
    }
    const moda=(modalimage,modaltext)=>{
    console.log("click")
    setmodalopen(1)
    const modalback=document.getElementById("backmedia");
    modalback.style.filter="blur(8px)";
    const modal=document.getElementById("moda")
    modal.style.zIndex=100;
    modal.style.animation="animodal 3s";
    console.log(modal.style);
    
    modal.insertAdjacentHTML("afterbegin",'<div class="modal-wrap"><img src='+modalimage+' alt="" />	<p>'+modaltext+'</p></div>	')
    // modal.innerHTML='<div class="modal-wrap"><img src="imagesg/1.jpg" alt="" width="100px" height="100px"/>	<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></div>	'
    // console.log(modal,modalimg,modaltext)
   }
  return (<>
    <div class="modal" id="moda">		
    <button onClick={modalclose} style={{width:"fit-content",height:"fit-content",border:"0px",backgroundColor:"transparent"}}>&#10060;</button>
    </div>
    <div style={{backgroundColor:"brown",flexWrap:"wrap",justifyContent:"center",display:"flex"}} id="backmedia">
    <figure class="snip1139">
    <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
      <div class="arrow"></div>
    </blockquote>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
    <div class="author">
      <h5>Pelican Steve <span>- LittleThemes</span></h5>
      <button onClick={function(){ 
      moda("https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg","Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.")
     }}>ggg</button>
    </div>
  </figure>
  <figure class="snip1139 hover">
    <blockquote>I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.
      <div class="arrow"></div>
    </blockquote>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg" alt="sample47"/>
    <div class="author">
      <h5>Max Conversion<span>- LittleThemes</span></h5>
      <button onClick={function(){ 
      moda("https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg","Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.")
     }}>ggg</button>
    </div>
  </figure>
  <figure class="snip1139">
    <blockquote>That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.
      <div class="arrow"></div>
    </blockquote>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg" alt="sample17"/>
    <div class="author">
      <h5>Eleanor Faint<span>- LittleThemes</span></h5>
      <button onClick={function(){ 
        moda("https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg","Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.")
       }}>ggg</button>
    </div>
  </figure>
  <figure class="snip1139">
    <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
      <div class="arrow"></div>
    </blockquote>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
    <div class="author">
      <h5>Pelican Steve <span>- LittleThemes</span></h5>
      <button onClick={function(){ 
        moda("https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg","Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.")
       }}>ggg</button>
    </div>
  </figure>
  <figure class="snip1139">
    <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
      <div class="arrow"></div>
    </blockquote>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
    <div class="author">
      <h5>Pelican Steve <span>- LittleThemes</span></h5>
      <button onClick={function(){ 
      moda("https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg","Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.")
     }}>ggg</button>
    </div>
  </figure></div></>
  );
}