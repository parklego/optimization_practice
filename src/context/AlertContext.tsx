import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Alert from "../components/shared/Alert";

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, "open">;

interface AlertContextValues {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValues | undefined>(undefined);

const defaultValue: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
};

export const AlertContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [alertState, setAlertState] = useState(defaultValue);

  const $portal_root = document.getElementById("root-portal");

  const close = useCallback(() => {
    setAlertState(defaultValue);
  }, []);

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        onButtonClick: () => {
          close();
          onButtonClick();
        },
        open: true,
      });
    },
    [close]
  );

  const values = useMemo(
    () => ({
      open,
    }),
    [open]
  );

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
    </Context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAlertContext = () => {
  const values = useContext(Context);

  if (values == null) {
    throw new Error("Alert Context 내부에서 사용해주세요.");
  }

  return values;
};
