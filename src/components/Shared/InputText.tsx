import React from 'react'

export default function InputText(props: { searchValue: string | number | readonly string[] | undefined; onChangeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined; placeholder: string, id: string }) {
    return (
        <input data-testid="search-input" autoComplete='off' type="text" className="form-control" id={props.id} value={props.searchValue} onChange={props.onChangeHandler}
            placeholder={props.placeholder} />
    )
}
