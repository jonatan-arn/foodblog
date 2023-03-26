import defaultrecipe from "../../assets/defaulrecipe.png";
function Recipe() {
  return (
    <>
      <div className="lg:pt-12  lg:pb-4 lg:pl-24">
        <h1>Bean curry</h1>
      </div>
      <div className="grid lg:grid-cols-1 lg:grid-rows-2">
        <div className="flex  justify-center lg:mr-5">
          <img
            className="object-cover h-48 w-80 lg:ml-32 rounded-2xl"
            src={defaultrecipe}
            alt="defaul recipe image"
          />
        </div>
        <div className="lg:my-5 lg:mx-0 m-5 flex  justify-center flex-col text-center">
          <div>
            Small description about de recipe i should be a two or one line, no
            more because it cant feat
          </div>
          <div className="grid grid-cols-2  grid-rows-2 lg:gap-x-12 lg:gap-y-8 gap-x-5 gap-y-4 mx-96 my-5">
            <div>Curry</div>
            <div>1 serving</div>
            <div>15min</div>
            <div>30 kcal</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <div className="flex flex-row justify-center gap-9 border-4 border-solid border-gray-100 lg:w-1/2 w-full">
          <div className="my-3">
            <button>Ingredients</button>
          </div>

          <div className="my-3">
            <button>Process</button>
          </div>
        </div>
        <div>
          <h2>Ingrediens</h2>
          <h4>5 items</h4>
        </div>
      </div>
    </>
  );
}
export default Recipe;
