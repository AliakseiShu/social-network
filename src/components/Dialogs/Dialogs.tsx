import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Alex</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Zina</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Anna</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Andrey</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>How are You?</div>
        <div className={s.dialog}>ok</div>
      </div>
    </div>


  )
}