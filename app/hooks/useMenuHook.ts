"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../kits/hooks";
import { updateMenuState } from "../redux/reducerLayer/menuReducer";

const useMenuHook = () => {
  const menuStatus = useAppSelector((state) => state.menu.menu.status);
  const dispatch = useAppDispatch();

  function handleMenuStatus(): void {
    dispatch(updateMenuState(null));
  }

  useEffect(() => {
    if (menuStatus) {
      handleMenuStatus();
    }
  }, []);

  return { menuStatus, handleMenuStatus };
};

export default useMenuHook;
