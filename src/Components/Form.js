
import React from 'react';
import styled, { css } from 'styled-components';


const InputBox = css`
	box-sizing: border-box;
	display: block;
	padding: 0 1em;
	width: 100%;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.025);
	flex-grow:1;
	border-width: 2px;
`

const Input = styled.input`
	${InputBox}
	height: 2.75em;
`

const TextArea = styled.textarea`
	${InputBox}
`
const Label = styled.label`
	display: block;
	font-family: Raleway, Helvetica, sans-serif;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 0.1em;
	margin: 0 0 0.7em 0;
	text-transform: uppercase;
`
const Field = styled.div`
	width: 100% ;
	flex-grow: 0;
	flex-shrink: 0;
	display:flex;
	flex-direction:column;
	padding-top: 1.5em
`
const Fields = styled.div`
	padding: 0 1.5em 0 1.5em;
	width: calc(100% - 3em);
	display: flex;
	flex-wrap: wrap;
`


const StyledForm = styled.form`
`


export default function Form(props) {

	return (
		<StyledForm method={props.method} action={props.action}>
			<Fields >
				{props.fields.map(
					(field, i) => (
						<Field key={i}>
							<Label htmlFor={field.name}>{field.name}</Label>
							{field.textArea ?
								<TextArea id={field.name} required={field.required} rows={field.rows}></TextArea>
								: <Input type={field.type} id={field.name} required={field.required}></Input>
							}
						</Field>
					)
				)}
				<Field>
					<Input type="submit" value={props.sendMessage} />
				</Field>
			</Fields>
		</StyledForm>
	);
}