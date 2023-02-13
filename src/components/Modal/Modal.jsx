import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import Button from '../Button/Button';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={classes.content}>
                <p>{props.message}</p>
            </main>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                /**
                 * You have to add html tag with this id in root index.html
                 * @param id
                 * In my app id is backdrop-root
                 */
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                /**
                 * You have to add html tag with this id in root index.html
                 * @param id
                 * In my app id is overlay-root
                 */
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default Modal;
