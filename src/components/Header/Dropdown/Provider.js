import { createContext, useCallback, useEffect, useState } from "react";

const Context = createContext();

export function DropdownProvider({ children }) {
  const [options, setOptions] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedId, setCachedId] = useState(null);

  const registerOption = useCallback(
    ({
      id,
      optionDimensions,
      optionCenterX,
      wrappedContent,
      backgroundHeight,
    }) => {
      setOptions((items) => [
        ...items,
        {
          id,
          optionDimensions,
          optionCenterX,
          wrappedContent,
          backgroundHeight,
        },
      ]);
    },
    [setOptions]
  );

  const updateOptionProps = useCallback(
    (optionId, props) => {
      setOptions((items) => {
        items.map((item) => {
          if (item.id === optionId) {
            item = { ...item, ...props };
          }

          return item;
        });
      });
    },
    [setOptions]
  );

  const getOptionById = useCallback(
    (id) => option.find((item) => item.id === id),
    [options]
  );

  const deleteOptionById = useCallback(
    (id) => setOption((items) => items.filter((item) => item.id !== id)),
    [setOptions]
  );

  useEffect(() => {
    if (targetId !== null) setCachedId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cachedId,
        setCachedId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
