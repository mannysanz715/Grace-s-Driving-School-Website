import BuyButtonComponent from "../../components/BuyButton/BuyButtonComponent";
import './Payments.css'
function Payments(){

  

  return(
     <div className="list-container">
        <div className="payment-container">
          <h1 className="payment-title">Single Lesson Payment:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1NyMkhGBwh195q0L9b4F5DEh'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">3 Lessons Package Payment:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1NyN0MGBwh195q0LKsOLy30s'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">5 Lessons Package Payment:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1NyJ1oGBwh195q0L4bi4jeDa'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
        </div>
        <div className="payment-container">
          <h1 className="payment-title">Behind the Wheel Drive Test:</h1>
          <BuyButtonComponent buyButtonId={'buy_btn_1PukETGBwh195q0LXbk6szC6'} pubKey={'pk_live_51NxxpIGBwh195q0LHvF4Jqrjf8mFRprri72Xt63KKQ4x3bPOS2cfGeAlh4Gi56JvgXgAidoRN5v971de4slfivHD0075Hh4m1B'}/>
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
  )
}

export default Payments;
