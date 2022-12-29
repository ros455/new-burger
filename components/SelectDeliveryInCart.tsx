import { useState } from 'react';
import style from '../styles/Cart.module.scss'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
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

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    reset();
  }

  console.log('1',errors);
  

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
                required: "Введіть ім'я"
              })} />
          </label>
          <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p className={style.error_messege}>{message}</p>}/>
          <label>
            Ваш номер телнфону
            <input type='text' className={style.input}
              {...register('phone', {
                required: 'Введіть номер телефону'
              })} />
          </label>
          <ErrorMessage
        errors={errors}
        name="phone"
        render={({ message }) => <p className={style.error_messege}>{message}</p>}/>
          <div>
            <input type='submit' className={style.order_button} />
          </div>
        </form>
      }

      {delivery &&
        <form className={style.form_block} onSubmit={handleSubmit(onSubmit)}>
          <label>
            Ваше Імя
            <input type='text' className={style.input}
              {...register('name', {
                required: "Введіть ім'я"
              })} />
          </label>
          <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p className={style.error_messege}>{message}</p>}/>
          <label>
            Ваш номер телнфону
            <input type='text' className={style.input}
              {...register('phone', {
                required: 'Введіть номер телефону'
              })} />
          </label>
          <ErrorMessage
        errors={errors}
        name="phone"
        render={({ message }) => <p className={style.error_messege}>{message}</p>}/>
          <label>
            Ваша адреса
            <input type='text' className={style.input}
              {...register('address', {
                required: 'Введіть адрес'
              })} />
          </label>
          <ErrorMessage
        errors={errors}
        name="address"
        render={({ message }) => <p className={style.error_messege}>{message}</p>}/>
          <div>
            <input type='submit' className={style.order_button} />
          </div>
        </form>
      }
    </>
  );
};

export default SelectDeliveryInCart;