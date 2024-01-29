import { toast } from "react-toastify";
const useNotifyHook = () => {
  const notify = (text) =>
    toast.success(text, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (text) =>
    toast.error(text, {
      position: "top-right",
      autoClose: 3000,

      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return { notify, notifyError };
};

export default useNotifyHook;
