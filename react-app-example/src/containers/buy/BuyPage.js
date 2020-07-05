import React, { useState, useEffect } from "react";
import { FeedItem } from "../../components/buyComponents/FeedItem";
import { Feed } from "../../components/Feed";
import "component-library-stenciljs";

export const BuyPage = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const dataList = [
    {
      productName: "Basic package",
      shortDescription:
        "The basic package covers the most essential need a customer can expect (Note: Clicking on buy returns error)",
      handleBuy: () => setErrorAlert(true),
    },
    {
      productName: "Premium package",
      shortDescription:
        "The basic package covers everything a customer can expect (Note: Clicking on buy returns a success message)",
      handleBuy: () => setSuccessAlert(true),
    },
  ];

  // This is buggy and not a way to do it
  // But is good enough for demo purpose of
  // the alert componenet
  useEffect(() => {
    errorAlert && setTimeout(() => setErrorAlert(false), 3000);
    successAlert && setTimeout(() => setSuccessAlert(false), 3000);
  }, [errorAlert, successAlert]);

  return (
    <div>
      <toast-alert
        is-active={errorAlert}
        alert-title="An error happened"
        alert-description="Could not process it. Try again"
      ></toast-alert>
      <toast-alert
        is-active={successAlert}
        alert-title="Success"
        alert-description="The product is on its way to your address"
      ></toast-alert>
      <Feed {...{ dataList, FeedItem }} />
    </div>
  );
};
