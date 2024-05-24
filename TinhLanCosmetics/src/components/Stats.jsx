import "../styles/Stats.css";
const Stats = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src="../../public/home_banner_1_2_grande.jpg" alt="" className="w-full h-auto" />
                {/* <span>10</span>+ */}
              
              {/* <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
              Years On The Market
              </p> */}
            </div>
            <div className="flex flex-col items-center">
              <img src="../../public/home_banner_2_2_grande.jpg" alt="" className="w-full h-auto" />
            </div>
            <div className="flex flex-col items-center">
              <img src="../../public/home_banner_3_2_grande.jpg" alt="" className="w-full h-auto" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
