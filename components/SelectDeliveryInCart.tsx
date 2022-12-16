import {useState} from 'react';
import style from '../styles/Cart.module.scss'

const SelectDeliveryInCart = () => {
    const [delivery, setDelivery] = useState(false);
    const [selfPickup, setSelfPickup] = useState(false);

    const handledelivery = () => {
        setSelfPickup(false)
        setDelivery(!delivery)
    }

    const handleSelfPickup = () => {
        setDelivery(false)
        setSelfPickup(!selfPickup)
    }

    return (
        <>
        <div className={style.button_block}>
        <button onClick={handledelivery} className={style.order_button}>Замовити доставку</button>
        <button onClick={handleSelfPickup} className={style.order_button}>Забрати самовивіз</button>
        </div>
        {delivery &&
                    <form className={style.form_block}>
                    <label>
                      Ваше Імя
                    <input type='text' className={style.input}/>
                    </label>
                    <label>
                      Ваш номер телнфону
                      <input type='text' className={style.input}/>
                    </label>
                    <div>
                    <button className={style.order_button }>Оформити замовлення</button>
                    </div>
                  </form>   
        }

        {selfPickup && 
                            <form className={style.form_block}>
                            <label>
                              Ваше Імя
                            <input type='text' className={style.input}/>
                            </label>
                            <label>
                              Ваш номер телнфону
                              <input type='text' className={style.input}/>
                            </label>
                            <label>
                              Ваша адресса
                              <input type='text' className={style.input}/>
                            </label>
                            <div>
                            <button className={style.order_button }>Оформити замовлення</button>
                            </div>
                          </form> 
        }
        </>
    );
};

export default SelectDeliveryInCart;