import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import Sdata from "./Sdata";



ReactDOM.render(
  <>
    <h1>List of 5 Netflix Series</h1>
    {/* <Card
    //to show utility of props
      // imgsrc="https://dark.netflix.io/share/global.png"
      // title="A Netflix Original Series"
      // sname="DARK"
      // link="https://www.netflix.com/in/title/80100172"

    //to show utility of props,array of objects  
      // imgsrc={Sdata[0].imgscr}
      // title={Sdata[0].title}
      // sname={Sdata[0].sname}
      // link={Sdata[0].link}

    />


    <Card
      // imgsrc="https://bgr.com/wp-content/uploads/2019/09/friends-tv-show.jpg?quality=70&strip=all&w=782"
      // title="A Netflix Original Series"
      // sname="FRIENDS"
      // link="https://www.netflix.com/in/title/70153404"

      // imgsrc={Sdata[1].imgscr}
      // title={Sdata[1].title}
      // sname={Sdata[1].sname}
      // link={Sdata[1].link}
    />

    <Card
      // imgsrc="https://hbomax-images.warnermediacdn.com/images/GXaT5bgVh-Zy3wwEAAAC1/tileburnedin?size=1280x720&format=jpeg&partner=hbomaxcom&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1280"
      // title="A Netflix Original Series"
      // sname="IMPRACTICAL JOKERS"
      // link="https://www.netflix.com/in/title/70251818"

      // imgsrc={Sdata[2].imgscr}
      // title={Sdata[2].title}
      // sname={Sdata[2].sname}
      // link={Sdata[2].link}
    />
    <Card
      // imgsrc="https://i2.wp.com/psicopico.com/wp-content/uploads/2017/11/Bigmouth-analisis-e1510531071181.jpg?fit=960%2C696&ssl=1"
      // title="A Netflix Original Series"
      // sname="BIG MOUTH"
      // link="https://www.netflix.com/in/title/80117038"

    //   imgsrc={Sdata[3].imgscr}
    //   title={Sdata[3].title}
    //   sname={Sdata[3].sname}
    //   link={Sdata[3].link}
     />
    <Card
      // imgsrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrp0J_c7fX1NWLOWUVHWZjvo7FdsEMOb3LQX_6nIi_rU1E2vJq"
      // title="A Netflix Original Series"
      // sname="MASTER OF NONE"
      // link="https://www.netflix.com/in/title/80049714"
      imgsrc={Sdata[4].imgscr}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link}
    /> */}

    {/* using array map method */}

    {Sdata.map(function nCard(val) {

      return (
        <Card
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}

  </>
  ,
  document.getElementById('root')
);
