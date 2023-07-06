import { useCallback, useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
    const [state, setState] = useState({ ...initialState });
    const handelChange = useCallback(
        ({ target }) => {
            const { name, value } = target;
            setState(preState => {
                return { ...preState, [name]: value };
            });
        },[setState]
    
    )

    const handelSubmit = e => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({ ...initialState });
    }
    return(state, setState, handelChange, handelSubmit)
}
export default useForm;