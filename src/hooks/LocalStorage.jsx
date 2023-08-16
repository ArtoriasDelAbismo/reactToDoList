import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const getItem = localStorage.getItem(itemName);
      let parseItem;
  
      if (!getItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parseItem = initialValue;
      } else {
        parseItem = JSON.parse(getItem);
        setItem(parseItem)
      }
      setLoading(false)
      } catch(error){
        setError(true)
        setLoading(false)
      }
    }, 2000);
    
    
  }, [initialValue, itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };