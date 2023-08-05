import Netflix  from './ReactHook/netflix';
import NetFlixData from './ReactHook/netflixData';
import './App.css';
//console.log('nn',NetFlixData[0]);
function App() {
  return (
    <>
          <h1 className='heading_style'>List of top Netflix Series in 2023</h1>
          {/*==============1st==================
          <Netflix title="A Netflix Original Series" imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" sname="DARK" link="https://www.netflix.com/in/title/80990668?source=35" />
          <Netflix title="A Netflix Original Series" imgsrc="https://upload.wikimedia.org/wikipedia/en/5/53/Mismatched_poster.jpg" sname="Mismatched" link="https://www.netflix.com/in/title/80990668?source=35" />
          <Netflix title="A Netflix Original Series" imgsrc="https://occ-0-37-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5lteI3eHet1nPBQKC_uEChESjqQfYpRwMWLR0wULt52odnxQtG69JNFDj9N4maZWJWDFZyi2sc1YzZ8mKE4Ajmt7Btva1CnWagGbYXVMp3t4OETM4LwiD70dHu-qWUbBAesQ.jpg?r=c68" sname="Stranger Things" link="https://www.netflix.com/in/title/80990668?source=35" />
          <Netflix title="A Netflix Original Series" imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" sname="DARK" link="https://www.netflix.com/in/title/80990668?source=35" />
          <Netflix title="A Netflix Original Series" imgsrc="https://upload.wikimedia.org/wikipedia/en/5/53/Mismatched_poster.jpg" sname="Mismatched" link="https://www.netflix.com/in/title/80990668?source=35" />
          <Netflix title="A Netflix Original Series" imgsrc="https://occ-0-37-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5lteI3eHet1nPBQKC_uEChESjqQfYpRwMWLR0wULt52odnxQtG69JNFDj9N4maZWJWDFZyi2sc1YzZ8mKE4Ajmt7Btva1CnWagGbYXVMp3t4OETM4LwiD70dHu-qWUbBAesQ.jpg?r=c68" sname="Stranger Things" link="https://www.netflix.com/in/title/80990668?source=35" />*/}
          <Netflix imgsrc={NetFlixData[0].imgsrc} sname={NetFlixData[0].sname} title={NetFlixData[0].title} link={NetFlixData[0].link} />
          <Netflix imgsrc={NetFlixData[1].imgsrc} sname={NetFlixData[1].sname} title={NetFlixData[1].title} link={NetFlixData[1].link} />
          <Netflix imgsrc={NetFlixData[2].imgsrc} sname={NetFlixData[2].sname} title={NetFlixData[2].title} link={NetFlixData[2].link} />
          <Netflix imgsrc={NetFlixData[3].imgsrc} sname={NetFlixData[3].sname} title={NetFlixData[3].title} link={NetFlixData[3].link} />
          <Netflix imgsrc={NetFlixData[4].imgsrc} sname={NetFlixData[4].sname} title={NetFlixData[4].title} link={NetFlixData[4].link} />
          <Netflix imgsrc={NetFlixData[5].imgsrc} sname={NetFlixData[5].sname} title={NetFlixData[5].title} link={NetFlixData[5].link} />
    </>
  )
}

export default App;
