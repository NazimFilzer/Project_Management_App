import { forwardRef } from 'react';

const Modal = forwardRef(({ children }, ref) => {
    return (
        <dialog ref={ref}>
            {children}
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default Modal;