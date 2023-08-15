import React from "react";

function useLocalStorage(itemName, initialValue) {
    const getItem = localStorage.getItem(itemName);
  
    let parseItem;
  
    if (!getItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parseItem = initialValue;
    } else {
      parseItem = JSON.parse(getItem);
    }
  
    const [item, setItem] = React.useState(parseItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem]
    
  }

  export {useLocalStorage}