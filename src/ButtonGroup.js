import IconButton from "./smallComponents/IconButton/IconButton";
import React from "react";

export const ButtonGroup = ({onClickNext, dispatch}) => {
    return (
        <div>
            <IconButton className={'next-button'}
                        onClick={onClickNext}
                        icon={'fa-chevron-circle-right'}/>

            <IconButton className={'view-buttons'}
                        onClick={() => dispatch({type: 'CHANGE_VIEW_MODE', payload: false})}
                        icon={'fa-list-ul'}/>

            <IconButton className={'view-buttons'}
                        onClick={() => dispatch({type: 'CHANGE_VIEW_MODE', payload: true})}
                        icon={'fa-table'}/>
        </div>
    )
}