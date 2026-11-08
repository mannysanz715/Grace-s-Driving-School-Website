import BuyButtonComponent from "../../components/BuyButton/BuyButtonComponent";
import './Payments.css'
function Payments(){

  

  return(
    <>
      <h1 className="flex font-bold text-lg justify-center items-center pt-10">All Payments Through Stripe Have a ~ 3.5% Transaction Fee (Payments through Zelle/Venmo/Cash are not subject to this fee)</h1>
     <div className="list-container">
        <div className="payment-container">
          <h1 className="payment-title">Single Lesson Payment(Office Lesson):</h1>
          <p className="hours">(2 Hours)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1UZeYbGBwh195q0LOC1h2ToY'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Single Lesson Payment:</h1>
          <p className="hours">(2 Hours)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1UZeWjGBwh195q0LhANObCCu'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">3 Lessons Package Payment:</h1>
          <p className="hours">(6 Hours)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1UZeMaGBwh195q0L0rUHwNjb'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">5 Lessons Package Payment:</h1>
          <p className="hours">(10 Hours)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1UZePGGBwh195q0LgyTsWUIm'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Behind the Wheel Drive Test (Hollywood):</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1UZeVmGBwh195q0L4RenxTm5'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Behind the Wheel Drive Test:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1UZeTuGBwh195q0Lnf6Oa03l'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Behind the Wheel Drive Test:</h1>
          <p className="hours">(Not Local)</p>
          <BuyButtonComponent buyButtonId={'buy_btn_1UZeSGGBwh195q0LUzsaXJOl'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
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
