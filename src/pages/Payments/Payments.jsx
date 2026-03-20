import BuyButtonComponent from "../../components/BuyButton/BuyButtonComponent";
import './Payments.css'
function Payments(){

  

  return(
    <>
      <h1 className="flex font-bold text-lg justify-center items-center pt-10">All Payments Through Stripe Have a ~ 3.5% Transaction Fee (Payments through Zelle/Venmo/Cash are not subject to this fee)</h1>
     <div className="list-container">
        <div className="payment-container">
          <h1 className="payment-title">Single Lesson Payment:</h1>
          <p className="hours">(2 Hours)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1QeNsQGBwh195q0LEMWHWsCs'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">3 Lessons Package Payment:</h1>
          <p className="hours">(6 Hours)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1TCviqGBwh195q0LODsPBNbx'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">5 Lessons Package Payment:</h1>
          <p className="hours">(10 Hours)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1TCviAGBwh195q0LHyGoq21N'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Behind the Wheel Drive Test:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1PukETGBwh195q0LXbk6szC6'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Behind the Wheel Drive Test:</h1>
          <p className="hours">(Not Local)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1RPClFGBwh195q0LKwMdfC34'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Additional Hour:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1PukOnGBwh195q0Lc3U2OuOc'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Cancellation Fee:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1PukKZGBwh195q0Lq7kdhUPP'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>

      </div>
    </>
  )
}

export default Payments;
