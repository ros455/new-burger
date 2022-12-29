import {useState} from 'react';
import style from '../styles/Cart.module.scss'
import { useForm } from 'react-hook-form'
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

    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm({
      mode: 'onBlur'
    });

    const onSubmit = (data:any) => {
      console.log(JSON.stringify(data));
      reset();
    }

    return (
        <>
        <div className={style.button_block}>
        <button onClick={handledelivery} className={style.order_button}>Замовити доставку</button>
        <button onClick={handleSelfPickup} className={style.order_button}>Забрати самовивіз</button>
        </div>
        {selfPickup &&
                    <form className={style.form_block} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                      Ваше Імя
                    <input type='text' className={style.input} 
                  {...register('name', {
                    required: true
                  })} />
                    </label>
                    <div className={style.error_messege}>{errors?.name && <p>Введіть ім'я</p>}</div>
                    <label>
                      Ваш номер телнфону
                      <input type='text' className={style.input}
                      {...register('phone', {
                        required: true
                      })}/>
                    </label>
                    <div className={style.error_messege}>{errors?.phone && <p>Введіть номер телефону</p>}</div>
                    <div>
                    <button className={style.order_button }>Оформити замовлення</button>
                    </div>
                  </form>   
        }

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