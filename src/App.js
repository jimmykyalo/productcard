import headphone from './images/headphone.png'
import weight from './images/weight.png'
import heart from './images/heart.png'
function App() {
  return (
    <div className="flex min-h-screen  md:h-screen w-full items-center justify-center dark:bg-gray-600 bg-gray-100">
      {/* Product Modal */}
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-center md:items-start p-6 m-3 my-4 rounded-xl bg-white dark:bg-slate-700 dark:text-white shadow-2xl md:p-16">
        {/* Image div */}
        <div>
          <img src={headphone} alt="headphone" className="w-60" />
        </div>
        {/* contents div */}
        <div className="flex flex-col md:ml-10 space-y-3">
          <div className="bg-black inline self-center md:self-start text-center md:text-left text-white text-sm px-3 py-1 rounded-full">Free shipping</div>
          <div className=" text-2xl text-center md:text-left capitalize max-w-sm font-semibold">Razer Kraken Kitty Edt Gaming Headset Quartz</div>
          <div className="text-center md:text-left line-through">$799</div>
          <div className="text-center md:text-left text-5xl font-bold">$599</div>
          <div className="text-center md:text-left text-gray-400 font-light text-sm">This offer is valid until April 3rd or as long as stock lasts!</div>
          <div className="min-h-max group">
            <button className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
            <div class="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
                </button>
          </div>
          <div className="flex space-x-3 items-center group">
            <div className="rounded-full h-3 w-3 bg-green-500 group-hover:animate-ping"></div>
            <div className="text-sm">50+ pcs. in stock</div>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 md:items-center">
            <button className="flex items-center space-x-3 px-5 py-3 justify-center rounded-lg border-2 border-gray-300 hover:shadow-xl hover:-translate-y-0.5 duration-200">
              <img src={weight} alt="weight" className="w-8" />
              <span>Add to Cart</span>
            </button>

            <button className="flex items-center justify-center space-x-3 px-5 py-3 rounded-lg border-2 border-gray-300 hover:shadow-xl hover:-translate-y-0.5 duration-200">
              <img src={heart} alt="heart" className="w-8" />
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>

        

      </div>
      
    </div>
  );
}

export default App;
