
import "../App.css";
import Commonbtn from "../components/Commonbtn";
import HeadingTitle from "../components/HeadingTitle";

function HomePage() {


  const card1data = [
{
            img: 'card-1.png',
            heading: 'Natural Honey',
            para: "Continually aggregate interfaces thout. "
},
{
            img: 'card-1.png',
            heading: 'Natural Honey',
            para: "Continually aggregate interfaces thout. "
}
  ]


  return (
  <>

      {/* home section start  */}
      <section className="home p-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center">
                <h1 className="text-white">AGRICUL FARM</h1>
                <p className="text-white">
                  Dynamically supply web-enabled portals for high standards
                  income and business Completely productivate optimal sources
                  rather than strategic.
                </p>
                <div className="text-center mt-3">
                  <Commonbtn textbtn="Discover"></Commonbtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* home section end  */}


  {/* Product section start  */}
  <section class="product">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
        <HeadingTitle
          title1="Agricul Farm Ecology Products"
          para1="Conveniently customize proactive services leveraged interfaces without Globally"
        ></HeadingTitle>
      </div>
    </div>
    <div class="row">
    {card1data.map((data_a, i) => {
return(
<div className="col-lg-4" key={i}>
        <div className="card-a">
          <div className="row align-items-center">
            <div className="col-7">
              <h3>{data_a.heading}</h3>
              <p>{data_a.para}</p>
            </div>
            <div className="col-5">
            <img src={`assets/images/${data_a.img}`} alt="" className="img-fluid" />
   
       
            </div>
          </div>
        </div>
      </div>

)
})}
      
    

    </div>
  </div>
</section>;

  {/* Product section end  */}
   </>
  );
}

export default HomePage;
