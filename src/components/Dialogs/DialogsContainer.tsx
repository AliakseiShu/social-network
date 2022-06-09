import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withRouter} from "react-router";
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {DialogsPageType} from "../../redux/store";

type MapStateToProps = {
    dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
    sendMessage: (newMessagesBody: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: (newMessagesBody: string) => {
            dispatch(sendMessageCreator(newMessagesBody))
        },
    }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(Dialogs)

