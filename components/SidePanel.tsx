import {useState} from 'react';
import Link from 'next/link';
import { ICategories } from '../types';
import style from '../styles/Side-panel.module.scss'
import { useAppDispatch, useAppSelector } from '../hook';
import { setActiceSidePanel } from '../store/setStyle';
import {AiFillFilter} from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SidePanel = () => {
    const [categories] = useState<ICategories[]>([
        {
          link: "burgers",
          title: "Бургери",
          image: "/images/БУРГЕРИ.png",
          id: "001"
        },
        {
          link: "breakfasts",
          title: "Сніданки",
          image: "/images/СНІДАНКИ.png",
          id: "002"
        },
        {
          link: "main-dishes",
          title: "Основні страви",
          image: "/images/ОСНОВНІ СТРАВИ.png",
          id: "003"
        },
        {
          link: "salads",
          title: "Салати",
          image: "/images/САЛАТИ.png",
          id: "004"
        },
        {
          link: "desserts",
          title: "Десерти",
          image: "/images/ДЕСЕРТИ.png",
          id: "005"
        },
        {
          link: "coffe-tea",
          title: "Кава та чай",
          image: "/images/КАВА ТА ЧАЙ.png",
          id: "006"
        },
      ])
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const active = useAppSelector((state) => state.style.sidePanel)
    
    const cheackActiveClass = (title:string) => {
        dispatch(setActiceSidePanel(title));
      }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      console.log('active',active);
      
    return (
      <>
      <div className={style.side_panel_mobile}>
        <div className={style.filter_block}>
        <AiFillFilter onClick={handleShow} className={style.filter_icon}>
        Launch static backdrop modal
      </AiFillFilter>
        </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={style.modal_wrapper}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className={style.navigation_mobile_block}>
        {categories.map((el) => (
          <Link key={el.id}
          href={el.link}
          onClick={() => cheackActiveClass(el.title)}
          className={active == el.title ? `${style.active}` : ''}>{el.title}</Link>
        ))}
      </div>
        </Modal.Body>
      </Modal>
    </div>
    <div className={style.navigation_block}>
        {categories.map((el) => (
          <Link key={el.id}
          href={el.link}
          onClick={() => cheackActiveClass(el.title)}
          className={active == el.title ? `${style.active}` : ''}>{el.title}</Link>
        ))}
      </div>
      </>
    );
};

export default SidePanel;