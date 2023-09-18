"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../kits/hooks";
import { updateMenuState } from "../redux/reducerLayer/menuReducer";
import { updateCardIdState } from "../redux/reducerLayer/cardReducer";

const useCardHook = () => {
  const cardId = useAppSelector((state) => state.card.cardId);
  const dispatch = useAppDispatch();

  function handleCardId(id: number | null) {
    return dispatch(updateCardIdState(id));
  }

  return { cardId, handleCardId };
};

export default useCardHook;
