import { createStore } from "redux";

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";

function buyCake()
{
    return(
        {
            type:BUY_CAKE,
            info:'first redux action'
        }
    );
}

function buyIce()
{
    return(
        {
            type:BUY_ICE,
            info:'Second redux action'
        }
    );
}
const intialState = {

    numbeOfCake:10,
    numbeOfIce:20
}

 const Test = (state=intialState,action)=>
{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numbeOfCake:state.numbeOfCake-1
        } 
        case BUY_ICE: return {
            ...state,
            numbeOfIce:state.numbeOfIce-1
        }

        default:return state;
    }
}
export default Test;

const store = createStore(Test);

console.log("initial state ",store.getState());
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());
store.dispatch(buyIce());
unsubscribe();

