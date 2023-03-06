import HTMLFlipBook from "react-pageflip";

import { forwardRef } from "react";
import "./braochure.css"
const Page = forwardRef((props, ref) => {
    let pagenum=props.number
    console.log(pagenum)
    return (
      <div className="demoPage" ref={ref}> 
        <img src={props.imglo} className="imagebro"/>
        <p>Page number: {props.number}</p>
      </div>
    );
  });
  
 export default function MyBook(props) {
  
  const widthwin=window.innerWidth
  const height=window.innerHeight
    return (
      <HTMLFlipBook width={widthwin/2} height={height/2} className="brochuremain" ref={(component) => (this.pageFlip = component)}>
        <Page number="1" imglo='imagesg/1.jpg'>Page text</Page>
        <Page number="2" imglo='imagesg/2.jpg'>Page text</Page>
        <Page number="3" imglo='imagesg/7.jpg'>Page text</Page>
        <Page number="4" imglo='imagesg/4.jpg'>Page text</Page>
        <Page number="5" imglo='imagesg/5.jpg'>Page text</Page>
        <Page number="6" imglo='imagesg/6.jpg'>Page text</Page>
      </HTMLFlipBook>
    );
  }